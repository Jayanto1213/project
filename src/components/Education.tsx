import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationItemProps {
  institution: string;
  degree: string;
  duration: string;
  isLast?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ institution, degree, duration, isLast = false }) => {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute top-0 left-3 h-full w-px bg-blue-200 dark:bg-blue-900/50"></div>
      )}
      <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
        <GraduationCap size={14} className="text-white" />
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-5 ml-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{institution}</h3>
        <p className="text-gray-700 dark:text-gray-300 mt-1">{degree}</p>
        <div className="flex items-center mt-3 text-gray-500 dark:text-gray-400">
          <Calendar size={16} className="mr-2" />
          <span className="text-sm">{duration}</span>
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const educationItems = [
    {
      institution: "Lovely Professional University",
      degree: "BTech in Computer Science & Engineering",
      duration: "Expected Graduation - May 2026"
    },
    {
      institution: "Arka Jain University (Jamshedpur)",
      degree: "Polytechnic in Computer Science & Engineering",
      duration: "July 2020 - May 2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic journey in computer science and engineering.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {educationItems.map((item, index) => (
            <EducationItem 
              key={index}
              institution={item.institution}
              degree={item.degree}
              duration={item.duration}
              isLast={index === educationItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;