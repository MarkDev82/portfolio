import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield,
  Bot,
  Activity,
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { portfolioData } from '../data/portfolio-data';

export const Experience = () => {
  const { experience } = portfolioData;
  const [expandedJobs, setExpandedJobs] = useState<number[]>([]);

  const ExperienceCard = ({ job, index, isLast }: { job: any; index: number; isLast: boolean }) => {
    const isOngoing = job.type === 'ongoing';
    const isExpanded = expandedJobs.includes(job.id);

    const toggleExpanded = () => {
      setExpandedJobs(prev => 
        prev.includes(job.id) 
          ? prev.filter(id => id !== job.id)
          : [...prev, job.id]
      );
    };

    return (
      <motion.div 
        className={`relative ${!isLast ? 'mb-14' : ''}`}
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Timeline line */}
        {!isLast && (
          <motion.div 
            className="absolute left-[7px] top-12 bottom-0 w-px bg-neutral-800"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.12 }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'top' }}
          />
        )}
        
        {/* Timeline dot */}
        <motion.div 
          className="absolute left-0 top-7 w-[15px] h-[15px] border-2 border-neutral-700 bg-black z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.12 }}
          viewport={{ once: true }}
        />
        
        <div className="ml-10">
          <Card className="p-7" hover={false}>
            {/* Job Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-5">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="font-mono text-[10px] text-neutral-700 tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="w-5 h-px bg-neutral-800" />
                  <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-[0.25em]">
                    {job.period}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-1.5 tracking-tight">{job.title}</h3>
                <p className="text-neutral-500 text-sm font-mono">{job.company}</p>
              </div>
              <div className="flex items-center gap-3 mt-4 sm:mt-0">
                {isOngoing && (
                  <motion.span 
                    className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400 border border-neutral-700 px-2.5 py-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    Activo
                  </motion.span>
                )}
                <motion.button
                  onClick={toggleExpanded}
                  className="p-2 border border-border hover:border-neutral-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={isExpanded ? 'Contraer' : 'Expandir'}
                >
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                  </motion.div>
                </motion.button>
              </div>
            </div>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{ 
                height: isExpanded ? 'auto' : 0, 
                opacity: isExpanded ? 1 : 0 
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              {/* Job Description */}
              <p className="text-neutral-400 text-sm mb-7 leading-[1.7]">{job.description}</p>

              {/* Technologies */}
              <div className="mb-7">
                <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-4">Tecnologías</h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech: string, i: number) => (
                    <motion.span
                      key={i}
                      className="px-2.5 py-1 bg-surface-3 border border-border text-neutral-500 text-[10px] font-mono uppercase tracking-[0.2em]"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

            {/* Job-specific Content */}
            {job.responsibilities && job.responsibilities.length > 0 && (
              <div className="mb-7">
                <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-4">Responsabilidades</h4>
                <div className="space-y-2.5">
                  {job.responsibilities.map((responsibility: string, i: number) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-neutral-700 mt-1 text-xs">—</span>
                      <span className="text-neutral-400 text-sm leading-[1.7]">{responsibility}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {job.achievements && job.achievements.length > 0 && (
              <div className="mb-7">
                <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-4">Logros</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {job.achievements.map((achievement: any, i: number) => (
                    <motion.div
                      key={i}
                      className="p-5 bg-surface-3 border border-border"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="font-display text-xl font-bold text-white mb-1.5 tracking-tight">
                        {achievement.metric}
                      </div>
                      <div className="text-neutral-500 text-xs leading-[1.6]">
                        {achievement.description}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {job.categories && job.categories.length > 0 && (
              <div className="mb-7">
                <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-4">Tipos de bots</h4>
                <div className="space-y-3">
                  {job.categories.map((category: any, i: number) => {
                    const icons: Record<string, any> = {
                      'Bot de Moderación Avanzada': Shield,
                      'Bot de Utilidad Multifuncional': Bot,
                      'Bot de Estadísticas y Analytics': Activity,
                      'Sistema de Detección de Amenazas': AlertTriangle
                    };
                    const IconComponent = icons[category.name] || Bot;

                    return (
                      <motion.div
                        key={i}
                        className="p-5 bg-surface-3 border border-border"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-center gap-3.5">
                          <IconComponent className="w-4 h-4 text-neutral-600" />
                          <div>
                            <h5 className="font-medium text-white text-sm">{category.name}</h5>
                            <p className="text-neutral-600 text-xs font-mono mt-0.5">{category.platform}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
            </motion.div>
          </Card>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="experience" className="py-28 sm:py-36 bg-surface-1">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
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
              04 / Experiencia
            </motion.span>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Experiencia Profesional
            </motion.h2>
            <motion.p 
              className="mt-5 text-neutral-500 text-base max-w-xl leading-[1.7]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Proyectos remunerados y colaboraciones en desarrollo.
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

        {/* Experience Timeline */}
        <div className="relative">
          {experience.map((job, index) => (
            <ExperienceCard
              key={job.id}
              job={job}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
