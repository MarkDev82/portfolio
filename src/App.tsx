import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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
    <div className="App bg-black text-white min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navigation />
          <main>
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
            <SectionDivider />
            <div id="projects">
              <Projects />
            </div>
            <SectionDivider />
            <div id="experience">
              <Experience />
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
  );
}

export default App;
