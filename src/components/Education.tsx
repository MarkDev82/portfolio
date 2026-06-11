import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Star, 
  CheckCircle2
} from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { StarField } from './shared/StarField';
import { portfolioData } from '../data/portfolio-data';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-28 sm:py-36 bg-black overflow-hidden">
      {/* Subtle star field */}
      <StarField count={25} />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
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
              01 / Educación
            </motion.span>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Educación y Desarrollo
            </motion.h2>
            <motion.p 
              className="mt-5 text-neutral-500 text-base max-w-xl leading-[1.7]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Mi trayectoria académica y plan de crecimiento profesional.
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
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Education Timeline */}
          <AnimatedSection direction="left">
            <div className="space-y-5">
              <motion.h3 
                className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-7"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Formación Académica
              </motion.h3>
              
              {/* Current Education */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="p-7 border-neutral-700">
                  <div className="flex items-start">
                    <motion.div 
                      className="w-11 h-11 bg-surface-4 border border-border flex items-center justify-center mr-5 flex-shrink-0"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <GraduationCap className="w-4 h-4 text-neutral-500" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3 gap-4">
                        <h4 className="font-medium text-white text-base leading-snug">{education.current.degree}</h4>
                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400 border border-neutral-700 px-2.5 py-1 flex-shrink-0">
                          {education.current.status}
                        </span>
                      </div>
                      <p className="text-neutral-500 text-sm leading-[1.7]">
                        Enfocado en administración de sistemas, redes y ciberseguridad. 
                        Aprendiendo las bases técnicas que complementan mi experiencia en desarrollo.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Previous Education */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true }}
              >
                <Card className="p-7">
                  <div className="flex items-start">
                    <div className="w-11 h-11 bg-surface-4 border border-border flex items-center justify-center mr-5 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-neutral-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3 gap-4">
                        <h4 className="font-medium text-white text-base">{education.previous}</h4>
                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 border border-border px-2.5 py-1 flex-shrink-0">
                          Completado
                        </span>
                      </div>
                      <p className="text-neutral-500 text-sm leading-[1.7]">
                        Base sólida que me permitió desarrollar habilidades de análisis y resolución de problemas.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Completed Certifications */}
              {education.certifications.completed.map((cert, index) => (
                <motion.div
                  key={`completed-${index}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-7">
                    <div className="flex items-start">
                      <div className="w-11 h-11 bg-surface-4 border border-border flex items-center justify-center mr-5 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-neutral-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3 gap-4">
                          <h4 className="font-medium text-white text-base">{cert.name}</h4>
                          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 border border-border px-2.5 py-1 flex-shrink-0">
                            {cert.year}
                          </span>
                        </div>
                        <p className="text-neutral-500 text-sm">
                          Certificación de idioma completada.
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications Plan */}
          <AnimatedSection direction="right">
            <div className="space-y-5">
              <motion.h3 
                className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-7"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Plan de Certificaciones
              </motion.h3>
              
              {/* Next Year Certifications */}
              <div className="space-y-4">
                <motion.h4 
                  className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Próximas Certificaciones (2025)
                </motion.h4>
                {education.certifications.planned.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 bg-surface-4 border border-border flex items-center justify-center flex-shrink-0">
                          <Award className="w-3.5 h-3.5 text-neutral-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white text-sm">{cert.name}</h4>
                          <p className="text-neutral-600 text-xs font-mono mt-0.5">{cert.year}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
                
                {/* Future Objectives */}
                <motion.div 
                  className="mt-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-5">Objetivos Futuros</h4>
                  <motion.div
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                  >
                    <Card className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-9 h-9 bg-surface-4 border border-border flex items-center justify-center flex-shrink-0">
                          <Star className="w-3.5 h-3.5 text-neutral-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-white text-sm">{education.certifications.longTerm}</h4>
                          <p className="text-neutral-600 text-xs font-mono mt-0.5">Opciones para el futuro</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Goals Section */}
        {education.goals && (
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl border-l-2 border-neutral-800 pl-7">
              <p className="text-neutral-400 text-base leading-[1.8]">
                {education.goals.objective}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
