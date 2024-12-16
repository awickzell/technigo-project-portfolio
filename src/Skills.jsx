import React from "react";
import skillData from "./data.json";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-container">
        {skillData.skills.map((category, index) => (
          <div key={index} className="skill-category">
            <span className="tag">{category.category}</span>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
