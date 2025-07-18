'use client'
import React, { JSX, useState } from 'react'
import { Sparkles, Mic, Lightbulb, CalendarClock, Megaphone, FilePlus } from 'lucide-react'

type Section = {
  id: number
  icon: JSX.Element
  title: string
  content: JSX.Element
}

const sections: Section[] = [
  {
    id: 1,
    icon: <Lightbulb className="text-yellow-500 w-6 h-6" />,
    title: 'What are Lightning Talks?',
    content: (
      <p>
        Lightning Talks are short, impactful presentations—10 minutes each—designed to deliver a
        key message or idea in a concise and engaging format. Perfect for introducing new projects,
        sharing discoveries, or starting conversations across diverse open-source interests.
      </p>
    ),
  },
  {
    id: 2,
    icon: <Mic className="text-blue-500 w-6 h-6" />,
    title: 'Who Can Give a Lightning Talk?',
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>A cool open-source project you're working on</li>
        <li>A valuable tip, trick, or tool you've discovered</li>
        <li>A compelling story about your open-source journey</li>
        <li>A problem you've solved (or are solving) with FOSS</li>
        <li>An opinion or insight on the future of open source</li>
        <p className="mt-2">If any of these apply — you're a perfect fit!</p>
      </ul>
    ),
  },
  {
    id: 3,
    icon: <Sparkles className="text-pink-500 w-6 h-6" />,
    title: `"I can't do a Lightning Talk!" – Think Again!`,
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>"I don't have enough to say"</strong> – Just focus on one strong idea. A clear
          5-minute talk beats a rushed 10-minute one.
        </li>
        <li>
          <strong>"I'm not an expert"</strong> – Share what excites you. Your experience matters.
        </li>
        <li>
          <strong>"I'm scared of public speaking"</strong> – This is a supportive environment and a
          great confidence boost!
        </li>
        <li>
          <strong>"My topic isn't interesting enough"</strong> – If it excites you, it’ll excite
          others.
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    icon: <CalendarClock className="text-purple-500 w-6 h-6" />,
    title: 'Lightning Talks at FOSSter 2025',
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Two 1-hour sessions across the event</li>
        <li>Each session includes 4 speakers (8 total)</li>
        <li>10-minute presentation per speaker</li>
        <li>Proposal-based selection</li>
        <li>
          Rewards: FOSSter merch &amp; workshop fee discount for selected speakers!
        </li>
      </ul>
    ),
  },
  {
    id: 5,
    icon: <Megaphone className="text-green-600 w-6 h-6" />,
    title: 'Lightning Talk Schedule',
    content: <p>[Schedule Coming Soon! Stay Tuned!]</p>,
  },
  {
    id: 6,
    icon: <FilePlus className="text-orange-500 w-6 h-6" />,
    title: 'Lightning Talk Sign Up',
    content: (
      <p>
        Proposal submissions will open soon! Prepare a brief abstract (~100-150 words) outlining
        your topic and key takeaways.
        <br />
        <strong>[Submit Your Lightning Talk Proposal Here (Opening Soon!)]</strong>
        <br />
        Stay updated via our newsletter or social channels.
      </p>
    ),
  },
]

const LightningTalks = () => {
  const [openSection, setOpenSection] = useState<number | null>(null)

  const toggleSection = (id: number) => {
    setOpenSection(prev => (prev === id ? null : id))
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Lightning Talks at FOSSter 2025
        </h2>
        <p className="text-lg text-gray-600 mt-2">Spark Ideas, Share Your Passion!</p>
      </div>

      <div className="space-y-6">
        {sections.map(({ id, icon, title, content }) => (
          <div
            key={id}
            className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
          >
            <button
              onClick={() => toggleSection(id)}
              className="flex items-center justify-between w-full text-left"
            >
              <div className="flex items-center gap-3">
                {icon}
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              </div>
              <span className="text-gray-400 text-xl">
                {openSection === id ? '−' : '+'}
              </span>
            </button>
            {openSection === id && <div className="mt-4 text-gray-700">{content}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default LightningTalks
