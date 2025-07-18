'use client'
import React from 'react'
import {
  BookOpenCheck,
  GitBranch,
  Github,
  Users,
  Lightbulb,
  GraduationCap,
  Globe,
} from 'lucide-react'
import Link from 'next/link'

const points = [
  {
    icon: <BookOpenCheck className="w-6 h-6 text-blue-600" />,
    title: 'Demystify Open Source',
    description:
      'Understand what open source is, why it matters, and how to be a part of it — no experience needed.',
  },
  {
    icon: <GitBranch className="w-6 h-6 text-green-600" />,
    title: 'Master Essential Tools',
    description:
      'Learn Git and GitHub through step-by-step, hands-on guidance with version control and collaboration workflows.',
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    title: 'Make Your First Contribution',
    description:
      'Find beginner-friendly projects, understand contribution flow, and submit your first Pull Request.',
  },
  {
    icon: <Users className="w-6 h-6 text-pink-500" />,
    title: 'Join the Community',
    description:
      'Explore open-source etiquette and best practices for engaging with global developer communities.',
  },
]

const audience = [
  'Students from any discipline',
  'Newcomers to programming or tech',
  'Curious minds exploring open source',
  'Anyone ready to make their first FOSS contribution',
]

const OpenSource101 = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Open Source 101 at FOSSter 2025
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Your First Step into the World of Open Source!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {points.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-3">
              {icon}
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="mb-12 bg-gray-50 rounded-xl p-6 md:p-10 text-gray-800 shadow-inner">
        <h3 className="text-2xl font-semibold mb-4">What You'll Learn & Experience</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Core open-source concepts, licenses, and philosophy</li>
          <li>Intro to Git: version control, branching, committing, and merging</li>
          <li>GitHub basics: repositories, issues, pull requests, and workflows</li>
          <li>Finding beginner-friendly projects to contribute to</li>
          <li>Community etiquette and best practices</li>
        </ul>
        <p className="mt-4">
          These sessions are led by <strong>Amfoss</strong> — India’s largest student-run tech club.
          You'll learn from experienced peers in a friendly and practical environment.
        </p>
        <Link
          href="https://amfoss.in"
          target="_blank"
          className="inline-flex mt-4 items-center text-blue-600 hover:underline font-medium"
        >
          Visit the Amfoss Website <Globe className="w-4 h-4 ml-2" />
        </Link>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Who Should Attend?</h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {audience.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">Schedule & Registration</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Timings and registration details for Open Source 101 will be announced as part of the
          FOSSter 2025 agenda. Be sure to check our&nbsp;
          <Link
            href="/registration"
            className="text-blue-600 hover:underline font-medium"
          >
            Tickets & Registration
          </Link>{' '}
          page for passes that include workshop access.
        </p>
        <p className="mt-3 text-gray-500 italic">[View Full Agenda & Schedule – Coming Soon!]</p>
      </div>
    </section>
  )
}

export default OpenSource101
