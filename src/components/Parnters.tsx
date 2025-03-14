import React from 'react';
import launchMyTechLogo from '../assests/LaunchMyTech.jpg'

const Partners: React.FC = () => {
  return (
    <section className="py-14 bg-gradient-to-b from-black to-[#1a1a1a] dark:from-black dark:to-[#242121]">
      <div className="max-container text-center">
        <h2 className="text-4xl font-extrabold text-black dark:text-white">
          Our <span className="text-orange-500">Partners</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-3">
          We proudly collaborate with industry leaders to bring the best solutions.
        </p>

        <div className="mt-10 flex justify-center">
          <a 
            href="https://launchmytech.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 border border-orange-500"
          >
            <img 
              src={launchMyTechLogo} 
              alt="LaunchMyTech Logo" 
              className="h-20 w-auto object-contain"
            />
            <p className="text-xl font-semibold mt-3 text-black dark:text-white group-hover:text-orange-500 transition-colors">
              LaunchMyTech
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
