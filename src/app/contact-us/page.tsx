'use client'
import React from 'react'
import {
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  MessageSquare,
} from 'lucide-react'

export default function ContactFosster() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact FOSSter 2025</h1>
        <p className="text-gray-600 text-lg">We're Here to Help!</p>
      </header>

      {/* General Inquiry */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm mb-10">
        <div className="flex items-start gap-4">
          <MessageSquare className="text-blue-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">General Inquiries</h2>
            <p className="text-gray-700 mb-1">
              For questions about FOSSter 2025, logistics, or anything not listed below.
            </p>
            <p className="text-blue-700 font-medium">Email: <a href="mailto:info@fosster.in">info@fosster.in</a></p>
          </div>
        </div>
      </div>

      {/* Departmental Contacts */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {[
          {
            title: 'Tickets & Registration',
            desc: 'Passes, pricing, group discounts, or registration issues.',
            email: 'attend@fosster.in',
          },
          {
            title: 'Sponsorships & Partnerships',
            desc: 'For companies interested in sponsoring or partnering.',
            email: 'sponsors@fosster.in',
          },
          {
            title: 'Speaker & Program Proposals',
            desc: 'Talks, sessions, or anything about the conference program.',
            email: 'speakers@fosster.in',
          },
          {
            title: 'Job Fair (for Companies)',
            desc: 'For booths or recruitment at our Job Fair.',
            email: 'jobs@fosster.in',
          },
        ].map((item, i) => (
          <div key={i} className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
            <p className="text-gray-600 mb-2">{item.desc}</p>
            <p className="text-blue-700 font-medium">
              Email: <a href={`mailto:${item.email}`}>{item.email}</a>
            </p>
          </div>
        ))}
      </div>

      {/* Social Media */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Connect With Us on Social Media!</h2>
        <p className="text-gray-600 mb-6">
          Follow for the latest news, updates, and behind-the-scenes content.
        </p>
        <div className="flex justify-center gap-6 text-blue-600 text-xl">
          <a href="#" aria-label="Twitter" className="hover:text-blue-800 transition"><Twitter /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-800 transition"><Linkedin /></a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition"><Instagram /></a>
          <a href="#" aria-label="Facebook" className="hover:text-blue-800 transition"><Facebook /></a>
        </div>
      </div>
    </section>
  )
}
