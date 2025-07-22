'use client'
import React from 'react'
import {
  Users,
  MessageSquareQuote,
  Lightbulb,
  Globe,
  Landmark,
  Mic,
  CalendarClock,
} from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: <Users className="text-blue-600 w-6 h-6" />,
    title: 'Gain Diverse Perspectives',
    description: 'Hear from multiple experts as they unpack complex FOSS topics from various angles.',
  },
  {
    icon: <Lightbulb className="text-yellow-500 w-6 h-6" />,
    title: 'Spark New Ideas',
    description: 'The live, interactive format fosters creative thinking and collaborative solutions.',
  },
  {
    icon: <MessageSquareQuote className="text-green-600 w-6 h-6" />,
    title: 'Engage with Experts',
    description: 'Q&A segments provide direct interaction and learning opportunities with panelists.',
  },
  {
    icon: <Globe className="text-purple-600 w-6 h-6" />,
    title: 'Stay Ahead of Trends',
    description: 'Panels cover the most relevant, emerging themes in open source and tech.',
  },
]

const PanelDiscussions = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Panel Discussions at FOSSter 2025
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Dive Deep into Open Source Trends
        </p>
      </div>

      {/* What & Why Section */}
      <div className="mb-12 space-y-8">
        <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-inner">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">What are Panel Discussions?</h3>
          <p className="text-gray-700">
            FOSSter 2025's Panel Discussions are live, moderated conversations featuring thought
            leaders discussing pivotal topics in open source. Expect interactive dialogue,
            cross-disciplinary insights, and vibrant debate — a format that moves far beyond solo talks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-3">
                {icon}
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Themes & Focus */}
      <div className="mb-12 bg-white border border-gray-200 p-6 md:p-10 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Themes & Focus Areas</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>The Future of Open Source Governance & Sustainability</li>
          <li>Building Inclusive Communities: Diversity, Equity & Belonging in FOSS</li>
          <li>Emerging Technologies & Open Source's Role (AI, Web3, Cloud Native, etc.)</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Each panel includes developers, maintainers, strategists, and academics—ensuring a broad,
          inclusive, and expert-led discussion.
        </p>
      </div>

      {/* Sponsorship Info */}
      <div className="mb-12 bg-gray-50 p-6 md:p-10 rounded-xl shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Panel Sponsorship Opportunities
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Prominent Branding:</strong> Showcased during the session for high visibility.</li>
          <li><strong>Thought Leadership:</strong> Align your brand with forward-thinking FOSS topics.</li>
          <li><strong>Direct Participation:</strong> Eligible sponsor reps may join panels.</li>
          <li><strong>High Engagement:</strong> Panels draw peak interest — great exposure guaranteed.</li>
        </ul>
        <p className="mt-4 text-gray-700">
          Interested in sponsoring?{' '}
          <Link href="/sponsor" className="text-blue-600 hover:underline font-medium">
            Visit our Sponsor Page
          </Link>{' '}
          or email <a href="mailto:sponsors@fosster.in" className="text-blue-600">sponsors@fosster.in</a>.
        </p>
      </div>

      {/* Panelist Lineup */}
      <div className="mb-12">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Panelists & Moderators
        </h3>
        <p className="text-gray-600">
          We're curating an exciting group of panelists and moderators. Stay tuned as we announce
          their names and discussion topics.
        </p>
        <p className="mt-2 text-gray-500 italic">[Panelist & Moderator Lineup Coming Soon!]</p>
      </div>

      {/* Schedule */}
      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 flex justify-center items-center gap-2">
          <CalendarClock className="w-5 h-5 text-indigo-600" />
          Panel Discussion Schedule
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Dates, times, and themes will be included in the official agenda.
        </p>
        <p className="mt-2 text-gray-500 italic">[View Full Agenda & Schedule – Coming Soon!]</p>
      </div>
    </section>
  )
}

export default PanelDiscussions
