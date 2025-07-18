'use client';
import React from 'react';

export default function CommandLineTasks() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#111827] text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-400 mb-3">
            Command-Line Tasks – FOSSter 2025
          </h2>
          <p className="text-xl text-yellow-400 font-medium">Master the Terminal. Conquer the Challenge.</p>
        </div>

        {/* What */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-green-300">What are Command-Line Tasks?</h3>
          <p className="text-gray-300 leading-relaxed">
            The Command-Line Tasks challenge puts your terminal proficiency to the test! Solve real-world scenarios
            using core Unix tools — navigate directories, manipulate files, manage processes, and script your way
            through technical puzzles. Fast thinking and shell mastery are key!
          </p>
        </div>

        {/* How to Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-300">How to Play & Rules</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Access the Terminal:</strong> Visit a Command-Line Tasks station at the Game Zone.</li>
            <li><strong>Receive Your Scenario:</strong> You'll get a real-world challenge in a simulated shell environment.</li>
            <li><strong>Execute Commands:</strong> Use tools like <code className="text-lime-400">ls</code>, <code>grep</code>, <code>awk</code>, <code>sed</code>, <code>find</code>, and <code>ssh</code>.</li>
            <li><strong>Automated Validation:</strong> Your solution will be checked automatically for correctness.</li>
            <li><strong>Time Your Performance:</strong> Your score is based on speed and accuracy.</li>
          </ul>
        </div>

        {/* Objective */}
        <div>
          <h4 className="text-xl font-semibold text-cyan-300 mb-2">Objective</h4>
          <p className="text-gray-300">
            Solve the provided command-line puzzle with precision and speed. Accuracy, efficiency, and correct output determine your rank.
          </p>
        </div>

        {/* Why Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-pink-400">Why Play Command-Line Tasks?</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Boost Productivity:</strong> Command-line skills drastically improve daily dev workflows.</li>
            <li><strong>Deepen System Understanding:</strong> Learn how your OS behaves under the hood.</li>
            <li><strong>Problem-Solving Agility:</strong> Break down complex issues into efficient terminal operations.</li>
            <li><strong>Essential for Devs:</strong> A must-have skill for DevOps, scripting, and backend workflows.</li>
            <li><strong>Engaging & Practical:</strong> A fun way to level up an often overlooked but powerful skill.</li>
          </ul>
        </div>

        {/* Prizes */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-orange-300">Prizes</h3>
          <p className="text-gray-300">
            Conquer the command line and win exclusive rewards — from cool FOSSter gear to gadgets and gift vouchers!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-semibold text-lime-300">Think You Can Win?</h3>
          <p className="text-gray-300 text-lg">
            If the terminal is your playground and you pride yourself on shell mastery,
            the Command-Line Tasks challenge is for you.
          </p>
          <a
            href="/register"
            className="inline-block mt-4 bg-green-500 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-400 transition"
          >
            Secure Your FOSSter 2025 Pass
          </a>
        </div>

        {/* Sponsor Section */}
        <div className="mt-12 space-y-4 border-t border-gray-700 pt-8">
          <h3 className="text-2xl font-semibold text-fuchsia-300">Sponsor Our Game Zone Prizes</h3>
          <p className="text-gray-300">
            Are you a company looking to support the open-source community and gain visibility among developers?
            FOSSter 2025 seeks prize sponsors for our Game Zone challenges, including the Command-Line Tasks.
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Showcase your brand to an engaged, tech-savvy audience.</li>
            <li>Support real-world developer skills and reward excellence.</li>
            <li>Connect with top problem-solvers and future contributors.</li>
          </ul>
          <p className="text-gray-300">
            Contact us at:{' '}
            <a href="mailto:sponsors@fosster.in" className="text-lime-400 underline hover:text-lime-300">
              sponsors@fosster.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
