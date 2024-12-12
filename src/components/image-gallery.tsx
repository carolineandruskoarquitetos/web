"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  projectTitle: string;
}

export function ImageGallery({ images, projectTitle }: ImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<Record<number, boolean>>(
    {}
  );
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => ({ ...prev, [index]: true }));
            observer.disconnect(); // Stop observing once visible
          }
        },
        {
          threshold: 0.1, // Trigger when 10% of the image is visible
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid gap-4">
        {images.map((image, index) => (
          <Dialog.Root
            key={index}
            open={openIndex === index}
            onOpenChange={(open) => setOpenIndex(open ? index : null)}
          >
            <Dialog.Trigger asChild>
              <div
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                className="relative w-full cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`${projectTitle} - Imagem ${index + 1}`}
                  width={1200}
                  height={800}
                  className={cn(
                    "w-full h-auto object-contain opacity-0 translate-y-4 transition-all duration-700",
                    visibleImages[index] && "opacity-100 translate-y-0"
                  )}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                />
              </div>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
              <Dialog.Content
                className="fixed top-1/2 left-1/2 pt-8 -translate-x-1/2 -translate-y-1/2 max-w-[90vw] max-h-[90vh] w-full md:w-auto"
                onInteractOutside={() => setOpenIndex(null)}
              >
                <Dialog.Title className="sr-only">{projectTitle}</Dialog.Title>
                <div className="relative">
                  <Image
                    src={image}
                    alt={`${projectTitle} - Imagem ${index + 1}`}
                    width={1200}
                    height={800}
                    className="object-contain w-full md:w-auto md:max-w-[85vw] h-auto max-h-[85vh]"
                    sizes="(max-width: 768px) 90vw, 85vw"
                    priority
                  />
                </div>

                {/* Navigation buttons */}
                {index > 0 && (
                  <button
                    onClick={() => setOpenIndex(index - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-stone-950/20 hover:bg-stone-950/40 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                )}
                {index < images.length - 1 && (
                  <button
                    onClick={() => setOpenIndex(index + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-stone-950/20 hover:bg-stone-950/40 transition-all"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                )}
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </div>
  );
}
