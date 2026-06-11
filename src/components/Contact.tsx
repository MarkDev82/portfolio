import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  ArrowUpRight
} from 'lucide-react';
import { AnimatedSection } from './shared/AnimatedSection';
import { portfolioData } from '../data/portfolio-data';

export const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="py-28 sm:py-36 bg-surface-1">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <AnimatedSection>
          <div className="mb-20 sm:mb-24">
            <motion.span 
              className="font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-600 block mb-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              05 / Contacto
            </motion.span>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Contacto
            </motion.h2>
            <motion.p 
              className="mt-5 text-neutral-500 text-base max-w-xl leading-[1.7]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Estoy abierto a oportunidades, colaboraciones y cualquier conversación interesante sobre desarrollo.
            </motion.p>
            <motion.div 
              className="mt-6 w-20 h-px bg-neutral-800"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'left' }}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          {/* Primary contact: Email — large, typographic, dominant */}
          <motion.div 
            className="mb-20 sm:mb-24"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={`mailto:${personal.email}`}
              className="group block"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <Mail className="w-4 h-4 text-neutral-700" />
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-700">Email</span>
              </div>
              <div className="flex items-center gap-5">
                <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight group-hover:text-neutral-300 transition-colors duration-300 break-all">
                  {personal.email}
                </span>
                <motion.div
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-700 group-hover:text-white transition-colors duration-300 flex-shrink-0 mt-1" />
                </motion.div>
              </div>
              <p className="mt-3 text-neutral-700 text-xs font-mono">Respuesta en 24-48 horas</p>
            </motion.a>
          </motion.div>

          {/* Secondary contacts: GitHub + LinkedIn — large blocks */}
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-20 sm:mb-24">
            {/* GitHub */}
            <motion.a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-neutral-800 p-7 sm:p-8 hover:border-neutral-600 transition-colors duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between mb-5">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Github className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <motion.div
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-neutral-800 group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-700 block mb-3">GitHub</span>
              <span className="font-display text-xl sm:text-2xl font-semibold text-white group-hover:text-neutral-300 transition-colors duration-300 tracking-tight">
                @MarkDev82
              </span>
              <p className="mt-3 text-neutral-700 text-xs leading-[1.6]">Revisa mi código y proyectos</p>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={personal.linkedin || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-neutral-800 p-7 sm:p-8 hover:border-neutral-600 transition-colors duration-300"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center justify-between mb-5">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="w-5 h-5 text-neutral-700 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <motion.div
                  whileHover={{ x: 2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-neutral-800 group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-700 block mb-3">LinkedIn</span>
              <span className="font-display text-xl sm:text-2xl font-semibold text-white group-hover:text-neutral-300 transition-colors duration-300 tracking-tight">
                Markel Icedo
              </span>
              <p className="mt-3 text-neutral-700 text-xs leading-[1.6]">Conexión profesional</p>
            </motion.a>
          </div>

          {/* Tertiary: Location + quick email CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-7 border-t border-neutral-900 pt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3.5">
              <MapPin className="w-4 h-4 text-neutral-800" />
              <div>
                <span className="text-neutral-400 text-sm">{personal.location}</span>
                <p className="text-neutral-700 text-xs font-mono mt-1">Disponible para trabajo remoto</p>
              </div>
            </div>

            <motion.a
              href={`mailto:${personal.email}?subject=Oportunidad de Trabajo&body=Hola Markel,%0D%0A%0D%0AMe gustaría conversar contigo sobre una oportunidad...`}
              className="inline-flex items-center gap-2.5 bg-white text-black px-6 py-3.5 text-[10px] sm:text-xs font-mono font-medium uppercase tracking-[0.25em] hover:bg-neutral-200 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-3.5 h-3.5" />
              Enviar email directo
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
