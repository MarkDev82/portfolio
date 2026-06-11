import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const { personal } = portfolioData;

  const navItems = [
    { name: 'Educación', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Progressive scroll effect (0 to 1 over 200px)
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 200, 1);
      setScrollProgress(progress);
      
      const sections = navItems.map(item => ({
        id: item.href.substring(1),
        element: document.getElementById(item.href.substring(1))
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 56;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${scrollProgress * 0.9})`,
          backdropFilter: `blur(${scrollProgress * 12}px)`,
          borderBottom: `1px solid rgba(38, 38, 38, ${scrollProgress})`
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('#hero')}
              className="font-mono text-[11px] font-semibold tracking-[0.15em] text-neutral-300 uppercase hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              M<span className="text-neutral-600">.</span>I
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative text-[11px] font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-neutral-500 hover:text-neutral-200'
                    }`}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-[18px] left-0 right-0 h-px bg-white"
                        layoutId="nav-active"
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Desktop right */}
            <div className="hidden md:flex items-center gap-1">
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-600 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-[15px] h-[15px]" />
              </motion.a>
              <motion.a
                href={`mailto:${personal.email}`}
                className="p-2 text-neutral-600 hover:text-white transition-colors duration-300"
                aria-label="Email"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-[15px] h-[15px]" />
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="h-14 flex-shrink-0" />

            <div className="flex-1 flex flex-col justify-center px-8">
              <div className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left py-4 border-b border-neutral-900 text-lg font-medium tracking-wide transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-500'
                      }`}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.3, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <span className="font-mono text-[10px] text-neutral-700 mr-3">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.name}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="px-8 pb-10 pt-6 border-t border-neutral-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <div className="flex items-center gap-6">
                <motion.a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-mono tracking-wider">GitHub</span>
                </motion.a>
                <motion.a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-xs font-mono tracking-wider">Email</span>
                </motion.a>
                <motion.a
                  href={personal.linkedin || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors"
                  whileHover={{ x: 2 }}
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-xs font-mono tracking-wider">LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
