import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 md:py-24 px-4 md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-3 md:mt-4"></div>
        <p className="text-gray-400 mt-3 md:mt-4 text-base md:text-lg font-semibold px-4">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col md:flex-row items-center mb-8 md:mb-16 ${
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-10 h-10 md:w-16 md:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-[85vw] md:w-full md:max-w-md p-4 md:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                ${index % 2 === 0 ? "md:mr-[calc(50%+2rem)]" : "md:ml-[calc(50%+2rem)]"}
                ml-8 md:ml-0 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                {/* Company Logo/Image */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg md:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm md:text-base text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm md:text-base text-gray-400">
                {experience.desc}
              </p>
              
              <div className="mt-4">
                <h5 className="font-medium text-white text-sm md:text-base">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs md:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;