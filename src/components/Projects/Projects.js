// src/components/Projects/Projects.js
import { motion } from 'framer-motion';
import './Projects.css';

function Projects({ profile }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div className="projects">
      <div className="projects-content">
        <h2 className="section-title">
          <span className="gradient-text">{profile.projects?.title || "Featured Projects"}</span>
        </h2>
        <p className="section-subtitle">Some of my recent work</p>

        <div className="projects-grid">
          {profile.projects?.items.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-image-overlay">
                  <div className="overlay-links">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                        <i className="fas fa-external-link-alt"></i>
                        Live
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                        <i className="fab fa-github"></i>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;