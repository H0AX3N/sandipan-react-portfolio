const Blog = () => {
  const posts = [
    {
      title: "Getting Started with React",
      date: "March 1, 2024",
      excerpt: "Learn the basics of React and how to build your first component.",
      link: "#"
    },
    {
      title: "Understanding JavaScript Promises",
      date: "February 15, 2024",
      excerpt: "A comprehensive guide to working with Promises in JavaScript.",
      link: "#"
    },
    // Add more blog posts as needed
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-slate-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                {post.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <a
                href={post.link}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;