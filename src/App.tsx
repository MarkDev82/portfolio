import { useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { SectionDivider } from './components/shared/SectionDivider';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MotionConfig reducedMotion="user">
    <div className="App bg-black text-white min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[110] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
          >
            Saltar al contenido
          </a>
          <Navigation />
          <main id="main">
            <div id="hero">
              <Hero />
            </div>
            <SectionDivider />
            <div id="education">
              <Education />
            </div>
            <SectionDivider />
            <div id="skills">
              <Skills />
            </div>
            <SectionDivider className="bg-surface-1" />
            <div id="experience">
              <Experience />
            </div>
            <SectionDivider />
            <div id="projects">
              <Projects />
            </div>
            <SectionDivider />
            <div id="contact">
              <Contact />
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
    </MotionConfig>
  );
}

export default App;
