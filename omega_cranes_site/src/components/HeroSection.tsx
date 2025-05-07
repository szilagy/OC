import React from 'react';
import Button from './Button'; // Assuming Button component exists
import Link from 'next/link';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}) => {
  return (
    <div 
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Overlay for background image if present */}
      {backgroundImage && <div className="absolute inset-0 bg-black opacity-60"></div>}
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-yellow-500">
          {title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link href={ctaLink} passHref>
             <Button variant="primary" size="lg">
               {ctaText}
             </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
