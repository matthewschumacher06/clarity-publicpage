import { ReactNode, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Background from './Background';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      // Ensure the content is visible initially
      pageRef.current.style.opacity = '1';
      
      // Apply the animation class
      pageRef.current.classList.add('animate-blur-in');
      
      // Clean up animation classes after animation completes
      const timer = setTimeout(() => {
        if (pageRef.current) {
          pageRef.current.classList.remove('animate-blur-in');
          // Ensure the content remains fully visible after animation
          pageRef.current.style.opacity = '1';
        }
      }, 800); // Match the duration of the blur-in animation

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      <Background />
      <div ref={pageRef} className="min-h-screen w-full relative z-10">
        {children}
      </div>
    </>
  );
};

export default PageTransition;
