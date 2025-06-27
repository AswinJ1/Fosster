import { Button } from "@components/ui/button";
import { ArrowRight, Target, Users, Star, Award } from "lucide-react";

export default function SponsorSection() {
  const benefits = [
    {
      icon: Target,
      title: "Direct Access",
      description: "Unparalleled access to a diverse and vibrant open-source community"
    },
    {
      icon: Users,
      title: "Community Reach",
      description: "Connect with passionate developers and contributors in one place"
    },
    {
      icon: Star,
      title: "Brand Visibility",
      description: "Make your brand a key part of the open-source movement"
    },
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Support the leading event for open-source collaboration"
    }
  ];

  return (
    <section id="sponsor" className="py-16 bg-gradient-to-br from-[hsl(235,30%,15%)] to-[hsl(223,21%,12%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Become a Sponsor
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join hands with FOSSter and unlock unparalleled access to a diverse and vibrant open-source community all in one place! 
            Seize the opportunity to support the leading event that brings together passionate open-source developers and contributors. 
            Make your brand a key part of the open-source movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-[hsl(223,21%,15%)] to-[hsl(235,30%,18%)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[hsl(235,30%,25%)] hover:border-[hsl(235,85%,64%)]/50">
              <div className="text-center">
                <div className="p-3 bg-gradient-to-br from-[hsl(235,85%,64%)] to-[hsl(300,85%,70%)] rounded-lg shadow-lg mx-auto w-fit mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[hsl(223,21%,15%)] to-[hsl(235,30%,18%)] rounded-2xl p-8 shadow-xl border border-[hsl(235,30%,25%)]">
          <div className="text-center">
            <div className="text-6xl mb-6">🤝</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Partner With Us
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your investment into meaningful connections with the next generation of open-source talent and innovation leaders.
            </p>
            
            <Button 
              className="bg-[hsl(300,85%,70%)] hover:bg-[hsl(300,85%,66%)] text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Explore Sponsorship
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}