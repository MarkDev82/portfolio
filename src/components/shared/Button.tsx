import { motion } from 'framer-motion';
import type { ReactNode, MouseEventHandler } from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
  className?: string;
  icon?: LucideIcon;
  [key: string]: any;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '', 
  icon: Icon,
  ...props 
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide uppercase text-xs';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-neutral-200 border border-white',
    secondary: 'bg-transparent text-white border border-neutral-600 hover:border-white hover:bg-white hover:text-black',
    ghost: 'text-neutral-400 hover:text-white hover:bg-neutral-900',
  };

  const sizes = {
    sm: 'py-2 px-4 text-xs',
    md: 'py-3 px-6 text-xs',
    lg: 'py-4 px-8 text-sm',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      {...props}
    >
      {content}
    </motion.button>
  );
};
