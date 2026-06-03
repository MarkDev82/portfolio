import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  [key: string]: any;
}

export const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  delay = 0,
  ...props 
}: CardProps) => {
  const baseClasses = 'bg-surface-2 border border-border overflow-hidden';
  const hoverClasses = hover ? 'transition-all duration-300 hover:border-neutral-700 hover:bg-surface-3' : '';
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
