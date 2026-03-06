// src/components/Skills/Skills.js
import { motion } from 'framer-motion';
import './Skills.css';

function Skills({ profile }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div className="skills">
      <div className="skills-content">
        <h2 className="section-title">
          <span className="gradient-text">{profile.skills?.title || "My Skills"}</span>
        </h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="skills-grid">
          {profile.skills?.categories.map((category, index) => (
            <motion.div
              key={index}
              className="skills-category"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-icon-wrapper">
                      <i className={skill.icon}></i>
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;