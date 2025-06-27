
'use client';

import { Button } from "@components/ui/button";
// import CountdownTimer from "@components/countdown-timer";

export default function DiscordHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[hsl(235,85%,64%)] to-[hsl(223,21%,11%)] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-[15%] left-[10%] w-4 h-4 bg-white/20 rounded-full animate-float-slow"></div>
        <div className="absolute top-[25%] right-[15%] w-6 h-6 bg-white/15 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-[30%] left-[20%] w-3 h-3 bg-white/25 rounded-full animate-float"></div>
        <div className="absolute top-[60%] right-[25%] w-5 h-5 bg-white/10 rounded-full animate-float-slow"></div>
        
        {/* Abstract shapes */}
        <div className="absolute top-[20%] right-[10%] w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-[20%] left-[15%] w-32 h-32 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-left space-y-8 z-10 relative">
            <div className="space-y-2">
              <h1 className="text-8xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                FOSSter 2025
              </h1>
              {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/90 leading-tight">
                From First Contributions<br />
                to Future Tech
              </h2> */}
              <p className="text-lg md:text-xl text-[hsl(300,85%,70%)] font-semibold">
                The Premier Event for Open-Source Contributors
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
                Join 800+ passionate open-source enthusiasts, developers, and thought leaders 
                for a 2 day celebration of collaboration, contribution, and cutting-edge innovation.
              </p>
              
              {/* Quick Facts */}
              {/* <div className="grid grid-cols-2 gap-4 text-sm text-white/80 max-w-lg">
                <div><span className="font-semibold">Location:</span> Bangalore, India</div>
                <div><span className="font-semibold">Date:</span> TBD</div>
                <div><span className="font-semibold">Audience:</span> Developers, Students, Leaders</div>
                <div><span className="font-semibold">Format:</span> Talks • Workshops • Panels</div>
              </div> */}
            </div>

            {/* Countdown Timer */}
            {/* <div className="py-4">
              <CountdownTimer />
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Register Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Sponsor Us
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Call for Speakers
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Device Mockups */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            {/* Main laptop mockup */}
            <div className="relative z-20 transform rotate-6 hover:rotate-3 transition-transform duration-500">
             <img src="/boy.png" alt="Laptop Mockup" className="w-full h-auto max-w-md  " />  
            </div>

            {/* Mobile phone mockup */}
            <div className="absolute bottom-8 right-12 z-10 transform -rotate-12 hover:-rotate-6 transition-transform duration-500">
             <img src="/phone.webp" alt="Mobile Mockup" className="w-48 h-auto" />
            </div>

            {/* Floating chat bubble */}
            <div className="absolute top-16 left-8 z-30 transform hover:scale-110 transition-transform duration-300">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <div className="w-20 h-auto bg-white rounded-full flex items-center justify-center text-white font-bold text-sm">
                  <img src="/git.png" alt="" className="w-20 h-auto" />
                </div>
              </div>
            </div>

            {/* Floating code icon */}
            <div className="absolute bottom-16 left-4 z-30 transform hover:scale-110 transition-transform duration-300">
              <div className="bg-gradient-to-br from-[hsl(142,76%,36%)] to-[hsl(235,85%,64%)] rounded-lg p-3 shadow-lg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}