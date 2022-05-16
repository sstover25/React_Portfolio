import React from "react";
import SelfImage from "../../assets/self-image.jpeg";

function About() {
  return (
    <div className="section">
      <h1 className="d-flex about-me-title px-5 pt-5 justify-content-center">
        About Me
      </h1>
      <div className="d-flex flex-column flex-md-row p-3 align-items-center justify-content-center">
        <img
          className="media mw-50 mh-50"
          src={SelfImage}
          alt="Shannon Stover smiling in front of a white background."
        />
        <p className="bio-text p-5">
          Some Facts About Shannon:<br></br>* She has two dogs<br></br>* She's
          worked in the education and testing industries for over 8 years
          <br></br>* She has the Platinum trophy in the 2018 God of War video
          game<br></br>
        </p>
      </div>
    </div>
  );
}

export default About;
