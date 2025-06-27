export default function DiscordSection5() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Gaming/Console Interface */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Gaming Console Mockup */}
            <div className="relative">
             <img src="/speaker.png" alt="" />
              
              {/* Floating elements */}
              {/* <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-white text-lg">🎯</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-10 bg-purple-400 rounded-lg flex items-center justify-center shadow-lg transform -rotate-12">
                <span className="text-white text-xs font-bold">LIVE</span>
              </div> */}
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              MEET THE<br />
              SPEAKERS
            </h2>
            
            <div className="space-y-6 max-w-lg">
              <p className="text-lg text-gray-600 leading-relaxed">
                Coming Soon – Stay tuned for a lineup of open-source pioneers, creators, and thought leaders!
              </p>

              {/* <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-6xl mb-4">🎤</div>
                <div className="text-gray-600 font-medium">Speaker Announcements</div>
                <div className="text-sm text-gray-500 mt-2">Updates coming soon</div>
              </div> */}

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Become a Sponsor</h3>
                <p className="text-gray-600">
                  Join hands with FOSSter and unlock unparalleled access to a diverse and vibrant open-source community all in one place! 
                  Seize the opportunity to support the leading event that brings together passionate open-source developers and contributors.
                </p>
                <div className="pt-2">
                  <a href="#" className="text-[hsl(235,85%,64%)] font-semibold hover:underline">
                    Explore Sponsorship →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-16 right-12 w-28 h-28 bg-green-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-12 left-10 w-36 h-36 bg-yellow-100 rounded-full opacity-30"></div>
    </section>
  );
}