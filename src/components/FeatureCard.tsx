import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <div className={`glass-card p-6 h-full ${className}`}>
      <div className="text-clarity-teal mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-clarity-gray">{description}</p>
    </div>
  );
};

export default FeatureCard;
