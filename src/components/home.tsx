// src/components/Home.tsx
'use client';
// import FOSSterHeader from '@components/fosster-header';
import DiscordHero from "@components/discord-hero";
import DiscordSection1 from "@components/discord-section-1";
import DiscordSection2 from "@components/discord-section-2";
// import DiscordSection3 from "@components/discord-section-3";
import DiscordSection4 from "@components/discord-section-4";
import DiscordSection5 from "@components/discord-section-5";
import DiscordFooter from "@components/discord-footer";
// import { GlowingEffectDemo } from "@components/ui/glowingeffectdemo";
import { GlowingEffectDemo } from "./glowingeffectdemo";
import { BackgroundBeamsWithCollisionDemo } from "./herocomponent";
import ResponsiveAnimatedMenu from "./navmenu";
// import Footer from "@components/footer";
import Homecoming from "./hero_animated";
import Marquee from "./marquee";
import Hero from "./hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <FOSSterHeader /> */}
      {/* <DiscordHero /> */}
      {/* <ResponsiveAnimatedMenu /> */}
      {/* <BackgroundBeamsWithCollisionDemo /> */}
      <Hero />
      {/* <Homecoming /> */}
      <DiscordSection2 />
      <DiscordSection1 />
      {/* <DiscordSection3 /> */}
      {/* <Marquee /> */}
       <GlowingEffectDemo />
      <DiscordSection4 />
      <DiscordSection5 />
      <DiscordFooter />
     
      {/* <Footer /> */}
      
    </div>
  );
}
