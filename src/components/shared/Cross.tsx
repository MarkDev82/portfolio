import { motion } from 'framer-motion';

interface CrossProps {
  size?: number;
  color?: string;
  className?: string;
  animate?: boolean;
}

export const Cross = ({ 
  size = 16, 
  color = 'currentColor',
  className = '',
  animate = false 
}: CrossProps) => {
  const strokeWidth = size * 0.15;
  
  if (animate) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={{ rotate: 0 }}
        animate={{ rotate: 90 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.path
          d="M12 2v20M2 12h20"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </motion.svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2v20M2 12h20"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};
