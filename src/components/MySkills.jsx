import React from "react";
import technicalSkills from "../assets/img/Technical skills.png";
import powerSkills from "../assets/img/Power skills.png";

export default function MySkills() {
  return (
    <div id="skills" className="my-skills">
      <h3>My Skills</h3>
      <div className="skills-container">
        <div className="technical-skills">
          <img
            src={technicalSkills}
            alt="Technical skills"
            className="mr-4 w-64 h-64 object-cover"
          />
        </div>
        <div className="power-skills">
          <img
            src={powerSkills}
            alt="Power skills"
            className="mr-8 w-64 h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
