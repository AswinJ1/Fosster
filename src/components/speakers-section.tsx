export default function SpeakersSection() {
  return (
    <section id="speakers" className="py-16 bg-gradient-to-br from-[hsl(223,21%,12%)] to-[hsl(235,30%,15%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Meet the Speakers
          </h2>
          
          <div className="bg-gradient-to-br from-[hsl(235,85%,64%)] to-[hsl(300,85%,70%)] rounded-2xl p-12 shadow-xl">
            <div className="bg-gradient-to-br from-[hsl(223,21%,15%)] to-[hsl(235,30%,18%)] rounded-xl p-8 border border-[hsl(235,30%,25%)]">
              <div className="text-6xl mb-6">🎤</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Coming Soon
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Stay tuned for a lineup of open-source pioneers, creators, and thought leaders!
              </p>
              
              <div className="mt-8 p-4 bg-[hsl(223,21%,18%)]/50 rounded-lg border border-[hsl(235,30%,25%)]">
                <p className="text-sm text-gray-400">
                  Speaker announcements will be made soon. Follow our updates to be the first to know!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}