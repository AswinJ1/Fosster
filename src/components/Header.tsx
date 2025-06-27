// 'use client';
// import { useEffect, useState } from 'react';
// import Spline from '@splinetool/react-spline';

// export default function Header() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   // Set your event date here (example: March 15, 2025)
//   const eventDate = new Date('2025-07-15T00:00:00').getTime();

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const difference = eventDate - now;

//       if (difference > 0) {
//         setTimeLeft({
//           days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((difference % (1000 * 60)) / 1000),
//         });
//       } else {
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [eventDate]);

//   function onLoad() {
//     setIsLoading(false);
//     console.log('Spline scene loaded');
//   }

//   return (
//     <main className="w-full h-screen relative overflow-hidden">
//       {/* Spline container with error handling */}
//       <div className="absolute inset-0">
//         {isLoading && (
//           <div className="w-full h-full flex items-center justify-center bg-gray-50">
//             <div className="text-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
//               <p className="mt-4 text-gray-600">Loading 3D Scene...</p>
//             </div>
//           </div>
//         )}
//         <Spline
//           scene="stage.splinecode"
//           onLoad={onLoad}
//           style={{ width: '100%', height: '100vh' }}
//         />
//       </div>

//       {/* Heading overlay */}
//       <div className="absolute top-1/2 right-4 md:right-16 transform -translate-y-1/2 p-4 md:p-6 max-w-md text-center md:text-right z-10">
//         <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-wide">
//           FOSSTER 2025
//         </h1>
//         <p className="text-white text-sm md:text-base font-medium">
//           From First Contributions to Future Tech
//         </p>
//         <p className="text-white text-sm md:text-base mb-4 font-medium">
//           The Premier Event for Open-Source Contributors
//         </p>

//         <div className="flex flex-wrap justify-center md:justify-end gap-3 mt-4">
//           <button className="px-5 py-2 bg-white hover:bg-opacity-80 text-black font-semibold rounded-lg shadow-md transition-all duration-300 hover:scale-105">
//             Register Now
//           </button>
//           <button className="px-5 py-2 bg-white hover:bg-opacity-80 text-black font-semibold rounded-lg shadow-md transition-all duration-300 hover:scale-105">
//             Sponsor Us
//           </button>
//           <button className="px-5 py-2 bg-white hover:bg-opacity-80 text-black font-semibold rounded-lg shadow-md transition-all duration-300 hover:scale-105">
//             Call for Speakers
//           </button>
//         </div>
//       </div>

//       {/* Countdown Timer - Centered on page */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-4xl">
//         <div className="text-center px-4">
//           <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 tracking-wider uppercase">
//             Event Starts In
//           </h2>
//           <div className="flex justify-center gap-4 md:gap-8">
//             <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 md:p-6 min-w-24 md:min-w-32">
//               <div className="text-4xl md:text-7xl font-black text-white mb-2">
//                 {timeLeft.days.toString().padStart(2, '0')}
//               </div>
//               <div className="text-lg md:text-lg text-gray-200 font-semibold tracking-wide">
//                 DAYS
//               </div>
//             </div>
//             <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 md:p-6 min-w-24 md:min-w-32">
//               <div className="text-4xl md:text-7xl font-black text-white mb-2">
//                 {timeLeft.hours.toString().padStart(2, '0')}
//               </div>
//               <div className="text-lg md:text-lg text-gray-200 font-semibold tracking-wide">
//                 HOURS
//               </div>
//             </div>
//             <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 md:p-6 min-w-24 md:min-w-32">
//               <div className="text-4xl md:text-7xl font-black text-white mb-2">
//                 {timeLeft.minutes.toString().padStart(2, '0')}
//               </div>
//               <div className="text-lg md:text-lg text-gray-200 font-semibold tracking-wide">
//                 MINS
//               </div>
//             </div>
//             <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 md:p-6 min-w-24 md:min-w-32">
//               <div className="text-4xl md:text-7xl font-black text-white mb-2 animate-pulse">
//                 {timeLeft.seconds.toString().padStart(2, '0')}
//               </div>
//               <div className="text-lg md:text-lg text-gray-200 font-semibold tracking-wide">
//                 SECS
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }



import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header