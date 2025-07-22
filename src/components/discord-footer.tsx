import Link from "next/link";
import { Button } from "@components/ui/button";

export default function DiscordFooter() {
  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(223,21%,8%)] to-[hsl(235,30%,15%)] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[hsl(235,85%,64%)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[15%] w-48 h-48 bg-[hsl(300,85%,70%)]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-[60%] left-[60%] w-32 h-32 bg-[hsl(142,76%,36%)]/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main CTA Content */}
        <div className="space-y-8 mb-5">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            READY TO START YOUR<br />
            OPEN SOURCE JOURNEY?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            FOSSter has the tools and community to support you from your first commit to maintaining major projects.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/attend" passHref>
              <Button
                size="lg"
                className="bg-[hsl(235,85%,64%)] hover:bg-[hsl(235,85%,60%)] text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Register for FOSSter 2025
              </Button>
            </Link>
          </div>
        </div>

        {/* 3D Character Illustrations */}
        {/* <div className="flex justify-center items-end space-x-8 mb-10"> */}
          {/* Character 1 - Developer */}
          {/* <div className="relative group">
            <div className="w-24 h-32 bg-gradient-to-br from-[hsl(235,85%,64%)] to-[hsl(300,85%,70%)] rounded-2xl flex items-end justify-center p-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl mb-2">👩‍💻</div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black/20 rounded-full blur-sm"></div>
          </div> */}

          {/* Character 2 - Designer */}
          {/* <div className="relative group">
            <div className="w-28 h-36 bg-gradient-to-br from-[hsl(142,76%,36%)] to-[hsl(235,85%,64%)] rounded-2xl flex items-end justify-center p-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl mb-2">👨‍🎨</div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black/20 rounded-full blur-sm"></div>
          </div> */}

          {/* Character 3 - Robot/AI */}
          {/* <div className="relative group">
            <div className="w-32 h-40 bg-gradient-to-br from-[hsl(300,85%,70%)] to-[hsl(315,75%,75%)] rounded-2xl flex items-end justify-center p-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-6xl mb-2">🤖</div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black/20 rounded-full blur-sm"></div>
          </div> */}

          {/* Character 4 - Student */}
          {/* <div className="relative group">
            <div className="w-26 h-34 bg-gradient-to-br from-[hsl(235,85%,64%)] to-[hsl(142,76%,36%)] rounded-2xl flex items-end justify-center p-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl mb-2">🧑‍🎓</div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-22 h-4 bg-black/20 rounded-full blur-sm"></div>
          </div> */}

          {/* Character 5 - Maintainer */}
          {/* <div className="relative group">
            <div className="w-24 h-32 bg-gradient-to-br from-[hsl(300,85%,70%)] to-[hsl(235,85%,64%)] rounded-2xl flex items-end justify-center p-2 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl mb-2">👨‍💼</div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black/20 rounded-full blur-sm"></div>
          </div> */}
        </div>

        {/* Footer Navigation */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="text-[hsl(235,85%,64%)] font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">What is FOSSter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why Attend</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Who Should Attend</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[hsl(235,85%,64%)] font-semibold mb-3">Events</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lightning Talks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Job Fair</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[hsl(235,85%,64%)] font-semibold mb-3">Community</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sponsors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[hsl(235,85%,64%)] font-semibold mb-3">Connect</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>
        </div> */}

        {/* Bottom branding */}
        {/* <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="text-8xl md:text-9xl font-black text-white/10 mb-4">
            FOSSter
          </div>
          <div className="text-sm text-gray-500">
            © 2025 FOSSter. Open source community event.
          </div>
        </div> */}
      {/* </div> */}
    </section>
  );
}