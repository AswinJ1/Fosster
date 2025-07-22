import React from "react";
import { BackgroundBeamsWithCollision } from "@components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="text-center relative z-20">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-black dark:text-white font-sans tracking-tight mb-4">
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-indigo-500 via-blue-500 to-indigo-600 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">FOSSter 2025</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-600 py-4">
              <span className="">FOSSter 2025</span>
            </div>
          </div>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          From First Contributions to Future Tech
        </h2>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          The Premier Event for Open-Source Contributors
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Register Now
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
            Sponsor Us
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-blue-500 text-blue-500 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
            Call for Speakers
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
