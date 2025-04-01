
import React from 'react';

const KickIcon = ({ size = 48 }: { size?: number }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.361 2.943H2v18.114h4.361V2.943z" fill="white"/>
      <path d="M16.247 2.943H11.91v4.353h4.337V2.943z" fill="white"/>
      <path d="M16.247 7.296h-4.337v4.328h-4.31v4.329h4.31v4.353h4.337v-4.353h5.392v-4.329h-5.392V7.296z" fill="white"/>
      <path d="M21.638 16.704v4.353H17.3v-4.353h4.337z" fill="white"/>
    </svg>
  );
};

export default KickIcon;
