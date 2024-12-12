"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { carouselProjects } from "@/data";
import { useCarousel, useSwipe } from "@/hooks";
import { CarouselControls } from "./carousel-controls";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const { goToNext, goToPrevious, goToIndex } = useCarousel(
    carouselProjects.length,
    current,
    setCurrent
  );

  useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
  });

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16 group">
      {/* Background Slider */}
      <div className="relative h-full w-full">
        {carouselProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-transparent to-stone-950/60" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Only visible on hover on desktop */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center justify-center w-12 h-12 rounded-full bg-stone-950/20 hover:bg-stone-950/40 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center justify-center w-12 h-12 rounded-full bg-stone-950/20 hover:bg-stone-950/40 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Logo */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Image
          src="/logos/white.png"
          alt="Caroline Andrusko"
          width={320}
          height={320}
          priority
          className="w-auto h-auto"
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0">
        <CarouselControls
          total={carouselProjects.length}
          current={current}
          onDotClick={goToIndex}
        />
      </div>
    </section>
  );
}
