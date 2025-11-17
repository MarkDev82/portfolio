import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  MapPin, 
  Phone,
  Download,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import { Card } from './shared/Card';
import { AnimatedSection } from './shared/AnimatedSection';
import { Button } from './shared/Button';
import { portfolioData } from '../data/portfolio-data';

export const Contact = () => {
  const { personal, contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

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

  const getStatusIcon = () => {
    switch (formStatus) {
      case 'sending': return Clock;
      case 'success': return CheckCircle;
      case 'error': return AlertCircle;
      default: return Send;
    }
  };

  const getStatusColor = () => {
    switch (formStatus) {
      case 'sending': return 'text-blue-500';
      case 'success': return 'text-green-500';
      case 'error': return 'text-red-500';
      default: return 'text-white';
    }
  };

  const getStatusMessage = () => {
    switch (formStatus) {
      case 'sending': return 'Enviando mensaje...';
      case 'success': return '¡Mensaje enviado con éxito!';
      case 'error': return 'Error al enviar. Inténtalo de nuevo.';
      default: return 'Enviar Mensaje';
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Información de Contacto</h3>
              
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  const isDisabled = (method as any).disabled || false;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className={`p-6 ${isDisabled ? 'opacity-60' : 'hover:shadow-lg'}`}>
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
                          {method.href && !isDisabled && (
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
                <div className="space-y-3">
                  <Button
                    href={`mailto:${personal.email}?subject=Oportunidad de Trabajo&body=Hola Markel,%0D%0A%0D%0AMe gustaría conversar contigo sobre una oportunidad...`}
                    variant="primary"
                    icon={Mail}
                    className="w-full justify-center"
                  >
                    Enviar Email Directo
                  </Button>
                  <Button
                    variant="ghost"
                    icon={Download}
                    className="w-full justify-center"
                    onClick={() => alert('CV disponible próximamente')}
                  >
                    Descargar CV (Próximamente)
                  </Button>
                </div>
              </Card>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Envíame un Mensaje</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                    placeholder="¿De qué quieres hablar?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Cuéntame sobre tu proyecto, oportunidad o cualquier pregunta que tengas..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={!isFormValid || formStatus === 'sending'}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
                    !isFormValid || formStatus === 'sending'
                      ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                      : formStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : formStatus === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white transform hover:scale-105'
                  }`}
                  whileHover={isFormValid && formStatus === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={isFormValid && formStatus === 'idle' ? { scale: 0.98 } : {}}
                >
                  {React.createElement(getStatusIcon(), { 
                    className: `w-5 h-5 ${getStatusColor()} ${formStatus === 'sending' ? 'animate-spin' : ''}`
                  })}
                  <span>{getStatusMessage()}</span>
                </motion.button>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      ¡Gracias por tu mensaje! Te responderé lo antes posible.
                    </p>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente por email.
                    </p>
                  </motion.div>
                )}
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};