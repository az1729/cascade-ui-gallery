
import { personalInfo } from '../utils/data';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{personalInfo.name}</h3>
            <p className="text-gray-400">Data Scientist & ML Engineer</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Built with React, Vite & Tailwind CSS
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
