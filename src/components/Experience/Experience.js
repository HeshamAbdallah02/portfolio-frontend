// src/components/Experience/Experience.js
import { motion } from 'framer-motion';
import './Experience.css';

function Experience({ profile }) {
    // Default timeline entries if not provided by backend
    const timeline = profile.experience?.items || [
        {
            year: '2024',
            title: 'Computer Science Graduate',
            organization: 'University',
            description: 'Graduated with a degree in Computer Science. Focused on web development, software engineering, and database systems.',
            type: 'education',
            icon: 'fas fa-graduation-cap'
        },
        {
            year: '2024',
            title: 'E7GEZLY Mobile App',
            organization: 'Team Project',
            description: 'Built the backend server and web dashboard for E7GEZLY — a PlayStation booking app using Node.js and Firebase.',
            type: 'project',
            icon: 'fas fa-mobile-alt'
        },
        {
            year: '2025',
            title: 'Full-Stack Portfolio',
            organization: 'Personal Project',
            description: 'Designed and developed a fully customizable MERN stack portfolio with admin dashboard, dynamic theming, and cloud deployment.',
            type: 'project',
            icon: 'fas fa-code'
        },
        {
            year: '2025',
            title: 'Open to Opportunities',
            organization: 'Next Chapter',
            description: 'Actively seeking web development roles. Passionate about building beautiful, high-performance applications that solve real problems.',
            type: 'milestone',
            icon: 'fas fa-rocket'
        }
    ];

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        })
    };

    return (
        <div className="experience">
            <div className="experience-content">
                <motion.div
                    className="experience-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="exp-label">My Journey</span>
                    <h2 className="section-title">
                        <span className="gradient-text">{profile.experience?.title || "Experience"}</span>
                    </h2>
                    <p className="section-subtitle">The path that shaped me as a developer</p>
                </motion.div>

                <div className="timeline">
                    <div className="timeline-line"></div>
                    {timeline.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="timeline-dot">
                                <i className={item.icon}></i>
                            </div>
                            <div className="timeline-card">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <span className="timeline-org">{item.organization}</span>
                                <p className="timeline-desc">{item.description}</p>
                                <span className={`timeline-type timeline-type-${item.type}`}>
                                    {item.type}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
