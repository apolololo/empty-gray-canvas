
import React, { useEffect, useRef } from 'react';

const KickIcon = ({ size = 48 }: { size?: number }) => {
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
      data-icon="simple-icons:kick" 
      data-width={size} 
      data-height={size}
      style={{ color: 'white', display: 'inline-block' }}
    />
  );
};

export default KickIcon;
