const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Sandipan Deb. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;