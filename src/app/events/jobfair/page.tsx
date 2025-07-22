'use client'
import React from 'react'
import {
  Briefcase,
  Users,
  Globe,
  Rocket,
  Star,
  Building2,
  Megaphone,
} from 'lucide-react'

const attendeeBenefits = [
  {
    icon: <Briefcase className="text-blue-600 w-6 h-6" />,
    title: 'Meet Top Companies',
    description:
      'Connect with companies actively hiring open-source talent across industries.',
  },
  {
    icon: <Rocket className="text-purple-600 w-6 h-6" />,
    title: 'Explore Career Paths',
    description:
      'Discover roles and internships aligned with your passion for FOSS.',
  },
  {
    icon: <Star className="text-yellow-500 w-6 h-6" />,
    title: 'Showcase Your Skills',
    description:
      'Stand out with your GitHub, FOSS projects, and community contributions.',
  },
  {
    icon: <Users className="text-green-600 w-6 h-6" />,
    title: 'Expand Your Network',
    description:
      'Meet recruiters and professionals from across the open-source world.',
  },
]

const companyBenefits = [
  {
    icon: <Globe className="text-indigo-600 w-6 h-6" />,
    title: 'Access Targeted Talent',
    description:
      'Reach a qualified, open-source-focused audience of developers and contributors.',
  },
  {
    icon: <Building2 className="text-pink-600 w-6 h-6" />,
    title: 'Showcase Your Brand',
    description:
      'Highlight your FOSS initiatives, work culture, and opportunities.',
  },
  {
    icon: <Megaphone className="text-red-500 w-6 h-6" />,
    title: 'Boost Employer Visibility',
    description:
      'Engage during peak networking hours and enhance your reputation in the FOSS ecosystem.',
  },
]

const JobFair = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Job Fair at FOSSter 2025
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Connect with Open-Source Talent. Discover Your Next Opportunity.
        </p>
      </div>

      {/* What is the Job Fair? */}
      <div className="mb-14 bg-gray-50 p-6 md:p-10 rounded-xl shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          What is the FOSSter 2025 Job Fair?
        </h3>
        <p className="text-gray-700">
          The Recruitment Zone at FOSSter 2025 is a hub where tech companies and FOSS enthusiasts
          meet. Held during peak networking hours, it offers rich face-to-face connections and
          career-changing opportunities for all.
        </p>
      </div>

      {/* Attendee Section */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          For Attendees: Find Your Future in Open Source
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {attendeeBenefits.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-2">
                {icon}
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-700">
          Bring your resume, show off your GitHub, and be ready to talk about your FOSS journey!
        </p>
      </div>

      {/* Company Section */}
      <div className="mb-14">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          For Companies: Recruit Top-Tier Open-Source Talent
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {companyBenefits.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-2">
                {icon}
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-gray-700">
          Showcase your presence, screen passionate talent on the spot, and make lasting impressions.
        </p>
      </div>

      {/* Participation Info */}
      <div className="bg-white border border-gray-200 p-6 md:p-10 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          How Companies Can Participate
        </h3>
        <p className="text-gray-700 mb-3">
          Participation is open to sponsors and dedicated Job Fair partners. Join the Recruitment
          Zone and connect with future changemakers in open source.
        </p>
        <p className="text-gray-700">
          To explore sponsorship and participation packages, reach out to us directly:
        </p>
        <p className="mt-3 text-blue-600 font-medium">
          📧 <a href="mailto:jobs@fosster.in">jobs@fosster.in</a>
        </p>
      </div>
    </section>
  )
}

export default JobFair
