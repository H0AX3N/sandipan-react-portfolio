const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with payment integration",
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with payment integration",
      technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.com",
      image: "https://via.placeholder.com/300x200"
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;