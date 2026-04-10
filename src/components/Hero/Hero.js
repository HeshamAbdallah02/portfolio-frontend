// src/components/Hero/Hero.js
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero({ profile }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to allow the page to render first
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const greeting = profile.hero?.greeting || "Hi, I'm";
  const fullName = profile.name || "Hesham Abdallah";
  const words = `${greeting} ${fullName}`.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="hero">
      {/* Floating Orbs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>
      <div className="hero-orb hero-orb-3"></div>

      <div className="hero-content">
        {/* Status Badge */}
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="badge-dot"></span>
          Open to Work
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          className="hero-heading"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {words.map((word, index) => {
            const isName = index >= greeting.split(' ').length;
            return (
              <motion.span
                key={index}
                variants={wordVariants}
                className={isName ? 'hero-name' : ''}
              >
                {word}{' '}
              </motion.span>
            );
          })}
        </motion.h1>

        {/* Title */}
        <motion.h2
          className="hero-title"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 0.8 }}
        >
          {profile.title}
        </motion.h2>

        {/* Introduction */}
        <motion.p
          className="hero-description"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 1.0 }}
        >
          {profile.introduction}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="hero-buttons"
          variants={fadeUpVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 1.2 }}
        >
          <a href="#work" className="hero-btn hero-btn-primary">
            {profile.ctaText || "See My Work"}
            <span className="btn-icon">→</span>
          </a>
          <a href="#contact" className="hero-btn hero-btn-secondary">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="mouse">
          <div className="mouse-wheel"></div>
        </div>
        <span>Scroll</span>
      </motion.div>

      {/* Decorative Wave Divider */}
      <div className="hero-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C49.1,10.15,103.77,21.72,157,28,210.14,34.27,263.39,37.3,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;