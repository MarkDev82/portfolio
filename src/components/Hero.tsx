import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, Download } from 'lucide-react';
import { Button } from './shared/Button';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { portfolioData } from '../data/portfolio-data';

export const Hero = () => {
  const { personal } = portfolioData;
  const [showElements, setShowElements] = useState(false);
  
  const { displayText: typedTitle, isComplete } = useTypingEffect(
    personal.title,
    80,
    1000
  );

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-bg">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showElements ? 1 : 0, y: showElements ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          {/* Professional Title with Typing Effect */}
          <motion.div 
            className="mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium min-h-[2rem]">
              <span className="typing-effect">
                {typedTitle}
              </span>
              {!isComplete && (
                <motion.span
                  className="ml-1 text-blue-500 dark:text-blue-400"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showElements ? 1 : 0, y: showElements ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {personal.hero.description}
            </p>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
              {personal.hero.tagline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showElements ? 1 : 0, y: showElements ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Button
              variant="secondary"
              onClick={scrollToAbout}
              size="lg"
              className="w-full sm:w-auto"
            >
              Ver mi trabajo
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showElements ? 1 : 0, y: showElements ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">3+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">12+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Bots Desarrollados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">8K+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Usuarios Servidos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};