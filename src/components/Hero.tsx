import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { portfolioData } from '../data/portfolio-data';
import { StarField } from './shared/StarField';
import { Cross } from './shared/Cross';

export const Hero = () => {
  const { personal } = portfolioData;
  const [showElements, setShowElements] = useState(false);
  
  const { displayText: typedTitle } = useTypingEffect(
    [
      "Full-Stack Developer",
      "DevOps & Monitoring",
      "Autonomous Learner",
    ],
    80,
    1000
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <section className="relative h-screen flex items-end bg-black overflow-hidden">
      {/* Star field background */}
      <StarField count={60} />
      
      {/* Subtle grid pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.015 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Decorative cross - top right corner */}
      <motion.div
        className="absolute top-24 right-12 hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Cross size={32} color="#404040" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pb-16 sm:pb-20 lg:pb-24">
        <motion.div
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Main content */}
          <div className="lg:col-span-8">
            {/* Top label */}
            <motion.div
              className="mb-8 sm:mb-10"
              variants={itemVariants}
            >
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-600">
                Portfolio — {new Date().getFullYear()}
              </span>
            </motion.div>

            {/* Name — maximum typographic weight */}
            <motion.h1 
              className="font-display text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[11rem] font-bold text-white leading-[0.85] tracking-[-0.04em] mb-10 sm:mb-12"
              variants={itemVariants}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {personal.name.split(' ')[0]}
              </motion.span>
              <motion.span 
                className="block text-neutral-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {personal.name.split(' ')[1]}
              </motion.span>
            </motion.h1>

            {/* Typing title */}
            <motion.div 
              className="mb-10 sm:mb-12 h-6"
              variants={itemVariants}
            >
              <div className="font-mono text-xs sm:text-sm text-neutral-500 flex items-center">
                <span className="text-neutral-700 mr-2 select-none">&gt;</span>
                <span>{typedTitle}</span>
                <span className="typing-cursor ml-0.5 text-neutral-400 select-none">_</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              className="max-w-xl mb-12 sm:mb-14"
              variants={itemVariants}
            >
              <p className="text-neutral-400 text-base sm:text-lg leading-[1.7] mb-4">
                {personal.hero.description}
              </p>
              <p className="text-neutral-600 text-sm font-mono leading-relaxed">
                {personal.hero.tagline}
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-6 sm:gap-10"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToAbout}
                className="group flex items-center gap-3 text-white border border-neutral-700 px-6 py-3.5 sm:px-7 sm:py-4 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] font-medium">Ver mi trabajo</span>
                <motion.div
                  animate={{ y: [0, 2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="w-3 h-3" />
                </motion.div>
              </motion.button>
              
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-600 hover:text-white transition-colors duration-300"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                GitHub ↗
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Photo — secondary element, architectural */}
          <motion.div
            className="lg:col-span-4 hidden sm:block"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Photo container with mask reveal */}
              <motion.div 
                className="w-full aspect-[3/4] max-w-[300px] lg:max-w-[340px] ml-auto overflow-hidden grayscale border border-neutral-800"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
              >
                <img
                  src="/images/FotoPersonal.png"
                  alt="Markel Icedo"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
              </motion.div>
              {/* Subtle label under photo */}
              <motion.div 
                className="mt-4 text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-neutral-700">
                  Getxo, ES
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900" />
    </section>
  );
};
