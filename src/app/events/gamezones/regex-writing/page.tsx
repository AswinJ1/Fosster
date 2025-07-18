'use client';
import React from 'react';

export default function RegexWriting() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e1e2e] to-[#111827] text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-pink-400 mb-3">
            FOSSter 2025: Regex Writing
          </h2>
          <p className="text-xl text-yellow-400 font-medium">Pattern Power! Master Regular Expressions.</p>
        </div>

        {/* What */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-pink-300">What is Regex Writing?</h3>
          <p className="text-gray-300 leading-relaxed">
            The Regex Writing challenge puts your pattern-matching prowess to the test! Given a variety of matching
            scenarios — from simple strings to advanced lookaheads — you’ll need to craft efficient and accurate regular
            expressions. Think of it as brain training for text parsing.
          </p>
        </div>

        {/* How to Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-lime-300">How to Play & Rules</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Receive Your Challenge:</strong> You'll get a specific text-matching task.</li>
            <li><strong>Write Your Regex:</strong> Create a pattern that matches the correct cases and avoids incorrect ones.</li>
            <li><strong>Test & Refine:</strong> Use provided test strings to improve your Regex solution.</li>
            <li><strong>Submit for Scoring:</strong> Submit once you're satisfied. It’ll be evaluated for accuracy and efficiency.</li>
            <li><strong>Leaderboard:</strong> The most concise and correct patterns will earn the top spots.</li>
          </ul>
        </div>

        {/* Objective */}
        <div>
          <h4 className="text-xl font-semibold text-blue-300 mb-2">Objective</h4>
          <p className="text-gray-300">
            Write the most accurate and (if possible) concise Regex to solve pattern-matching problems. Top regexers rise to the leaderboard!
          </p>
        </div>

        {/* Why Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-purple-300">Why Play Regex Writing?</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Master a Crucial Skill:</strong> Regex is core to data parsing, validation, and scripting.</li>
            <li><strong>Enhance Logic & Precision:</strong> Build sharper pattern-recognition and logical fluency.</li>
            <li><strong>Problem-Solving Fun:</strong> It’s like puzzles — but for developers.</li>
            <li><strong>Practical Application:</strong> Regex is everywhere — from web dev to data science.</li>
            <li><strong>Prove Your Prowess:</strong> Show off your ability to decode and define patterns with elegance.</li>
          </ul>
        </div>

        {/* Scoring */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-300">Scoring & Winning</h3>
          <p className="text-gray-300">
            Scores are based on accuracy and may factor in regex conciseness or efficiency.
            The best-crafted patterns climb the leaderboard. Winners will be announced daily.
          </p>
        </div>

        {/* Prizes */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-orange-300">Prizes</h3>
          <p className="text-gray-300">
            Precision pays off — top performers will win exclusive FOSSter swag, gadgets, or gift vouchers!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-semibold text-pink-400">Think You Can Win?</h3>
          <p className="text-gray-300 text-lg">
            If crafting precise patterns excites you, the Regex Writing challenge at FOSSter 2025 is where you belong.
          </p>
          <a
            href="/register"
            className="inline-block mt-4 bg-pink-500 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-pink-400 transition"
          >
            Secure Your FOSSter 2025 Pass
          </a>
        </div>

        {/* Sponsor Section */}
        <div className="mt-12 space-y-4 border-t border-gray-700 pt-8">
          <h3 className="text-2xl font-semibold text-fuchsia-300">Sponsor Our Game Zone Prizes</h3>
          <p className="text-gray-300">
            Looking to connect with skilled developers? Sponsor prizes for Regex Writing at FOSSter 2025 and boost your
            brand among tech-savvy problem solvers.
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Get visibility with highly analytical, precision-oriented devs.</li>
            <li>Support a fun, educational competition that sharpens essential skills.</li>
            <li>Build community goodwill and connect with standout talent.</li>
          </ul>
          <p className="text-gray-300">
            To sponsor, reach out at:{' '}
            <a href="mailto:sponsors@fosster.in" className="text-lime-400 underline hover:text-lime-300">
              sponsors@fosster.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
