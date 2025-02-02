// src/components/Hero/Hero.js
import './Hero.css';

function Hero({ profile }) {
  const backgroundStyle = profile.hero?.backgroundImage?.url ? {
    backgroundImage: `linear-gradient(
      rgba(255, 255, 255, ${1 - (profile.hero.backgroundImage.opacity || 0.1)}),
      rgba(255, 255, 255, ${1 - (profile.hero.backgroundImage.opacity || 0.1)})
    ), url(${profile.hero.backgroundImage.url})`,
    backgroundSize: profile.hero.backgroundImage.size || 'cover',
    backgroundPosition: profile.hero.backgroundImage.position || 'center center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <div className="hero" style={backgroundStyle}>
      <div className="hero-content">
        <h1>{profile.hero?.greeting || "Hi, I'm"} {profile.name}</h1>
        <h2>{profile.title}</h2>
        <p>{profile.introduction}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            {profile.ctaText || "See My Work"} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;