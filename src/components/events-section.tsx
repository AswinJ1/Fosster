'use client';
import React from 'react';

import { Button } from "@components/ui/button";
import { ArrowRight, Zap, Users, Wrench, GraduationCap, Mic, Briefcase, Gamepad2 } from "lucide-react";

export default function EventsSection() {
  const events = [
    {
      icon: Zap,
      title: "Lightning Talks",
      description: "Fast-paced 10-minute presentations to share open-source ideas, tools, and stories.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Panel Discussions",
      description: "Expert-led dialogues on governance, inclusion, and the future of open source.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Wrench,
      title: "Tech Workshops",
      description: "Hands-on sessions to build real-world skills in open-source technologies.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: GraduationCap,
      title: "Open Source 101",
      description: "Beginner-focused training led by AmFOSS to help newcomers make their first contributions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Mic,
      title: "Speaker Sessions",
      description: "Deep-dive talks by open-source leaders and project maintainers.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Job Fair",
      description: "Meet top tech employers hiring open-source contributors and developers.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Gamepad2,
      title: "Game Zone",
      description: "Coding challenges, quizzes, and contests with prizes, running throughout the event.",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section id="events" className="py-16 bg-gradient-to-br from-[hsl(223,21%,11%)] to-[hsl(235,30%,14%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Events at a Glance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            From code to community — explore what's in store.
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            FOSSter 2025 offers a dynamic lineup of events designed to engage, educate, and inspire contributors at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div key={index} className="group bg-gradient-to-br from-[hsl(223,21%,15%)] to-[hsl(235,30%,18%)] rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[hsl(235,30%,25%)] hover:border-[hsl(235,85%,64%)]/50">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className={`p-3 bg-gradient-to-br ${event.color} rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <event.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[hsl(235,85%,64%)] transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-[hsl(235,85%,64%)] hover:bg-[hsl(235,85%,60%)] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            View All Events
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}