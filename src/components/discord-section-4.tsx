'use client';
import React, { JSX, useState } from 'react';
import { GraduationCap, Server, Users } from 'lucide-react';

type Section = {
  id: number;
  icon: JSX.Element;
  title: string;
  content: JSX.Element;
}

const sections: Section[] = [
  {
    id: 1,
    icon: <GraduationCap className="text-blue-500 w-6 h-6" />,
    title: 'Students',
    content: (
      <p>
        Jumpstart your open-source journey, gain hands-on experience, and connect with mentors to develop your skills and career.
      </p>
    ),
  },
  {
    id: 2,
    icon: <Server className="text-green-600 w-6 h-6" />,
    title: 'DevOps Professionals',
    content: (
      <p>
        Discover the latest open-source tools and best practices to streamline workflows and improve infrastructure management.
      </p>
    ),
  },
  {
    id: 3,
    icon: <Users className="text-purple-500 w-6 h-6" />,
    title: 'Community Members',
    content: (
      <p>
        Expand your network, share your knowledge, and help grow a vibrant, inclusive open-source ecosystem.
      </p>
    ),
  },
];

export default function DiscordSection4() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (id: number) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              WHO SHOULD<br />
              ATTEND?
            </h2>
            
            <div className="space-y-4 max-w-lg">
              {sections.map(({ id, icon, title, content }) => (
                <div
                  key={id}
                  className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
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
                  {openSection === id && (
                    <div className="mt-4 text-gray-700">
                      {content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Mobile Chat Interface */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            {/* Mobile Device */}
            <div className="relative">
              <img src="/whoo.png" alt="" />             
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-12 left-16 w-32 h-32 bg-red-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-12 w-24 h-24 bg-pink-100 rounded-full opacity-40"></div>
    </section>
  );
}