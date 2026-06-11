import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Layers, 
  Globe,
  Smartphone
} from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { Button } from './shared/Button';
import { StarField } from './shared/StarField';
import { CrossPattern } from './shared/CrossPattern';
import { portfolioData } from '../data/portfolio-data';

export const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [filter]);

  const categories = [
    { key: 'all', label: 'Todos', icon: Layers },
    { key: 'web', label: 'Web Apps', icon: Globe },
    { key: 'mobile', label: 'Mobile', icon: Smartphone },
    { key: 'miscelaneo', label: 'Misceláneo', icon: Code },
  ];

  const complexityLabels: Record<string, string> = {
    basic: 'Básico',
    intermediate: 'Intermedio',
    advanced: 'Avanzado'
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        layout
      >
        <Card className="overflow-hidden group h-full" hover={false}>
          {/* Project Header Bar */}
          <motion.div 
            className="h-[3px] bg-border group-hover:bg-white transition-colors duration-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            style={{ transformOrigin: 'left' }}
          />

          <div className="p-7">
            {/* Project Header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="font-mono text-[10px] text-neutral-700 tracking-wider">
                    {String(project.id).padStart(2, '0')}
                  </span>
                  <span className="w-5 h-px bg-neutral-800" />
                  <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-[0.25em]">
                    {complexityLabels[project.complexity]}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-white group-hover:text-neutral-200 transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
              </div>
              <span className={`font-mono text-[9px] uppercase tracking-[0.25em] px-2.5 py-1 border ${
                project.status === 'completed' 
                  ? 'border-neutral-800 text-neutral-500' 
                  : 'border-neutral-600 text-neutral-400'
              }`}>
                {project.status === 'completed' ? 'Done' : 'WIP'}
              </span>
            </div>

            {/* Description */}
            <p className="text-neutral-400 text-sm mb-6 leading-[1.7] line-clamp-3">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-4">Features</h4>
              <div className="space-y-2">
                {project.features.map((feature: string, i: number) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-2.5"
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-neutral-700 mt-1 text-xs">—</span>
                    <span className="text-neutral-400 text-sm leading-[1.7]">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, i: number) => (
                <motion.span
                  key={i}
                  className="px-2.5 py-1 bg-surface-3 border border-border text-neutral-500 text-[10px] font-mono uppercase tracking-[0.2em]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.03, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-black overflow-hidden">
      {/* Subtle star field */}
      <StarField count={40} />
      
      {/* Cross pattern background */}
      <CrossPattern spacing={100} size={10} opacity={0.025} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
              04 / Proyectos
            </motion.span>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Proyectos Destacados
            </motion.h2>
            <motion.p 
              className="mt-5 text-neutral-500 text-base max-w-xl leading-[1.7]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Proyectos personales y académicos en los que he trabajado.
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

        {/* Filter Buttons */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap gap-1 border-b border-border pb-px">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = filter === category.key;
              
              return (
                <motion.button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`relative flex items-center gap-2.5 px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-neutral-600 hover:text-neutral-300'
                  }`}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{category.label}</span>
                  {category.key === 'all' && (
                    <span className="ml-1.5 text-[9px] text-neutral-700">
                      ({projects.length})
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                      layoutId="activeFilter"
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            layout
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        {filteredProjects.length > visibleCount && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Button
              onClick={() => setVisibleCount(prev => prev + 4)}
              variant="secondary"
              size="md"
            >
              Ver Más Proyectos ({filteredProjects.length - visibleCount} restantes)
            </Button>
          </motion.div>
        )}

      </div>
    </section>
  );
}
