import React from 'react';

interface HDLogoProps {
  variant?: 'priyanka' | 'jj';
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useImage?: boolean;
}

export const HDLogo: React.FC<HDLogoProps> = ({
  variant = 'priyanka',
  className = '',
  theme = 'light',
  size = 'md',
  useImage = false
}) => {
  const isDark = theme === 'dark';

  const sizeClasses = {
    sm: 'h-9',
    md: 'h-11 sm:h-12',
    lg: 'h-16',
    xl: 'h-24'
  }[size];

  // If useImage is requested, render the 8K generated logo asset
  if (useImage) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src="/priyanka-motors-hd-logo.jpg"
          alt="Priyanka Motors"
          className={`${sizeClasses} w-auto object-contain rounded-lg shadow-sm`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Precision Vector Silhouette & Luxury Wordmark */}
      <svg
        viewBox="0 0 280 84"
        className={`${sizeClasses} w-auto overflow-visible`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Polished Chrome Gradient */}
          <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isDark ? "#b0b7c3" : "#4b5563"} />
            <stop offset="35%" stopColor={isDark ? "#ffffff" : "#9ca3af"} />
            <stop offset="70%" stopColor={isDark ? "#d1d5db" : "#374151"} />
            <stop offset="100%" stopColor={isDark ? "#858e9d" : "#1f2937"} />
          </linearGradient>

          {/* Luxury Metallic Champagne Gold Gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d49a3d" />
            <stop offset="25%" stopColor="#f7e1b5" />
            <stop offset="55%" stopColor="#d89f43" />
            <stop offset="85%" stopColor="#fae7c8" />
            <stop offset="100%" stopColor="#b37624" />
          </linearGradient>

          {/* Drop shadow */}
          <filter id="logoShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor={isDark ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.15)"} />
          </filter>
        </defs>

        {/* 1. Aerodynamic Car Silhouette Roofline Curve (Exact match to reference image) */}
        <g filter="url(#logoShadow)">
          {/* Top aerodynamic arch stroke */}
          <path
            d="M 28 32 C 55 26, 95 12, 142 10 C 188 8, 222 17, 248 27 C 220 22, 178 16, 126 18 C 76 20, 42 30, 28 32 Z"
            fill="url(#chromeGradient)"
          />

          {/* Secondary lower aerodynamic swoosh stroke */}
          <path
            d="M 14 33 C 44 28, 92 28, 146 25 C 192 23, 230 26, 266 35 C 228 30, 184 28, 136 29 C 88 30, 44 33, 14 33 Z"
            fill="url(#goldGradient)"
          />

          {/* Rear aerodynamic flick */}
          <path
            d="M 235 26 C 250 24, 262 26, 270 33 C 258 31, 245 29, 235 26 Z"
            fill="url(#chromeGradient)"
          />
        </g>

        {/* 2. Main Brand Typography: Priyanka */}
        <text
          x="140"
          y="57"
          textAnchor="middle"
          fontFamily="'Brush Script MT', 'Dancing Script', 'Playfair Display', Georgia, cursive, serif"
          fontSize="31"
          fontStyle="italic"
          fontWeight="bold"
          fill={isDark ? "url(#goldGradient)" : "#23180c"}
          stroke={isDark ? "none" : "#c68d37"}
          strokeWidth={isDark ? "0" : "0.4"}
          filter="url(#logoShadow)"
        >
          Priyanka
        </text>

        {/* 3. Spaced "M O T O R S" */}
        <text
          x="140"
          y="74"
          textAnchor="middle"
          fontFamily="'Geist Sans', -apple-system, sans-serif"
          fontSize="10"
          fontWeight="900"
          letterSpacing="0.48em"
          fill={isDark ? "url(#chromeGradient)" : "#1e2229"}
        >
          MOTORS
        </text>
      </svg>
    </div>
  );
};
