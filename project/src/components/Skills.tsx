import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Layout,
  FileCode,
  Braces,
  Coffee,
  Terminal,
  Globe,
  Palette,
  LayoutGrid,
  Rocket,
  Cpu,
  FileJson,
  MonitorSmartphone
} from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: Array<{ name: string; icon: React.ReactNode }>;
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className="w-6 h-6 mr-3 text-blue-500 dark:text-blue-400">
              {skill.icon}
            </div>
            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "C++", icon: <FileCode size={18} /> },
        { name: "JavaScript", icon: <Braces size={18} /> },
        { name: "Java", icon: <Coffee size={18} /> },
        { name: "Python", icon: <Terminal size={18} /> },
        { name: "C", icon: <Code size={18} /> },
        { name: "PHP", icon: <FileCode size={18} /> }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      skills: [
        { name: "HTML", icon: <Globe size={18} /> },
        { name: "CSS", icon: <Palette size={18} /> },
        { name: "Bootstrap", icon: <LayoutGrid size={18} /> },
        { name: "React", icon: <Rocket size={18} /> },
        { name: "Tailwind CSS", icon: <Palette size={18} /> }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", icon: <Server size={18} /> },
        { name: "Express", icon: <Rocket size={18} /> },
        { name: "PHP", icon: <FileCode size={18} /> }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", icon: <Database size={18} /> },
        { name: "MongoDB", icon: <Database size={18} /> }
      ]
    }
  ];

  const dsaSkills = [
    { name: "Arrays", icon: <FileJson size={18} /> },
    { name: "Linked Lists", icon: <Cpu size={18} /> },
    { name: "Stack", icon: <LayoutGrid size={18} /> },
    { name: "Queue", icon: <LayoutGrid size={18} /> },
    { name: "Trees", icon: <MonitorSmartphone size={18} /> },
    { name: "Graphs", icon: <MonitorSmartphone size={18} /> },
    { name: "Sorting", icon: <FileJson size={18} /> },
    { name: "Searching", icon: <FileJson size={18} /> }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I've developed expertise in various technologies through academic studies and project work.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 dark:bg-slate-800/50 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Data Structures & Algorithms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dsaSkills.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-700 px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-gray-800 dark:text-gray-200 shadow-sm"
              >
                <div className="text-blue-500 dark:text-blue-400">
                  {item.icon}
                </div>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;