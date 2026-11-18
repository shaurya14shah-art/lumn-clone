import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function AmbientCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-96 h-96 rounded-full mix-blend-screen z-0 opacity-0 transition-opacity duration-300"
      style={{
        background: 'radial-gradient(circle at center, rgba(249, 84, 130, 0.15) 0%, rgba(249, 84, 130, 0) 70%)',
        filter: 'blur(40px)',
      }}
      animate={{
        x: mousePosition.x - 192, // 192 is half of w-96 (384px)
        y: mousePosition.y - 192,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 250,
        mass: 0.5,
      }}
    />
  );
}
