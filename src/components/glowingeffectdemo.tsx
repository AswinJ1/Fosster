"use client";

import { GlowingEffect } from "@components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Right Content */}
      <div className="space-y-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
          EVENTS AT<br />
          A GLANCE
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mb-6">
          From code to community — explore what's in store. FOSSter 2025 offers a dynamic lineup of events designed to engage, educate, and inspire contributors at every level.
        </p>
      </div>

      {/* Update: Remove icons, add images for each event */}
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-12 2xl:grid-rows-3 lg:gap-6">
        <GridItem
          area="2xl:[grid-area:1/1/2/5]"
          className="sm:col-span-1 lg:col-span-1 xl:col-span-2 2xl:col-auto"
          img="/lt.jpg"
          title="Lightning Talks"
          description="Fast-paced 10-minute presentations to share open-source ideas, tools, and stories."
        />

        <GridItem
          area="2xl:[grid-area:1/5/2/9]"
          className="sm:col-span-1 lg:col-span-1 xl:col-span-2 2xl:col-auto"
          img="/meeer.jpg"
          title="Panel Discussions"
          description="Expert-led dialogues on governance, inclusion, and the future of open source."
        />

        <GridItem
          area="2xl:[grid-area:1/9/3/13]"
          className="sm:col-span-2 lg:col-span-1 xl:col-span-2 2xl:col-auto"
          img="/cycle.png"
          title="Tech Workshops"
          description="Hands-on sessions to build real-world skills in open-source technologies."
        />

        <GridItem
          area="2xl:[grid-area:2/1/3/5]"
          className="sm:col-span-1 lg:col-span-1 xl:col-span-2 2xl:col-auto"
          img="/os.jpg"
          title="Open Source 101"
          description="Beginner-focused training led by AmFOSS to help newcomers make their first contributions."
        />

        <GridItem
          area="2xl:[grid-area:2/5/3/9]"
          className="sm:col-span-1 lg:col-span-1 xl:col-span-2 2xl:col-auto"
          img="/spr.png"
          title="Speaker Sessions"
          description="Deep-dive talks by open-source leaders and project maintainers."
        />

        <GridItem
          area="2xl:[grid-area:3/1/4/7]"
          className="sm:col-span-2 lg:col-span-2 xl:col-span-3 2xl:col-auto"
          img="/jobb.png"
          title="Job Fair"
          description="Meet top tech employers hiring open-source contributors and developers."
        />

        <GridItem
          area="2xl:[grid-area:3/7/4/13]"
          className="sm:col-span-2 lg:col-span-1 xl:col-span-3 2xl:col-auto"
          img="/gameee.PNG"
          title="Game Zone"
          description="Coding challenges, quizzes, and contests with prizes, running throughout the event."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  className?: string;
  img: string;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, className, img, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area} ${className || ''}`}>
      <div className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-700 p-2 md:rounded-3xl md:p-3 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-white dark:bg-gray-900 p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-full rounded-lg overflow-hidden mb-2">
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-full  rounded-lg"
                draggable="false"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-gray-600 md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};