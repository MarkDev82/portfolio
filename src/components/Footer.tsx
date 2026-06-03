import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Mail, MapPin, Linkedin, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

export const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { name: 'GitHub', href: personal.github, icon: Github },
    { name: 'LinkedIn', href: personal.linkedin, icon: Linkedin },
    { name: 'Email', href: `mailto:${personal.email}`, icon: Mail }
  ];

  const quickLinks = [
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Contacto', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 56;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <footer className="bg-black border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          className="py-14 sm:py-16 grid grid-cols-1 md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={scrollToTop}
                className="font-mono text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase mb-5 hover:text-white transition-colors duration-300"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {personal.name.split(' ')[0]}
                <span className="text-neutral-700">.{personal.name.split(' ')[1]}</span>
              </motion.button>
              <p className="text-neutral-600 text-sm mb-5 max-w-md leading-[1.7]">
                Estudiante de ASIR. Desarrollo web, automatización y bots.
              </p>
              <div className="flex items-center gap-2.5 text-neutral-700 text-xs font-mono">
                <MapPin className="w-3 h-3" />
                <span>{personal.location}</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-5">Enlaces</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div variants={itemVariants}>
            <h3 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-5">Conecta</h3>
            
            <div className="flex gap-2.5 mb-5">
              {socialLinks.filter(social => social.href).map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-neutral-600 hover:text-white transition-colors duration-300 p-2.5 border border-neutral-900 hover:border-neutral-700"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
            
            <motion.a
              href={`mailto:${personal.email}`}
              className="text-neutral-500 hover:text-white transition-colors duration-300 text-sm font-mono"
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              {personal.email}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-neutral-900 py-7"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-neutral-700 text-xs font-mono">
            © {currentYear} {personal.name}. Todos los derechos reservados.
          </span>
        </motion.div>

        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-white text-black p-3 hover:bg-neutral-200 transition-colors duration-300 z-40"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
};
