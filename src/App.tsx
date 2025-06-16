import React, { useState } from 'react';

// Import the logo assets
import cryptonicLogo from './assets/cryptonic-logo.svg';
import ledouanierLogo from './assets/logo-ledouanier.png';
import jimboLogo from './assets/storage.e.jimdo.com_cdn-cgi_image_quality=85,fit=scale-down,format=auto,trim=0;0;0;0,width=480,height=480_image_452265076_5beb9caa-af88-4905-9dfc-b2b3e7d1638b.jpg.png';

interface LogoCardProps {
  logo: string;
  url: string;
  alt: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo, url, alt }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`
        relative cursor-pointer
        bg-white rounded-2xl shadow-sm
        transition-all duration-200 ease-out
        hover:shadow-lg hover:scale-105
        active:scale-95
        ${isPressed ? 'scale-95' : ''}
      `}
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      <div className="p-8 flex items-center justify-center aspect-square">
        <img
          src={logo}
          alt={alt}
          className="max-w-full max-h-full object-contain transition-opacity duration-200 hover:opacity-90"
        />
      </div>
    </div>
  );
};

function App() {
  // Logo configuration
  const logos = [
    {
      logo: cryptonicLogo,
      url: "https://cryptonic.example.com", // Replace with actual URL
      alt: "Cryptonic"
    },
    {
      logo: ledouanierLogo,
      url: "https://ledouanier.example.com", // Replace with actual URL
      alt: "Le Douanier"
    },
    {
      logo: jimboLogo,
      url: "https://business.example.com", // Replace with actual URL
      alt: "Business Suite"
    },
    {
      logo: cryptonicLogo, // Using as placeholder for 4th logo
      url: "https://portfolio.example.com", // Replace with actual URL
      alt: "Portfolio"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="grid grid-cols-2 gap-6">
          {logos.map((logoData, index) => (
            <LogoCard
              key={index}
              logo={logoData.logo}
              url={logoData.url}
              alt={logoData.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;