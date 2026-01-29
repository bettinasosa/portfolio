'use client';

import { useEffect, useState, type RefObject } from 'react';

type ScrollAxis = 'x' | 'y';

interface ScrollDotsOptions {
  dotCount?: number;
  axis?: ScrollAxis;
  dependencies?: ReadonlyArray<unknown>;
}

export const useScrollDots = (
  containerRef: RefObject<HTMLElement>,
  { dotCount = 3, axis = 'x', dependencies = [] }: ScrollDotsOptions = {}
) => {
  const [activeDot, setActiveDot] = useState(0);
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number | null = null;

    const getMaxScroll = () =>
      axis === 'x'
        ? container.scrollWidth - container.clientWidth
        : container.scrollHeight - container.clientHeight;

    const getScrollPos = () =>
      axis === 'x' ? container.scrollLeft : container.scrollTop;

    const updateDots = () => {
      const maxScroll = getMaxScroll();
      if (maxScroll <= 0) {
        setShowDots(false);
        setActiveDot(0);
        return;
      }

      setShowDots(true);
      const progress = getScrollPos() / maxScroll;
      const nextIndex = Math.min(
        dotCount - 1,
        Math.max(0, Math.round(progress * (dotCount - 1)))
      );
      setActiveDot(nextIndex);
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        updateDots();
      });
    };

    updateDots();
    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateDots);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateDots);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [axis, dotCount, ...dependencies]);

  return { activeDot, showDots, dotCount };
};
