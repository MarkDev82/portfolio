import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Database, 
  Bot, 
  Settings, 
  Monitor,
  Zap,
  Globe,
  Target
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
      color: 'blue',
      skills: skills.frontend,
      description: 'Tecnologías para crear interfaces modernas'
    },
    backend: {
      title: 'Backend',
      icon: Server,
      color: 'green',
      skills: skills.backend,
      description: 'Desarrollo de APIs y lógica del servidor'
    },
    languages: {
      title: 'Lenguajes',
      icon: Code2,
      color: 'orange',
      skills: skills.languages,
      description: 'Lenguajes de programación que domino'
    },
    specialties: {
      title: 'Especialidades',
      icon: Target,
      color: 'purple',
      skills: skills.miscelaneo.specialties,
      description: 'Áreas de especialización técnica'
    }
  };

  const getColorClasses = (color, variant = 'bg') => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-500',
        border: 'border-blue-500',
        bgLight: 'bg-blue-50'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-500',
        border: 'border-green-500',
        bgLight: 'bg-green-50'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-500',
        border: 'border-purple-500',
        bgLight: 'bg-purple-50'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-500',
        border: 'border-orange-500',
        bgLight: 'bg-orange-50'
      },
      red: {
        bg: 'bg-red-500',
        text: 'text-red-500',
        border: 'border-red-500',
        bgLight: 'bg-red-50'
      },
      indigo: {
        bg: 'bg-indigo-500',
        text: 'text-indigo-500',
        border: 'border-indigo-500',
        bgLight: 'bg-indigo-50'
      }
    };
    return colors[color] || colors.blue;
  };

  const getLevelWidth = (level) => {
    const widths = {
      advanced: 'w-full',
      intermediate: 'w-3/4',
      basic: 'w-1/2'
    };
    return widths[level] || widths.basic;
  };

  const getLevelColor = (level) => {
    const colors = {
      advanced: 'from-green-400 to-green-600',
      intermediate: 'from-yellow-400 to-orange-500',
      basic: 'from-blue-400 to-blue-600'
    };
    return colors[level] || colors.basic;
  };

  const renderSkillCard = (skill, index) => {
    if (activeCategory === 'miscelaneo') {
      return (
        <Card key={index} delay={index * 0.1} className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{skill.platforms ? 'Plataformas' : skill.specialties ? 'Especialidades' : 'Frameworks'}</h3>
          <div className="space-y-2">
            {(skill.platforms || skill.specialties || skill.frameworks || []).map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Zap className="w-4 h-4 text-red-500" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </Card>
      );
    }

    if (activeCategory === 'specialties') {
      return (
        <Card key={index} delay={index * 0.1} className="p-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Stack Tecnológico</h3>
          <div className="space-y-2">
            <motion.div
              className="flex items-center space-x-2 p-3 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border border-purple-200 dark:border-purple-700"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Target className="w-5 h-5 text-purple-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
            </motion.div>
          </div>
        </Card>
      );
    }

    return (
      <Card key={index} delay={index * 0.1} className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
          {skill.years && (
            <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
              {skill.years}
            </span>
          )}
        </div>
        
        {skill.level && (
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600 dark:text-gray-300 capitalize">{skill.level}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                className={`h-2 bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: getLevelWidth(skill.level).replace('w-', '') === 'full' ? '100%' : getLevelWidth(skill.level).replace('w-', '') === '3/4' ? '75%' : '50%' }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        )}
        
        {skill.description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm">{skill.description}</p>
        )}
      </Card>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Habilidades Técnicas</h2>
          <p className="section-subtitle">Tecnologías, lenguajes y herramientas que utilizo para crear soluciones innovadoras</p>
        </div>

        {/* Category Tabs */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {Object.entries(categories).map(([key, category]) => {
              const IconComponent = category.icon;
              const colorClasses = getColorClasses(category.color);
              const isActive = activeCategory === key;
              
              return (
                <motion.button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? `${colorClasses.bg} text-white shadow-lg`
                      : `bg-white dark:bg-gray-800 ${colorClasses.text} hover:${colorClasses.bgLight} dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600`
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="hidden sm:inline">{category.title}</span>
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Skills Content */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {categories[activeCategory].title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {categories[activeCategory].description}
            </p>
          </div>

          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeCategory === 'miscelaneo' ? (
              <>
                {/* Miscelaneo - Special Layout */}
                <Card delay={0} className="p-6">
                  <div className="flex items-center mb-4">
                    <Globe className="w-6 h-6 text-red-500 mr-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Plataformas</h3>
                  </div>
                  <div className="space-y-2">
                    {skills.miscelaneo.platforms.map((platform, i) => (
                      <div key={i} className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700 dark:text-gray-300">{platform}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card delay={0.1} className="p-6">
                  <div className="flex items-center mb-4">
                    <Bot className="w-6 h-6 text-red-500 mr-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Logros</h3>
                  </div>
                  <div className="space-y-2">
                    {skills.miscelaneo.frameworks.map((framework, i) => (
                      <div key={i} className="flex items-center space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Zap className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{framework}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </>
            ) : (
              categories[activeCategory].skills.map((skill, index) => renderSkillCard(skill, index))
            )}
          </motion.div>
        </AnimatedSection>

        {/* Skills Summary */}
        <AnimatedSection delay={0.5} className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Enfoque de Desarrollo
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
                Mi stack tecnológico se centra en crear soluciones completas y escalables. 
                Combino tecnologías modernas de frontend con backends robustos, siempre 
                priorizando la calidad del código, la seguridad y la experiencia del usuario.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};