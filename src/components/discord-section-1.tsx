'use client';
import React from 'react';
import styled from "@emotion/styled";
import { Fade } from "react-awesome-reveal";
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

export default function DiscordSection1() {
  const goals = [
    {
      "cover": "/women_cut_barriers.jpg",
      "text": "Create a comfortable space & platform to encourage women to women communication and shared learning",
    },
    {
      "cover": "/women_dark_bg.jpg",
      "text": "Promote cybersecurity, and the role of the next generation of women and girls in making the world a safer place"
    },
    {
      "cover": "/women_flag.jpg",
      "text": "Train and upskill women in cybersecurity using CTF as the entry-point."
    },
    {
      "cover": "/women_connections.jpg",
      "text": "Facilitate mentorship, learning, personal growth, career growth, and community amongst the women participants"
    }
  ];
  
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Mobile Mockup */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Mobile Device */}
            <div className="relative">
               <Fade triggerOnce direction="up" delay={350}>
            <img src="/why.png" alt="Coder" className="w-full h-full object-cover rounded-2xl" />
            </Fade>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              WHY ATTEND<br />
              FOSSter 2025?
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mb-6">
              FOSSter offers an unparalleled experience designed to empower every member of the open-source community.
            </p>

            {/* Responsive Card Grid */}
            <div className="w-full overflow-hidden">
              {/* Desktop view - Grid */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {goals.map((g, index) => (
                  <GoalCard key={index} className="p-3">
                    <Fade triggerOnce direction={index%2===0 ? "up" : "down"} delay={index*350}>
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
            
            {/* CTA Button */}
            {/* <div className="pt-6">
              <button className="px-8 py-3 bg-[hsl(235,85%,64%)] text-white rounded-lg font-bold text-lg hover:bg-[hsl(235,85%,55%)] transition-colors duration-300">
                Register Now
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}