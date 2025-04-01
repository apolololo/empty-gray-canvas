
import React from 'react';

const TikTokIcon = ({ size = 48 }: { size?: number }) => {
  return (
    <span 
      className="iconify" 
      data-icon="fa-brands:tiktok" 
      data-width={size} 
      data-height={size}
      style={{ color: 'white', display: 'inline-block' }}
    />
  );
};

export default TikTokIcon;
