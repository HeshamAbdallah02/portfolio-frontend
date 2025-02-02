import { useEffect } from 'react';
import './Footer.css';

function Footer({ profile }) {
    const currentYear = new Date().getFullYear();

    const handleScroll = (e, section) => {
        e.preventDefault();
        const target = document.getElementById(section);
        if (target) {
            // Modern browsers
            if ('scrollBehavior' in document.documentElement.style) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } 
            // Older browsers
            else {
                const offset = 100; // Adjust based on header height
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = target.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'auto'
                });
            }
            
            window.history.pushState(null, null, `#${section}`);
        }
    };

    // Only load polyfill if needed
    useEffect(() => {
        if ('scrollBehavior' in document.documentElement.style) return;
        
        import('smoothscroll-polyfill').then(module => {
            module.polyfill();
        }).catch(error => {
            console.log('Smoothscroll polyfill failed to load:', error);
        });
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="left-content">
                    <h3 className="name">{profile.name}</h3>
                    <div className="social-icons">
                        {profile.footer?.socialIcons?.map((icon) => (
                            <a key={icon} 
                               href={profile.socialLinks[icon]} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="social-link">
                                <i className={`fab fa-${icon}`} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="right-content">
                    <nav className="footer-nav">
                        {profile.footer?.navigation?.map((section) => (
                            <a key={section} 
                               href={`#${section}`}
                               onClick={(e) => handleScroll(e, section)}
                               className="nav-link">
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            <div className="copyright">
                {profile.footer?.copyrightText
                    .replace('{year}', currentYear)
                    .replace('{name}', profile.name)}
            </div>
        </footer>
    )
}

export default Footer;