import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Monitor,
  Target,
} from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { portfolioData } from '../data/portfolio-data';

export const Skills = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: {
      title: 'Frontend',
      icon: Monitor,
      skills: skills.frontend,
      description: 'Tecnologías para crear interfaces modernas'
    },
    backend: {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      description: 'Desarrollo de APIs y lógica del servidor'
    },
    languages: {
      title: 'Lenguajes',
      icon: Code2,
      skills: skills.languages,
      description: 'Lenguajes de programación que domino'
    },
    specialties: {
      title: 'Stacks',
      icon: Target,
      skills: skills.miscelaneo.specialties,
      description: 'Combinaciones de tecnologías que uso con frecuencia'
    }
  };

  const getLevelWidth = (level: string) => {
    const widths: Record<string, string> = {
      advanced: '100%',
      intermediate: '75%',
      basic: '50%'
    };
    return widths[level] || '50%';
  };

  const getLevelLabel = (level: string) => {
    const labels: Record<string, string> = {
      advanced: 'Avanzado',
      intermediate: 'Intermedio',
      basic: 'Básico'
    };
    return labels[level] || level;
  };

  const renderSkillCard = (skill: any, index: number) => {
    if (activeCategory === 'specialties') {
      return (
        <motion.div
          key={`${activeCategory}-${index}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <Card className="p-6">
            <div className="flex items-start gap-3">
              <Target className="w-4 h-4 text-neutral-600 mt-0.5 flex-shrink-0" />
              <span className="text-neutral-300 text-sm font-mono leading-[1.7]">{skill}</span>
            </div>
          </Card>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={`${activeCategory}-${index}`}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
      >
        <Card className="p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-medium text-white text-base">{skill.name}</h3>
            {skill.years && (
              <span className="font-mono text-[10px] text-neutral-600 tracking-wider">
                {skill.years}
              </span>
            )}
          </div>
          
          {skill.level && (
            <div className="mb-4">
              <div className="flex justify-between mb-2.5">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
                  {getLevelLabel(skill.level)}
                </span>
              </div>
              <div className="w-full bg-surface-4 h-[3px] overflow-hidden">
                <motion.div
                  className="h-[3px] bg-white"
                  initial={{ width: 0 }}
                  whileInView={{ width: getLevelWidth(skill.level) }}
                  transition={{ duration: 0.9, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          )}
          
          {skill.description && (
            <p className="text-neutral-500 text-xs leading-[1.7]">{skill.description}</p>
          )}
        </Card>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-28 sm:py-36 bg-surface-1">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
              02 / Skills
            </motion.span>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Habilidades Técnicas
            </motion.h2>
            <motion.p 
              className="mt-5 text-neutral-500 text-base max-w-xl leading-[1.7]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Lenguajes, frameworks y herramientas con los que he trabajado.
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

        {/* Category Tabs */}
        <AnimatedSection className="mb-14">
          <div className="flex flex-wrap gap-1 border-b border-border pb-px">
            {Object.entries(categories).map(([key, category]) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === key;
              
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
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
                  <span>{category.title}</span>
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                      layoutId="activeTab"
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Skills Content */}
        <AnimatedSection>
          <motion.p 
            className="mb-10 text-neutral-500 text-sm font-mono leading-[1.7]"
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {categories[activeCategory as keyof typeof categories].description}
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {categories[activeCategory as keyof typeof categories].skills.map((skill: any, index: number) => renderSkillCard(skill, index))}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

      </div>
    </section>
  );
};
