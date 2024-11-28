import React from "react";
import technicalSkills from "../assets/img/Technical skills.png";
import powerSkills from "../assets/img/Power skills.png";

export default function MySkills() {
  return (
    <div id="skills" className="my-skills py-8 sm:py-16">
      <h3 className="text-3xl text-center sm:text-left mb-6">My Skills</h3>
      <div className="skills-container flex flex-col sm:flex-row justify-center gap-8">
        <div className="technical-skills">
          <img
            src={technicalSkills}
            alt="Technical skills"
            className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-md"
          />
        </div>
        <div className="power-skills">
          <img
            src={powerSkills}
            alt="Power skills"
            className="w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
