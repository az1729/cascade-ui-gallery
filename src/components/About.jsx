
import { aboutContent, skills } from '../utils/data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who I Am</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {aboutContent.bio}
            </p>

            {/* Strengths */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Core Strengths</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {aboutContent.strengths.map((strength, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-3">
                {aboutContent.hobbies.map((hobby, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
            
            {/* Languages */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((lang, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Libraries & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((framework, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-sm font-medium">
                    {framework}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
                Tools & Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.platforms.map((tool, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-md text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* ML & Analytics */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Machine Learning & Analytics
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.analytics.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
