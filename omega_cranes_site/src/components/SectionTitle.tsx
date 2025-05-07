import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-8 text-center ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      {subtitle && <p className="text-md md:text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

