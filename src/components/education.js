import React from "react";

const Education = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-500/10 to-purple-500/10 py-16 px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-16">My Educational Journey</h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col items-center space-y-12">
          {/* Education Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full px-6">
            {/* Milestone 1 */}
            <div className="relative flex flex-col items-center bg-purple-800/50 border border-purple-500 rounded-xl p-6 shadow-lg">
              <div className="bg-purple-600 text-white p-4 rounded-full shadow-lg mb-4">
                🎓
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Information Technology (R)</h3>
              <p className="text-gray-300">University of Colombo School of Computing</p>
              <p className="text-gray-500">2023 - Present</p>
            </div>

            {/* Milestone 2 */}
            <div className="relative flex flex-col items-center bg-purple-800/50 border border-purple-500 rounded-xl p-6 shadow-lg">
              <div className="bg-purple-600 text-white p-4 rounded-full shadow-lg mb-4">
                💻
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Full Stack Web Development</h3>
              <p className="text-gray-300">Uki Coding School</p>
              <p className="text-gray-500">2024 Apr - 2024 Nov</p>
            </div>

            {/* Milestone 3 */}
            <div className="relative flex flex-col items-center bg-purple-800/50 border border-purple-500 rounded-xl p-6 shadow-lg">
              <div className="bg-purple-600 text-white p-4 rounded-full shadow-lg mb-4">
                📋
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Project Management</h3>
              <p className="text-gray-300">Uki Coding School</p>
              <p className="text-gray-500">2024 Apr - 2024 June</p>
            </div>

            {/* Milestone 4 */}
            <div className="relative flex flex-col items-center bg-purple-800/50 border border-purple-500 rounded-xl p-6 shadow-lg">
              <div className="bg-purple-600 text-white p-4 rounded-full shadow-lg mb-4">
                🏫
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Secondary High School</h3>
              <p className="text-gray-300">J/ Vaddu Hindu College</p>
              <p className="text-gray-500">2018 - 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;