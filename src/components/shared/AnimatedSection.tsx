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

  const variants = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 }
  };

  const currentVariant = variants[direction];

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial={{ 
        opacity: 0,
        x: currentVariant.x,
        y: currentVariant.y
      }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : currentVariant.x,
        y: isVisible ? 0 : currentVariant.y
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};
