import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import { SiExpress, SiPostman } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'React', icon: FaReact, color: 'text-blue-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'GitHub', icon: FaGithub, color: 'text-gray-800 dark:text-white' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-white dark:bg-slate-800 shadow-lg hover:transform hover:scale-105 transition-transform"
            >
              <skill.icon className={`w-12 h-12 ${skill.color} mb-2`} />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;