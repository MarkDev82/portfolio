import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, MapPin, Calendar, User, Award, Star } from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { portfolioData } from '../data/portfolio-data';

export const About = () => {
  const { personal, education, seekingInCompany } = portfolioData;
  
  // Calculate current age considering birth month and day
  const calculateCurrentAge = () => {
    const today = new Date();
    const birthDate = new Date(personal.birthYear, 6, 28); // July is month 6 (0-indexed)
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    
    let age = currentYear - personal.birthYear;
    
    // If birthday hasn't occurred this year yet, subtract 1
    if (currentMonth < 6 || (currentMonth === 6 && currentDay < 28)) {
      age--;
    }
    
    return age;
  };
  
  const currentAge = calculateCurrentAge();

  const infoCards = [
    {
      icon: User,
      title: "Sobre mí",
      content: `${currentAge} Años | Estudiante apasionado por la tecnología y la innovación.`,
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: personal.location,
      color: "green"
    },
    {
      icon: GraduationCap,
      title: "Estudios Actuales",
      content: `${education.current.degree} - ${education.current.status}`,
      color: "purple"
    },
    {
      icon: Calendar,
      title: "Estudios Previos",
      content: education.previous,
      color: "orange"
    }
  ];

  const getIconColor = (color) => {
    const colors = {
      blue: "text-blue-500 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20",
      green: "text-green-500 bg-green-50 dark:text-green-400 dark:bg-green-900/20",
      purple: "text-purple-500 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/20",
      orange: "text-orange-500 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">Conoce más sobre mi trasfondo, objetivos y lo que busco en mi próxima oportunidad profesional</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image and Basic Info */}
          <AnimatedSection direction="left">
            <div className="text-center lg:text-left">
              {/* Profile Image */}
              <motion.div
                className="w-48 h-48 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4),0_16px_48px_-12px_rgba(0,0,0,0.3)]"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/FotoPersonal.png"
                  alt="Markel Icedo"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Basic Info Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoCards.map((card, index) => {
                  const IconComponent = card.icon;
                  return (
                    <Card key={index} delay={index * 0.1} className="p-4">
                      <div className={`w-12 h-12 rounded-lg ${getIconColor(card.color)} flex items-center justify-center mb-3`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{card.content}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Professional Goals and Values */}
          <AnimatedSection direction="right" className="space-y-8">
            {/* Professional Goals */}
            {education.goals && (
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Objetivos Profesionales</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{education.goals.professional}</p>
                <p className="text-gray-700 dark:text-gray-200 font-medium">{education.goals.objective}</p>
              </Card>
            )}

            {/* What I'm Looking For */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-purple-500 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Lo Que Busco</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{seekingInCompany.environment}</p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Valores importantes para mí:</h4>
                <div className="grid gap-2">
                  {seekingInCompany.values.map((priority, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{priority}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Future Certifications */}
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-green-500 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Certificaciones Planificadas</h3>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">Próximas certificaciones (2025):</h4>
                {education.certifications.planned.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{cert.name} ({cert.year})</span>
                  </motion.div>
                ))}
                
                <h4 className="font-medium text-gray-800 dark:text-gray-200 mt-4 mb-3">Objetivos futuros:</h4>
                <motion.div
                  className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: education.certifications.planned.length * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{education.certifications.longTerm}</span>
                </motion.div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};