'use client'
import { useRef, useEffect } from 'react';

export default function Homecoming() {
  const container = useRef<HTMLDivElement>(null);
  const stickyMask = useRef<HTMLDivElement>(null);
  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (stickyMask.current && container.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    }
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (!stickyMask.current || !container.current) return 0;
    
    const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <main className="">
      <div 
        ref={container} 
        className="relative h-[300vh] bg-white"
      >
        <div 
          ref={stickyMask} 
          className="flex overflow-hidden sticky top-0 h-screen items-center justify-center"
          style={{
            maskImage: "url('/mask.svg')",
            maskPosition: '52.35% center',
            maskRepeat: 'no-repeat',
            maskSize: '80%'
          }}
        >
          <video 
            autoPlay 
            muted 
            loop 
            className="h-full w-full object-cover"
          >
            <source src="/nature.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    </main>
  );
}