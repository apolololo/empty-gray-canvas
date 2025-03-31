
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram,
  Youtube, 
  Twitch,
  Coffee, 
  Play 
} from 'lucide-react';
import TikTokIcon from './components/icons/TikTokIcon';
import XIcon from './components/icons/XIcon';
import KickIcon from './components/icons/KickIcon';

function App() {
  const socialLinks = [
    { icon: <Twitch size={48} />, url: 'https://www.twitch.tv/tryh_apo', name: 'Twitch', color: '#6441a5' },
    { icon: <TikTokIcon size={48} />, url: 'https://www.tiktok.com/@apo_ban', name: 'TikTok', color: '#00f2ea' },
    { icon: <Youtube size={48} />, url: 'https://www.youtube.com/@tryhapo', name: 'YouTube', color: '#ff0000' },
    { icon: <XIcon size={48} />, url: 'https://x.com/apoftn1', name: 'X', color: '#ffffff' },
    { icon: <Instagram size={48} />, url: 'https://instagram.com/tryh_apo', name: 'Instagram', color: '#E1306C' },
    { icon: <Coffee size={48} />, url: 'https://ko-fi.com/apo__', name: 'Ko-Fi', color: '#29ABE0' },
    { icon: <KickIcon size={48} />, url: 'https://kick.com/tryh-apo', name: 'Kick', color: '#53FC18' }
  ];

  return (
    <div className="min-h-screen w-screen text-white flex items-center justify-center relative overflow-hidden bg-black">
      <div className="background-grid" />
      
      <div className="animated-background">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i} 
            className="animated-circle" 
            style={{ 
              animationDelay: `${i * -1}s`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              animationDuration: `${15 + Math.random() * 10}s`
            }} 
          />
        ))}
      </div>
      
      <div className="gradient-overlay" />

      <div className="z-10 text-center w-full max-w-[95vw] px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold mb-10 md:mb-20 gradient-text tracking-wider"
        >
          APO
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
            >
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { 
                    type: "spring",
                    stiffness: 400,
                    damping: 17
                  }
                }}
              >
                <motion.div 
                  className="social-icon"
                  whileHover={{
                    backgroundColor: `${social.color}22`,
                    borderColor: social.color,
                    color: social.color,
                    boxShadow: `0 0 15px ${social.color}66`
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                >
                  {social.icon}
                </motion.div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default App;
