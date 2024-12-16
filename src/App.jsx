import React from "react";
import Project from "./Project";
import Welcome from "./Welcome";
import Contact from "./Contact";
import Skills from "./Skills";
import projectData from "./data.json";

const App = () => {
  return (
    <div className="app">
      <div className="welcome-section">
        <Welcome />
      </div>
      <div className="projects-section">
        <h1 className="featured-projects-header">Featured Projects</h1>
        {projectData.projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            text={project.text}
            image={project.image}
            tags={project.tags}
            netlify={project.netlify}
            github={project.github}
          />
        ))}
      </div>
      <div className="skills">
        <Skills />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
};

export default App;