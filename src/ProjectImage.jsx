import React from "react";
import images from "./Images.jsx";

const ProjectImage = ({ image }) => {
  const imageUrl = image ? images[image] : "https://via.placeholder.com/150";

  return (
    <div className="project-image">
      <img
        src={imageUrl}
        alt="Project preview"
      />
    </div>
  );
};

export default ProjectImage;
