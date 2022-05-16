import React from "react";

function Resume() {
  return (
    <div className="resume-section">
      <h2 className="d-flex about-me-title px-5 pt-5 justify-content-center">
        Resume
      </h2>
      <div className="d-flex flex-column p-3 align-items-center">
        <p className="resume-text">
          Download my{" "}
          <a className="resume-link" href="#resume">
            Resume
          </a>
        </p>
        <div>
          <span className="proficiencies">Front-End Proficiencies</span>
          <ul className="proficiencies-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div>
          <span className="proficiencies">Back-End Proficiencies</span>
          <ul className="proficiencies-list">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
