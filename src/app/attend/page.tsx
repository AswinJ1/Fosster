/** @jsxImportSource @emotion/react */
'use client';
import React from 'react';
import Image from 'next/image';
import {
  CheckCircle,
  GraduationCap,
  Users,
  AlertTriangle,
} from 'lucide-react';
import styled from "@emotion/styled";
import { Fade } from "react-awesome-reveal";
import ScrollContainer from "react-indiana-drag-scroll";

// Add this styled component
const StyledCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px; /* Set minimum height */
  
  &:hover {
    transform: translateY(-10px);
    // box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    border-color: #3b82f6;
  }
  
  .icon-container {
    width: 100px;
    height: 100px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }
  
  &:hover .icon-container {
    transform: scale(1.1);
  }
  
  h3 {
    color: #1e40af;
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 0.75rem;
    transition: color 0.3s ease;
    flex-shrink: 0;
  }
  
  p {
    color: #6b7280;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.5;
    opacity: 0.8;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &:hover p {
    opacity: 1;
    color: #374151;
  }
`;

const Card = ({ icon, title, desc, linkText }: any) => (
  <StyledCard>
    <div className="icon-container">
      <Image
        src={icon}
        alt={title}
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
    {linkText && (
      <a href="#" className="text-sm font-medium text-blue-500 hover:underline inline-block pt-2">
        {linkText}
      </a>
    )}
  </StyledCard>
);

type Ticket = {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
};

const tickets: Ticket[] = [
  {
    name: 'Standard Pass',
    price: '₹599',
    features: [
      'Access to All Conference Tracks',
      'Entry to Exhibitor Booths',
      'Tea and Snacks',
      'E-Certificate of Attendance',
      'Welcome Kit',
    ],
    buttonText: 'REGISTER NOW!',
  },
  {
    name: 'Elite Pass',
    price: '₹899',
    features: [
      'Access to All Conference Tracks',
      'Entry to Exhibitor Booths',
      'Tea and Snacks',
      'E-Certificate of Attendance',
      'Premium Goodie Bag',
      'Lunch',
      'Access to One Workshop',
      'Access to Career Fair',
    ],
    buttonText: 'REGISTER NOW!',
  },
  {
    name: 'Premium Pass',
    price: '₹1,499',
    features: [
      'Access to All Conference Tracks',
      'Entry to Exhibitor Booths',
      'E-Certificate of Attendance',
      'Goodie Bag',
      'Exclusive Access to Conference',
      'Access to Competition Pitch',
      'Access to Networking Dinner',
    ],
    buttonText: 'REGISTER NOW!',
  },
  {
    name: 'Group Pass',
    price: '₹3,499 for 5',
    features: [
      'Access to All Conference Tracks (5)',
      'Entry to Exhibitor Booths (5)',
      'Tea and Snacks (5)',
      'E-Certificate of Attendance (5)',
      'Welcome Kit (5)',
    ],
    buttonText: 'REGISTER NOW!',
  },
];

const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-2">
    <CheckCircle size={16} className="text-green-500 mt-0.5" />
    <span>{text}</span>
  </li>
);

const Attend = () => {
  const cardData = [
    {
      icon: "/about11.png",
      title: "Standard Pass",
      desc: "Our foundational ticket for comprehensive access to the event."
    },
    {
      icon: "/about12.png",
      title: "Elite Pass",
      desc: "Designed to enhance your experience with additional benefits, including workshop access."
    },
    {
      icon: "/about13.png",
      title: "Premium Pass",
      desc: "A limited-number, exclusive pass offering the highest level of access and networking opportunities."
    },
    {
      icon: "/about14.png",
      title: "Group Pass",
      desc: "A discounted bundle for teams or college groups attending together."
    }
  ];

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Attend <span className="text-blue-600">FOSSter 2025</span>
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Ready for two days of groundbreaking discussions, hands-on learning, and unparalleled networking?
          Secure your spot now and be part of an event that will shape the next decade of collaboration and innovation.
        </p>
        <a
          href="#"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          SECURE YOUR PASS NOW!
        </a>
      </div>

      {/* Ticket Types Description */}
       <div className="w-full overflow-hidden mb-16 pt-4">
        {/* Desktop view - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cardData.map((card, index) => (
            <div key={index} className="pt-2 h-full">
              <Fade triggerOnce direction={index%2===0 ? "up" : "down"} delay={index*200}>
                <div className="h-full">
                  <Card
                    icon={card.icon}
                    title={card.title}
                    desc={card.desc}
                  />
                </div>
              </Fade>
            </div>
          ))}
        </div>
        
        {/* Mobile view - Scrollable */}
        <div className="md:hidden">
          <ScrollContainer vertical={false} className="scroll-container">
            <div className="flex p-3 gap-4 pt-5">
              {cardData.map((card, index) => (
                <div key={index} className="flex-shrink-0 h-full" style={{ width: "280px", height: "300px" }}>
                  <Fade triggerOnce direction={index%2===0 ? "up" : "down"} delay={index*200}>
                    <Card
                      icon={card.icon}
                      title={card.title}
                      desc={card.desc}
                    />
                  </Fade>
                </div>
              ))}
            </div>
          </ScrollContainer>
        </div>
      </div>

      {/* What's Included Section */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">What's Included: A Detailed Comparison</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Navigate through the features included with each FOSSter 2025 ticket type to find your perfect fit.
        </p>
      </div>

      {/* Ticket Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-sm p-6 hover:shadow-lg transition flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">{ticket.name}</h3>
            <p className="text-2xl font-bold text-blue-600 mb-4">{ticket.price}</p>
            <ul className="space-y-2 text-sm flex-grow">
              {ticket.features.map((feature, i) => (
                <FeatureItem key={i} text={feature} />
              ))}
            </ul>
            <button className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              {ticket.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Add-Ons Section */}
      {/* Add-Ons Section */}
<div className="mt-24 bg-gray-50 py-16">
  <div className="max-w-4xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-12">
      <h3 className="text-3xl font-semibold mb-4 text-gray-900">Workshop Add-Ons</h3>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Enhance your FOSSter 2025 experience with hands-on learning sessions led by industry experts.
      </p>
    </div>

    {/* Pricing Table */}
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        
        {/* General Access */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <GraduationCap className="text-blue-600" size={20} />
              </div>
              <span className="font-medium text-gray-900">General Access</span>
            </div>
            <span className="text-2xl font-semibold text-gray-900">₹699</span>
          </div>
          <p className="text-sm text-gray-500">per workshop</p>
        </div>

        {/* Pass Holders */}
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <Users className="text-green-600" size={20} />
              </div>
              <span className="font-medium text-gray-900">Standard Pass</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-semibold text-gray-900">₹399</span>
              <div className="text-xs text-green-600 font-medium">43% OFF</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <GraduationCap className="text-blue-600" size={20} />
              </div>
              <span className="font-medium text-gray-900">Elite Pass</span>
            </div>
            <div className="text-right">
              <span className="text-2xl font-semibold text-gray-900">₹299</span>
              <div className="text-xs text-green-600 font-medium">57% OFF</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Important Notice */}
    <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-8">
      <div className="flex items-start gap-3">
        <AlertTriangle className="text-red-500 flex-shrink-0" size={18} />
        <div>
          <p className="text-sm text-red-800 font-medium">
            Workshop access requires a valid base ticket (Standard, Elite, or Premium Pass)
          </p>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="text-center">
      <a
        href="#"
        className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
      >
        <GraduationCap size={18} />
        Register for Workshops
      </a>
    </div>
  </div>
</div>
    </section>
  );
};

export default Attend;
