
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountAnimationProps {
  end: number;
  duration?: number;
  start?: number;
}

export const useCountAnimation = ({ end, duration = 2000, start = 0 }: CountAnimationProps) => {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * (end - start) + start));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration, start]);

  return { count, ref };
};
