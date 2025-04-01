import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      </div>

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
              }}
            >
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
    </div>
  );
}

export default App