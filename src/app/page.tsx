"use client";

import Galaxy from "@/components/blocks/Galaxy";
import Header from "@/components/header";
import { ChevronDown } from "lucide-react";

import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

type Sponsor = {
  src: string;
  alt: string;
  href: string;
  width: number;
  height: number;
  imageClass?: string;
  lightCard?: boolean;
  fillWidth?: boolean;
  fitHeight?: boolean;
  cardClass?: string;
};

const sponsors: Sponsor[] = [
  {
    src: "/home/sponsors/newansys.png",
    alt: "Ansys sponsor logo",
    href: "https://www.ansys.com",
    width: 792,
    height: 256,
    imageClass: "scale-130",
    lightCard: true,
  },
  {
    src: "/home/sponsors/renishaw.png",
    alt: "Renishaw sponsor logo",
    href: "https://www.renishaw.com",
    width: 400,
    height: 150,
  },
  {
    src: "/home/sponsors/newkittyhawk.png",
    alt: "Kittyhawk sponsor logo",
    href: "https://www.kittyhawkinc.com/",
    width: 3215,
    height: 650,
    lightCard: true,
  },
  {
    src: "/home/sponsors/sendcutsend.png",
    alt: "SendCutSend sponsor logo",
    href: "https://sendcutsend.com",
    width: 400,
    height: 150,
    imageClass: "scale-115",
  },
  {
    src: "/home/sponsors/vacubraze.png",
    alt: "Vacuum Braze sponsor logo",
    href: "https://www.vacubraze.net/",
    width: 800,
    height: 219,
    cardClass: "border-slate-200/80 bg-white hover:border-white hover:bg-white",
  },
  {
    src: "/home/sponsors/harveytool.png",
    alt: "Harvey Tool sponsor logo",
    href: "https://www.harveytool.com/",
    width: 2048,
    height: 310,
    cardClass: "border-slate-200/80 bg-white hover:border-white hover:bg-white",
  },
  {
    src: "/home/sponsors/kennametal.png",
    alt: "Kennametal sponsor logo",
    href: "https://www.kennametal.com/us/en/home.html",
    width: 764,
    height: 401,
    imageClass: "overflow-hidden",
    fillWidth: true,
    cardClass: "border-slate-200/80 bg-white hover:border-white hover:bg-white",
  },
  {
    src: "/home/sponsors/kulite.png",
    alt: "Kulite Semiconductors sponsor logo",
    href: "https://kulite.com/",
    width: 500,
    height: 200,
    imageClass: "scale-165",
    lightCard: true,
  },
  {
    src: "/home/sponsors/newhygrade.png",
    alt: "Hy-Grade Valves sponsor logo",
    href: "https://hy-grade.com/",
    width: 600,
    height: 110,
    lightCard: true,
  },
  {
    src: "/home/sponsors/orville.png",
    alt: "Orville sponsor logo",
    href: "https://www.ballistalabs.ai/",
    width: 75,
    height: 96,
    lightCard: true,
    fitHeight: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black z-[-1] overflow-hidden flex items-center justify-center">
          <div className="relative w-[150%] h-[150%] opacity-70">
            <Image
              src="/mark-i/firing.gif"
              alt="Mark I firing on the test stand"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
              className="scale-90"
            />
          </div>
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="animate-fade-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-wide">
              PROJECT WAVEFRONT
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Mark I is the longest-duration rotating detonation rocket engine
              ever tested by students. The engine was designed, fabricated, and
              constructed by an entirely undergraduate team.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://gofund.me/dd2b2e6a3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-40 justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-black transition-all duration-200 hover:scale-105 hover:bg-slate-200 hover:shadow-xl"
              >
                Support Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-w-40 justify-center rounded-lg bg-white px-8 py-4 text-lg font-bold text-black transition-all duration-200 hover:scale-105 hover:bg-slate-200 hover:shadow-xl"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>

        <a
          href="#mark-i-preview"
          aria-label="Scroll to Mark I"
          className="absolute bottom-4 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronDown aria-hidden="true" className="h-8 w-8 animate-bounce" />
        </a>
      </section>

      {/** Mark I Section */}
      <section
        id="mark-i-preview"
        className="relative z-10 scroll-mt-16 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-end"
      >
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1] min-h-screen">
          <Image
            src="/mark-i/hotfire-front.png"
            alt="Mark I firing during a test"
            fill
            className="object-cover object-center opacity-60 blur-sm"
          />
        </div>
        <div className="max-w-7xl mx-auto text-left w-full">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4 tracking-wide">
              MARK I
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-lg text-white">
              Our monolithic, 3D-printed engine completed 100 tests in November
              2026, with a longest burn of 10 seconds.
            </p>
            <Link
              href="/mark-i"
              className="mb-10 inline-block border-b border-white pb-1 text-sm font-semibold uppercase tracking-[0.18em] hover:text-slate-300"
            >
              Explore Mark I
            </Link>
          </div>
        </div>
      </section>

      {/** Mission Section */}
      <section className="relative min-h-screen flex items-end">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start justify-start ml-8 mt-18 pl-2 sm:pl-4 lg:pl-6">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wide">
              OUR MISSION
            </h1>

            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex flex-row items-center">
                <h3 className="text-2xl md:text-4xl lg:text-4xl tracking-wide">
                  DESIGN
                </h3>
              </div>
              <p className="text-md md:text-lg lg:text-lg text-slate-300 mb-12 leading-relaxed max-w-xl">
                Mark I is our proof of concept. An entirely undergraduate team
                designed, fabricated, and constructed the monolithic, 3D-printed
                engine, then put it through 100 tests in November 2026. The
                campaign turned student-led design and collaboration into
                demonstrated hardware.
              </p>
            </div>

            <div className="flex flex-col mt-4 space-y-2">
              <div className="flex flex-row items-center">
                <h3 className="text-2xl md:text-4xl lg:text-4xl tracking-wide">
                  INTENT
                </h3>
              </div>
              <p className="text-md md:text-lg lg:text-lg text-slate-300 mb-12 leading-relaxed max-w-xl">
                Project Wavefront aims to cultivate an engineering environment
                that emphasizes technical rigor, project ownership, and a
                culture of relentless innovation. As a 501c3 non-profit
                educational research group, our primary goal is to accelerate
                rotating detonation rocket engine (RDRE) research. While
                significant research exists surrounding RDREs, it remains highly
                confined to major aerospace companies and well-funded
                laboratories. By thoroughly documenting our process and
                publishing the principles behind our system, we aim to bridge
                this gap and create a future where RDRE research and innovation
                is more accessible.
              </p>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="relative h-full min-h-screen">
            <Image
              src="/home/team.jpeg"
              alt="Project Wavefront mission image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/** Sponsors Section */}
      <section className="relative flex items-end my-16">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
          <Galaxy
            mouseRepulsion={false}
            mouseInteraction={false}
            density={1.5}
            glowIntensity={0.2}
            saturation={0.4}
            hueShift={240}
            twinkleIntensity={0.3}
            rotationSpeed={0.05}
            repulsionStrength={2}
            autoCenterRepulsion={0.1}
            starSpeed={0.2}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Left Column: Text */}
          <div className="flex flex-col items-start justify-start ml-8 mt-24 pl-2 sm:pl-4 lg:pl-6">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-wide">
              SPONSORS & PARTNERS
            </h1>
            <p className="text-xl md:text-2xl lg:text-xl text-slate-300 mb-12 leading-relaxed max-w-xl">
              At Project Wavefront we aim to redefine what the future of
              propulsion looks like through student innovation. With the support
              of partners and sponsors who share our vision, we can take our
              work even farther.
            </p>
            <p className="text-xl md:text-2xl lg:text-xl text-slate-300 mb-12 leading-relaxed max-w-xl">
              We are continuously looking for additional sponsors to help
              advance our mission. Please reach out at{" "}
              <Link
                href="mailto:contact@projectwavefront.org"
                className="font-bold hover:text-strong transition-all duration-200 underline"
              >
                contact@projectwavefront.org
              </Link>
              .
            </p>
          </div>
          {/* Right Column: Sponsor Logos */}
          <div className="flex items-center justify-center px-6 pb-16 md:px-8 md:py-20">
            <div className="grid w-full max-w-3xl grid-cols-2 gap-4 sm:gap-6">
              {sponsors.map((sponsor) => (
                <Link
                  key={sponsor.alt}
                  href={sponsor.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${sponsor.alt.replace(" sponsor logo", "")}`}
                  className={`group flex h-28 items-center justify-center rounded-xl border p-5 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:h-32 sm:p-6 ${
                    sponsor.cardClass ??
                    (sponsor.lightCard
                      ? "border-slate-200/80 bg-slate-100 hover:border-white hover:bg-white"
                      : "border-white/15 bg-black/35 hover:border-white/40 hover:bg-white/10")
                  }`}
                >
                  <div
                    className={`pointer-events-none flex h-full w-full items-center justify-center ${sponsor.imageClass ?? ""}`}
                  >
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={sponsor.width}
                      height={sponsor.height}
                      className={`object-contain transition-transform duration-200 group-hover:scale-105 ${
                        sponsor.fitHeight
                          ? "h-full w-auto"
                          : sponsor.fillWidth
                            ? "h-auto w-full max-w-none"
                            : "max-h-full max-w-full"
                      }`}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
