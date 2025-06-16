import React from 'react';

// Import the logo assets
import cryptonicLogo from './assets/logo-cryptonic.svg';
import ledouanierLogo from './assets/logo-ledouanier.png';
import qult from './assets/qult.png';
import wackes from './assets/wackes.png';

interface LogoItemProps {
  logo: string;
  url: string;
  alt: string;
}

const LogoItem: React.FC<LogoItemProps> = ({ logo, url, alt }) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-80"
      onClick={handleClick}
    >
      <img
        src={logo}
        alt={alt}
        className="w-32 h-32 object-contain"
      />
    </div>
  );
};

function App() {
  // Logo configuration
  const logos = [
    {
      logo: cryptonicLogo,
      url: "https://back.cryptonic-drinks.com/wp-admin",
      alt: "Cryptonic"
    },
    {
      logo: qult,
      url: "https://back.qult.com/wp-admin",
      alt: "Qult"
    },
    {
      logo: wackes,
      url: "https://back.ginwackes.fr/wp_admin",
      alt: "Wackes"
    },
    {
      logo: ledouanierLogo,
      url: "https://ledouanier.fr/wp-login.php",
      alt: "Le Douanier"
    }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-xs h-96">
        <div className="scroll-container">
          <div className="scroll-content">
            {duplicatedLogos.map((logoData, index) => (
              <div key={index} className="logo-item">
                <LogoItem
                  logo={logoData.logo}
                  url={logoData.url}
                  alt={logoData.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;