'use client';
import React from 'react';

export default function TypingChallenge() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-pink-500 mb-4">
            Typing Challenge at FOSSter 2025
          </h2>
          <p className="text-xl font-medium text-blue-400">How Fast Can You Code?</p>
        </div>

        {/* What is the Typing Challenge */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-300">What is the Typing Challenge?</h3>
          <p className="text-gray-300 leading-relaxed">
            The Typing Challenge is a classic test of speed and accuracy, specifically tailored for developers!
            This game pushes you to type lines of code, programming snippets, and technical jargon as quickly and
            accurately as possible. It's not just about speed; precision matters to claim the top spot on the leaderboard.
          </p>
        </div>

        {/* How to Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-pink-400">How to Play & Rules</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Access the Station:</strong> Head to a designated Typing Challenge station within the FOSSter Game Zone.</li>
            <li><strong>Start Your Clock:</strong> A timer begins the moment you start typing the provided code snippet.</li>
            <li><strong>Accuracy First:</strong> You must type the code exactly as displayed. Errors will count against your score or slow you down.</li>
            <li><strong>Complete the Snippet:</strong> Finish the entire coding passage to record your time.</li>
            <li><strong>Leaderboard Ready:</strong> Your score (time + accuracy penalties) will be instantly displayed on the leaderboard.</li>
          </ul>
        </div>

        {/* Objective */}
        <div>
          <h4 className="text-xl font-semibold text-purple-300 mb-2">Objective</h4>
          <p className="text-gray-300">
            Type the given code snippet with the highest accuracy in the shortest amount of time.
          </p>
        </div>

        {/* Why Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-emerald-400">Why Play the Typing Challenge?</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Boost Your Speed:</strong> Improve your typing speed, a fundamental skill for any developer.</li>
            <li><strong>Enhance Accuracy:</strong> Develop precision in your coding, reducing errors and saving debugging time.</li>
            <li><strong>Fun & Competitive:</strong> Enjoy a quick, engaging break while competing for top honors.</li>
            <li><strong>Quick Test:</strong> A fast way to measure and improve a core developer skill.</li>
          </ul>
        </div>

        {/* Scoring */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-300">Scoring & Winning</h3>
          <p className="text-gray-300">
            Scores are based on the time taken to complete the snippet, with penalties for inaccuracies.
            The fastest and most accurate typists will climb the daily leaderboard.
            Winners will be announced at the end of each day or throughout the event.
          </p>
        </div>
      </div>
    </section>
  );
}
