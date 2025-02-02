import './Footer.css';

function Footer({ profile }) {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Left Section */}
                <div className="left-content">
                    <h3 className="name">{profile.name}</h3>
                    <div className="social-icons">
                        {profile.footer?.socialIcons?.map((icon) => (
                            <a key={icon} href={profile.socialLinks[icon]}>
                                <i className={`fab fa-${icon}`} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-content">
                    <nav className="footer-nav">
                        {profile.footer?.navigation?.map((section) => (
                            <a key={section} href={`#${section}`}>
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="copyright">
                {profile.footer?.copyrightText
                    .replace('{year}', currentYear)
                    .replace('{name}', profile.name)}
            </div>
        </footer>
    )
}

export default Footer;