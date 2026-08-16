import { useEffect, useState } from 'react';

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [smoothPos, setSmoothPos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      const targetX = (e.clientX / window.innerWidth) * 100;
      const targetY = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x: targetX, y: targetY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth interpolated tracking for organic feel
    const loop = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.1,
        y: prev.y + (mousePos.y - prev.y) * 0.1
      }));
      animationFrameId = requestAnimationFrame(loop);
    };
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos.x, mousePos.y]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Primary Dynamic Mouse Cursor Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `
            radial-gradient(650px circle at ${smoothPos.x}% ${smoothPos.y}%, rgba(59, 130, 246, 0.22), transparent 75%),
            radial-gradient(450px circle at ${smoothPos.x}% ${smoothPos.y}%, rgba(6, 182, 212, 0.25), transparent 60%),
            radial-gradient(800px circle at ${100 - smoothPos.x}% ${100 - smoothPos.y}%, rgba(99, 102, 241, 0.12), transparent 70%)
          `
        }}
      />

      {/* 2. Cyber Technical Blueprint Dot Grid with Smooth Scroll Parallax */}
      <div
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(circle, #38bdf8 1.2px, transparent 1.2px)`,
          backgroundSize: '36px 36px',
          transform: `translateY(${(scrollY * 0.15) % 36}px)`
        }}
      />

      {/* 3. Subtle Fine Accent Line Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #60a5fa 1px, transparent 1px),
            linear-gradient(to bottom, #60a5fa 1px, transparent 1px)
          `,
          backgroundSize: '144px 144px',
          transform: `translateY(${(scrollY * 0.08) % 144}px)`
        }}
      />

      {/* 4. Ambient Deep Glowing Atmospheric Orbs with Scroll Parallax Shift */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/20 dark:bg-blue-600/25 rounded-full blur-[140px] transition-transform duration-500"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-[150px] transition-transform duration-500"
        style={{ transform: `translateY(${scrollY * 0.12}px)` }}
      />
      <div
        className="absolute bottom-10 left-1/4 w-[600px] h-[400px] bg-indigo-600/15 dark:bg-indigo-600/20 rounded-full blur-[160px] transition-transform duration-500"
        style={{ transform: `translateY(${scrollY * -0.05}px)` }}
      />
    </div>
  );
}
