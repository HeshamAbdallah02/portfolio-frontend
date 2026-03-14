// src/components/Projects/Projects.js
import { motion } from 'framer-motion';
import './Projects.css';

function Projects({ profile }) {
  const projects = profile.projects?.items || [];
  const featured = projects[0]; // First project gets the spotlight
  const rest = projects.slice(1);

  return (
    <div className="projects">
      <div className="projects-content">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="projects-label">My Work</span>
          <h2 className="section-title">
            <span className="gradient-text">{profile.projects?.title || "Featured Projects"}</span>
          </h2>
          <p className="section-subtitle">Real projects, real problems, real solutions</p>
        </motion.div>

        {/* ---- Featured Project Spotlight ---- */}
        {featured && (
          <motion.div
            className="featured-project"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="featured-image">
              <img src={featured.image} alt={featured.title} />
              <div className="featured-badge">
                <i className="fas fa-star"></i> Featured
              </div>
            </div>
            <div className="featured-info">
              <span className="featured-role">
                <i className="fas fa-user-tie"></i> {featured.role || 'Developer'}
              </span>
              <h3>{featured.title}</h3>

              <div className="story-block">
                <div className="story-item">
                  <span className="story-label">The Challenge</span>
                  <p>{featured.challenge}</p>
                </div>
                <div className="story-item">
                  <span className="story-label">The Outcome</span>
                  <p>{featured.outcome}</p>
                </div>
              </div>

              <div className="featured-tech">
                {featured.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="featured-actions">
                {featured.liveLink && (
                  <a href={featured.liveLink} target="_blank" rel="noopener noreferrer" className="action-btn action-primary">
                    <i className="fas fa-external-link-alt"></i>
                    View Live
                  </a>
                )}
                {featured.githubLink && (
                  <a href={featured.githubLink} target="_blank" rel="noopener noreferrer" className="action-btn action-secondary">
                    <i className="fab fa-github"></i>
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* ---- Other Projects ---- */}
        {rest.length > 0 && (
          <div className="other-projects">
            <h3 className="other-projects-title">Other Projects</h3>
            <div className="projects-grid">
              {rest.map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card"
                  custom={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="card-top">
                    <span className="card-emoji">{project.emoji || '🚀'}</span>
                    <div className="card-links">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="View Live">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="Source Code">
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="card-title">{project.title}</h4>
                  <span className="card-role">{project.role || 'Developer'}</span>
                  <p className="card-desc">{project.description}</p>

                  <div className="card-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;