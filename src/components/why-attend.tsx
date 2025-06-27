import { Network, BookOpen, Wrench, Briefcase, Globe } from "lucide-react";

export default function WhyAttend() {
  const benefits = [
    {
      icon: Network,
      title: "Connect with open-source leaders and innovators",
      description: "Network with industry pioneers and thought leaders shaping the future of open source."
    },
    {
      icon: BookOpen,
      title: "Learn from real-world projects and expert contributors",
      description: "Gain insights from successful projects and experienced maintainers."
    },
    {
      icon: Wrench,
      title: "Gain hands-on experience with modern tools and tech",
      description: "Workshop sessions with cutting-edge technologies and best practices."
    },
    {
      icon: Briefcase,
      title: "Discover career opportunities and grow your network",
      description: "Connect with employers and expand your professional network."
    },
    {
      icon: Globe,
      title: "Be part of a global, collaborative community",
      description: "Join a worldwide movement of contributors making a difference."
    }
  ];

  return (
    <section id="why-attend" className="py-16 bg-gradient-to-br from-[hsl(223,21%,12%)] to-[hsl(235,30%,15%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Attend
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            FOSSter offers an unparalleled experience designed to empower every member of the open-source community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-6 bg-gradient-to-br from-[hsl(223,21%,15%)] to-[hsl(235,30%,18%)] rounded-xl hover:bg-gradient-to-br hover:from-[hsl(235,85%,64%)]/10 hover:to-[hsl(300,85%,70%)]/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-[hsl(235,30%,25%)]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-[hsl(235,85%,64%)] to-[hsl(300,85%,70%)] rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[hsl(235,85%,64%)] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}