import { useCallback, useRef, useEffect } from "react";

export function useCarousel(
  total: number,
  current: number,
  setCurrent: (value: React.SetStateAction<number>) => void
) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
  }, [setCurrent, total]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  return {
    goToNext: () => {
      setCurrent((prev) => (prev + 1) % total);
      resetTimer();
    },
    goToPrevious: () => {
      setCurrent((prev) => (prev - 1 + total) % total);
      resetTimer();
    },
    goToIndex: (index: number) => {
      setCurrent(index);
      resetTimer();
    },
  };
}
