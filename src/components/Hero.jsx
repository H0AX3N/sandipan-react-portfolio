import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="section-padding pt-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sandipan Deb</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Software Developer
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          I'm passionate about creating elegant solutions to complex problems through code.
          Specializing in full-stack development with modern technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href={"/My_Resume.pdf"}
            download = "My_Resume"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Download Resume
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/H0AX3N"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sandipan-deb-052832190/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;