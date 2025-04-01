import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Twitch, Youtube, Instagram, Coffee } from 'lucide-react';
import { Icon } from '@iconify/react';

function App() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [level, setLevel] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLevel(prev => (prev < 99 ? prev + 1 : 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: <Twitch size={28} />, url: 'https://www.twitch.tv/tryh_apo', name: 'Twitch', color: '#6441a5' },
    { icon: <Icon icon="fa-brands:tiktok" width="28" height="28" />, url: 'https://www.tiktok.com/@apo_ban', name: 'TikTok', color: '#ff0050' },
    { icon: <Youtube size={28} />, url: 'https://www.youtube.com/@tryhapo', name: 'YouTube', color: '#ff0000' },
    { icon: <Icon icon="simple-icons:x" width="28" height="28" />, url: 'https://x.com/apoftn1', name: 'X', color: '#ffffff' },
    { icon: <Instagram size={28} />, url: 'https://instagram.com/tryh_apo', name: 'Instagram', color: '#E1306C' },
    { icon: <Coffee size={28} />, url: 'https://ko-fi.com/apo__', name: 'Ko-Fi', color: '#FF5E5B' },
    { icon: <Icon icon="simple-icons:kick" width="28" height="28" />, url: 'https://kick.com/tryh-apo', name: 'Kick', color: '#53FC18' }
  ];

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center relative">
      <div className="background-image" />
      <div className="smoke-overlay" />

      <div className="status-container">
        <div className="status-text">
          Level {level} Shadow Monarch
        </div>
=======
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
    { icon: <TikTokIcon size={48} />, url: 'https://www.tiktok.com/@apo_ban', name: 'TikTok', color: '#25F4EE' },
    { icon: <Youtube size={48} />, url: 'https://www.youtube.com/@tryhapo', name: 'YouTube', color: '#ff0000' },
    { icon: <XIcon size={48} />, url: 'https://x.com/apoftn1', name: 'X', color: '#ffffff' },
    { icon: <Instagram size={48} />, url: 'https://instagram.com/tryh_apo', name: 'Instagram', color: '#E1306C' },
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
              animationDuration: `${15 + Math.random() * 10}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }} 
          />
        ))}
>>>>>>> f88d816e2abe84b05168f42ce092be8c0d93822f
      </div>

<<<<<<< HEAD
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="monarch-title mb-16"
      >
        APO
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="social-grid"
      >
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="icon-wrapper"
          >
            <motion.a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              onMouseEnter={() => setHoveredIcon(social.name)}
              onMouseLeave={() => setHoveredIcon(null)}
              animate={{
                y: [-5, 5, -5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
=======
      <div className="z-10 text-center w-full max-w-[95vw] px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="floating-element text-7xl md:text-8xl lg:text-9xl font-bold mb-10 md:mb-20 gradient-text tracking-wider"
        >
          APO
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              className="flex flex-col items-center floating-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 20
>>>>>>> f88d816e2abe84b05168f42ce092be8c0d93822f
              }}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
<<<<<<< HEAD
              <motion.div
                animate={{
                  scale: hoveredIcon === social.name ? 1.2 : 1,
                  rotate: hoveredIcon === social.name ? [0, -5, 5, 0] : 0,
                }}
                transition={{ 
                  scale: { type: "spring", stiffness: 300, damping: 10 },
                  rotate: { duration: 0.5, repeat: hoveredIcon === social.name ? Infinity : 0 }
                }}
              >
                {social.icon}
              </motion.div>
              <div className="icon-label">
                {social.name}
              </div>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
=======
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
                  className="social-icon floating-icon"
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

        {/* Separate Ko-Fi Support Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.9,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="mt-12 flex flex-col items-center floating-element"
        >
          <motion.a
            href="https://ko-fi.com/apo__"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            whileHover={{ 
              scale: 1.05,
              transition: { 
                type: "spring",
                stiffness: 400,
                damping: 17
              }
            }}
          >
            <motion.div 
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[#29ABE0] text-white font-semibold floating-button"
              whileHover={{
                boxShadow: `0 0 15px rgba(41, 171, 224, 0.6)`,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut"
              }}
            >
              <Coffee size={24} />
              <span>Me soutenir avec Ko-Fi</span>
            </motion.div>
          </motion.a>
          <p className="text-sm text-gray-300 mt-2 max-w-md floating-text">
            Faites un don pour me soutenir et m'aider à créer plus de contenu !
          </p>
        </motion.div>
      </div>
>>>>>>> f88d816e2abe84b05168f42ce092be8c0d93822f
    </div>
  );
}

export default App