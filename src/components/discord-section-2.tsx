'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';


export default function DiscordSection2() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              WHAT IS<br />
              FOSSter 2025?
            </h2>
            
            <div className="space-y-4 max-w-lg">
              <p className="text-lg text-gray-600 leading-relaxed">
                FOSSter isn't just a tech event — it's a movement to grow the open-source community from the ground up.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Across 2 focused days, FOSSter brings together beginners, seasoned contributors, and open-source champions to learn, collaborate, and connect.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're making your first Git commit or scaling global projects, FOSSter is where contribution meets community — through hands-on workshops, real-world challenges, and conversations that matter.
              </p>
              <div className="pt-4">
                <a href="#" className="text-[hsl(235,85%,64%)] font-semibold hover:underline">
                  Discover the FOSSter Experience →
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Video Call Mockup */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            {/* Main Video Container */}
            <div className="relative">
                <div className="relative">
                             <Fade triggerOnce direction="up" delay={350}>
                          <img src="/think.png" alt="Coder" className="w-full h-full object-cover rounded-2xl" />
                          </Fade>
                          </div>
              
              {/* Floating elements */}
              {/* <div className="absolute -top-6 -left-6 w-14 h-14 bg-pink-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-xl">🎥</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                <span className="text-white font-bold">HD</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-16 left-10 w-40 h-40 bg-green-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-10 right-16 w-28 h-28 bg-blue-100 rounded-full opacity-50"></div>
    </section>
  );
}