'use client';
import React from 'react';

export default function OpenSourceQuizzes() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f172a] via-[#1e1e2e] to-[#111827] text-white py-16 px-6 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-violet-400 mb-3">
            Open-Source Quizzes – FOSSter 2025
          </h2>
          <p className="text-xl text-lime-400 font-medium">Test Your Knowledge. Prove Your FOSS IQ!</p>
        </div>

        {/* What */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-violet-300">What are Open-Source Quizzes?</h3>
          <p className="text-gray-300 leading-relaxed">
            The Open-Source Quizzes challenge is your opportunity to flex your knowledge of the vast FOSS universe.
            From GNU/Linux origins and licensing trivia to major community figures and project histories—this quiz
            covers it all. It's engaging, educational, and a fun way to see how deep your open-source roots go!
          </p>
        </div>

        {/* How to Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-lime-300">How to Play & Rules</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Select Your Quiz:</strong> Pick from themed quizzes focused on specific areas of open source.</li>
            <li><strong>Answer Against the Clock:</strong> Each round is timed for an added challenge.</li>
            <li><strong>Accuracy & Speed:</strong> Correct answers earn points; speed settles the tie!</li>
            <li><strong>Instant Feedback:</strong> Get your score and breakdown immediately after completion.</li>
            <li><strong>Climb the Leaderboard:</strong> See how you stack up against fellow FOSSters.</li>
          </ul>
        </div>

        {/* Objective */}
        <div>
          <h4 className="text-xl font-semibold text-blue-300 mb-2">Objective</h4>
          <p className="text-gray-300">
            Answer as many questions correctly as possible—faster than anyone else—to prove your command of open-source knowledge.
          </p>
        </div>

        {/* Why Play */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-pink-400">Why Play Open-Source Quizzes?</h3>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li><strong>Expand Your Knowledge:</strong> Reinforce your FOSS fundamentals and learn new insights.</li>
            <li><strong>Fun Learning:</strong> Trivia-style questions make learning fun and light.</li>
            <li><strong>Test Your Memory:</strong> Recall what you’ve read, used, and explored.</li>
            <li><strong>Friendly Competition:</strong> Challenge your friends and win bragging rights.</li>
            <li><strong>Quick & Engaging:</strong> Short enough for a break, rewarding enough to repeat!</li>
          </ul>
        </div>

        {/* Scoring */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-300">Scoring & Winning</h3>
          <p className="text-gray-300">
            Scores are calculated based on the number of correct answers and the speed of completion.
            Top scorers make the daily leaderboard and winners are announced throughout the event.
          </p>
        </div>

        {/* Prizes */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-orange-300">Prizes</h3>
          <p className="text-gray-300">
            Top quizmasters will win amazing rewards like FOSSter swag, cool tech gear, and gift vouchers!
          </p>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-semibold text-lime-300">Think You Can Win?</h3>
          <p className="text-gray-300 text-lg">
            If your brain is a database of open-source facts and trivia, step up and prove your FOSS IQ at FOSSter 2025!
          </p>
          <a
            href="/register"
            className="inline-block mt-4 bg-violet-500 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-violet-400 transition"
          >
            Secure Your FOSSter 2025 Pass
          </a>
        </div>

        {/* Sponsor Message */}
        <div className="mt-12 space-y-4 border-t border-gray-700 pt-8">
          <h3 className="text-2xl font-semibold text-fuchsia-300">Sponsor Our Game Zone Prizes</h3>
          <p className="text-gray-300">
            Want to connect with passionate open-source minds? Sponsor prizes for the Game Zone’s Open-Source Quizzes and gain visibility among engaged developers.
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>Showcase your brand to a tech-savvy, curious crowd.</li>
            <li>Support continuous learning in the open-source space.</li>
            <li>Meet developers with a strong grasp of software freedom and collaboration.</li>
          </ul>
          <p className="text-gray-300">
            To sponsor, contact us at:{' '}
            <a href="mailto:sponsors@fosster.in" className="text-lime-400 underline hover:text-lime-300">
              sponsors@fosster.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
