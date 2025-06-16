import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface LogoCardProps {
  children: React.ReactNode;
  url: string;
  alt: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ children, url, alt }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`
        relative cursor-pointer
        transition-all duration-200 ease-out
        hover:scale-110
        active:scale-95
        ${isPressed ? 'scale-95' : ''}
      `}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      aria-label={alt}
    >
      <div className="flex items-center justify-center aspect-square">
        {children}
      </div>
    </div>
  );
};

// SVG Logo Components
const CryptonicLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
    <defs>
      <linearGradient id="cryptoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" className="text-blue-500 dark:text-blue-400" stopColor="currentColor" />
        <stop offset="100%" className="text-purple-600 dark:text-purple-400" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="50" fill="url(#cryptoGradient)" opacity="0.1" />
    <path d="M40 40 L80 40 L80 50 L50 50 L50 70 L80 70 L80 80 L40 80 Z" fill="url(#cryptoGradient)" />
    <circle cx="60" cy="60" r="45" fill="none" stroke="url(#cryptoGradient)" strokeWidth="2" strokeDasharray="5,5" />
    <text x="60" y="100" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs font-semibold">CRYPTONIC</text>
  </svg>
);

const LedouanierLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
    <defs>
      <linearGradient id="douanierGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" className="text-green-600 dark:text-green-400" stopColor="currentColor" />
        <stop offset="100%" className="text-emerald-700 dark:text-emerald-500" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <rect x="30" y="30" width="60" height="60" rx="8" fill="url(#douanierGradient)" opacity="0.1" />
    <path d="M45 45 L75 45 L75 55 L55 55 L55 65 L75 65 L75 75 L45 75 Z" fill="url(#douanierGradient)" />
    <rect x="35" y="35" width="50" height="50" rx="4" fill="none" stroke="url(#douanierGradient)" strokeWidth="2" />
    <circle cx="70" cy="50" r="3" fill="url(#douanierGradient)" />
    <text x="60" y="100" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs font-semibold">LE DOUANIER</text>
  </svg>
);

const BusinessLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
    <defs>
      <linearGradient id="businessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" className="text-orange-500 dark:text-orange-400" stopColor="currentColor" />
        <stop offset="100%" className="text-red-600 dark:text-red-500" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <polygon points="60,25 85,45 85,85 35,85 35,45" fill="url(#businessGradient)" opacity="0.1" />
    <polygon points="60,30 80,45 80,80 40,80 40,45" fill="none" stroke="url(#businessGradient)" strokeWidth="2" />
    <rect x="50" y="55" width="8" height="15" fill="url(#businessGradient)" />
    <rect x="62" y="55" width="8" height="15" fill="url(#businessGradient)" />
    <rect x="50" y="45" width="20" height="6" fill="url(#businessGradient)" />
    <text x="60" y="100" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs font-semibold">BUSINESS</text>
  </svg>
);

const PortfolioLogo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 120 120" className={`w-full h-full ${className}`}>
    <defs>
      <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" className="text-indigo-500 dark:text-indigo-400" stopColor="currentColor" />
        <stop offset="100%" className="text-pink-600 dark:text-pink-500" stopColor="currentColor" />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="35" fill="url(#portfolioGradient)" opacity="0.1" />
    <path d="M45 45 Q60 35 75 45 Q75 60 60 75 Q45 60 45 45 Z" fill="url(#portfolioGradient)" />
    <circle cx="60" cy="60" r="30" fill="none" stroke="url(#portfolioGradient)" strokeWidth="2" strokeDasharray="3,3" />
    <circle cx="60" cy="60" r="8" fill="url(#portfolioGradient)" />
    <text x="60" y="100" textAnchor="middle" className="fill-gray-700 dark:fill-gray-300 text-xs font-semibold">PORTFOLIO</text>
  </svg>
);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Logo configuration with SVG components
  const logos = [
    {
      component: <CryptonicLogo />,
      url: "https://cryptonic.example.com",
      alt: "Cryptonic - Crypto Trading Platform"
    },
    {
      component: <LedouanierLogo />,
      url: "https://ledouanier.example.com",
      alt: "Le Douanier - Customs Management"
    },
    {
      component: <BusinessLogo />,
      url: "https://business.example.com",
      alt: "Business Suite - Enterprise Solutions"
    },
    {
      component: <PortfolioLogo />,
      url: "https://portfolio.example.com",
      alt: "Portfolio - Professional Showcase"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Dark mode toggle */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="w-full max-w-lg">
          <div className="grid grid-cols-2 gap-12">
            {logos.map((logoData, index) => (
              <LogoCard
                key={index}
                url={logoData.url}
                alt={logoData.alt}
              >
                {logoData.component}
              </LogoCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;