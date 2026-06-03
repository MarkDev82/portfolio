import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const offsets = {
    up: { x: 0, y: 16 },
    down: { x: 0, y: -16 },
    left: { x: 16, y: 0 },
    right: { x: -16, y: 0 }
  };

  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial={{ 
        opacity: 0,
        x: offset.x,
        y: offset.y
      }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : offset.x,
        y: isVisible ? 0 : offset.y
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};
