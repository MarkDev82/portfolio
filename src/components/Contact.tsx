import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  ExternalLink
} from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { Button } from './shared/Button';
import { portfolioData } from '../data/portfolio-data';

export const Contact = () => {
  const { personal } = portfolioData;

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'blue',
      description: 'Respuesta en 24-48 horas'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@MarkDev82',
      href: personal.github,
      color: 'gray',
      description: 'Revisa mi código y proyectos'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Markel Icedo',
      href: personal.linkedin,
      color: 'blue',
      description: 'Conexión profesional'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: personal.location,
      href: null,
      color: 'green',
      description: 'Disponible para trabajo remoto'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">Estoy abierto a oportunidades, colaboraciones y cualquier conversación interesante sobre desarrollo.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Hablemos</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                La forma más rápida de contactarme es por email. También puedes encontrarme en GitHub y LinkedIn.
              </p>
               
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-6 hover:shadow-lg">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                            method.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20' :
                            method.color === 'gray' ? 'bg-gray-50 dark:bg-gray-800' :
                            method.color === 'green' ? 'bg-green-50 dark:bg-green-900/20' : 'bg-gray-50 dark:bg-gray-800'
                          }`}>
                            <IconComponent className={`w-6 h-6 ${
                              method.color === 'blue' ? 'text-blue-500' :
                              method.color === 'gray' ? 'text-gray-500' :
                              method.color === 'green' ? 'text-green-500' : 'text-gray-500'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white">{method.label}</h4>
                            <p className="text-gray-700 dark:text-gray-300 font-medium">{method.value}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{method.description}</p>
                          </div>
                          {method.href && (
                            <a
                              href={method.href}
                              target={method.href.startsWith('http') ? '_blank' : '_self'}
                              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-blue-500 hover:text-blue-600 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Quick Actions */}
              <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Acciones Rápidas</h4>
                <div>
                  <Button
                    href={`mailto:${personal.email}?subject=Oportunidad de Trabajo&body=Hola Markel,%0D%0A%0D%0AMe gustaría conversar contigo sobre una oportunidad...`}
                    variant="primary"
                    icon={Mail}
                    className="w-full justify-center"
                  >
                    Enviar Email Directo
                  </Button>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
