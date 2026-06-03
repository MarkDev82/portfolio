import { motion } from 'framer-motion';

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
      <motion.img
        src="/logo.png"
        alt="Markel Icedo"
        className="w-24 h-24"
        style={{ filter: 'invert(1)' }}
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
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
      />
    </motion.div>
  );
};
