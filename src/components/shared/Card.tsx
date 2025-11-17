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
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-colors duration-300';
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-gray-900/50 hover:scale-105 hover:-translate-y-1' : '';
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};
