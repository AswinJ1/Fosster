import FOSSterHeader from "@/components/fosster-header";
import FOSSterHero from "@/components/fosster-hero";
import WhyAttend from "@/components/why-attend";
import WhatIsFOSSter from "@/components/what-is-fosster";
import EventsSection from "@/components/events-section";
import WhoShouldAttend from "@/components/who-should-attend";
import SpeakersSection from "@/components/speakers-section";
import SponsorSection from "@/components/sponsor-section";

export default function FOSSter() {
  return (
    <div className="min-h-screen">
      <FOSSterHeader />
      <FOSSterHero />
      <WhyAttend />
      <WhatIsFOSSter />
      <EventsSection />
      <WhoShouldAttend />
      <SpeakersSection />
      <SponsorSection />
    </div>
  );
}