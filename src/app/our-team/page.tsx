import Beams from "@/components/blocks/Beams";
import { ACTIVE_MEMBERS, PREVIOUS_MEMBERS } from "@/components/data/team";
import Footer from "@/components/footer";
import Header from "@/components/header";

import ProfileCard from "@/components/ProfileCard";
import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Project Wavefront",
};

export default function OurTeam() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <Header />

      {/** Hero Section */}
      <section className="relative z-10 pt-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="absolute inset-x-0 top-0 w-full h-[100vh] bg-black z-[-1]">
          <Beams
            beamWidth={1}
            beamHeight={15}
            beamNumber={15}
            lightColor="#bfbfbf"
            speed={3}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col">
          <div className="animate-fade-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mb-6">
              TEAM
            </h1>
            <p className="mx-auto max-w-2xl text-center text-xl leading-relaxed text-slate-300">
              The undergraduate team behind Mark I&apos;s successful hotfire
              campaign.
            </p>
          </div>
        </div>

        <a
          href="#team-members"
          aria-label="Scroll to team members"
          className="absolute bottom-4 left-1/2 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full text-slate-400 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronDown aria-hidden="true" className="h-8 w-8 animate-bounce" />
        </a>
      </section>

      <div className="relative bg-black z-0">
        {/** ACTIVE MEMBERS */}
        <section
          id="team-members"
          className="scroll-mt-16 pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 justify-center max-w-[90vw]">
            {ACTIVE_MEMBERS.map((member) => (
              <ProfileCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        {/** PREVIOUS MEMBERS */}
        <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-left mb-12">
            PREVIOUS MEMBERS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-16 lg:gap-20 xl:gap-24 justify-center max-w-[90vw]">
            {PREVIOUS_MEMBERS.map((member) => (
              <ProfileCard key={member.name} {...member} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
