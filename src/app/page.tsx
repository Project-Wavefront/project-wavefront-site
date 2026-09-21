"use client";

import Galaxy from "@/components/blocks/Galaxy";
import Header from "@/components/header";
import { ChevronDown } from "lucide-react";

import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

// hello world!

const sponsors = [
  {
    src: "/home/sponsors/afrl.png",
    alt: "Air Force Research Laboratory sponsor logo",
    href: "https://www.afrl.af.mil/",
    width: 500,
    height: 500,
    fillWidth: true,
    lightCard: true,
  },
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
              src="/home/glimmer_temp.gif"
              alt="Project Wavefront banner"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
              className="scale-70"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center w-full">
          <div className="animate-fade-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-wide">
              PROJECT WAVEFRONT
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              More Efficient Rocket Engines, Built by Students
            </p>

            {/* Support Button */}
            <Link
              href="https://gofund.me/dd2b2e6a3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-black-600 hover:bg-emerald-800 text-white font-bold text-lg rounded-lg transition-all duration-250 transform hover:scale-110 hover:shadow-xl"
            >
              Support Us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </section>

      {/** Mark I Section (Carousel ?) */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-end">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1] min-h-screen">
          <Image
            src="/home/injector.jpg"
            className="opacity-60 blur-sm [mask-image:linear-gradient(to_right,transparent_0%,black_0%,black_100%,transparent_100%),linear-gradient(to_bottom,transparent_0%,black_0%,black_100%,transparent_100%)]"
            alt="Project Wavefront banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="max-w-7xl mx-auto text-left w-full">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4 tracking-wide">
              MARK I
            </h1>
            <p className="text-xl md:text-2xl mb-18 max-w-lg text-white">
              Mark I will be the first long-duration rotating detonation rocket
              engine, designed, fabricated, and constructed by an entirely
              student team.
            </p>
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
                Mark I is our proof of concept. The entire engine is designed
                and fabricated from the ground up by an entirely undergraduate
                team. Guided through collaborations with experts across the
                industry, including NASA, Project Wavefront is planning to close
                the loop from ideation to delivery in less than 12 months. With
                a test campaign slated for Q3 2026, Project Wavefront is ready
                to redefine the future of Aerospace.
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
              layout="fill"
              objectFit="cover"
              className=""
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
              advance our mission. Please reach out through our{" "}
              {/* TODO hover bold on top of underline */}
              <Link
                href="/contact"
                className="font-bold hover:text-strong transition-all duration-200 underline"
              >
                Contact Us
              </Link>{" "}
              page.
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
                  className={`group flex h-28 items-center justify-center rounded-xl border p-5 shadow-lg backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white last:col-span-2 last:mx-auto last:w-[calc(50%-0.75rem)] sm:h-32 sm:p-6 ${
                    sponsor.cardClass ??
                    (sponsor.lightCard
                      ? "border-slate-200/80 bg-slate-100 hover:border-white hover:bg-white"
                      : "border-white/15 bg-black/35 hover:border-white/40 hover:bg-white/10")
                  }`}
                >
                  <div
                    className={`flex h-full w-full items-center justify-center ${sponsor.imageClass ?? ""}`}
                  >
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={sponsor.width}
                      height={sponsor.height}
                      className={`object-contain transition-transform duration-200 group-hover:scale-105 ${
                        sponsor.fillWidth
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
