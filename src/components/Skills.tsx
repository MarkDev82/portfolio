import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder } from 'lucide-react';
import { siJavascript, siPython, siLua, siSqlite, siRust, siGo, siKotlin, siNodedotjs, siExpress, siFastapi, siOpenjdk, siGit, siGithub, siDocker, siKubernetes, siPrometheus, siGrafana, siVercel, siUbuntu } from 'simple-icons';
import { AnimatedSection } from './shared/AnimatedSection';
import { portfolioData } from '../data/portfolio-data';

type SkillLevel = 'basic' | 'intermediate' | 'advanced';

const LEVEL_LABEL: Record<SkillLevel, string> = {
  basic: 'Base',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
};

const levelDots = (level: SkillLevel) => {
  const value = level === 'advanced' ? 3 : level === 'intermediate' ? 2 : 1;
  return Array.from({ length: 3 }, (_, i) => i < value);
};

// Custom Loki SVG (not in simple-icons) — simplified mark from Grafana Labs
const LOKI_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 2h2.5v14H3V2zm5.5 0H11v10.5H8.5V2zM13 2h2.5v7H13V2zm5.5 0H21v3.5h-2.5V2zM3 17.5h18v2.5H3v-2.5zm3.5-2h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm6.5-2h2v2h-2v-2zM6.5 13.5h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>`;

const ICONS: Record<string, { svg: string; title: string }> = {
  'JavaScript': { svg: siJavascript.svg, title: 'JavaScript' },
  'Python': { svg: siPython.svg, title: 'Python' },
  'Lua': { svg: siLua.svg, title: 'Lua' },
  'SQL': { svg: siSqlite.svg, title: 'SQL' },
  'Rust': { svg: siRust.svg, title: 'Rust' },
  'Go': { svg: siGo.svg, title: 'Go' },
  'Kotlin': { svg: siKotlin.svg, title: 'Kotlin' },
  'Node.js': { svg: siNodedotjs.svg, title: 'Node.js' },
  'Express.js': { svg: siExpress.svg, title: 'Express.js' },
  'FastAPI (Python)': { svg: siFastapi.svg, title: 'FastAPI' },
  'Java': { svg: siOpenjdk.svg, title: 'Java' },
  'Git': { svg: siGit.svg, title: 'Git' },
  'GitHub': { svg: siGithub.svg, title: 'GitHub' },
  'Docker': { svg: siDocker.svg, title: 'Docker' },
  'Kubernetes': { svg: siKubernetes.svg, title: 'Kubernetes' },
  'Prometheus': { svg: siPrometheus.svg, title: 'Prometheus' },
  'Grafana': { svg: siGrafana.svg, title: 'Grafana' },
  'Loki': { svg: LOKI_SVG, title: 'Loki' },
  'Vercel': { svg: siVercel.svg, title: 'Vercel' },
  'VPS': { svg: siUbuntu.svg, title: 'Ubuntu' },
};

const FallbackIcon = ({ label }: { label: string }) => (
  <div className="w-10 h-10 flex items-center justify-center border border-neutral-700 text-neutral-400 text-xs font-mono">
    {label.slice(0, 2).toUpperCase()}
  </div>
);

const SkillBadge = ({ name, level, highlighted }: { name: string; level: SkillLevel; highlighted?: boolean }) => {
  const icon = ICONS[name];
  const dots = levelDots(level);

  return (
    <motion.div
      className="group relative bg-surface-2 border border-border p-4 flex items-center gap-3 hover:border-neutral-600 transition-colors duration-300"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="w-10 h-10 flex items-center justify-center border border-neutral-800 bg-black/30">
        {icon ? (
          <span
            className="skill-icon w-6 h-6 block text-neutral-200"
            aria-label={icon.title}
            role="img"
            dangerouslySetInnerHTML={{ __html: icon.svg }}
          />
        ) : (
          <FallbackIcon label={name} />
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-medium tracking-tight">{name}</span>
              {highlighted && (
                <span className="text-[9px] font-mono tracking-wider uppercase text-white bg-white/10 px-1.5 py-0.5 border border-white/20">
                  NEW
                </span>
              )}
            </div>
            <div className="text-neutral-500 text-[10px] font-mono uppercase tracking-[0.25em] mt-1">
              {LEVEL_LABEL[level]}
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            {dots.map((filled, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  filled ? 'bg-white' : 'bg-neutral-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const { skills } = portfolioData;

  const core = skills.languages;
  const build = skills.backend;
  const systems = skills.devops;

  const categories = [
    { title: 'Languages', description: 'Lenguajes de programación y fundamentos.', items: core, highlighted: [] as string[] },
    { title: 'Backend', description: 'Frameworks y tooling para construir producto.', items: build, highlighted: ['FastAPI (Python)', 'Java'] },
    { title: 'DevOps', description: 'Control de versiones, infraestructura y despliegue.', items: systems, highlighted: [] as string[] },
  ];

  const [openFolder, setOpenFolder] = useState<string | null>('Languages');

  const handleToggle = useCallback((title: string) => {
    setOpenFolder(prev => prev === title ? null : title);
  }, []);

  return (
    <section id="skills" className="py-24 sm:py-28 bg-surface-1">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="mb-14 sm:mb-16">
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
              Tecnologías agrupadas por función y uso real.
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

        <div className="space-y-3">
          {categories.map((category) => (
            <FolderSection
              key={category.title}
              category={category}
              isOpen={openFolder === category.title}
              onToggle={() => handleToggle(category.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FolderSection = ({ category, isOpen, onToggle }: { category: { title: string; description: string; items: { name: string; level?: string }[]; highlighted: string[] }; isOpen: boolean; onToggle: () => void }) => {
  return (
    <motion.div
      className="border border-border bg-surface-2"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface-3 transition-colors duration-300"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <Folder className="w-4 h-4 text-neutral-500" />
          <div>
            <div className="text-white text-sm font-medium tracking-tight">
              {category.title}
            </div>
            <div className="text-neutral-600 text-xs font-mono mt-1">
              {category.description}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-neutral-600 text-[10px] font-mono">
            {category.items.length} items
          </span>
          <motion.span
            className="text-neutral-500 text-xs"
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▸
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pt-2 pb-5">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {category.items.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level as SkillLevel}
                    highlighted={category.highlighted.includes(skill.name)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
