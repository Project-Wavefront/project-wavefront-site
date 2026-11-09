export const runtime = "nodejs";

const destination = "contact@projectwavefront.org";
const sender = "Project Wavefront <applications@mail.projectwavefront.org>";
const maxResumeBytes = 10 * 1024 * 1024;
const maxRequestBytes = 14 * 1024 * 1024;
const graduationMonths = new Set([
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
const mimeByExtension: Record<string, string> = {
  pdf: "application/pdf",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function error(message: string, status: number) {
  return Response.json(
    { ok: false, error: message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

function isSchoolEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  return /(^|\.)edu(\.|$)|(^|\.)ac\.[a-z]{2,}$/i.test(domain);
}

function hasExpectedSignature(bytes: Buffer, extension: string) {
  if (extension === "pdf") return bytes.subarray(0, 5).toString() === "%PDF-";
  if (extension === "docx") return bytes[0] === 0x50 && bytes[1] === 0x4b;
  return bytes
    .subarray(0, 8)
    .equals(Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]));
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.startsWith("multipart/form-data")) {
    return error("Please submit the application form.", 415);
  }
  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maxRequestBytes) {
    return error("The resume must be under 10 MB.", 413);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return error("We could not read the application. Please try again.", 400);
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "")
    .trim()
    .toLowerCase();
  const graduationMonth = String(form.get("graduationMonth") ?? "");
  const graduationYear = String(form.get("graduationYear") ?? "");
  const why = String(form.get("why") ?? "").trim();
  const citizen = form.get("usCitizen") === "yes";
  const resume = form.get("resume");

  if (!name || name.length > 120 || /[\r\n]/.test(name)) {
    return error("Please enter your name.", 400);
  }
  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    isSchoolEmail(email)
  ) {
    return error("Please enter a personal, non-school email address.", 400);
  }
  if (
    !graduationMonths.has(graduationMonth) ||
    !/^\d{4}$/.test(graduationYear) ||
    Number(graduationYear) < 1900 ||
    Number(graduationYear) > 2100
  ) {
    return error("Please enter your graduation month and year.", 400);
  }
  if (why.length < 20 || why.length > 2000) {
    return error(
      "Please write a short paragraph about why you want to join.",
      400,
    );
  }
  if (!citizen) {
    return error("Please confirm the US Citizen checkbox.", 400);
  }
  if (
    !(resume instanceof File) ||
    resume.size === 0 ||
    resume.size > maxResumeBytes
  ) {
    return error("Please attach a PDF, DOC, or DOCX resume under 10 MB.", 400);
  }

  const filename =
    resume.name
      .split(/[\\/]/)
      .pop()
      ?.replace(/[\r\n]/g, "") ?? "";
  const extension = filename.split(".").pop()?.toLowerCase() ?? "";
  const contentType = mimeByExtension[extension];
  if (!contentType) {
    return error("Please attach a PDF, DOC, or DOCX resume.", 400);
  }
  const bytes = Buffer.from(await resume.arrayBuffer());
  if (!hasExpectedSignature(bytes, extension)) {
    return error("The resume file does not match its file type.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return error(
      "Applications are temporarily unavailable. Please try again later.",
      503,
    );
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [destination],
        reply_to: email,
        subject: `Project Wavefront application — ${name}`,
        text: [
          "New Project Wavefront application",
          "",
          `Name: ${name}`,
          `Personal email: ${email}`,
          `Graduation: ${graduationMonth} ${graduationYear}`,
          "US Citizen: Yes (applicant confirmed)",
          "",
          "Why they want to join:",
          why,
        ].join("\n"),
        attachments: [
          {
            filename,
            content: bytes.toString("base64"),
            content_type: contentType,
          },
        ],
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Resend rejected an application:", response.status);
      return error(
        "We could not send your application. Please try again later.",
        502,
      );
    }
    return Response.json(
      { ok: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return error(
      "We could not send your application. Please try again later.",
      502,
    );
  }
}
