import React from "react";
import images from "./Images.jsx";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Let's get in touch!</h1>
      <h2>Arvid Wickzell</h2>
      <h2>+46(0)703854829</h2>
      <h2>arvidwickzell345@hotmail.com</h2>
      <img src={images.ContactImage} alt="Contact Image" />
    </div>
  );
};

export default Contact;