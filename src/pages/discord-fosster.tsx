import FOSSterHeader from "@components/fosster-header";
import DiscordHero from "@components/discord-hero";
import DiscordSection1 from "@components/discord-section-1";
import DiscordSection2 from "@components/discord-section-2";
import DiscordSection3 from "@components/discord-section-3";
import DiscordSection4 from "@components/discord-section-4";
import DiscordSection5 from "@components/discord-section-5";
import DiscordFooter from "@components/discord-footer";
import Marquee from "@components/marquee";
import Footer from "@components/footer";
export default function DiscordFOSSter() {
  return (
    <div className="min-h-screen">
      <FOSSterHeader />
      <DiscordHero />
      <DiscordSection2 />
      <DiscordSection1 />
      {/* <Marquee /> */}
      <DiscordSection3 />
      <DiscordSection4 />
      <DiscordSection5 />
      <DiscordFooter />
      <Footer/>
    </div>
  );
}