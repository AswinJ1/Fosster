'use client'
import React from 'react'
import {
  Mic,
  BrainCircuit,
  Presentation,
  Users,
  ScrollText,
  Sparkles,
  CalendarClock,
} from 'lucide-react'
import Link from 'next/link'

const highlights = [
  {
    icon: <BrainCircuit className="text-purple-600 w-6 h-6" />,
    title: 'Learn from the Best',
    description:
      'Absorb insights directly from seasoned professionals and core maintainers of key open-source projects.',
  },
  {
    icon: <Presentation className="text-green-600 w-6 h-6" />,
    title: 'Deep Dive into Topics',
    description:
      'Each session offers a focused, hour-long exploration of technical and community-driven challenges.',
  },
  {
    icon: <Sparkles className="text-yellow-600 w-6 h-6" />,
    title: 'Ignite Inspiration',
    description:
      'Hear the stories of innovators making an impact and walk away motivated to build your own path.',
  },
  {
    icon: <Users className="text-pink-600 w-6 h-6" />,
    title: 'Broaden Your Perspective',
    description:
      'Understand community dynamics, collaboration strategies, and the broader impact of open-source development.',
  },
]

const SpeakerSessions = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Speaker Sessions at FOSSter 2025
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Gain Deep Insights from Open Source Visionaries
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-14">
        {highlights.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-3">
              {icon}
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      {/* Speaker Lineup */}
      <div className="mb-12 bg-gray-50 p-6 md:p-10 rounded-xl shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Speaker Session Lineup</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>
            <strong>4 Expert Talks:</strong> Renowned professionals will cover deep technical topics,
            real-world case studies, and cutting-edge open-source innovations.
          </li>
          <li>
            <strong>3 Maintainer Sessions:</strong> Invited maintainers of high-impact projects will
            discuss architecture, challenges, community management, and future roadmaps.
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-500 italic">
          Our speakers are selectively curated for expertise and community impact.
        </p>
      </div>

      {/* Call for Proposals */}
      <div className="mb-12 p-6 md:p-10 border border-gray-200 rounded-xl shadow-sm bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Call for Speaker Proposals
        </h3>
        <p className="text-gray-700 mb-4">
          Are you a thought leader or project maintainer in open source? We're now accepting proposals for 1-hour sessions.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>A compelling title</li>
          <li>An abstract (150–250 words)</li>
          <li>Your speaker bio (100–150 words)</li>
        </ul>
        <Link
          href="/submit-speaker-proposal" // Replace with actual link
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Submit Your Speaker Proposal
        </Link>
      </div>

      {/* Coming Soon Sections */}
      <div className="mb-14">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Meet Our Speakers & Maintainers
        </h3>
        <p className="text-gray-600">
          Stay tuned! We'll soon announce our confirmed speakers, their topics, and bios.
        </p>
        <p className="text-gray-500 italic mt-2">
          [Speaker Lineup & Bios Coming Soon!]
        </p>
      </div>

      {/* Schedule Section */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 flex justify-center items-center gap-2">
          <CalendarClock className="w-5 h-5 text-indigo-600" /> Speaker Session Schedule
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Timing details and dedicated tracks will be part of the official FOSSter 2025 agenda.
        </p>
        <p className="mt-2 text-gray-500 italic">[View Full Agenda & Schedule – Coming Soon!]</p>
      </div>
    </section>
  )
}

export default SpeakerSessions
