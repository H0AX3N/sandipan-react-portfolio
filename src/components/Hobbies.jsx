const Hobbies = () => {
  const hobbies = [
    {
      name: "Coding",
      description: "Building side projects and learning new technologies",
      emoji: "💻"
    },
    {
      name: "Reading",
      description: "Technical books and sci-fi novels",
      emoji: "📚"
    },
    {
      name: "Photography",
      description: "Capturing moments and exploring new places",
      emoji: "📸"
    },
    {
      name: "Gaming",
      description: "Strategy games and puzzle solving",
      emoji: "🎮"
    }
  ];

  return (
    <section id="hobbies" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Hobbies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 text-center"
            >
              <div className="text-4xl mb-4">{hobby.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;