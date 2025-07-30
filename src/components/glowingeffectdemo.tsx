"use client";

import { GlowingEffect } from "@components/ui/glowing-effect";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function GlowingEffectDemo() {
  const items = [
    {
      img: "/lt.jpg",
      title: "Lightning Talks",
      description:
        "Fast-paced 10-minute presentations to share open-source ideas, tools, and stories.",
    },
    {
      img: "/meeer.jpg",
      title: "Panel Discussions",
      description:
        "Expert-led dialogues on governance, inclusion, and the future of open source.",
    },
    {
      img: "/tws.png",
      title: "Tech Workshops",
      description:
        "Hands-on sessions to build real-world skills in open-source technologies.",
    },
    {
      img: "/os.jpg",
      title: "Open Source 101",
      description:
        "Beginner-focused training led by AmFOSS to help newcomers make their first contributions.",
    },
    {
      img: "/spr.png",
      title: "Speaker Sessions",
      description:
        "Deep-dive talks by open-source leaders and project maintainers.",
    },
    {
      img: "/jbb.jpg",
      title: "Job Fair",
      description:
        "Meet top tech employers hiring open-source contributors and developers.",
    },
    {
      img: "/gzz.jpg",
      title: "Game Zone",
      description:
        "Coding challenges, quizzes, and contests with prizes, running throughout the event.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="space-y-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          EVENTS AT
          <br />
          A GLANCE
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mb-6">
          From code to community — explore what's in store. FOSSter 2025 offers
          a dynamic lineup of events designed to engage, educate, and inspire
          contributors at every level.
        </p>
      </div>

      {/* Uniform Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <GridItem
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
}

interface GridItemProps {
  img: string;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ img, title, description }: GridItemProps) => {
  const eventRoutes: Record<string, string> = {
    "Lightning Talks": "/events/lightning-talks",
    "Panel Discussions": "/events/panel-discussions",
    "Tech Workshops": "/events/workshops",
    "Open Source 101": "/events/opensource-101",
    "Speaker Sessions": "/events/speaker-sections",
    "Job Fair": "/events/jobfair",
    "Game Zone": "/events/gamezones",
  };

  const eventHref = eventRoutes[title] || "#";

  return (
    <li className="list-none flex">
      <div className="relative w-full min-h-[280px] md:min-h-[320px] rounded-2xl border border-gray-200 dark:border-gray-700 p-2 md:p-3 hover:border-gray-300 dark:hover:border-gray-600 transition-colors flex flex-col">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex flex-1 flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-4 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          {/* Image section */}
          <div className="w-full h-32 md:h-36 rounded-lg overflow-hidden flex-shrink-0">
            <img
              src={img}
              alt={title}
              className="object-cover object-center w-full h-full rounded-lg transition-transform duration-300 hover:scale-105"
              draggable="false"
            />
          </div>

          {/* Text + Button section */}
          <div className="flex-1 flex flex-col gap-2 sm:justify-between">
            <h3 className="font-sans text-base md:text-lg font-bold text-black dark:text-white truncate">
              {title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {description}
            </p>
            <div>
              <Link
                href={eventHref}
                className="flex items-center gap-1 text-xs md:text-sm font-medium text-blue-700 hover:underline transition whitespace-nowrap group"
              >
                Know More
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
