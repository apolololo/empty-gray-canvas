
import React from 'react';

const KickIcon = ({ size = 48 }: { size?: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M381 26H131C131 26 26 26 26 131V381C26 381 26 486 131 486H381C381 486 486 486 486 381V131C486 131 486 26 381 26Z" fill="white" fillOpacity="0" />
      <path d="M381 26H131C131 26 26 26 26 131V381C26 381 26 486 131 486H381C381 486 486 486 486 381V131C486 131 486 26 381 26Z" stroke="white" strokeOpacity="0" />
      <path fillRule="evenodd" clipRule="evenodd" d="M151 151H251V183H151V151ZM151 183H183V251H151V183ZM151 251H251V329H151V251ZM183 329H151V486H183V329ZM151 486H381C381 486 486 486 486 381V151H381V183H339V251H381V329H339V486H183H151Z" fill="white" />
    </svg>
  );
};

export default KickIcon;
