import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "@/components/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="text-center glass-card p-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-clarity-gray mb-6">The page you're looking for doesn't exist</p>
          <a href="/" className="bg-clarity-teal text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-all duration-300 inline-block">
            Return to Home
          </a>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
