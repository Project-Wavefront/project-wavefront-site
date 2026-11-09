import Galaxy from "@/components/blocks/Galaxy";
import Header from "@/components/header";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mark II | Project Wavefront",
  description: "Big things coming soon.",
};

export default function MarkII() {
  return (
    <div className="relative isolate min-h-[100svh] overflow-hidden bg-[#05080c] text-white">
      <Header />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
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
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/mark-ii/rocket-silhouette-v2.svg"
          alt=""
          width={440}
          height={1200}
          unoptimized
          className="h-[82svh] max-h-[960px] w-auto max-w-[78vw] opacity-75"
        />
      </div>
      <main className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-5 pt-16 text-center">
        <h1 className="text-lg tracking-[0.28em] text-slate-300 sm:text-xl">
          big things coming soon
        </h1>
      </main>
    </div>
  );
}
