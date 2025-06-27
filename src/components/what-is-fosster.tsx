import { Button } from "@components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WhatIsFOSSter() {
  return (
    <section id="what-is-fosster" className="py-16 bg-gradient-to-br from-[hsl(235,30%,15%)] to-[hsl(223,21%,12%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What is FOSSter 2025?
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              FOSSter isn't just a tech event — it's a movement to grow the open-source community from the ground up.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Across <span className="font-semibold text-[hsl(235,85%,64%)]">2 focused days</span>, FOSSter brings together beginners, seasoned contributors, and open-source champions to learn, collaborate, and connect.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you're making your first Git commit or scaling global projects, FOSSter is where contribution meets community — through hands-on workshops, real-world challenges, and conversations that matter.
            </p>
            
            <Button 
              className="bg-[hsl(235,85%,64%)] hover:bg-[hsl(235,85%,60%)] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Discover the FOSSter Experience
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[hsl(235,85%,64%)] to-[hsl(300,85%,70%)] rounded-2xl p-8 shadow-2xl">
              <div className="bg-[hsl(223,21%,15%)] rounded-xl p-6 space-y-4 border border-[hsl(235,30%,25%)]">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-400">$</div>
                    <div className="text-gray-300">git clone https://github.com/fosster2025/community</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-400">$</div>
                    <div className="text-gray-300">git checkout -b my-first-contribution</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-400">$</div>
                    <div className="text-gray-300">git add .</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-400">$</div>
                    <div className="text-gray-300">git commit -m "Starting my open source journey"</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-green-400">$</div>
                    <div className="text-[hsl(235,85%,64%)]">git push origin my-first-contribution</div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-[hsl(235,30%,25%)]">
                  <div className="text-sm text-gray-400">
                    📝 Pull request created successfully!
                  </div>
                  <div className="text-sm text-[hsl(235,85%,64%)] font-medium">
                    ✅ Welcome to the FOSSter community!
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[hsl(142,76%,36%)] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[hsl(300,85%,70%)] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}