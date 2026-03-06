// src/components/CTA/CTA.js
import { motion } from 'framer-motion';
import './CTA.css';

function CTA({ profile }) {
    const socials = [
        {
            key: 'email',
            label: 'Email Me',
            href: `mailto:${profile.contact?.email || 'hesham@example.com'}`,
            icon: 'fas fa-envelope',
            color: 'cta-email'
        },
        {
            key: 'linkedin',
            label: 'LinkedIn',
            href: profile.socialLinks?.linkedin,
            icon: 'fab fa-linkedin-in',
            color: 'cta-linkedin'
        },
        {
            key: 'whatsapp',
            label: 'WhatsApp',
            href: profile.socialLinks?.whatsapp,
            icon: 'fab fa-whatsapp',
            color: 'cta-whatsapp'
        },
        {
            key: 'github',
            label: 'GitHub',
            href: profile.socialLinks?.github,
            icon: 'fab fa-github',
            color: 'cta-github'
        },
        {
            key: 'telegram',
            label: 'Telegram',
            href: profile.socialLinks?.telegram,
            icon: 'fab fa-telegram-plane',
            color: 'cta-telegram'
        }
    ].filter(s => s.href); // Only show links that exist

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1, y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="cta">
            {/* Background orbs */}
            <div className="cta-orb cta-orb-1"></div>
            <div className="cta-orb cta-orb-2"></div>

            <div className="cta-content">
                <motion.div
                    className="cta-text"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="cta-label">What's Next?</span>
                    <h2 className="cta-heading">
                        Let's build something <span className="gradient-text">great</span> together.
                    </h2>
                    <p className="cta-description">
                        I'm currently open to new opportunities. Whether you have a project in mind,
                        a role to discuss, or just want to say hi — I'd love to hear from you.
                    </p>
                </motion.div>

                <motion.div
                    className="cta-links"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {socials.map((social) => (
                        <motion.a
                            key={social.key}
                            href={social.href}
                            target={social.key === 'email' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className={`cta-link ${social.color}`}
                            variants={itemVariants}
                        >
                            <i className={social.icon}></i>
                            <span>{social.label}</span>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default CTA;
