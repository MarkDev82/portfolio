import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface StarFieldProps {
  count?: number;
  className?: string;
}

export const StarField = ({ count = 50, className = '' }: StarFieldProps) => {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      delay: Math.random() * 3
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, star.opacity, star.opacity, 0],
          }}
          transition={{
            duration: 4,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
};
