
import React from 'react';

const KickIcon = ({ size = 48 }: { size?: number }) => {
  return (
    <span 
      className="iconify" 
      data-icon="simple-icons:kick" 
      data-width={size} 
      data-height={size}
      style={{ color: 'white', display: 'inline-block' }}
    />
  );
};

export default KickIcon;
