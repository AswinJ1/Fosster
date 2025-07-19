'use client';
import React from 'react';

export default function BugFixingRaces() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-16 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        style={{ pointerEvents: 'none' }}
      >
        <source src="/BUGR.mp4" type="video/mp4" />
      </video>
      {/* Overlay for clarity */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-lime-400 mb-3">
            Bug Fixing Races – FOSSter 2025
          </h2>
          <p className="text-xl text-pink-400 font-medium">Diagnose. Debug. Dominate!</p>
        </div>

        {/* What */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-lime-300">What are Bug Fixing Races?</h3>
          <p className="text-gray-300 leading-relaxed">
            The Bug Fixing Races are an electrifying challenge designed to test your debugging skills under pressure! Participants are presented with open-source code snippets containing hidden bugs. Your mission: identify, understand, and fix them fast. It’s a race against the clock and your fellow developers to submit a perfect solution!
          </p>
        </div>

        {/* How to Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-pink-300">How to Play & Rules</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Select Your Challenge:</strong> Pick from various bug-ridden code snippets with different difficulty levels.</li>
            <li><strong>Start Your Timer:</strong> The race begins the moment you dive into the code.</li>
            <li><strong>Identify & Fix:</strong> Debug syntax, logic, and runtime issues as quickly and cleanly as possible.</li>
            <li><strong>Test Your Solution:</strong> Ensure all test cases pass before submitting.</li>
            <li><strong>Submit & Score:</strong> Time stops once you submit a correct and fully functional solution.</li>
          </ul>
        </div>

        {/* Objective */}
        <div>
          <h4 className="text-xl font-semibold text-emerald-400 mb-2">Objective</h4>
          <p className="text-gray-300">
            Submit a perfectly debugged code snippet in the shortest time possible. Only the sharpest minds survive!
          </p>
        </div>

        {/* Why Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-300">Why Play Bug Fixing Races?</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Sharpen Debugging Skills:</strong> Tackle real-world bugs efficiently.</li>
            <li><strong>Improve Problem-Solving:</strong> Enhance logical thinking under time pressure.</li>
            <li><strong>Boost Speed:</strong> Learn to solve issues quickly — just like in the real world!</li>
            <li><strong>Learn Common Pitfalls:</strong> Gain experience in recognizing frequent dev mistakes.</li>
            <li><strong>Thrilling Competition:</strong> Enjoy the adrenaline rush of racing other devs!</li>
          </ul>
        </div>

        {/* Scoring */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-300">Scoring & Winning</h3>
          <p className="text-gray-300">
            Scores are based on the time taken to submit a valid solution. Penalties may be applied for incorrect attempts or inefficient code. The fastest bug slayers rise to the top of the leaderboard — announced daily!
          </p>
        </div>

        {/* Prizes */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-orange-300">Prizes</h3>
          <p className="text-gray-300">
            Conquer the bugs and win awesome rewards: FOSSter swag, cool gadgets, or valuable gift vouchers!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-semibold text-pink-400">Think You Can Win?</h3>
          <p className="text-gray-300 text-lg">
            If your debugging skills are legendary, the Bug Fixing Races are calling your name.
            Don’t miss out — join the fun and prove your coding chops!
          </p>
          <a
            href="/register"
            className="inline-block mt-4 bg-lime-500 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-lime-400 transition"
          >
            Secure Your FOSSter 2025 Pass
          </a>
        </div>

        {/* Sponsor Message */}
        <div className="mt-12 space-y-4 border-t border-gray-600 pt-8">
          <h3 className="text-2xl font-semibold text-fuchsia-300">Sponsor Our Game Zone Prizes</h3>
          <p className="text-gray-300">
            Are you a company looking to connect with top-tier developer talent? Sponsor Bug Fixing Races prizes to support open source, reward brilliance, and build visibility in the dev community!
          </p>
          <p className="text-gray-300">
            To inquire, email us at:{" "}
            <a
              href="mailto:sponsors@fosster.in"
              className="text-lime-400 underline hover:text-lime-300"
            >
              sponsors@fosster.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
