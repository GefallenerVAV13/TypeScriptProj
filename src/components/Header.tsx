import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-purple-950 text-white py-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            MyLogo
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6 text-white">
          <Link
            to="/"
            className="hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="hover:text-gray-400 transition duration-300"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;