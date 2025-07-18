'use client';

import { Users, Rocket, Eye, Briefcase, Star, Mail } from 'lucide-react';

export default function SponsorshipSection() {
  return (
    <section className="bg-white text-gray-900 py-16 px-4 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Title */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">The Open-Source Community in India</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          India is a thriving hub for open-source innovation. With major contributions from communities like <strong>Amfoss</strong>, and support from leading universities, developers here are setting global standards—emphasizing security, collaboration, and cutting-edge development practices.
        </p>
      </div>

      {/* Why Sponsor */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-center">Why Sponsor FOSSter 2025?</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          FOSSter 2025 isn’t just a tech conference—it's a rallying point for the open-source movement. Join us to gain visibility, engage deeply with the ecosystem, and be part of shaping the next generation of global collaboration.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            {
              icon: <Users className="h-6 w-6 text-blue-600" />,
              title: 'Reach a Focused Audience',
              desc: 'Connect with 800+ developers, students, and thought leaders in open-source.'
            },
            {
              icon: <Star className="h-6 w-6 text-yellow-500" />,
              title: 'Showcase Commitment',
              desc: 'Highlight your dedication to FOSS, innovation, and community support.'
            },
            {
              icon: <Eye className="h-6 w-6 text-purple-500" />,
              title: 'Boost Brand Visibility',
              desc: 'Feature your brand across marketing, on-site displays, and digital platforms.'
            },
            {
              icon: <Briefcase className="h-6 w-6 text-green-500" />,
              title: 'Attract Top Talent',
              desc: 'Engage with skilled open-source contributors at our integrated Job Fair.'
            },
            {
              icon: <Rocket className="h-6 w-6 text-red-500" />,
              title: 'Shape the Future',
              desc: 'Be part of critical discussions shaping the open tech landscape.'
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start space-x-4">
              <div>{icon}</div>
              <div>
                <h4 className="font-semibold text-lg">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsorship Packages */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold text-center">Sponsorship Opportunities</h3>
        <p className="max-w-3xl mx-auto text-center text-gray-600">
          Choose from customizable tiers focused on visibility, engagement, or hiring. Benefits include:
        </p>

        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700 max-w-4xl mx-auto">
          <li><strong>Logo Placement</strong> on website, signage & materials</li>
          <li><strong>Booth Space</strong> to interact with attendees</li>
          <li><strong>Speaking Slots</strong> at key sessions & panels</li>
          <li><strong>Workshop Sponsorship</strong> with exclusive branding</li>
          <li><strong>Networking Events</strong> to meet community leaders</li>
          <li><strong>Digital Promotion</strong> via press & social media</li>
          <li><strong>Talent Access</strong> through our Job Fair</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold">Become a FOSSter 2025 Partner</h3>
        <p className="max-w-xl mx-auto text-gray-600">
          Let’s craft a partnership that creates impact. Download our brochure or contact us directly.
        </p>
        <a
          href="mailto:sponsorship@fosster.in"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          <Mail className="w-5 h-5" />
          Contact Sponsorship Team
        </a>
      </div>
    </section>
  );
}
