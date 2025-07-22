'use client'
import React from 'react'
import {
  Laptop,
  Wrench,
  Hammer,
  Terminal,
  BookOpenText,
  Settings2,
  CalendarDays,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: <Wrench className="text-blue-600 w-6 h-6" />,
    title: 'Practical Skill Building',
    description:
      'Gain real-world experience with open-source tools through hands-on exercises led by experts.',
  },
  {
    icon: <BookOpenText className="text-green-600 w-6 h-6" />,
    title: 'Expert Guidance',
    description:
      'Get personalized support and best practices from seasoned instructors throughout the sessions.',
  },
  {
    icon: <Hammer className="text-yellow-600 w-6 h-6" />,
    title: 'Deep Dives',
    description:
      'Focus on specific technologies with time to explore advanced techniques and real-world use cases.',
  },
  {
    icon: <Settings2 className="text-pink-600 w-6 h-6" />,
    title: 'Expand Your Toolset',
    description:
      'Broaden your knowledge in open-source ecosystems like Docker, Kubernetes, Git, and beyond.',
  },
]

const TechWorkshops = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Tech Workshops at FOSSter 2025
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Unlock New Skills. Dive Hands-On.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-14">
        {features.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-blue-50"
          >
            <div className="flex items-center gap-4 mb-3">
              {icon}
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-6 md:p-10 mb-12 shadow-inner">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Workshop Structure at FOSSter 2025
        </h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li><strong>Total Workshops:</strong> 4 intensive sessions</li>
          <li><strong>Daily Distribution:</strong> 2 workshops per day (Day 1: A & B, Day 2: C & D)</li>
          <li><strong>Format:</strong> Hands-on, guided, and practical sessions with real tools</li>
          <li><strong>Duration:</strong> Varies by topic depth, with ample time for engagement</li>
        </ul>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Featured Technologies & Topics <span className="text-sm text-gray-500 italic">(Coming Soon!)</span>
        </h3>
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          <li>Git & Advanced Version Control</li>
          <li>Docker & Containerization</li>
          <li>Kubernetes Orchestration</li>
          <li>Python / JavaScript Frameworks</li>
          <li>Open-Source Data Management Tools</li>
          <li>...and more!</li>
        </ul>
        <p className="mt-4 text-gray-500 italic">[Detailed Workshop Topics & Descriptions Coming Soon!]</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-10 mb-14 shadow-sm">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Workshop Access & Registration
        </h3>
        <p className="text-gray-700 mb-4">
          Access requires a Workshop Add-On in addition to your FOSSter 2025 pass.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-medium mb-2">General Access</h4>
            <p>₹699 per workshop</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Elite Pass Holders</h4>
            <p>₹299 per workshop</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Standard Pass Holders</h4>
            <p>₹399 per workshop</p>
          </div>
        </div>
        <p className="mt-6">
          Visit our{' '}
          <Link href="/registration" className="text-blue-600 hover:underline font-medium">
            Tickets & Registration
          </Link>{' '}
          page to secure your pass and choose workshops during signup.
        </p>
        <Link
          href="/register"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Register Now & Add Workshops
        </Link>
      </div>

      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">
          Workshop Schedule
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          The final schedule, with session timings and room allocations, will be published as part of the official FOSSter 2025 agenda.
        </p>
        <p className="mt-3 text-gray-500 italic">[View Full Agenda & Schedule – Coming Soon!]</p>
      </div>
    </section>
  )
}

export default TechWorkshops
