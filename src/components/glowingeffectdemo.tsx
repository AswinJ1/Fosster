"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { Zap, Users, Wrench, BookOpen, Mic, Briefcase, Gamepad2 } from "lucide-react";

import { GlowingEffect } from "@components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white mb-4">
          Events at a Glance
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium">
          <strong>From code to community — explore what's in store.</strong>
        </p>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mt-3 max-w-4xl mx-auto">
          FOSSter 2025 offers a dynamic lineup of events designed to engage, educate, and inspire contributors at every level.
        </p>
      </div>

      {/* Events Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        <GridItem
          area="sm:col-span-2 lg:col-span-1 xl:col-span-2"
          icon={<Zap className="h-5 w-5 text-orange-500" />}
          title="Lightning Talks"
          description="Fast-paced 10-minute presentations to share open-source ideas, tools, and stories."
          bgColor="from-orange-500/10 to-red-500/10"
        />

        <GridItem
          area="lg:col-span-1"
          icon={<Users className="h-5 w-5 text-blue-500" />}
          title="Panel Discussions"
          description="Expert-led dialogues on governance, inclusion, and the future of open source."
          bgColor="from-blue-500/10 to-cyan-500/10"
        />

        <GridItem
          area="lg:col-span-1"
          icon={<Wrench className="h-5 w-5 text-green-500" />}
          title="Tech Workshops"
          description="Hands-on sessions to build real-world skills in open-source technologies."
          bgColor="from-green-500/10 to-emerald-500/10"
        />

        <GridItem
          area="sm:col-span-2 lg:col-span-2 xl:col-span-1"
          icon={<BookOpen className="h-5 w-5 text-purple-500" />}
          title="Open Source 101"
          description="Beginner-focused training led by AmFOSS to help newcomers make their first contributions."
          bgColor="from-purple-500/10 to-indigo-500/10"
        />

        <GridItem
          area="lg:col-span-1"
          icon={<Mic className="h-5 w-5 text-pink-500" />}
          title="Speaker Sessions"
          description="Deep-dive talks by open-source leaders and project maintainers."
          bgColor="from-pink-500/10 to-rose-500/10"
        />

        <GridItem
          area="sm:col-span-2 lg:col-span-2 xl:col-span-1"
          icon={<Briefcase className="h-5 w-5 text-teal-500" />}
          title="Job Fair"
          description="Meet top tech employers hiring open-source contributors and developers."
          bgColor="from-teal-500/10 to-cyan-500/10"
        />

        <GridItem
          area="sm:col-span-2 lg:col-span-2 xl:col-span-2"
          icon={<Gamepad2 className="h-5 w-5 text-yellow-500" />}
          title="Game Zone"
          description="Coding challenges, quizzes, and contests with prizes, running throughout the event."
          bgColor="from-yellow-500/10 to-amber-500/10"
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  bgColor: string;
}

const GridItem = ({ area, icon, title, description, bgColor }: GridItemProps) => {
  return (
    <>
 
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className={`relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 bg-gradient-to-br ${bgColor}`}>
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
    </>
  );
};
