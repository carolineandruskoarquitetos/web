"use client";

interface CarouselControlsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export function CarouselControls({
  total,
  current,
  onDotClick,
}: CarouselControlsProps) {
  return (
    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2 w-2 rounded-xl transition-all ${
            index === current
              ? "bg-stone-50"
              : "bg-stone-50/60 hover:bg-stone-50/60"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
