'use client';
import React from 'react';
import styled from '@emotion/styled';
import { Fade } from 'react-awesome-reveal';
import ScrollContainer from "react-indiana-drag-scroll";

const GoalsContainer = styled.div`
    background: #222;
    padding: 2vh 0;
    h2 {
        font-size: calc(1.5rem + 2vw);
        text-align: center;
        color: #fa3f80;
        font-weight: 600;
        padding: 1.5rem 0;
    }
`;

const GoalCard = styled.div`
    img {
      max-width: 100%;
      border-radius: 15px;
      box-shadow: 2px 3px 8px rgba(0,0,0,0.35);
    }
    p {
      color: black;
      opacity: 0.75!important;
      text-align: center;
      margin-top: 13px;
      font-size: calc(0.75rem + 0.15vw);
      line-height: 1.3;
    }
    transition: all 1s ease;
    &:hover {
        transform: translateY(-20px);
        transition: all 1s ease;
        p {
           color: black;
        }
    }
`;

export default function DiscordSection3() {
  const goals = [
    {
      cover: "/talks.png",
      text: "Lightning Talks – Fast-paced 10-minute presentations to share open-source ideas, tools, and stories.",
    },
    {
      cover: "/panel.png",
      text: "Panel Discussions – Expert-led dialogues on governance, inclusion, and the future of open source.",
    },
    {
      cover: "/techh.png",
      text: "Tech Workshops – Hands-on sessions to build real-world skills in open-source technologies.",
    },
    {
      cover: "/opens.png",
      text: "Open Source 101 – Beginner-focused training led by AmFOSS to help newcomers make their first contributions.",
    },
    {
      cover: "/speakerr.png",
      text: "Speaker Sessions – Deep-dive talks by open-source leaders and project maintainers.",
    },
    {
      cover: "/job.png",
      text: "Job Fair – Meet top tech employers hiring open-source contributors and developers.",
    },
    {
      cover: "/zone.png",
      text: "Game Zone – Coding challenges, quizzes, and contests with prizes, running throughout the event.",
    },
  ];
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Desktop App Mockup */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Desktop Container */}
            <div className="relative">
              <div className="w-96 h-64 bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-4 shadow-2xl transform rotate-2 hover:rotate-1 transition-transform duration-500">
                <div className="w-full h-full bg-gray-900 rounded-xl overflow-hidden">
                  {/* Desktop app interface */}
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-16 bg-gray-800 p-2 space-y-2">
                      <div className="w-12 h-12 bg-[hsl(235,85%,64%)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        F
                      </div>
                      <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-300">#</span>
                      </div>
                      <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-300">@</span>
                      </div>
                      <div className="w-12 h-8 bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-xs text-gray-300">+</span>
                      </div>
                    </div>
                    
                    {/* Channel list */}
                    <div className="w-48 bg-gray-750 p-3">
                      <div className="text-white font-semibold text-sm mb-3">FOSSter Community</div>
                      <div className="space-y-1">
                        <div className="text-gray-300 text-xs font-semibold mb-1">TEXT CHANNELS</div>
                        <div className="text-gray-400 text-xs py-1 px-2 rounded hover:bg-gray-600"># general</div>
                        <div className="text-white text-xs py-1 px-2 rounded bg-gray-600"># contributors</div>
                        <div className="text-gray-400 text-xs py-1 px-2 rounded hover:bg-gray-600"># help</div>
                        <div className="text-gray-400 text-xs py-1 px-2 rounded hover:bg-gray-600"># showcase</div>
                      </div>
                      <div className="mt-4">
                        <div className="text-gray-300 text-xs font-semibold mb-1">VOICE CHANNELS</div>
                        <div className="text-gray-400 text-xs py-1 px-2 rounded hover:bg-gray-600">🔊 Daily Standup</div>
                        <div className="text-gray-400 text-xs py-1 px-2 rounded hover:bg-gray-600">🔊 Code Review</div>
                      </div>
                    </div>
                    
                    {/* Main chat area */}
                    <div className="flex-1 bg-gray-700 p-3">
                      <div className="space-y-2">
                        <div className="text-xs text-gray-300"># contributors</div>
                        <div className="space-y-1">
                          <div className="text-xs">
                            <span className="text-green-400 font-semibold">maintainer</span>
                            <span className="text-gray-400 ml-2">Today at 2:15 PM</span>
                          </div>
                          <div className="text-xs text-gray-200">New PR merged! Great work team 🎉</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-lg">⚡</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-10 bg-red-400 rounded-lg flex items-center justify-center shadow-lg transform -rotate-12">
                <span className="text-white text-xs font-bold">LIVE</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              EVENTS AT<br />
              A GLANCE
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-6">
              From code to community — explore what's in store. FOSSter 2025 offers a dynamic lineup of events designed to engage, educate, and inspire contributors at every level.
            </p>
              {/* Responsive Card Grid */}
                        <div className="w-full overflow-hidden">
                          {/* Desktop view - Grid */}
                          <div className="hidden md:grid grid-cols-4 gap-6">
                            {goals.map((g, index) => (
                              <GoalCard key={index} className="p-3">
                                <Fade triggerOnce direction={index % 2 === 0 ? "up" : "down"} delay={index * 350}>
                                  <div className="mb-4">
                                    <img alt="illustration" draggable="false" src={g.cover} />
                                  </div>
                                  <p>{g.text}</p>
                                </Fade>
                              </GoalCard>
                            ))}
                          </div>
                          
                          {/* Mobile view - Scrollable */}
                          <div className="md:hidden">
                            <ScrollContainer vertical={false} className="scroll-container">
                              <div className="flex p-3 gap-4">
                                {goals.map((g, index) => (
                                  <GoalCard key={index} className="flex-shrink-0" style={{ width: "280px" }}>
                                    <Fade triggerOnce direction={index%2===0 ? "up" : "down"} delay={index*350}>
                                      <div className="mb-4">
                                        <img alt="illustration" draggable="false" src={g.cover} />
                                      </div>
                                      <p>{g.text}</p>
                                    </Fade>
                                  </GoalCard>
                                ))}
                              </div>
                            </ScrollContainer>
                          </div>
                        </div>

            {/* <div className="space-y-3 max-w-lg">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Lightning Talks</div>
                <div className="text-sm text-gray-600">Fast-paced 10-minute presentations to share open-source ideas, tools, and stories.</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Tech Workshops</div>
                <div className="text-sm text-gray-600">Hands-on sessions to build real-world skills in open-source technologies.</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-1">Job Fair</div>
                <div className="text-sm text-gray-600">Meet top tech employers hiring open-source contributors and developers.</div>
              </div>
            </div> */}

            <div className="pt-4">
              <a href="#" className="text-[hsl(235,85%,64%)] font-semibold hover:underline">
                View All Events →
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-36 h-36 bg-purple-100 rounded-full opacity-40"></div>
      <div className="absolute bottom-16 left-8 w-20 h-20 bg-pink-100 rounded-full opacity-30"></div>
    </section>
  );
}