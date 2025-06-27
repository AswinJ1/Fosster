import { useEffect, useState } from "react";

const FloatingParticle = ({ delay = 0, duration = 8 }: { delay?: number; duration?: number }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      className="absolute w-1 h-1 bg-white/30 rounded-full pointer-events-none transition-all duration-[8000ms] ease-in-out"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const FloatingElement = ({ 
  children, 
  className = "", 
  delay = false 
}: { 
  children: React.ReactNode; 
  className?: string; 
  delay?: boolean; 
}) => (
  <div className={`${delay ? "floating-animation-delayed" : "floating-animation"} ${className}`}>
    {children}
  </div>
);

export default function Hero() {
  return (
    <main className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-[hsl(235,85.6%,64.7%)]/30 rounded-full particle floating-animation" />
        <div className="absolute top-[20%] right-[20%] w-1.5 h-1.5 bg-[hsl(235,85.6%,64.7%)]/30 rounded-full particle floating-animation-delayed" />
        <div className="absolute top-[60%] left-[10%] w-0.5 h-0.5 bg-[hsl(235,85.6%,64.7%)]/30 rounded-full particle floating-animation" />
        <FloatingParticle delay={0} duration={8} />
        <FloatingParticle delay={2} duration={10} />
        <FloatingParticle delay={4} duration={12} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              GROUP CHAT<br />
              THAT'S ALL<br />
              ABOUT<br />
              <span className="text-[hsl(235,85.6%,64.7%)]">FUN & GAMES</span>
            </h1>

            <p className="text-lg md:text-xl text-[hsl(215,8.8%,73.3%)] leading-relaxed max-w-md">
              Discord is great for playing games and chilling with friends, or even building a worldwide community.
              Customize your own space to talk, play, and hang out.
            </p>
          </div>

          {/* Right Content - 3D Illustrations */}
          <div className="relative h-96 lg:h-full">
            {/* Discord Interface Mockup */}
            <FloatingElement className="absolute top-0 right-0">
              <div className="w-80 h-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl transform rotate-6 border border-gray-700">
                <div className="p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex">
                    <div className="w-16 bg-gray-700 h-48 rounded-l-lg"></div>
                    <div className="flex-1 bg-gray-600 h-48 rounded-r-lg p-2">
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-500 rounded w-1/2"></div>
                        <div className="h-2 bg-[hsl(235,85.6%,64.7%)] rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingElement>

            {/* Mobile Discord App */}
            <FloatingElement delay className="absolute bottom-12 right-16">
              <div className="w-24 h-48 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg shadow-2xl transform -rotate-12 border border-gray-700">
                <div className="p-2 space-y-1">
                  <div className="h-1 bg-gray-600 rounded w-full"></div>
                  <div className="h-1 bg-gray-500 rounded w-3/4"></div>
                  <div className="h-1 bg-[hsl(235,85.6%,64.7%)] rounded w-1/2"></div>
                </div>
              </div>
            </FloatingElement>

            {/* 3D Character Elements */}
            <FloatingElement className="absolute top-1/4 left-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full shadow-lg border-4 border-white">
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
            </FloatingElement>

            {/* Gaming Controller */}
            <FloatingElement delay className="absolute bottom-1/4 left-12">
              <div className="w-12 h-8 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-lg transform rotate-12 border border-gray-600">
                <div className="flex justify-between items-center h-full px-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </FloatingElement>

            {/* Additional Discord Mascot */}
            <FloatingElement className="absolute top-1/2 right-1/3">
              <div className="w-20 h-20 bg-gradient-to-br from-[hsl(235,85.6%,64.7%)] to-purple-600 rounded-lg shadow-xl transform -rotate-6">
                <div className="w-full h-full rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-[hsl(235,85.6%,64.7%)] rounded-full"></div>
                  </div>
                </div>
              </div>
            </FloatingElement>

            {/* Voice Chat Indicator */}
            <FloatingElement delay className="absolute bottom-8 left-1/3">
              <div className="bg-green-500 w-8 h-8 rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </FloatingElement>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blobs */}
        <FloatingElement className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl">
          <div />
        </FloatingElement>
        <FloatingElement delay className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-500/15 to-purple-500/15 rounded-full blur-3xl">
          <div />
        </FloatingElement>

        {/* Additional floating particles */}
        <FloatingElement className="absolute top-1/3 left-1/5 w-2 h-2 bg-[hsl(235,85.6%,64.7%)]/50 rounded-full">
          <div />
        </FloatingElement>
        <FloatingElement delay className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-purple-400/40 rounded-full">
          <div />
        </FloatingElement>
        <FloatingElement className="absolute top-2/3 left-1/3 w-1 h-1 bg-white/60 rounded-full">
          <div />
        </FloatingElement>
      </div>
    </main>
  );
}
