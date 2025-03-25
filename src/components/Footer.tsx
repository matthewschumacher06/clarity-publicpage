
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-clarity-dark/80 backdrop-blur-md border-t border-white/5 py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-white text-2xl font-semibold">
              <img 
                src="/images/ClarityLogo.png"
                alt="Clarity"
                className="h-6"
              />
            </Link>
            <p className="text-clarity-gray text-sm mt-2 max-w-md">
              Driving smarter operations through technology.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex">
              <img 
                src="/images/PD-Logo-Complete.png" 
                alt="Precision Drilling" 
                className="h-16" 
              />
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-clarity-gray text-sm">
            &copy; {new Date().getFullYear()} Clarity. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-clarity-gray text-sm hover:text-clarity-teal transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-clarity-gray text-sm hover:text-clarity-teal transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
