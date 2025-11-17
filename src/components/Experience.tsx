import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Code, 
  TrendingUp,
  Shield,
  Bot,
  Server,
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
  const [expandedJobs, setExpandedJobs] = useState([]);

  const ExperienceCard = ({ job, index, isLast }) => {
    const isProject = job.type === 'project';
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
      <div className={`relative ${!isLast ? 'mb-16' : ''}`}>
        
        {/* Timeline Dot */}
        <div className="absolute left-4 top-8 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full transform -translate-x-1/2 z-10" />
        
        <motion.div
          className="ml-12"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-6">
            {/* Job Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                <p className="text-blue-600 font-medium">{job.company}</p>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{job.period}</span>
                </div>
                {isOngoing && (
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    Activo
                  </span>
                )}
                <button
                  onClick={toggleExpanded}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
                  aria-label={isExpanded ? 'Contraer' : 'Expandir'}
                >
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Expandable Content */}
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {/* Job Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6">{job.description}</p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Tecnologías utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            {/* Job-specific Content */}
            {isProject ? (
              // FiveM Project
              <>
                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Responsabilidades principales:</h4>
                  <div className="space-y-2">
                    {job.responsibilities.map((responsibility, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{responsibility}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Logros destacados:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {job.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-700"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-lg font-bold text-green-600 mb-1">
                          {achievement.metric}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 text-sm">
                          {achievement.description}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // Bot Development
              <>
                {/* Bot Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Tipos de bots desarrollados:</h4>
                  <div className="space-y-4">
                    {job.categories.map((category, i) => {
                      const icons = {
                        'Bot de Moderación Avanzada': Shield,
                        'Bot de Utilidad Multifuncional': Bot,
                        'Bot de Estadísticas y Analytics': Activity,
                        'Sistema de Detección de Amenazas': AlertTriangle
                      };
                      const IconComponent = icons[category.name] || Bot;

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Card className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-blue-500" />
                              </div>
                              <div>
                                <h5 className="font-medium text-gray-900 dark:text-white">{category.name}</h5>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{category.platform}</p>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
            </motion.div>
          </Card>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Experiencia Profesional</h2>
          <p className="section-subtitle">Mi trayectoria profesional en desarrollo de software y automatización</p>
        </div>

        {/* Experience Timeline */}
        <AnimatedSection>
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
        </AnimatedSection>

      </div>
    </section>
  );
}