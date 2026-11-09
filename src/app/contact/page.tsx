"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const applicationEmail = "contact@projectwavefront.org";
const maxResumeBytes = 10 * 1024 * 1024;
const acceptedResume = /\.(pdf|doc|docx)$/i;
const graduationMonths = [
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
];

type OfferCompany = {
  name: string;
  logo: string;
  dark?: boolean;
};

const offerCompanies: OfferCompany[] = [
  { name: "SpaceX", logo: "/offers/spacex.png" },
  { name: "NASA", logo: "/offers/nasa.png" },
  { name: "Anduril", logo: "/offers/anduril.png" },
  { name: "Pratt & Whitney / RTX", logo: "/offers/pratt-whitney.png" },
  { name: "Relativity Space", logo: "/offers/relativity-space-on-white.png" },
  { name: "Impulse Space", logo: "/offers/impulse-space-on-white.png" },
  { name: "Varda", logo: "/offers/varda.png" },
  { name: "Boom Supersonic", logo: "/offers/boom-supersonic-on-white.png" },
  { name: "Honeywell Aerospace", logo: "/offers/honeywell-aerospace.png" },
  {
    name: "General Dynamics Mission Systems",
    logo: "/offers/general-dynamics.png",
  },
  { name: "Hanwha Aerospace", logo: "/offers/hanwha-aerospace.png" },
  { name: "Mach Industries", logo: "/offers/mach-industries.png" },
  {
    name: "Benchmark Space Systems",
    logo: "/offers/benchmark-space-systems.png",
    dark: true,
  },
  { name: "Cowboy Space", logo: "/offers/cowboy-space.png", dark: true },
  { name: "Astra", logo: "/offers/astra.png", dark: true },
  { name: "Iridium Space Systems", logo: "/offers/iridium.png" },
  { name: "Pyka", logo: "/offers/pyka.png", dark: true },
  { name: "KBR Inc.", logo: "/offers/kbr.png", dark: true },
  { name: "Alef", logo: "/offers/alef.png", dark: true },
  { name: "General Matter", logo: "/offers/general-matter.png" },
  {
    name: "The Boring Company",
    logo: "/offers/boring-company.png",
    dark: true,
  },
  { name: "McKinsey", logo: "/offers/mckinsey.png" },
  { name: "Bank of America", logo: "/offers/bank-of-america.png" },
  { name: "Mars Inc.", logo: "/offers/mars.png" },
];

function isSchoolEmail(email: string) {
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  return /(^|\.)edu(\.|$)|(^|\.)ac\.[a-z]{2,}$/i.test(domain);
}

export default function JoinUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function chooseResume(file?: File) {
    if (!file) return;
    setSuccess("");
    if (!acceptedResume.test(file.name)) {
      setResume(null);
      setError("Please choose a PDF, DOC, or DOCX resume.");
      return;
    }
    if (file.size === 0 || file.size > maxResumeBytes) {
      setResume(null);
      setError("Please choose a resume under 10 MB.");
      return;
    }
    setResume(file);
    setError("");
  }

  async function submitApplication(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess("");

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    if (isSchoolEmail(email)) {
      setError("Please use a personal, non-school email address.");
      return;
    }
    if (!resume) {
      setError("Please add your resume.");
      fileRef.current?.focus();
      return;
    }
    data.set("resume", resume);
    setPending(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        body: data,
      });
      const result: { ok?: boolean; error?: string } = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(
          result.error ??
            "We could not send your application. Please try again.",
        );
      }
      formRef.current?.reset();
      setResume(null);
      setSuccess(
        "Application sent. Thank you for your interest in Project Wavefront. We'll try to respond in 24–48 hours.",
      );
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your application. Please try again.",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <Header />
      <main>
        <section className="relative z-10 flex min-h-[85svh] items-center px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 overflow-hidden bg-black"
          >
            <Image
              src="/join-us-ethylene-run.gif"
              alt=""
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-[50%_58%] motion-reduce:hidden"
            />
            <Image
              src="/join-us-ethylene-poster.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="hidden object-cover object-[50%_58%] motion-reduce:block"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/60 to-black/90" />
          </div>
          <div className="mx-auto w-full max-w-7xl animate-fade-slide-up text-center">
            <h1 className="text-5xl font-bold tracking-wide sm:text-7xl lg:text-8xl">
              JOIN US
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-slate-300 sm:text-2xl">
              Join us to design, build, and test our next rocket engine, Mark
              II. We operate as a lean, concentrated team with extremely high
              individual ownership.
            </p>
          </div>
          <a
            href="#apply"
            aria-label="Scroll to application form"
            className="absolute bottom-4 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full text-gray-500 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <ChevronDown
              aria-hidden="true"
              className="h-8 w-8 animate-bounce"
            />
          </a>
        </section>

        <section
          id="apply"
          className="scroll-mt-16 border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-wide">
                APPLY TO WAVEFRONT
              </h2>

              <form
                ref={formRef}
                onSubmit={submitApplication}
                className="mt-10 space-y-7"
              >
                <p className="text-slate-300">
                  We&apos;re based in Philadelphia, PA.
                </p>
                <label className="block text-sm font-medium uppercase tracking-wide text-slate-300">
                  Name *
                  <input
                    name="name"
                    required
                    maxLength={120}
                    autoComplete="name"
                    placeholder="Your full name"
                    className="mt-2 block w-full rounded-sm border border-white/20 bg-neutral-900 px-4 py-3 text-white outline-none focus:border-white"
                  />
                </label>
                <label className="block text-sm font-medium uppercase tracking-wide text-slate-300">
                  Personal (non-school) email *
                  <input
                    name="email"
                    required
                    type="email"
                    maxLength={254}
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="mt-2 block w-full rounded-sm border border-white/20 bg-neutral-900 px-4 py-3 text-white outline-none focus:border-white"
                  />
                </label>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-300">
                    Graduation month and year *
                  </p>
                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <label className="sr-only" htmlFor="graduationMonth">
                      Graduation month
                    </label>
                    <div className="relative">
                      <select
                        id="graduationMonth"
                        name="graduationMonth"
                        required
                        defaultValue=""
                        className="block w-full appearance-none rounded-sm border border-white/20 bg-neutral-900 py-3 pl-4 pr-12 text-white outline-none focus:border-white"
                      >
                        <option value="" disabled>
                          Month
                        </option>
                        {graduationMonths.map((month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        aria-hidden="true"
                        className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300"
                      />
                    </div>
                    <label className="sr-only" htmlFor="graduationYear">
                      Graduation year
                    </label>
                    <input
                      id="graduationYear"
                      name="graduationYear"
                      type="number"
                      required
                      min={1900}
                      max={2100}
                      step={1}
                      placeholder="Year"
                      className="block w-full rounded-sm border border-white/20 bg-neutral-900 px-4 py-3 text-white outline-none focus:border-white"
                    />
                  </div>
                </div>
                <label className="block text-sm font-medium uppercase tracking-wide text-slate-300">
                  Why do you want to join Project Wavefront? *
                  <textarea
                    name="why"
                    required
                    minLength={20}
                    maxLength={2000}
                    rows={6}
                    placeholder="Tell us what draws you to the team and what you hope to contribute."
                    className="mt-2 block w-full resize-y rounded-sm border border-white/20 bg-neutral-900 px-4 py-3 text-white outline-none focus:border-white"
                  />
                </label>
                <div>
                  <p className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-300">
                    Resume *
                  </p>
                  <div
                    onDragOver={(event) => {
                      event.preventDefault();
                      setDragging(true);
                    }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(event) => {
                      event.preventDefault();
                      setDragging(false);
                      chooseResume(event.dataTransfer.files[0]);
                    }}
                    className={`rounded-sm border-2 border-dashed p-8 text-center transition-colors ${dragging ? "border-white bg-white/10" : "border-white/25 bg-neutral-900"}`}
                  >
                    <input
                      ref={fileRef}
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(event) =>
                        chooseResume(event.target.files?.[0])
                      }
                      className="sr-only"
                      aria-describedby="resume-help"
                    />
                    <label
                      htmlFor="resume"
                      className="cursor-pointer font-medium text-white underline underline-offset-4"
                    >
                      {resume ? resume.name : "Choose a resume"}
                    </label>
                    <p id="resume-help" className="mt-2 text-sm text-slate-400">
                      or drop it here · PDF, DOC, or DOCX · 10 MB max
                    </p>
                  </div>
                </div>
                <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                  <input
                    name="usCitizen"
                    type="checkbox"
                    value="yes"
                    required
                    className="mt-1 h-4 w-4 accent-white"
                  />
                  <span>I am a US Citizen. *</span>
                </label>
                <button
                  type="submit"
                  disabled={pending}
                  className="min-h-12 w-full rounded-sm bg-white px-8 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-slate-200 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
                >
                  {pending ? "Sending application..." : "Submit application"}
                </button>
                {error && (
                  <p role="alert" className="text-sm text-red-300">
                    {error}
                  </p>
                )}
                {success && (
                  <p role="status" className="text-sm text-emerald-300">
                    {success}
                  </p>
                )}
              </form>
            </div>

            <aside className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                Other inquiries
              </h2>
              <p className="mt-3 text-slate-300">
                For partnerships, press, and anything else, email us at{" "}
                <a
                  className="whitespace-nowrap text-white underline underline-offset-4"
                  href={`mailto:${applicationEmail}`}
                >
                  {applicationEmail}
                </a>
                .
              </p>
            </aside>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#05070b] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold tracking-wide sm:text-5xl">
              MEMBERS&apos; OFFERS
            </h2>
            <ul className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
              {offerCompanies.map((company) => (
                <li
                  key={company.name}
                  className={`flex min-h-32 items-center justify-center overflow-hidden rounded-lg border p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] ${company.dark ? "border-white/15 bg-[#141b25]" : "border-white/10 bg-white"}`}
                >
                  <div className="relative h-[4.5rem] w-[92%]">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      sizes="(min-width: 1024px) 260px, 90vw"
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
