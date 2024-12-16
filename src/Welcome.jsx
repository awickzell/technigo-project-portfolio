import React from "react";
import images from "./Images.jsx";

const Welcome = () => {
  return (
    <div className="welcome-section">
      <h1 className="welcome-header">Welcome To My Portfolio</h1>

      <div className="about-me">
        <p>My name is Arvid Wickzell</p>
        <p>I am a frontend and backend developer with a background in<br />journalism and PR</p>
      </div>

      <div className="image-gallery">
        <img src={images.WelcomePic1} alt="Bild 1" />
        <img src={images.WelcomePic2} alt="Bild 2" />
        <img src={images.WelcomePic3} alt="Bild 3" />
      </div>
      <div className="more-about-me">
        <p>Arvid is a skilled code developer known for his precision, creativity, and ability to solve complex problems efficiently.<br />His passion for clean, maintainable code makes him a valuable asset to any development team.</p>
      </div>
    </div>
  );
};

export default Welcome;