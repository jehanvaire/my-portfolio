import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;
  const otherLanguage = currentLanguage === 'en' ? 'fr' : 'en';

  return (
    <div 
      className="language-switcher"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div onClick={() => changeLanguage(otherLanguage)} className="language-button">
          {otherLanguage === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}
        </div>
      ) : (
        <div className="current-language">
          {currentLanguage === 'en' ? '🇬🇧 EN' : '🇫🇷 FR'}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;