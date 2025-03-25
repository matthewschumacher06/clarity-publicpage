
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigating
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-clarity-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" aria-label="Clarity - Home">
            <img 
              // src="/images/ClarityLogo.png"
              src="/images/ClarityLogoWithInsights.png"
              alt="Clarity"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-clarity-card/40 backdrop-blur-md rounded-full px-1 py-1 flex items-center">
              <Link
                to="/video-library"
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  isActive('/video-library')
                    ? 'bg-clarity-teal text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Video Library
              </Link>
              <Link
                to="/engineering-blog"
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  isActive('/engineering-blog')
                    ? 'bg-clarity-teal text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Engineering Blog
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  isActive('/contact')
                    ? 'bg-clarity-teal text-white'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                Contact
              </Link>
            </div>
            <Link
              to="/sign-in"
              className="ml-4 clarity-button text-sm px-5 py-2 rounded-full"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="flex flex-col space-y-3 py-6 px-4">
            <Link
              to="/video-library"
              className="px-4 py-3 rounded-md text-white hover:bg-clarity-card/40"
            >
              Video Library
            </Link>
            <Link
              to="/engineering-blog"
              className="px-4 py-3 rounded-md text-white hover:bg-clarity-card/40"
            >
              Engineering Blog
            </Link>
            <Link
              to="/contact"
              className="px-4 py-3 rounded-md text-white hover:bg-clarity-card/40"
            >
              Contact
            </Link>
            <Link
              to="/sign-in"
              className="px-4 py-3 rounded-md bg-clarity-teal text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
