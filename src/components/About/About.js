// src/components/About/About.js
import { motion } from 'framer-motion';
import './About.css';

function About({ profile }) {
  const stats = [
    { number: '3+', label: 'Projects', icon: 'fas fa-code' },
    { number: '1+', label: 'Years Experience', icon: 'fas fa-calendar' },
    { number: '5+', label: 'Technologies', icon: 'fas fa-layer-group' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div className="about">
      <div className="about-content">
        <h2 className="section-title">
          <span className="gradient-text">{profile.about?.title || "About Me"}</span>
        </h2>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>{profile.about?.mainText || "As a fresh graduate in Computer Science, I've discovered my passion for web development during my academic journey. I love turning complex problems into simple, beautiful, and intuitive solutions."}</p>
            <p>{profile.about?.secondaryText || "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts."}</p>

            <div className="social-links">
              {profile.socialLinks?.github && (
                <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link-btn">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {profile.socialLinks?.linkedin && (
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link-btn">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
            </div>
          </motion.div>

          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-frame">
              <img
                src={profile.about?.imageUrl || "http://localhost:5000/images/profile.jpg"}
                alt={profile.name}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <i className={stat.icon}></i>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;