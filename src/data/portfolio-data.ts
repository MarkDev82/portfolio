import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  // Personal Information
  personal: {
    name: "Markel Icedo",
    birthYear: 2006,
    location: "Getxo, País Vasco / Euskadi, España",
    email: "icedo.markel@gmail.com",
    github: "https://github.com/MarkDev82",
    linkedin: "https://www.linkedin.com/in/markel-icedo-1010a5389/",
    title: "Full Stack Developer | Automation Specialist | Bot Developer",
    hero: {
      description: "Estudiante de desarrollo de administracion de sistemas informaticos en red, con pasión por la tecnología y la innovación. Especializado en crear soluciones técnicas complejas, desde desarrollo web full-stack hasta automatización avanzada.",
      tagline: "Mi enfoque combina código limpio, diseño moderno y funcionalidad robusta para transformar ideas en productos digitales impactantes."
    }
  },

  // Education & Goals
  education: {
    current: {
      degree: "Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR)",
      status: "En curso"
    },
    previous: "Bachillerato (Completado - 2024)",
    certifications: {
      completed: [
        {
          name: "Euskera B2",
          year: "2025",
          category: "language"
        },
        {
          name: "Inglés C1",
          year: "2025",
          category: "language"
        }
      ],
      planned: [
        {
          name: "freeCodeCamp Responsive Web Design & JavaScript",
          year: "2025",
          category: "web"
        },
        {
          name: "Meta Front-End Developer (Coursera)",
          year: "2025-2026",
          category: "web"
        },
        {
          name: "ISC2 Certified in Cybersecurity (CC)",
          year: "2026",
          category: "security"
        },
        {
          name: "CompTIA Security+",
          year: "2026",
          category: "security"
        }
      ],
      longTerm: "Máster en Ciberseguridad o Grado Superior en Ciberseguridad (2027-2028)"
    }
  },

  // What I'm looking for in a company
  seekingInCompany: {
    environment: "Ambiente de trabajo innovador y colaborativo donde la tecnología sea el motor del cambio",
    values: [
      "Fomentan el aprendizaje continuo y el desarrollo profesional",
      "Adoptan metodologías ágiles y mejores prácticas de desarrollo",
      "Priorizan la calidad del código y la seguridad",
      "Ofrecen proyectos desafiantes con impacto real",
      "Mantienen una cultura de respeto, diversidad e innovación",
      "Permiten flexibilidad y balance entre vida personal y profesional",
      "Invierten en tecnologías modernas y herramientas de vanguardia"
    ]
  },

  // Technical Skills
  skills: {
    frontend: [
      { name: "HTML5", level: "advanced" },
      { name: "CSS3", level: "advanced" },
      { name: "React", level: "intermediate" },
      { name: "Tailwind CSS", level: "intermediate" }
    ],
    backend: [
      { name: "Node.js", level: "basic" },
      { name: "Express.js", level: "basic" },
      { name: "Python (Flask)", level: "basic" },
      { name: "PHP (Laravel)", level: "basic" }
    ],
    languages: [
      { name: "JavaScript", level: "intermediate" },
      { name: "Python", level: "intermediate" },
      { name: "Lua", level: "advanced" },
      { name: "SQL", level: "intermediate" },
      { name: "C++", level: "basic" },
      { name: "Rust", level: "intermediate" },
      { name: "Kotlin", level: "basic" },
      { name: "Gradle", level: "basic" }
    ],
    databases: [
      { name: "MySQL", level: "intermediate" },
      { name: "PostgreSQL", level: "intermediate" },
      { name: "MongoDB", level: "basic" }
    ],
    miscelaneo: {
      platforms: ["Discord", "Telegram"],
      specialties: [
        "Stresser para redes privadas escrito en Rust para probar la resistencia de aplicaciones web",
        "Probador y creador de contraseñas seguras",
        "Modelo de IA entrenado localmente para tareas cotidianas basado en conversaciones",
        "Aplicaciones Python para automatizar tareas escolares (conversión de bases, ASCII)",
        "Keylogger con encriptación SHA para protección contra amenazas",
        "Analizador de ejecutables con funcionalidad sandbox"
      ],
      frameworks: ["discord.py", "discord.js", "Telethon", "python-telegram-bot"]
    },
    devops: [
      { name: "Git", level: "intermediate" },
      { name: "GitHub", level: "intermediate" },
      { name: "Docker", level: "basic" },
      { name: "Vercel", level: "intermediate" },
      { name: "Heroku", level: "basic" },
      { name: "VPS", level: "intermediate" }
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce de Hardware",
      description: "Página web completa para empresa de distribución de componentes de hardware, con funcionalidad de tienda online y sistema de gestión de inventario.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      complexity: "intermediate",
      features: [
        "Sistema de cambio de idiomas (multi-language support)",
        "Theme switcher (modo claro/oscuro)",
        "Carrito de compras funcional con localStorage",
        "Diseño responsive y optimizado"
      ],
      status: "completed",
      category: "web"
    },
    {
      id: 2,
      title: "Digitalización para Restaurante",
      description: "Propuesta integral de digitalización para restaurante, incluyendo presencia web, sistema de reservas, y análisis de costos con ROI detallado.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      complexity: "intermediate",
      features: [
        "Propuestas de precios realistas y escalables",
        "Planes de implementación con fechas específicas",
        "Gráficos interactivos para visualización de datos",
        "Sistema de reservas simulado",
        "Dashboard con métricas de negocio"
      ],
      status: "completed",
      category: "web"
    },
    {
      id: 3,
      title: "Sistema de Gestión Escolar",
      description: "Herramienta web para automatización de tareas administrativas escolares, incluyendo control de asistencia y gestión de calendario.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React"],
      complexity: "intermediate",
      features: [
        "Organizador de faltas de alumnos con alertas",
        "Automatización de calendario académico",
        "Sistema de notificaciones",
        "Dashboard administrativo"
      ],
      status: "completed",
      category: "web"
    },
    {
      id: 4,
      title: "QuantumTracker",
      description: "Aplicación móvil nativa para Android para el seguimiento de entrenamientos, rutinas y suplementación deportiva, publicada en Google Play Store.",
      technologies: ["Java", "Kotlin", "Gradle", "Android SDK"],
      complexity: "advanced",
      features: [
        "Seguimiento personalizado de entrenamientos",
        "Creación y gestión de rutinas de ejercicio",
        "Registro de suplementación y nutrición",
        "Estadísticas y progreso en tiempo real",
        "Sincronización en la nube"
      ],
      status: "completed",
      category: "mobile"
    },
    {
      id: 5,
      title: "Stresser para Redes Privadas",
      description: "Herramienta escrita en Rust para probar la resistencia de aplicaciones web mediante stress testing en redes privadas, optimizada para máxima velocidad y eficiencia.",
      technologies: ["Rust"],
      complexity: "intermediate",
      features: [
        "Pruebas de carga en redes privadas",
        "Optimización para alto rendimiento",
        "Análisis de resistencia de aplicaciones web"
      ],
      status: "completed",
      category: "miscelaneo"
    },
    {
      id: 6,
      title: "Probador y Creador de Contraseñas Seguras",
      description: "Aplicación para generar y probar la fortaleza de contraseñas, implementando algoritmos de seguridad avanzados.",
      technologies: ["Python"],
      complexity: "basic",
      features: [
        "Generación de contraseñas seguras",
        "Análisis de fortaleza de contraseñas",
        "Algoritmos de encriptación"
      ],
      status: "completed",
      category: "miscelaneo"
    },
    {
      id: 7,
      title: "Modelo de IA Local para Tareas Cotidianas",
      description: "Modelo de inteligencia artificial entrenado para ejecutarse localmente, utilizando el hardware personal para ayudar en tareas sencillas del día a día basado en patrones de conversación.",
      technologies: ["Python", "TensorFlow", "Machine Learning"],
      complexity: "advanced",
      features: [
        "Ejecución local sin dependencias de nube",
        "Entrenamiento basado en conversaciones",
        "Asistencia en tareas cotidianas"
      ],
      status: "completed",
      category: "miscelaneo"
    },
    {
      id: 8,
      title: "Automatización de Tareas Escolares en Python",
      description: "Conjunto de aplicaciones Python para automatizar tareas repetitivas en clase, incluyendo conversión entre bases numéricas y manejo de ASCII.",
      technologies: ["Python"],
      complexity: "basic",
      features: [
        "Conversión binario/hexadecimal/decimal",
        "Traductor y creador de ASCII",
        "Automatización de tareas escolares"
      ],
      status: "completed",
      category: "miscelaneo"
    },
    {
      id: 9,
      title: "Keylogger con Encriptación SHA",
      description: "Modelo de keylogger implementado con encriptación SHA para monitoreo y protección contra amenazas similares.",
      technologies: ["Python", "SHA Encryption"],
      complexity: "intermediate",
      features: [
        "Registro de teclas con encriptación",
        "Protección contra amenazas",
        "Monitoreo seguro"
      ],
      status: "completed",
      category: "miscelaneo"
    },
    {
      id: 10,
      title: "Analizador de Ejecutables con Sandbox",
      description: "Herramienta para analizar ejecutables en un entorno sandbox seguro, detectando posibles amenazas.",
      technologies: ["Python", "Sandbox"],
      complexity: "intermediate",
      features: [
        "Análisis de ejecutables",
        "Entorno sandbox",
        "Detección de amenazas"
      ],
      status: "completed",
      category: "miscelaneo"
    }
  ],

  // Work Experience
  experience: [
    {
      id: 1,
      title: "Lead Developer & Full Stack Developer",
      company: "Servidor FiveM - Proyecto Privado",
      period: "Marzo 2024 - Diciembre 2024",
      type: "project",
      description: "Desarrollo integral de un servidor de roleplay en FiveM (GTA V), gestionando todos los aspectos técnicos, desde la programación de sistemas personalizados hasta la administración de recursos económicos y personal.",
      responsibilities: [
        "Liderazgo técnico completo del proyecto de desarrollo",
        "Gestión de recursos económicos y presupuesto del servidor",
        "Desarrollo de scripts personalizados en Lua",
        "Diseño e implementación de interfaces de usuario (HTML/CSS)",
        "Coordinación y supervisión del equipo de desarrollo",
        "Optimización de rendimiento y solución de problemas críticos",
        "Implementación de sistemas de seguridad y anti-cheat"
      ],
      technologies: ["Lua", "HTML5", "CSS3", "MySQL", "ESX/QBCore"],
      achievements: [
        {
          metric: "30-40 jugadores activos diarios",
          description: "Media constante de jugadores activos"
        },
        {
          metric: "70-100 jugadores concurrentes",
          description: "Picos en momentos de mayor actividad"
        },
        {
          metric: "15+ scripts únicos",
          description: "Scripts funcionales nunca antes vistos en la comunidad"
        }
      ]
    },
    {
      id: 2,
      title: "Bot Developer",
      company: "Múltiples proyectos privados y comunitarios",
      period: "2023 - Presente",
      type: "ongoing",
      technologies: ["Python", "JavaScript", "discord.py", "discord.js", "Telethon", "MongoDB", "PostgreSQL"],
      description: "Desarrollo especializado de bots multifuncionales para plataformas de mensajería, enfocados en automatización, moderación, y mejora de experiencia de usuario en comunidades online.",
      categories: [
        {
          name: "Bot de Moderación Avanzada",
          platform: "Discord",
          technologies: ["Python", "discord.py", "SQLite", "Redis"],
          features: [
            "Sistema de moderación automática con detección de contenido inapropiado",
            "Auto-moderación basada en patrones de comportamiento",
            "Sistema de warnings, mutes y bans temporales/permanentes",
            "Logs detallados de acciones de moderación",
            "Anti-spam y anti-raid protection",
            "Filtro de palabras personalizable con regex"
          ],
          results: {
            servers: "5+",
            users: "2,000",
            reduction: "80% en intervenciones manuales"
          }
        },
        {
          name: "Bot de Utilidad Multifuncional",
          platform: "Discord & Telegram",
          technologies: ["JavaScript (Node.js)", "discord.js", "Telethon", "MongoDB"],
          features: [
            "Comandos de información (clima, conversión de monedas, búsqueda web)",
            "Sistema de recordatorios y eventos",
            "Encuestas interactivas con visualización de resultados",
            "Sistema de niveles y experiencia para usuarios",
            "Gestión de roles automática",
            "Integración con APIs externas"
          ]
        },
        {
          name: "Bot de Estadísticas y Analytics",
          platform: "Discord",
          technologies: ["Python", "discord.py", "PostgreSQL", "Matplotlib", "Pandas"],
          features: [
            "Recopilación de estadísticas de actividad del servidor",
            "Tracking de mensajes, voz, y participación por usuario",
            "Generación de gráficos de actividad",
            "Leaderboards dinámicos",
            "Análisis de horarios de mayor actividad",
            "Exportación de datos en CSV/JSON"
          ]
        },
        {
          name: "Sistema de Detección de Amenazas",
          platform: "Discord & Telegram",
          technologies: ["Python", "scikit-learn", "VirusTotal API", "Google Safe Browsing"],
          features: [
            "Detección de enlaces maliciosos mediante análisis de URL",
            "Identificación de patrones de phishing",
            "Sistema de reputación de usuarios",
            "Detección de cuentas spam mediante ML básico",
            "Alertas en tiempo real a administradores",
            "Cuarentena automática de contenido sospechoso"
          ],
          effectiveness: {
            accuracy: "95% precisión en detección de spam",
            blocked: "200+ intentos de phishing bloqueados",
            reduction: "90% reducción en incidentes de seguridad"
          }
        }
      ],
      generalAchievements: [
        {
          metric: "12+ bots desarrollados",
          description: "Desde cero"
        },
        {
          metric: "8,000+ usuarios totales",
          description: "Servidos activamente"
        },
        {
          metric: "15+ comunidades",
          description: "Gestionadas activamente"
        },
        {
          metric: "99.8% uptime",
          description: "Promedio en todos los bots en producción"
        }
      ]
    }
  ],

  // Contact & CTA
  contact: {
    finalMessage: "¿Listo para crear algo extraordinario? Ya sea que necesites un desarrollador full-stack para tu equipo, un bot personalizado para tu comunidad, o una aplicación web que destaque, estoy aquí para convertir ideas en realidad. Hablemos sobre cómo puedo contribuir a tu próximo proyecto.",
    cta: {
      primary: "Contáctame",
      secondary: "Ver GitHub",
      tertiary: "Descargar CV"
    }
  }
};