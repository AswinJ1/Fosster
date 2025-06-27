import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c0e1a] to-[#1e1f3a] overflow-x-hidden">
      <Header />
      <Hero />
    </div>
  );
}
