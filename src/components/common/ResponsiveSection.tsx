
import React from 'react';

interface ResponsiveSectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'darker' | 'gradient';
  id?: string;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({ 
  children, 
  className = "",
  background = 'default',
  id 
}) => {
  const getBackgroundClasses = () => {
    switch (background) {
      case 'darker':
        return 'bg-gradient-to-br from-jewelry-purple-darker via-background to-jewelry-indigo';
      case 'gradient':
        return 'bg-gradient-to-br from-background via-jewelry-purple-dark/20 to-background';
      default:
        return 'bg-gradient-to-br from-background via-jewelry-purple-dark/10 to-background';
    }
  };

  return (
    <section 
      id={id}
      className={`py-20 ${getBackgroundClasses()} relative ${className}`}
    >
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default ResponsiveSection;
