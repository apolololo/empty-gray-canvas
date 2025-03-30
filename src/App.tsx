
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Twitch, Atom as Tiktok, Youtube, Twitter, Instagram, Coffee, Play } from 'lucide-react';

function App() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialLinks = [
    { icon: <Twitch size={44} />, url: 'https://www.twitch.tv/tryh_apo', name: 'Twitch', color: '#6441a5' },
    { icon: <Tiktok size={44} />, url: 'https://www.tiktok.com/@apo_ban', name: 'TikTok', color: '#ff0050' },
    { icon: <Youtube size={44} />, url: 'https://www.youtube.com/@tryhapo', name: 'YouTube', color: '#ff0000' },
    { icon: <Twitter size={44} />, url: 'https://x.com/apoftn1', name: 'X', color: '#1DA1F2' },
    { icon: <Instagram size={44} />, url: 'https://instagram.com/tryh_apo', name: 'Instagram', color: '#E1306C' },
    { icon: <Coffee size={44} />, url: 'https://ko-fi.com/apo__', name: 'Ko-Fi', color: '#FF5E5B' },
    { icon: <Play size={44} />, url: 'https://kick.com/tryh-apo', name: 'Kick', color: '#53FC18' }
  ];

  return (
    <div className="h-screen w-screen text-white flex items-center justify-center relative overflow-hidden bg-black">
      <div className="background-grid" />
      
      {/* Animated background elements */}
      <div className="animated-background">
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="animated-circle" style={{ 
            animationDelay: `${i * 0.5}s`, 
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 80 + 20}px`,
            height: `${Math.random() * 80 + 20}px`
          }} />
        ))}
      </div>
      
      {/* Animated gradient overlay */}
      <div className="gradient-overlay" />

      {/* Main content */}
      <div className="z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="text-8xl font-bold mb-20 gradient-text tracking-wider"
        >
          APO
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-7 gap-8 px-8"
          style={{ maxWidth: '1400px', margin: '0 auto' }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '3s',
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
              }}
              whileHover={{ 
                scale: 1.1,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 17
                }
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              onHoverStart={() => setHoveredIcon(social.name)}
              onHoverEnd={() => setHoveredIcon(null)}
            >
              <div className="icon-container">
                <motion.div 
                  animate={{ 
                    scale: hoveredIcon === social.name ? [1, 1.1, 1] : 1,
                    rotate: hoveredIcon === social.name ? [0, -5, 5, 0] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: hoveredIcon === social.name ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                  style={{ color: hoveredIcon === social.name ? social.color : '#fff' }}
                >
                  {social.icon}
                </motion.div>
                <motion.span
                  className="icon-label"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIcon === social.name ? 1 : 0,
                    y: hoveredIcon === social.name ? 0 : 10
                  }}
                  style={{ color: social.color }}
                >
                  {social.name}
                </motion.span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
