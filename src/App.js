// src/App.js
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import AboutSkills from './components/AboutSkills/AboutSkills';
import Experience from './components/Experience/Experience';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import profileData from './data/profileData';
import './App.css';

// Apply theme colour once at module evaluation time
if (profileData.theme?.primaryColor) {
  document.documentElement.style.setProperty('--primary-color', profileData.theme.primaryColor);
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

function App() {
  return (
    <AnimatePresence>
      <div className="App">
        <Header />
        <main>
          {/* 1. Hero — First impression */}
          <section id="home">
            <Hero profile={profileData} />
          </section>

          {/* 2. Work — Lead with impact */}
          <motion.section
            id="work"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Projects profile={profileData} />
          </motion.section>

          {/* 3. About + Skills — Who I am & what I use */}
          <motion.section
            id="about"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <AboutSkills profile={profileData} />
          </motion.section>

          {/* 4. Experience — Timeline journey */}
          <motion.section
            id="experience"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Experience profile={profileData} />
          </motion.section>

          {/* 5. CTA — Direct action */}
          <motion.section
            id="contact"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <CTA profile={profileData} />
          </motion.section>

          <Footer profile={profileData} />
        </main>
        <BackToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;