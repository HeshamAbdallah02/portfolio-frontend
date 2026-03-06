// src/App.js
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import AboutSkills from './components/AboutSkills/AboutSkills';
import Experience from './components/Experience/Experience';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import API_BASE_URL from './config/api.config';
import './App.css';

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/profile`);
        setProfile(response.data);

        // Set theme variables
        if (response.data.theme) {
          document.documentElement.style.setProperty('--primary-color', response.data.theme.primaryColor);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="loading-screen">
        <div className="loading-logo">H</div>
        <div className="loading-spinner"></div>
        <div className="loading-text">Loading</div>
      </div>
    );
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <AnimatePresence>
      <div className="App">
        <Header />
        <main>
          {/* 1. Hero — First impression */}
          <section id="home">
            <Hero profile={profile} />
          </section>

          {/* 2. Work — Lead with impact */}
          <motion.section
            id="work"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Projects profile={profile} />
          </motion.section>

          {/* 3. About + Skills — Who I am & what I use */}
          <motion.section
            id="about"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <AboutSkills profile={profile} />
          </motion.section>

          {/* 4. Experience — Timeline journey */}
          <motion.section
            id="experience"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Experience profile={profile} />
          </motion.section>

          {/* 5. CTA — Direct action */}
          <motion.section
            id="contact"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <CTA profile={profile} />
          </motion.section>

          <Footer profile={profile} />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;