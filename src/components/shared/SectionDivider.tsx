import { motion } from 'framer-motion';
import { Cross } from './Cross';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider = ({ className = '' }: SectionDividerProps) => {
  return (
    <motion.div 
      className={`flex items-center justify-center py-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-4">
        <div className="w-16 h-px bg-neutral-800" />
        <Cross size={12} color="#525252" />
        <div className="w-16 h-px bg-neutral-800" />
      </div>
    </motion.div>
  );
};
