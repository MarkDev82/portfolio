import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, MapPin, Calendar, User, Award, Star } from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { StarField } from './shared/StarField';
import { Cross } from './shared/Cross';
import { portfolioData } from '../data/portfolio-data';

export const About = () => {
  const { personal, education, seekingInCompany } = portfolioData;
  
  const calculateCurrentAge = () => {
    const today = new Date();
    const birthDate = new Date(personal.birthYear, 6, 28);
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    
    let age = currentYear - personal.birthYear;
    
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
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: personal.location,
    },
    {
      icon: GraduationCap,
      title: "Estudios Actuales",
      content: `${education.current.degree} - ${education.current.status}`,
    },
    {
      icon: Calendar,
      title: "Estudios Previos",
      content: education.previous,
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-black overflow-hidden">
      {/* Subtle star field */}
      <StarField count={30} />
      
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
              01 / Sobre Mí
            </motion.span>
            <motion.h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Contexto
            </motion.h2>
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

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-start">
          {/* Left: Info Cards */}
          <AnimatedSection direction="left">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {infoCards.map((card, index) => {
                const IconComponent = card.icon;
                return (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    whileHover={{ 
                      boxShadow: '0 0 30px rgba(255, 255, 255, 0.08)',
                      borderColor: 'rgba(255, 255, 255, 0.15)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-6 h-full group">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="relative"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300" />
                          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 blur-md rounded-full scale-150 transition-all duration-300" />
                        </motion.div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">{card.title}</span>
                      </div>
                      <p className="text-neutral-300 text-sm leading-[1.7]">{card.content}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatedSection>

          {/* Right: Professional Goals and Values */}
          <AnimatedSection direction="right" className="space-y-8">
            {/* Professional Goals */}
            {education.goals && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  boxShadow: '0 0 30px rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.15)'
                }}
              >
                <Card className="p-7 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                      <Target className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 blur-md rounded-full scale-150 transition-all duration-300" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">Objetivos Profesionales</span>
                  </div>
                  {education.goals.professional && (
                    <p className="text-neutral-400 mb-5 text-sm leading-[1.7]">{education.goals.professional}</p>
                  )}
                  <p className="text-white font-medium text-base leading-relaxed">{education.goals.objective}</p>
                </Card>
              </motion.div>
            )}

            {/* What I'm Looking For */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.15)'
              }}
            >
              <Card className="p-7 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <Heart className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 blur-md rounded-full scale-150 transition-all duration-300" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">Lo Que Busco</span>
                </div>
                <p className="text-neutral-400 mb-6 text-sm leading-[1.7]">{seekingInCompany.environment}</p>
                
                <div>
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-5">Valores importantes</h4>
                  <div className="space-y-3">
                    {seekingInCompany.values.map((priority, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="mt-1 flex-shrink-0"
                          whileHover={{ scale: 1.3, rotate: 45 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Cross size={8} color="#525252" />
                        </motion.div>
                        <p className="text-neutral-400 text-sm leading-[1.7]">{priority}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Future Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.15)'
              }}
            >
              <Card className="p-7 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 blur-md rounded-full scale-150 transition-all duration-300" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 group-hover:text-neutral-400 transition-colors duration-300">Certificaciones Planificadas</span>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mb-4">Próximas certificaciones (2025)</h4>
                  {education.certifications.planned.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-surface-3 border border-border group/item"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.06, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        x: 4,
                        boxShadow: '0 0 20px rgba(255, 255, 255, 0.06)',
                        borderColor: 'rgba(255, 255, 255, 0.12)'
                      }}
                    >
                      <div className="relative">
                        <Award className="w-3.5 h-3.5 text-neutral-600 group-hover/item:text-neutral-400 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-white/0 group-hover/item:bg-white/10 blur-sm rounded-full scale-150 transition-all duration-300" />
                      </div>
                      <span className="text-sm text-neutral-300 group-hover/item:text-neutral-100 transition-colors duration-300">{cert.name} ({cert.year})</span>
                    </motion.div>
                  ))}
                  
                  <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600 mt-6 mb-4">Objetivos futuros</h4>
                  <motion.div
                    className="flex items-center gap-3 p-4 bg-surface-3 border border-border group/item"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      x: 4,
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.06)',
                      borderColor: 'rgba(255, 255, 255, 0.12)'
                    }}
                  >
                    <div className="relative">
                      <Star className="w-3.5 h-3.5 text-neutral-600 group-hover/item:text-neutral-400 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-white/0 group-hover/item:bg-white/10 blur-sm rounded-full scale-150 transition-all duration-300" />
                    </div>
                    <span className="text-sm text-neutral-300 group-hover/item:text-neutral-100 transition-colors duration-300">{education.certifications.longTerm}</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
