
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = "", 
  hover = true,
  onClick,
  style 
}) => {
  return (
    <Card 
      className={`glass-purple border-0 ${hover ? 'hover:soft-glow transition-all duration-300' : ''} ${className}`}
      onClick={onClick}
      style={style}
    >
      <CardContent className={`${className.includes('overflow-hidden') ? 'p-0' : 'p-8'}`}>
        {children}
      </CardContent>
    </Card>
  );
};

export default GlassCard;
