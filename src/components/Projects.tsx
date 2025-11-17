import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Layers, 
  CheckCircle, 
  Filter,
  Globe,
  Smartphone,
  Database
} from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { Button } from './shared/Button';
import { portfolioData } from '../data/portfolio-data';

export const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(3);
  }, [filter]);

  const categories = [
    { key: 'all', label: 'Todos', icon: Layers },
    { key: 'web', label: 'Web Apps', icon: Globe },
    { key: 'mobile', label: 'Mobile', icon: Smartphone },
    { key: 'miscelaneo', label: 'Misceláneo', icon: Code },
  ];

  const complexityColors = {
    basic: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      label: 'Básico'
    },
    intermediate: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      label: 'Intermedio'
    },
    advanced: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      label: 'Avanzado'
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const ProjectCard = ({ project, index }) => {
    return (
      <Card delay={index * 0.1} className="overflow-hidden group">
        {/* Project Image/Icon Placeholder */}
        <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="text-center text-white">
              <Code className="w-12 h-12 mx-auto mb-2 opacity-80" />
              <div className="text-sm font-medium opacity-90">
                {project.technologies.slice(0, 2).join(' + ')}
                {project.technologies.length > 2 && ' +'}
              </div>
            </div>
          </div>
          
          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="text-white">
              <p className="text-sm font-medium">Tecnologías utilizadas:</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-xs bg-white/20 dark:bg-gray-700/50 backdrop-blur-sm px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="p-6">
          {/* Project Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${complexityColors[project.complexity].bg} ${complexityColors[project.complexity].text}`}>
                  {complexityColors[project.complexity].label}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  <CheckCircle className="w-3 h-3 inline mr-1" />
                  {project.status === 'completed' ? 'Completado' : 'En Progreso'}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">Características principales:</h4>
            <div className="space-y-1">
              {project.features.slice(0, 3).map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
              {project.features.length > 3 && (
                <div className="text-xs text-gray-500 dark:text-gray-400 ml-6">
                  +{project.features.length - 3} características más
                </div>
              )}
            </div>
          </div>

          {/* Technology Tags */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">Proyectos web desarrollados que demuestran mis habilidades técnicas y creatividad</p>
        </div>

        {/* Project Overview */}
        <AnimatedSection className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Portfolio Diverso de Proyectos Web
              </h3>
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                Portfolio diverso de proyectos web desarrollados principalmente para aplicaciones 
                académicas y casos de uso reales. Experiencia en crear soluciones funcionales 
                desde cero, incluyendo sistemas de gestión, herramientas de automatización, 
                y aplicaciones empresariales completas.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">{projects.length}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">100%</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Éxito en Entrega</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">5+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Tecnologías</div>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = filter === category.key;
              
              return (
                <motion.button
                  key={category.key}
                  onClick={() => setFilter(category.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.label}</span>
                  {category.key === 'all' && (
                    <span className="ml-1 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                      {projects.length}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {filteredProjects.length > visibleCount && (
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={() => setVisibleCount(prev => prev + 3)}
              variant="secondary"
              size="lg"
            >
              Ver Más Proyectos
            </Button>
          </motion.div>
        )}

      </div>
    </section>
  );
}