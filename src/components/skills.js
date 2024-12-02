import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML/CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'Java', percentage: 75 }
  ];

  const softSkills = [
    'Team work',
    'Leadership',
    'Project Management'
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center">Technical Skills</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="p-4 bg-gray-800/50 rounded-xl">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-indigo-600">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-indigo-500 h-2 rounded-full skill-bar" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-bold my-12 text-center">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {softSkills.map((skill, index) => (
            <div 
              key={index} 
              className="px-6 py-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl hover:bg-indigo-500/20 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;