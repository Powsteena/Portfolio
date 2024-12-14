import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Java", "Python"],
    },
    {
      category: "Web Development",
      skills: ["React","Express","Node.js","MongoDb"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub"],
    },
    {
      category: "Design",
      skills: ["Figma"],
    },
    {
      category: "Languages",
      skills: ["English","Tamil"],
    },
  ];

  const softSkills = [
    "Teamwork",
    "Leadership",
    "Project Management",
    "Problem-Solving",
    "Time Management"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-tr from-gray-800 via-gray-900 to-black py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          My Skills
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-lg text-gray-300 bg-gray-900 p-2 rounded hover:bg-gray-700 transition"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-1 lg:col-span-3 p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-indigo-500/10 border border-indigo-500 text-gray-300 rounded-lg text-lg font-medium hover:bg-indigo-500/20 transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;