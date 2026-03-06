// src/components/AboutSkills/AboutSkills.js
import { motion } from 'framer-motion';
import './AboutSkills.css';

function AboutSkills({ profile }) {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        })
    };

    return (
        <div className="about-skills">
            <div className="about-skills-content">
                {/* ---- Who I Am ---- */}
                <div className="as-intro">
                    <motion.div
                        className="as-text-block"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="as-label">Who I Am</span>
                        <h2 className="as-heading">
                            <span className="gradient-text">{profile.about?.title || "About Me"}</span>
                        </h2>
                        <p>{profile.about?.mainText || "As a fresh graduate in Computer Science, I've discovered my passion for web development during my academic journey. I love turning complex problems into simple, beautiful, and intuitive solutions."}</p>
                        <p>{profile.about?.secondaryText || "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts."}</p>

                        <div className="as-social-links">
                            {profile.socialLinks?.github && (
                                <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="as-social-btn">
                                    <i className="fab fa-github"></i>
                                </a>
                            )}
                            {profile.socialLinks?.linkedin && (
                                <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="as-social-btn">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            )}
                            {profile.socialLinks?.whatsapp && (
                                <a href={profile.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="as-social-btn">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        className="as-image-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="as-image-frame">
                            <img
                                src={profile.about?.imageUrl || "http://localhost:5000/images/profile.jpg"}
                                alt={profile.name}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* ---- Toolkit (Skills) ---- */}
                <div className="as-toolkit">
                    <motion.div
                        className="as-toolkit-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="as-label">My Toolkit</span>
                        <h3 className="as-subheading">Technologies & tools I work with</h3>
                    </motion.div>

                    <div className="as-skills-grid">
                        {profile.skills?.categories.map((category, index) => (
                            <motion.div
                                key={index}
                                className="as-skill-card"
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h4 className="as-card-title">{category.name}</h4>
                                <div className="as-skill-list">
                                    {category.items.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="as-skill-item">
                                            <div className="as-skill-icon">
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

                {/* ---- Stats ---- */}
                <div className="as-stats">
                    {[
                        { number: '3+', label: 'Projects Built', icon: 'fas fa-rocket' },
                        { number: '1+', label: 'Year Experience', icon: 'fas fa-calendar-check' },
                        { number: '10+', label: 'Technologies', icon: 'fas fa-code' },
                        { number: '100%', label: 'Passion', icon: 'fas fa-heart' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="as-stat"
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <i className={stat.icon}></i>
                            <span className="as-stat-number">{stat.number}</span>
                            <span className="as-stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutSkills;
