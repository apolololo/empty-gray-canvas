
import React, { useEffect, useRef } from 'react';

const TikTokIcon = ({ size = 48 }: { size?: number }) => {
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // This ensures the Iconify library processes the icon after component mount
    if (iconRef.current && window.Iconify) {
      window.Iconify.scan(iconRef.current);
    }
  }, []);

  return (
    <span 
      ref={iconRef}
      className="iconify" 
      data-icon="fa-brands:tiktok" 
      data-width={size} 
      data-height={size}
      style={{ color: 'white', display: 'inline-block' }}
    />
  );
};

export default TikTokIcon;
