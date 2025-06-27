import { GraduationCap, Settings, BookOpen, Users } from "lucide-react";

export default function WhoShouldAttend() {
  const attendees = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Jumpstart your open-source journey, gain hands-on experience, and connect with mentors to develop your skills and career.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Settings,
      title: "DevOps Professionals",
      description: "Discover the latest open-source tools and best practices to streamline workflows and improve infrastructure management.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: BookOpen,
      title: "Academics & Researchers",
      description: "Engage with cutting-edge projects, collaborate with industry experts, and contribute to the academic and practical growth of open source.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Community Members & Contributors",
      description: "Expand your network, share your knowledge, and help grow a vibrant, inclusive open-source ecosystem.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="who-should-attend" className="py-16 bg-gradient-to-br from-[hsl(235,30%,15%)] to-[hsl(223,21%,12%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Who Should Attend?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {attendees.map((attendee, index) => (
            <div key={index} className="bg-gradient-to-br from-[hsl(223,21%,15%)] to-[hsl(235,30%,18%)] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-[hsl(235,30%,25%)] hover:border-[hsl(235,85%,64%)]/50">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className={`p-4 bg-gradient-to-br ${attendee.color} rounded-xl shadow-lg`}>
                    <attendee.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl font-bold text-[hsl(235,85%,64%)] mr-2">
                      {index + 1}.
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {attendee.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {attendee.description}
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