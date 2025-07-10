
import React from 'react';

interface IconFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const IconFeature: React.FC<IconFeatureProps> = ({ 
  icon, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`flex items-start gap-6 ${className}`}>
      <div className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 glass-button rounded-full text-jewelry-lavender">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-inter font-semibold text-white mb-3">
          {title}
        </h3>
        <p className="text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default IconFeature;
