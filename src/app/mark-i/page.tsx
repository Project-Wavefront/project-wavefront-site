import EngineArchitectureCarousel from "@/components/EngineArchitectureCarousel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Timeline from "@/components/Timeline";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mark I | Project Wavefront",
  description:
    "Meet Mark I, Project Wavefront's monolithic, 3D-printed rotating detonation rocket engine, tested 100 times in November 2026.",
};

const specs = [
  { value: "100", label: "Tests in November 2026" },
  { value: "10 sec", label: "Max Burn Time" },
  { value: "Methagox", label: "Fuel/Oxidizer" },
  { value: "6.5 cm", label: "Chamber Diameter" },
  { value: "13.5 kHz", label: "Wave Frequency" },
];

const timelineMilestones = [
  {
    date: "2025-06-01",
    title: "Project Kickoff",
    description:
      "Josh and Sam found Project Wavefront with five engineers. The team establishes technical requirements and begins design work.",
    completed: true,
  },
  {
    date: "2025-06-24",
    title: "Nonprofit Corporation Registration",
    description:
      "Project Wavefront registers as a nonprofit corporation in Pennsylvania.",
    completed: true,
  },
  {
    date: "2025-08-11",
    title: "Convergent Science Sponsors Wavefront",
    description:
      "Convergent Science becomes Project Wavefront's first sponsor.",
    completed: true,
  },
  {
    date: "2025-08-17",
    title: "Conceptual Design Complete",
    description:
      "After consulting with a NASA RDRE lead, the founding team completes Mark I's conceptual design.",
    completed: true,
  },
  {
    date: "2025-09-15",
    title: "Team Expansion",
    description:
      "The team expands to 12 engineers. Control systems and test stand teams are established.",
    completed: true,
  },
  {
    date: "2025-10-15",
    title: "Ansys Sponsors Wavefront",
    description: "Ansys becomes Project Wavefront's second sponsor.",
    completed: true,
  },
  {
    date: "2025-10-23",
    title: "Wavefront Meets the RDRE Community",
    description:
      "Wavefront engineers meet with rotating detonation student and research teams from across the community.",
    completed: true,
  },
  {
    date: "2025-11-03",
    title: "501(c)(3) Status Approval",
    description:
      "Project Wavefront receives approval as a 501(c)(3) nonprofit organization.",
    completed: true,
  },
  {
    date: "2025-11-22",
    title: "Preliminary Design Complete",
    description:
      "The team completes preliminary design and analysis, using simulation results to inform final design changes.",
    completed: true,
  },
  {
    date: "2025-12-10",
    title: "NASA Check-In",
    description:
      "The team meets with a NASA RDRE lead before the critical design review.",
    completed: true,
  },
  {
    date: "2025-12-15",
    title: "Design Freeze",
    description:
      "The team finalizes Mark I's layout and prepares for its critical design review.",
    completed: true,
  },
  {
    date: "2026-01-20",
    title: "Mark I Demonstrator Printed",
    description:
      "The team prints an early Mark I demonstrator to verify combustion geometry and test systems.",
    completed: true,
  },
  {
    date: "2026-01-31",
    title: "Critical Design Review",
    description:
      "The team presents its design and analysis to engineers from industry and academia.",
    completed: true,
  },
  {
    date: "2026-04-01",
    title: "Test Stand and Controls Build Begins",
    description:
      "Construction begins on the custom test stand and electronic control and data systems.",
    completed: true,
  },
  {
    date: "2026-05-10",
    title: "Summer Break Begins",
    description:
      "Members spread out across the aerospace industry for summer internships.",
    completed: true,
  },
  {
    date: "2026-08-23",
    title: "Summer Break Ends",
    description:
      "Members return from their internships and resume team operations.",
    completed: true,
  },
  {
    date: "2026-09-01",
    title: "Additional Sponsors Join Project Wavefront",
    description:
      "Renishaw, Kittyhawk, SendCutSend, Vacuum Braze, Harvey Tool, Kennametal, Kulite Semiconductors, and Hy-Grade Valves sponsor Project Wavefront.",
    completed: true,
  },
  {
    date: "2026-11-04",
    title: "Mark I Hotfire",
    description: "Mark I successfully hotfires.",
    completed: true,
  },
];

function Photo({
  src,
  alt,
  className = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure>
      <div className={`relative overflow-hidden bg-neutral-900 ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>
    </figure>
  );
}

export default function MarkI() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <Header />
      <main>
        <section className="relative isolate flex min-h-[100svh] items-center px-5 pb-20 pt-28 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
            <Image
              src="/mark-i/ethylene-side.gif"
              alt="Mark I firing on the test stand"
              fill
              sizes="100vw"
              loading="eager"
              unoptimized
              className="object-cover object-[center_60%]"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>
          <div className="mx-auto w-full max-w-7xl animate-fade-slide-up text-center">
            <h1 className="text-6xl font-bold tracking-wide sm:text-7xl lg:text-8xl">
              MARK I
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-slate-200 sm:text-2xl">
              The longest-duration rotating detonation rocket engine ever tested
              by students. Designed, fabricated, and constructed by an entirely
              undergraduate team.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {specs.map((spec) => (
                <div key={spec.label} className="flex flex-col items-center">
                  <span className="text-3xl font-bold">{spec.value}</span>
                  <p>{spec.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 className="text-4xl font-bold tracking-wide sm:text-5xl">
                  ENGINE ARCHITECTURE
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
                  Mark I is a monolithic, fully 3D-printed engine. Running on
                  gaseous methane or ethylene and gaseous oxygen, Mark 1 uses
                  100% printed impinging triplet injectors and combustion
                  geometry with no post-processing. Rotating detonation rocket
                  engines (RDREs) harness high-pressure shockwaves moving above
                  Mach 1 to create more efficient combustion.
                </p>
              </div>
              <EngineArchitectureCarousel />
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <h2 className="text-4xl font-bold tracking-wide sm:text-5xl">
                  STARTUP
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
                  Mark 1 uses a predetonator tube, otherwise known as a
                  Deflagration-to-Detonation Tube (DDT) to initiate a
                  high-energy sequence. The tube was configured to ignite
                  directly through the chamber wall and optionally at the
                  exhaust exit.
                </p>
              </div>
              <figure className="mx-auto w-full max-w-lg">
                <video
                  width={230}
                  height={256}
                  autoPlay
                  controls
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Mark I Ignition Sequence"
                  className="block h-auto w-full bg-black object-contain"
                >
                  <source src="/mark-i/startup.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <figcaption className="pt-3 text-sm tracking-wide text-slate-400">
                  Mark I Ignition Sequence
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold tracking-wide sm:text-5xl">
                THE TEST CAMPAIGN
              </h2>
              <p className="mt-7 text-lg leading-relaxed text-slate-300">
                Project Wavefront successfully hotfired Mark I 100 times for
                runtimes up to 10 s in November 2026. The team consistently
                achieved wave modes with 2+ waves and operated with both
                ethylene and methane as propellants.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <Photo
                src="/mark-i/hotfire-overhead.png"
                alt="Mark I firing on the test stand, viewed from above"
              />
            </div>
            <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
              <figure>
                <div className="overflow-hidden bg-black">
                  <video
                    width={480}
                    height={468}
                    autoPlay
                    controls
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/mark-i/hotfire-front.png"
                    aria-label="Short Duration Methane Run of Mark I"
                    className="block h-auto w-full object-contain"
                  >
                    <source src="/mark-i/firing.mp4" type="video/mp4" />
                  </video>
                </div>
                <figcaption className="pt-3 text-sm tracking-wide text-slate-400">
                  Short Duration Methane Run
                </figcaption>
              </figure>
              <figure className="mx-auto w-full max-w-md">
                <video
                  width={216}
                  height={256}
                  autoPlay
                  controls
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/mark-i/two-waves-poster.jpg"
                  aria-label="Detonation Waves in Mark I"
                  className="block h-auto w-full bg-black object-contain"
                >
                  <source src="/mark-i/two-waves-short.mp4" type="video/mp4" />
                </video>
                <figcaption className="pt-3 text-sm tracking-wide text-slate-400">
                  Detonation Waves in Mark I
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center text-4xl font-bold tracking-wide sm:text-5xl">
              MARK I TIMELINE
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-slate-300">
              From project kickoff to Mark I&apos;s successful hotfire on
              November 4, 2026.
            </p>
            <div className="mt-12 overflow-x-auto">
              <div className="min-w-[900px]">
                <Timeline
                  startDate="2025-06"
                  endDate="2026-11-04"
                  milestones={timelineMilestones}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
