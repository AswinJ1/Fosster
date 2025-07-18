'use client';
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Call to Action Section */}
        <div className="flex flex-col items-center gap-4 rounded-lg bg-indigo-600 p-6 shadow-lg sm:flex-row sm:justify-between mb-16">
          <strong className="text-xl text-white sm:text-xl">Join FOSSter 2025!</strong>
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 hover:bg-transparent hover:text-white transition-colors"
            href="/attend"
          >
            <span className="text-sm font-medium">Register Now</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="text-lg font-medium text-white">About</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About FOSSter</Link></li>
              <li><Link href="/attend" className="text-gray-300 hover:text-white transition">Attend</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium text-white">Events</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/events" className="text-gray-300 hover:text-white transition">All Events</Link></li>
              <li><Link href="/events/workshops" className="text-gray-300 hover:text-white transition">Workshops</Link></li>
              <li><Link href="/events/lightning-talks" className="text-gray-300 hover:text-white transition">Lightning Talks</Link></li>
              <li><Link href="/events/speaker-sections" className="text-gray-300 hover:text-white transition">Speakers</Link></li>
              <li><Link href="/events/jobfair" className="text-gray-300 hover:text-white transition">Job Fair</Link></li>
              <li><Link href="/events/panel-discussion" className="text-gray-300 hover:text-white transition">Panel Discussion</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium text-white">GameZones</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/events/gamezones/bug-fixing" className="text-gray-300 hover:text-white transition">Bug Fixing</Link></li>
              <li><Link href="/events/gamezones/commandline-tasks" className="text-gray-300 hover:text-white transition">CLI Tasks</Link></li>
              <li><Link href="/events/gamezones/opensource-quiz" className="text-gray-300 hover:text-white transition">Open Source Quiz</Link></li>
              <li><Link href="/events/gamezones/regex-writing" className="text-gray-300 hover:text-white transition">Regex Writing</Link></li>
              <li><Link href="/events/gamezones/typing-challenge" className="text-gray-300 hover:text-white transition">Typing Challenge</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium text-white">Venue</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/venue/banglore" className="text-gray-300 hover:text-white transition">Bangalore</Link></li>
              <li><Link href="/venue/hotels" className="text-gray-300 hover:text-white transition">Hotels</Link></li>
              <li><Link href="/venue/recommendation" className="text-gray-300 hover:text-white transition">Recommendations</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-medium text-white">Connect</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/sponsor" className="text-gray-300 hover:text-white transition">Sponsor</Link></li>
              <li><Link href="#newsletter" className="text-gray-300 hover:text-white transition">Newsletter</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 sm:flex-row">
          <div className="flex justify-center gap-6 sm:justify-start">
            <a href="https://twitter.com/fosster2025" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://github.com/fosster2025" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/fosster2025" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://discord.gg/fosster2025" className="text-gray-400 hover:text-white transition" aria-label="Discord">
              <span className="sr-only">Discord</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
              </svg>
            </a>
          </div>
          
          <p className="mt-4 text-center text-sm text-gray-400 sm:mt-0">
            Copyright &copy; 2025 FOSSter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}