import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { portfolioData } from '../data/portfolio-data';
import PatternWaves from './shared/PatternWaves';
import { Cross } from './shared/Cross';

export const Hero = () => {
  const { personal, skills } = portfolioData;
  const profileFacts = [
    { label: 'Ubicación', value: 'Getxo, Euskadi' },
    { label: 'Formación', value: 'ASIR · En curso' },
    { label: 'Stack', value: skills.languages.filter(l => l.level !== 'basic').slice(0, 4).map(l => l.name).join(' · ') },
    { label: 'Estado', value: 'Abierto a oportunidades' },
  ];
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

  const scrollToEducation = () => {
    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
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
    <section className="relative min-h-screen flex items-end bg-black overflow-hidden">
      {/* Pattern waves background — subtle pointer ripple */}
      <div className="absolute inset-0" aria-hidden="true">
        <PatternWaves
          preset="mesh"
          interactive
          cursorSize={60}
          cursorStrength={0.5}
          color="#ffffff"
          backgroundColor="#000000"
          opacity={0.8}
          fade="none"
          speed={0.3}
        />
        {/* Legibility veil: keeps the text zone dark, lets waves breathe on the right/top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />
      </div>

      {/* Decorative cross - top right corner */}
      <motion.div
        className="absolute top-24 right-12 hidden xl:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Cross size={32} color="#404040" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-28 pb-16 sm:pb-20 lg:pb-24">
        <motion.div
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: identity */}
          <div className="lg:col-span-7">
            {/* Top label */}
            <motion.div
              className="mb-8 sm:mb-10"
              variants={itemVariants}
            >
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-500">
                Portfolio — {new Date().getFullYear()}
              </span>
            </motion.div>

            {/* Name — maximum typographic weight */}
            <motion.h1 
              className="font-display text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[8rem] xl:text-[10rem] font-bold text-white leading-[0.85] tracking-[-0.04em] mb-10 sm:mb-12"
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
                className="block text-txt-tertiary"
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
              <div className="font-mono text-xs sm:text-sm text-neutral-400 flex items-center">
                <span className="text-neutral-500 mr-2 select-none">&gt;</span>
                <span>{typedTitle}</span>
                <span className="typing-cursor ml-0.5 text-neutral-400 select-none">_</span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-6 sm:gap-10"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToEducation}
                className="group flex items-center gap-3 text-white border border-neutral-600 bg-black/40 px-6 py-3.5 sm:px-7 sm:py-4 hover:border-white hover:bg-white hover:text-black transition-all duration-300"
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
                className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 hover:text-white transition-colors duration-300"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                GitHub ↗
              </motion.a>
            </motion.div>
          </div>

          {/* Right: profile panel */}
          <motion.aside
            className="lg:col-span-5 lg:border-l border-neutral-800 lg:pl-8 lg:bg-black/50 lg:backdrop-blur-sm lg:py-8 lg:pr-6"
            variants={itemVariants}
          >
            <p className="text-neutral-300 text-base leading-[1.7] mb-4">
              {personal.hero.description}
            </p>
            <p className="text-neutral-400 text-sm font-mono leading-relaxed mb-8">
              {personal.hero.tagline}
            </p>

            <dl className="border-t border-neutral-800">
              {profileFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 py-3 border-b border-neutral-800"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-neutral-300 text-right">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </motion.aside>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900" />
    </section>
  );
};
