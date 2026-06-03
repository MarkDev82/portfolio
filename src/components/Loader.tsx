import { motion } from 'framer-motion';
import { Cross } from './shared/Cross';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader = ({ onComplete }: LoaderProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.6, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
    >
      {/* Cross animation - drawing and rotating */}
      <div className="relative">
        {/* Main cross */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.9],
            rotate: [0, 0, 90, 90]
          }}
          transition={{
            duration: 1.6,
            times: [0, 0.25, 0.75, 1],
            ease: [0.76, 0, 0.24, 1]
          }}
        >
          <Cross size={80} color="#ffffff" />
        </motion.div>
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0.3, 0],
            scale: [0.8, 1.2, 1.5, 1.8]
          }}
          transition={{
            duration: 1.6,
            times: [0, 0.25, 0.75, 1],
            ease: [0.76, 0, 0.24, 1]
          }}
        >
          <Cross size={80} color="#ffffff" className="blur-xl" />
        </motion.div>
      </div>

      {/* Subtle text */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.6,
          times: [0, 0.3, 0.7, 1],
          ease: 'easeInOut'
        }}
      >
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-600">
          Loading
        </span>
      </motion.div>
    </motion.div>
  );
};
