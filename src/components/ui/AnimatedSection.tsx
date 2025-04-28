import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  id?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  id
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px'
  });

  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 50;
    
    const variants = {
      hidden: {
        y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
        x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
        opacity: 0
      },
      visible: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut'
        }
      }
    };
    
    return variants;
  };

  return (
    <section 
      id={id} 
      className={className} 
      ref={ref as React.RefObject<HTMLElement>}
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={getVariants()}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default AnimatedSection; 