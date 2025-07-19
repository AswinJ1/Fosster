'use client'
import React from 'react'
import Image from 'next/image'
const Card = ({ icon, title, desc, linkText }: any) => (
  <div
    className="bg-white shadow-sm rounded-xl p-6 transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:z-10 cursor-pointer"
    style={{ willChange: 'transform' }}
  >
    <Image src={icon} alt={title} width={200} height={200} className="mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
    <p className="text-gray-600 mb-3">{desc}</p>
    {/* <a href="#" className="text-blue-600 font-medium hover:underline">
     {linkText}
    </a> */}
  </div>
)


const AboutPage = () => {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-8 text-gray-800">
            <span style={{ color: '#5562f1' }}>FOSS</span><span style={{ color: '#F471f4' }}>ter 2025</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            FOSSter isn't just a tech event — it's a movement to grow the open-source community from the ground up.
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black mb-6 text-gray-800">Event Background</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  FOSSter was created with a simple but powerful idea — to make open source more accessible, inclusive, and collaborative. Born out of the amFOSS community at Amrita Vishwa Vidyapeetham, FOSSter builds on over a decade of experience nurturing open-source talent and organizing tech events with real impact.
                </p>
                <p>
                  In a time when open-source technologies drive everything from AI to infrastructure, FOSSter offers a focused space for contributors — from absolute beginners to industry veterans — to come together, learn, contribute, and grow.
                </p>
                <p className="font-semibold text-gray-800">
                  It's not just a conference. It's a community-building movement.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-6 text-gray-800">What Makes FOSSter Unique?</h3>
            <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <Card

icon="/about11.png"
            title="Beginner-Friendly"
            desc="Dedicated tracks and mentorship for first-time contributors"
          />
          <Card
            icon="/about12.png"
            title="Project-Driven"
            desc="Engage with real, impactful open-source problems"
          />
          <Card
            icon="/about13.png"
            title="Community-Focused"
            desc="Conversations around governance, DEI, and sustainability"
          />
          <Card
            icon="/about14.png"
            title="Industry-Integrated"
            desc="Collaborations with companies shaping the open-source future"
          />
        </div>
      </div>
    </section>
            </div>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-black mb-8 text-center text-gray-800">Event Goals</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-800 mb-3">Lower the Barrier to Entry</h4>
              <p className="text-gray-600">Make open-source contribution approachable for newcomers through mentorship and guided sessions.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-gray-800 mb-3">Build Real-World Skills</h4>
              <p className="text-gray-600">Offer hands-on experiences with modern tools, collaborative workflows, and real project challenges.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-gray-800 mb-3">Foster Meaningful Connections</h4>
              <p className="text-gray-600">Create a space for contributors, maintainers, and organizations to engage, collaborate, and network.</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-gray-800 mb-3">Promote Diversity & Inclusion</h4>
              <p className="text-gray-600">Ensure representation, accessibility, and welcoming spaces for all backgrounds and identities.</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-gray-800 mb-3">Support the Open Source Ecosystem</h4>
              <p className="text-gray-600">Encourage long-term contribution and sustainability across projects and communities.</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-bold text-gray-800 mb-3">Showcase Innovation & Leadership</h4>
              <p className="text-gray-600">Highlight the impact of open source across industries and empower participants to lead in their fields.</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 rounded-2xl shadow-sm p-8 flex flex-col items-center">
    <h3 className="text-2xl font-black mb-4 text-gray-800 font-sans">Our Vision</h3>
    <p className="text-gray-700 leading-relaxed font-sans text-center">
      To build a thriving, inclusive open-source ecosystem by empowering individuals at every stage of their journey — from their first Git commit to leading global projects.
    </p>
  </div>
  <div className="bg-blue-50 rounded-2xl shadow-sm p-8 flex flex-col items-center">
    <h3 className="text-2xl font-black mb-4 text-gray-800 font-sans">Our Mission</h3>
    <p className="text-gray-700 leading-relaxed font-sans text-center">
      To empower and expand the open-source community by making contribution accessible, fostering mentorship through practical learning, encouraging collaboration across ecosystems, and driving innovation with purpose-driven technology.
    </p>
  </div>
        </div>

        {/* Who Should Attend */}
        <div className="mb-16">
          <h3 className="text-3xl font-black mb-8 text-center text-gray-800">Who Should Attend?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3">Students</h4>
              <p className="text-gray-600">Jumpstart your open-source journey, gain hands-on experience, and connect with mentors to build your skills and career.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3">DevOps Professionals</h4>
              <p className="text-gray-600">Discover the latest open-source tools and best practices to streamline workflows and improve infrastructure management.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3">Academics & Researchers</h4>
              <p className="text-gray-600">Engage with cutting-edge projects, collaborate with industry experts, and contribute to the academic and practical growth of open source.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3">Community Members & Contributors</h4>
              <p className="text-gray-600">Expand your network, share your knowledge, and help grow a vibrant, inclusive open-source ecosystem.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3">IT Infrastructure Managers</h4>
              <p className="text-gray-600">Learn about scalable, reliable open-source solutions to optimize your organization's IT infrastructure.</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3">Senior Business Decision Makers</h4>
              <p className="text-gray-600">Identify strategic open-source technologies and partnerships to drive innovation and business growth.</p>
            </div>
          </div>
        </div>

        {/* Organized By */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Organized By</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center flex flex-col items-center">
      <a href="https://www.amrita.edu/" target="_blank" rel="noopener noreferrer">
        <Image src="/amrita.png" alt="Amrita Vishwa Vidyapeetham Logo" width={220} height={220} className="mb-4" />
      </a>
              <h4 className="text-xl font-bold mb-4 text-gray-800">Amrita Vishwa Vidyapeetham</h4>
              <p className="text-gray-600 leading-relaxed">
                A top-ranked private university in India, Amrita is known for its excellence in engineering, research, and technology-driven social impact.
              </p>
            </div>
            <div className="text-center flex flex-col items-center">
      <a href="https://amfoss.in/" target="_blank" rel="noopener noreferrer">
        <Image src="/amfoss_logo.jpeg" alt="amFOSS Logo" width={80} height={80} className="mb-4" />
      </a>
              <h4 className="text-xl font-bold mb-4 text-gray-800">amFOSS</h4>
              <p className="text-gray-600 leading-relaxed">
                India's leading student-run open-source community, with a legacy of GSoC contributors, global conference participation, and a strong mentorship culture.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 text-gray-900 py-12 px-8 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-bold mb-4">Why It Matters</h3>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            FOSSter is not just about talks and workshops — it's about building a movement. A space where people come not just to learn, but to belong. A launchpad for talent. A space to imagine, contribute, and lead.
          </p>
          <div className="text-lg mb-6">
            <p className="mb-2"><strong>Location:</strong> Bangalore, India</p>
            <p><strong>Dates:</strong> TBD</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-blue-100 hover:scale-105 hover:shadow-md">
              Register Now
            </button>
            <a href="/sponsor" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-blue-100 hover:scale-105 hover:shadow-md flex items-center justify-center" style={{ textDecoration: 'none' }}>
    Sponsor Us
  </a>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors hover:bg-blue-100 hover:scale-105 hover:shadow-md">
              Call for Speakers
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage