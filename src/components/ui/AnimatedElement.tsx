import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  threshold?: number;
  as?: React.ElementType;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.5,
  threshold = 0.1,
  as: Component = 'div'
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin: '-20px'
  });

  // Define animation variants based on direction
  const getVariants = () => {
    const distance = 30;
    
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
    <Component 
      className={className} 
      ref={ref as React.RefObject<HTMLElement>}
    >
      <motion.div
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={getVariants()}
        style={{ height: '100%' }}
      >
        {children}
      </motion.div>
    </Component>
  );
};

export default AnimatedElement; 