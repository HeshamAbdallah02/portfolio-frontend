// src/components/AboutSkills/AboutSkills.js
import { motion } from 'framer-motion';
import './AboutSkills.css';

function AboutSkills({ profile }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
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
                                src={profile.about?.imageUrl || "/images/profile.jpg"}
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

                    <motion.div 
                        className="as-skills-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {profile.skills?.categories.map((category, index) => (
                            <motion.div
                                key={index}
                                className="as-skill-card"
                                variants={itemVariants}
                            >
                                <h4 className="as-card-title">{category.name}</h4>
                                <div className="as-skill-list">
                                    {category.items.map((skill, skillIndex) => (
                                        <motion.div 
                                            key={skillIndex} 
                                            className="as-skill-item"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            <div className="as-skill-icon">
                                                <i className={skill.icon}></i>
                                            </div>
                                            <span>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ---- Stats ---- */}
                <motion.div 
                    className="as-stats"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {[
                        { number: '3+', label: 'Projects Built', icon: 'fas fa-rocket' },
                        { number: '1+', label: 'Year Experience', icon: 'fas fa-calendar-check' },
                        { number: '10+', label: 'Technologies', icon: 'fas fa-code' },
                        { number: '100%', label: 'Passion', icon: 'fas fa-heart' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            className="as-stat"
                            variants={itemVariants}
                        >
                            <i className={stat.icon}></i>
                            <span className="as-stat-number">{stat.number}</span>
                            <span className="as-stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default AboutSkills;
