const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              I'm a passionate software developer with a strong foundation in web development
              and a keen interest in building user-friendly applications. As a fresher in
              the industry, I bring fresh perspectives and a eagerness to learn and grow.
            </p>
            <p className="text-lg">
              My journey in software development started during my academic years, where I
              developed a strong foundation in computer science fundamentals and various
              programming languages.
            </p>
            <p className="text-lg">
              I'm constantly learning and staying updated with the latest technologies
              and best practices in software development.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-2">
              <li>🎓 Computer Science Graduate</li>
              <li>💻 Full Stack Developer</li>
              <li>🌱 Always Learning</li>
              <li>🤝 Team Player</li>
              <li>🎯 Goal-Oriented</li>
              <li>🌍 Open to Remote Work</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;