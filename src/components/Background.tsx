import React from 'react';

const Background = () => {
  return (
    <>
      {/* Main gradient background - positioned top left */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{ 
          background: 'radial-gradient(circle at 15% 20%, rgba(10, 169, 159, 0.5) 0%, rgba(10, 169, 159, 0.15) 30%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)',
          animation: 'subtleGradientMotion 15s infinite ease-in-out',
          backgroundSize: '400% 400%',
          mixBlendMode: 'screen',
          opacity: '0.8',
        }}
        aria-hidden="true"
      ></div>
      
      {/* Secondary gradient layer - positioned bottom right */}
      <div 
        className="fixed inset-0 z-[-2]" 
        style={{ 
          background: 'radial-gradient(circle at 85% 80%, rgba(10, 169, 159, 0.4) 0%, rgba(10, 169, 159, 0.1) 40%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(35px)',
          animation: 'subtleGradientMotion 20s infinite ease-in-out reverse',
          backgroundSize: '300% 300%',
          mixBlendMode: 'screen',
          opacity: '0.7',
        }}
        aria-hidden="true"
      ></div>
      
      {/* Left middle edge highlight */}
      <div 
        className="fixed z-[-2]" 
        style={{ 
          top: '50%',
          left: '0',
          width: '400px',
          height: '600px',
          marginTop: '-300px',
          background: 'radial-gradient(ellipse at left, rgba(10, 169, 159, 0.4) 0%, rgba(10, 169, 159, 0.1) 60%, rgba(0, 0, 0, 0) 100%)',
          pointerEvents: 'none',
          filter: 'blur(30px)',
          animation: 'subtlePulse 10s infinite ease-in-out',
          mixBlendMode: 'screen',
          opacity: '0.7',
        }}
        aria-hidden="true"
      ></div>
      
      {/* Upper right corner highlight */}
      <div 
        className="fixed z-[-2]" 
        style={{ 
          top: '10%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(10, 169, 159, 0.5) 0%, rgba(10, 169, 159, 0.15) 40%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          filter: 'blur(25px)',
          animation: 'subtlePulse 8s infinite ease-in-out',
          mixBlendMode: 'screen',
          opacity: '0.6',
        }}
        aria-hidden="true"
      ></div>
      
      {/* Bottom edge glow */}
      <div 
        className="fixed z-[-2]" 
        style={{ 
          bottom: '0',
          left: '50%',
          width: '70%',
          height: '300px',
          marginLeft: '-35%',
          background: 'radial-gradient(ellipse at bottom, rgba(10, 169, 159, 0.4) 0%, rgba(10, 169, 159, 0.1) 50%, rgba(0, 0, 0, 0) 100%)',
          pointerEvents: 'none',
          filter: 'blur(30px)',
          animation: 'subtlePulse 12s infinite ease-in-out',
          mixBlendMode: 'screen',
          opacity: '0.7',
        }}
        aria-hidden="true"
      ></div>
      
      {/* Rising Planet Sphere */}
      <div
        className="fixed z-[-1]"
        style={{
          bottom: '-10%',
          left: '50%',
          width: '90vw',
          height: '90vw',
          maxWidth: '1500px',
          maxHeight: '1500px',
          transform: 'translate(-50%, 40%)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 1) 70%)',
          boxShadow: '0 0 min(10vw, 100px) min(2vw, 20px) rgba(0, 0, 0, 0.8), 0 0 min(1vw, 10px) min(0.3vw, 3px) rgba(30, 30, 30, 0.7), 0 0 min(0.5vw, 5px) min(0.1vw, 1px) rgba(10, 169, 159, 0.4)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        {/* Subtle highlight on the sphere edge */}
        <div 
          className="absolute"
          style={{
            top: '10%',
            right: '15%',
            width: '30%',
            height: '20%',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse at center, rgba(40, 40, 40, 0.7) 0%, rgba(5, 5, 5, 0) 70%)',
            transform: 'rotate(-15deg)',
            filter: 'blur(min(1.5vw, 15px))',
          }}
        ></div>
        
        {/* Continuous edge glow to differentiate from background */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, transparent 90%, rgba(20, 20, 20, 0.7) 95%, rgba(40, 40, 40, 0.3) 100%)',
          }}
        ></div>
      </div>

      {/* Glow ring around planet */}
      <div
        className="fixed z-[-1]"
        style={{
          bottom: '-10%',
          left: '50%',
          width: '95vw',
          height: '95vw',
          maxWidth: '1600px',
          maxHeight: '1600px',
          transform: 'translate(-50%, 40%)',
          borderRadius: '50%',
          border: 'min(0.15vw, 2px) solid rgba(40, 40, 40, 0.5)',
          boxShadow: '0 0 min(4vw, 40px) min(0.5vw, 5px) rgba(10, 169, 159, 0.15), inset 0 0 min(3vw, 30px) min(1vw, 10px) rgba(5, 5, 5, 0.8)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      ></div>
    </>
  );
};

export default Background; 