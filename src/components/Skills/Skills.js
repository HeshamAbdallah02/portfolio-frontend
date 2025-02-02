// src/components/Skills/Skills.js
import './Skills.css';

function Skills({ profile }) {
  return (
    <div className="skills">
      <div className="skills-content">
        <h2>{profile.skills?.title || "My Skills"}</h2>
        <div className="skills-grid">
          {profile.skills?.categories.map((category, index) => (
            <div key={index} className="skills-category">
              <h3>{category.name}</h3>
              <div className="skills-list">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;