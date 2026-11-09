"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "/mark-i/engine-profile.webp",
    alt: "Profile view of the monolithic 3D-printed Mark I engine",
  },
  {
    src: "/mark-i/engine-top.webp",
    alt: "Top view looking into the Mark I engine",
  },
];

export default function EngineArchitectureCarousel() {
  const [active, setActive] = useState(0);

  function move(direction: number) {
    setActive(
      (current) => (current + direction + photos.length) % photos.length,
    );
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Mark I engine architecture photos"
      className="min-w-0"
    >
      <div className="relative overflow-hidden bg-neutral-900">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              aria-hidden={index !== active}
              className="relative aspect-[3/2] w-full shrink-0"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous engine photo"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronLeft aria-hidden="true" className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next engine photo"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronRight aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div
        className="mt-4 flex justify-center gap-2"
        aria-label="Choose engine photo"
      >
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show engine photo ${index + 1}`}
            aria-pressed={index === active}
            className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${index === active ? "bg-white" : "bg-white/35 hover:bg-white/70"}`}
          />
        ))}
      </div>
      <p className="sr-only" role="status">
        Photo {active + 1} of {photos.length}: {photos[active].alt}
      </p>
    </div>
  );
}
