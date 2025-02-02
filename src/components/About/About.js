// src/components/About/About.js
import './About.css';

function About({ profile }) {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>{profile.about?.title || "About Me"}</h2>
            <p>{profile.about?.mainText || "As a fresh graduate in Computer Science, I've discovered my passion for web development during my academic journey. I love turning complex problems into simple, beautiful, and intuitive solutions."}</p>
            <p>{profile.about?.secondaryText || "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts."}</p>
            <div className="social-links">
              {profile.socialLinks?.github && (
                <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {profile.socialLinks?.linkedin && (
                <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              )}
            </div>
          </div>
          <div className="about-image">
            <img 
              src={profile.about?.imageUrl || "http://localhost:5000/images/profile.jpg"} 
              alt={profile.name} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;