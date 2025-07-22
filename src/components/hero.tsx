'use client';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const carousel = document.getElementById("carousel");
    const slideLeft = document.getElementById("slideLeft");
    const slideRight = document.getElementById("slideRight");

    slideLeft?.addEventListener("click", () => {
      carousel?.scrollBy({ left: -carousel.offsetWidth, behavior: "smooth" });
    });

    slideRight?.addEventListener("click", () => {
      carousel?.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-bg text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1
              className="text-5xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(90deg, #8A2BE3, #BC7878)' }}
            >
              FOSSter 2025
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              November xx - xx , 2025 | Bengaluru
            </p>
          </div>

          <div className="max-w-2xl">
            <div className="text-3xl md:text-4xl font-bold leading-relaxed mb-8 text-left">
              <p>Open <span className="text-pink-400">Source</span></p>
              <p>Open <span className="text-pink-400">Minds</span></p>
              <p>Open <span className="text-pink-400">Future</span></p>
            </div>

            <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed text-left">
              Join the most anticipated tech conference of 2025 and discover the next wave of innovation. Connect with industry pioneers and shape the future of technology.
            </p>

            <div className="flex gap-4 flex-wrap text-left">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition">
                Register Now
              </button>
              <button className="px-6 py-3 rounded-full border border-purple-500 text-white font-medium hover:bg-purple-500 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
            pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu
            aenean sed diam urna tempor. Ad litora torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section id="speakers" className="py-20 px-6 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Featured Speakers</h2>
        <div className="relative max-w-xl mx-auto">
          <button
            id="slideLeft"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full hover:bg-black/80"
          >
            ◀
          </button>
          <button
            id="slideRight"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full hover:bg-black/80"
          >
            ▶
          </button>

          <div id="carousel" className="flex overflow-hidden scroll-smooth snap-x snap-mandatory">
            <div className="min-w-full snap-center transition-transform duration-500 px-4">
              <div className="bg-[#1b1b1b] h-72 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-xl">Speaker 1</span>
              </div>
            </div>

            <div className="min-w-full snap-center transition-transform duration-500 px-4">
              <div className="bg-[#1b1b1b] h-72 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-xl">Speaker 2</span>
              </div>
            </div>

            <div className="min-w-full snap-center transition-transform duration-500 px-4">
              <div className="bg-[#1b1b1b] h-72 rounded-2xl flex items-center justify-center">
                <span className="text-gray-400 text-xl">Speaker 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
