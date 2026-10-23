import React from 'react';
import logoImg from '../assets/image.png';

interface HDLogoProps {
  variant?: 'priyanka' | 'jj' | 'jaleswar';
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useImage?: boolean;
  showText?: boolean;
}

export const HDLogo: React.FC<HDLogoProps> = ({
  className = '',
  size = 'md',
  showText = true
}) => {
  const sizeClasses = {
    sm: 'h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-16',
    xl: 'h-20 sm:h-24'
  }[size];

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Jaleswar Premium Pre-Owned Car Showroom Logo Asset */}
      <img
        src={logoImg}
        alt="Jaleswar Premium"
        className={`${sizeClasses} w-auto object-contain rounded-md shadow-sm`}
      />
      {showText && (
        <div className="flex flex-col text-left leading-none justify-center">
          <div className="flex items-center gap-1.5">
            <span className="font-sans font-black text-sm sm:text-base tracking-wider text-white uppercase">
              JALESWAR
            </span>
            <span className="font-sans font-bold text-sm sm:text-base tracking-wider text-[#f75d34] uppercase">
              PREMIUM
            </span>
          </div>
          <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-gray-300 uppercase mt-1 font-medium">
            PRE-OWNED SHOWROOM • 2024
          </span>
        </div>
      )}
    </div>
  );
};
