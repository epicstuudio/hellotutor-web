'use client';

import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { BookOpen, GraduationCap, Pencil, Compass, Microscope, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface InteractiveNotFoundProps {
  title: string;
  description: string;
  backToHomeText: string;
}

export function InteractiveNotFound({
  title,
  description,
  backToHomeText,
}: InteractiveNotFoundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for the magnetic effect
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transform mouse position to parallax movement (for 404 text)
  const textX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const textY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);
  
  // Subtler parallax for the background glow
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-50, 50]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-50, 50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-0.5 to 0.5)
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Floating academic icons with initial random positions
  const icons = [
    { Icon: BookOpen, color: 'text-brand-primary', size: 48, top: '20%', left: '15%', delay: 0 },
    { Icon: GraduationCap, color: 'text-brand-secondary', size: 64, top: '15%', left: '75%', delay: 0.2 },
    { Icon: Pencil, color: 'text-orange-500', size: 40, top: '70%', left: '10%', delay: 0.4 },
    { Icon: Compass, color: 'text-blue-500', size: 56, top: '65%', left: '80%', delay: 0.1 },
    { Icon: Microscope, color: 'text-purple-500', size: 50, top: '40%', left: '85%', delay: 0.3 },
    { Icon: Sparkles, color: 'text-yellow-400', size: 32, top: '30%', left: '25%', delay: 0.5 },
  ];

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden py-20"
    >
      {/* Interactive glowing background orb */}
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none"
        style={{ x: glowX, y: glowY }}
      />

      {/* Draggable floating icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {icons.map(({ Icon, color, size, top, left, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute pointer-events-auto cursor-grab active:cursor-grabbing ${color}`}
            style={{ top, left }}
            initial={{ y: 0 }}
            animate={{ 
              y: [-15, 15, -15],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            whileHover={{ scale: 1.2 }}
            whileDrag={{ scale: 1.1 }}
          >
            <Icon size={size} strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
        
        {/* Parallax 404 Text */}
        <motion.div
          style={{ x: textX, y: textY }}
          className="relative group mb-6"
        >
          <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter text-content-brand select-none drop-shadow-sm">
            404
          </h1>
          {/* Fun little interactive badge that appears on hover */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface text-content px-4 py-2 rounded-full shadow-lg border border-edge font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
          >
            You found the secret playground!
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-h3 text-content mb-4 font-semibold">
            {title}
          </h2>
          <p className="text-body-lg text-content-secondary mb-10 max-w-md mx-auto">
            {description}
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button href="/" variant="primary" size="lg" className="shadow-md hover:shadow-lg">
              {backToHomeText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
