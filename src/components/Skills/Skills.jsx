import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-16 xs:w-20 sm:w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-3 xs:mt-4 text-sm xs:text-base sm:text-lg font-medium md:font-semibold max-w-3xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-6 md:py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 md:py-8 rounded-xl md:rounded-2xl border border-gray-700 
          shadow-[0_0_15px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_20px_2px_rgba(130,69,236,0.4)] transition-all duration-300"
        >
          <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-400 mb-3 md:mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.03}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-full"
          >
            <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 xs:gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col xs:flex-row items-center justify-center xs:space-x-2 bg-gray-800/50 border border-gray-700 rounded-xl md:rounded-2xl py-2 px-1 xs:py-2 xs:px-2 text-center transition-all hover:bg-gray-700/50"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 mb-1 xs:mb-0"
                  />
                  <span className="text-xs xs:text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;