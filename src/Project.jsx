import React from "react";
import images from "./Images.jsx";

const Project = ({ name, text, image, tags, netlify, github }) => {
  const imageUrl = image ? images[image] : "https://via.placeholder.com/150";

  return (
    <div className="project">
      <div className="project-image">
        <a href={netlify} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={`Preview of ${name}`} />
        </a>
      </div>

      <div className="project-info">
        <h2 className="project-name">{name}</h2>
        <p className="project-text">{text}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="links">
          <a href={netlify} target="_blank" rel="noopener noreferrer">
            <button className="link-button">Live demo</button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="link-button">View code</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
