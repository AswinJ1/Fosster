import { Button } from "@components/ui/button";
import CountdownTimer from "./countdown-timer";
import { MapPin, Calendar, Users, Zap } from "lucide-react";

export default function FOSSterHero() {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Bangalore, India" },
    { icon: Calendar, label: "Date", value: "TBD" },
    { icon: Users, label: "Audience", value: "Developers, Students, Industry Leaders, Academics" },
    { icon: Zap, label: "Format", value: "Talks • Workshops • Panels • Hack Challenges" },
  ];

  return (
    <section className="pt-24 pb-16 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-2 h-2 bg-[hsl(235,85%,64%)]/30 rounded-full animate-pulse" />
        <div className="absolute top-[20%] right-[20%] w-3 h-3 bg-[hsl(300,85%,70%)]/30 rounded-full animate-bounce" />
        <div className="absolute top-[60%] left-[10%] w-1 h-1 bg-[hsl(315,75%,75%)]/40 rounded-full animate-ping" />
        <div className="absolute bottom-[30%] right-[15%] w-2 h-2 bg-[hsl(235,85%,64%)]/25 rounded-full animate-pulse" />
        <div className="absolute top-[40%] left-[60%] w-1.5 h-1.5 bg-[hsl(300,85%,70%)]/20 rounded-full animate-bounce" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[hsl(235,85%,64%)] to-[hsl(300,85%,70%)] bg-clip-text text-transparent">
              FOSSter 2025
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
            From First Contributions to Future Tech
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The Premier Event for Open-Source Contributors
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Button 
              size="lg"
              className="bg-[hsl(235,85%,64%)] hover:bg-[hsl(235,85%,60%)] text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Register Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-[hsl(300,85%,70%)] text-[hsl(300,85%,70%)] hover:bg-[hsl(300,85%,70%)] hover:text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Sponsor Us
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-[hsl(142,76%,36%)] text-[hsl(142,76%,36%)] hover:bg-[hsl(142,76%,36%)] hover:text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Call for Speakers
            </Button>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-semibold text-white mb-6">
            Event Countdown
          </h3>
          <CountdownTimer />
        </div>

        {/* Hero Description */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Join <span className="font-bold text-[hsl(235,85%,64%)]">800+</span> passionate open-source enthusiasts, 
            developers, and thought leaders for a <span className="font-bold text-[hsl(300,85%,70%)]">2 day</span> celebration 
            of collaboration, contribution, and cutting-edge innovation.
          </p>
        </div>

        {/* Quick Facts */}
        <div className="bg-gradient-to-br from-[hsl(223,21%,15%)] to-[hsl(235,30%,18%)] rounded-2xl shadow-xl p-8 border border-[hsl(235,30%,25%)]">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Quick Facts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-[hsl(223,21%,18%)]/50 hover:bg-[hsl(223,21%,20%)]/50 transition-colors duration-200 border border-[hsl(235,30%,25%)]">
                <fact.icon className="h-8 w-8 mx-auto mb-3 text-[hsl(235,85%,64%)]" />
                <h4 className="font-semibold text-white mb-2">
                  {fact.label}
                </h4>
                <p className="text-sm text-gray-300">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}