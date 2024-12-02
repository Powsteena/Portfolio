import React from "react";

const Education = () => {
  return (
    <section className="education-roadmap py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-white">
          My Educational Journey
        </h2>
        <div className="timeline relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-indigo-700"></div>

          {/* Individual Milestones */}
          <div className="milestone flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 mb-12">
            <div className="content lg:text-right lg:order-1 flex-1">
              <h3 className="text-xl font-bold text-indigo-400">Bachelor of Information Technology (R)</h3>
              <p className="text-gray-300">University of Colombo School of Computing</p>
              <p className="text-gray-500">2023 - Present</p>
            </div>
            <div className="icon bg-indigo-600 text-white p-4 rounded-full shadow-lg flex-shrink-0 lg:order-2">
              🎓
            </div>
          </div>

          <div className="milestone flex flex-col lg:flex-row-reverse items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 mb-12">
            <div className="content lg:text-left flex-1">
              <h3 className="text-xl font-bold text-indigo-400">Full Stack Web Development</h3>
              <p className="text-gray-300">Uki Coding School</p>
              <p className="text-gray-500">2024 Apr - 2024 Nov</p>
            </div>
            <div className="icon bg-indigo-600 text-white p-4 rounded-full shadow-lg flex-shrink-0">
              💻
            </div>
          </div>

          <div className="milestone flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 mb-12">
            <div className="content lg:text-right lg:order-1 flex-1">
              <h3 className="text-xl font-bold text-indigo-400">Project Management</h3>
              <p className="text-gray-300">Uki Coding School</p>
              <p className="text-gray-500">2024 Apr - 2024 June</p>
            </div>
            <div className="icon bg-indigo-600 text-white p-4 rounded-full shadow-lg flex-shrink-0 lg:order-2">
              📋
            </div>
          </div>

          <div className="milestone flex flex-col lg:flex-row-reverse items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="content lg:text-left flex-1">
              <h3 className="text-xl font-bold text-indigo-400">Secondary High School</h3>
              <p className="text-gray-300">J/ Vaddu Hindu College</p>
              <p className="text-gray-500">2018 - 2020</p>
            </div>
            <div className="icon bg-indigo-600 text-white p-4 rounded-full shadow-lg flex-shrink-0">
              🏫
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
