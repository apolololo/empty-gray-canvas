
import React from 'react';

const KickIcon = ({ size = 48 }: { size?: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" fill="black"/>
      <path d="M5 5H13V13H5V5Z" fill="#53FC18"/>
      <path d="M13 5H17V9H13V5Z" fill="#53FC18"/>
      <path d="M17 9H21V13H17V9Z" fill="#53FC18"/>
      <path d="M21 13H25V17H21V13Z" fill="#53FC18"/>
      <path d="M17 17H21V21H17V17Z" fill="#53FC18"/>
      <path d="M13 21H17V25H13V21Z" fill="#53FC18"/>
      <path d="M5 17H13V25H5V17Z" fill="#53FC18"/>
    </svg>
  );
};

export default KickIcon;
