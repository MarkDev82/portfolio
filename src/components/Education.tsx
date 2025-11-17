import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Star, 
  Target, 
  BookOpen, 
  Clock,
  CheckCircle2,
  Zap
} from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { portfolioData } from '../data/portfolio-data';

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Educación y Desarrollo</h2>
          <p className="section-subtitle">Mi trayectoria académica y plan de crecimiento profesional</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Formación Académica</h3>
              
              {/* Current Education */}
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-700">
                <div className="max-w-2xl">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white max-w-lg">{education.current.degree}</h4>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                          {education.current.status}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Enfocado en administración de sistemas, redes y ciberseguridad. 
                        Aprendiendo las bases técnicas que complementan mi experiencia en desarrollo.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Previous Education */}
              <Card className="p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle2 className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{education.previous}</h4>
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        Completado
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Base sólida que me permitió desarrollar habilidades de análisis y resolución de problemas.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Completed Certifications */}
              {education.certifications.completed.map((cert, index) => (
                <motion.div
                  key={`completed-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                        <CheckCircle2 className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                            Completado
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
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
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Plan de Certificaciones</h3>
              
              {/* Next Year Certifications */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4 text-indigo-500">Próximas Certificaciones (2025)</h4>
                {education.certifications.planned.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6">
                      <div className="flex items-start mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                            <Award className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Planificado para {cert.year}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
                
                {/* Future Objectives */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4 text-indigo-900 dark:text-indigo-300">Objetivos Futuros</h3>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: education.certifications.planned.length * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                            <Star className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">{education.certifications.longTerm}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Opciones para el futuro</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Goals Section */}
        {education.goals && (
          <AnimatedSection delay={0.5} className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <div className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-indigo-200" />
                <h3 className="text-2xl font-bold mb-4">Mi Visión Profesional</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-2 text-indigo-100">Objetivo Profesional</h4>
                    <p className="text-indigo-100">{education.goals.professional}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-indigo-100">Meta Principal</h4>
                    <p className="text-indigo-100">{education.goals.objective}</p>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};