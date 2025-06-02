
import { education, experience, certifications } from '../utils/data';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Resume</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">E</span>
              </div>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-600">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{edu.institution}</h4>
                  <p className="text-blue-600 font-medium mb-2">{edu.degree}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{edu.duration}</span>
                    <span className="font-semibold text-green-600">
                      {edu.cgpa || edu.percentage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-sm font-bold">W</span>
              </div>
              Work Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-600">
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{exp.role}</h4>
                  <p className="text-green-600 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-600 mb-4">{exp.duration}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-700 text-sm flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center justify-center">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-sm font-bold">C</span>
            </div>
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{cert.date}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Ongoing' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Download Resume (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
