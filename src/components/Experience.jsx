const Experience = () => {
  const experiences = [
    {
      title: "Blockchain Client Server Development using Python",
      company: "Ardent Computech PVT. LTD, Kolkata",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Acquired a foundational understanding of Python basics",
        "Advanced expertise in the intricacies of blockchain client-server development"
      ],
    },
    {
      title: "Software Development Intern",
      company: " MSME Tool Room, Kolkata",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Strengthened my proficiency in Core Java through comprehensive training, focusing on key concepts and practices essential for software development.",
        "Applied Core Java concepts in practical exercises to solidify understanding and proficiency"
      ],
    }
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trainings & Internships</h2>
        <div className="space-y-8 m-5">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
              {/* <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p> */}
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;