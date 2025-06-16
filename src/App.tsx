import React, { useState } from 'react';

// Import the logo assets
import cryptonicLogo from './assets/logo-cryptonic.svg';
import ledouanierLogo from './assets/logo-ledouanier.png';
import qult from './assets/qult.png';
import wackes from './assets/wackes.png';

interface LogoCardProps {
  logo: string;
  url: string;
  alt: string;
}

const LogoCard: React.FC<LogoCardProps> = ({ logo, url, alt}) => {
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
    >
      <div className="flex items-center justify-center aspect-square">
        <img
          src={logo}
          alt={alt}
          className="w-full h-full object-contain transition-all duration-200 hover:opacity-90 background"
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
      url: "https://back.cryptonic-drinks.com/wp-admin", // Replace with actual URL
      alt: "Cryptonic"
    },
    {
      logo: qult,
      url: "https://back.qult.com/wp-admin", // Replace with actual URL
      alt: "Business Suite"
    },
    {
      logo: wackes, // Using as placeholder for 4th logo
      url: "https://back.ginwackes.fr/wp_admin", // Replace with actual URL
      alt: "Portfolio"
    },
    {
      logo: ledouanierLogo,
      url: "https://ledouanier.fr/wp-login.php", // Replace with actual URL
      alt: "Le Douanier"
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        <div className="grid  grid-cols-1 md-grid-cols-2 gap-24 mt-12 mb-12 pa-12">
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