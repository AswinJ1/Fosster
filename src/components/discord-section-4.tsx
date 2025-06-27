export default function DiscordSection4() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              WHO SHOULD<br />
              ATTEND?
            </h2>
            
            <div className="space-y-6 max-w-lg">
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[hsl(235,85%,64%)] rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <h3 className="text-xl font-bold text-gray-900">Students</h3>
                </div>
                <p className="text-gray-600 ml-11">Jumpstart your open-source journey, gain hands-on experience, and connect with mentors to develop your skills and career.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[hsl(235,85%,64%)] rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <h3 className="text-xl font-bold text-gray-900">DevOps Professionals</h3>
                </div>
                <p className="text-gray-600 ml-11">Discover the latest open-source tools and best practices to streamline workflows and improve infrastructure management.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[hsl(235,85%,64%)] rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <h3 className="text-xl font-bold text-gray-900">Community Members</h3>
                </div>
                <p className="text-gray-600 ml-11">Expand your network, share your knowledge, and help grow a vibrant, inclusive open-source ecosystem.</p>
              </div>
            </div>
          </div>

          {/* Right Content - Mobile Chat Interface */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            {/* Mobile Device */}
            <div className="relative">
<img src="/dev.png" alt="" />             
              
              {/* Floating elements */}
              {/* <div className="absolute -top-6 -left-6 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-xl">💚</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center shadow-lg transform rotate-12">
                <span className="text-white text-xs font-bold">99+</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-12 left-16 w-32 h-32 bg-red-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-12 w-24 h-24 bg-pink-100 rounded-full opacity-40"></div>
    </section>
  );
}