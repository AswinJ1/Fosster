import { useState } from "react";
import { Button } from "@components/ui/button";
import { Menu, X } from "lucide-react";

const DiscordLogo = () => (
  <svg width="124" height="34" viewBox="0 0 124 34" className="text-white">
    <g fill="currentColor">
      <path d="M26.0015 6.9529c-.6364-.4866-1.3073-.8877-2.0077-1.1981-.0212-.0075-.0424-.015-.0636-.0225-.7365.1368-1.4477.3735-2.1138.699-.4962-.1873-.9986-.3499-1.5072-.4849-.0636-.0225-.1335-.0375-.2009-.0525-.7365.1368-1.4477.3735-2.1138.699-.7365-.1368-1.4852-.2061-2.2401-.2061s-1.5036.0693-2.2401.2061c-.666-.3255-1.3773-.5622-2.1138-.699-.0674.015-.1373.03-.2009.0525-.5086.135-1.0110.2976-1.5072.4849-.666-.3255-1.3773-.5622-2.1138-.699-.0212.0075-.0424.015-.0636.0225-.7004.3104-1.3713.7115-2.0077 1.1981C1.56 9.6864 0 13.6454 0 18.2253v.0075c2.4903 1.8283 4.9106 2.9321 7.2384 3.5685.0424-.0075.0849-.0225.1273-.03.4962-.6739.9374-1.3928 1.3136-2.1567-.0636-.0225-.1273-.0525-.1909-.0825-.9374-.4291-1.8323-.9657-2.6846-1.5848-.0636-.045-.1273-.0975-.1909-.1499.2122-.1574.4244-.3223.6241-.4947.0212-.015.0424-.0375.0636-.0525 5.2819 2.3918 10.9931 2.3918 16.2137 0 .0212.015.0424.0375.0636.0525.1997.1724.4119.3373.6241.4947-.0636.0524-.1273.1049-.1909.1499-.8523.6191-1.7472 1.1557-2.6846 1.5848-.0636.03-.1273.06-.1909.0825.3762.7639.8174 1.4828 1.3136 2.1567.0424.0075.0849.0225.1273.03 2.3278-.6364 4.7481-1.7402 7.2384-3.5685v-.0075c0-4.5799-1.56-8.5389-3.5977-11.2724z"/>
      <path d="M19.4895 16.0183c0-1.4103-1.031-2.5516-2.2963-2.5516s-2.2963 1.1413-2.2963 2.5516 1.031 2.5516 2.2963 2.5516 2.2963-1.1413 2.2963-2.5516z"/>
      <path d="M9.0632 16.0183c0-1.4103-1.031-2.5516-2.2963-2.5516s-2.2963 1.1413-2.2963 2.5516 1.031 2.5516 2.2963 2.5516 2.2963-1.1413 2.2963-2.5516z"/>
    </g>
    <g fill="currentColor">
      <path d="M124 9.4v3.3h-4.7V27h-3.8V12.7h-4.7V9.4H124zM109.6 9.4l-3.5 8.8c-.3.8-.8 1.4-1.4 1.8-.6.4-1.4.6-2.3.6s-1.7-.2-2.3-.6c-.6-.4-1.1-1-1.4-1.8l-3.5-8.8h4l2.9 7.6c.1.3.3.5.5.7.2.2.5.3.8.3s.6-.1.8-.3c.2-.2.4-.4.5-.7l2.9-7.6h4zM82.7 27V9.4h3.8V27h-3.8zM71.4 27c-1.3 0-2.4-.3-3.4-.8-1-.5-1.8-1.3-2.4-2.2-.6-.9-.9-2-.9-3.2s.3-2.3.9-3.2c.6-.9 1.4-1.7 2.4-2.2 1-.5 2.1-.8 3.4-.8s2.4.3 3.4.8c1 .5 1.8 1.3 2.4 2.2.6.9.9 2 .9 3.2s-.3 2.3-.9 3.2c-.6.9-1.4 1.7-2.4 2.2-1 .5-2.1.8-3.4.8zm0-3.2c.6 0 1.1-.2 1.5-.5.4-.3.7-.8.9-1.3.2-.5.3-1.1.3-1.8s-.1-1.3-.3-1.8c-.2-.5-.5-1-.9-1.3-.4-.3-.9-.5-1.5-.5s-1.1.2-1.5.5c-.4.3-.7.8-.9 1.3-.2.5-.3 1.1-.3 1.8s.1 1.3.3 1.8c.2.5.5 1 .9 1.3.4.3.9.5 1.5.5zM54.3 27c-1.4 0-2.6-.3-3.6-.8-1-.5-1.8-1.3-2.3-2.2-.5-.9-.8-2-.8-3.2s.3-2.3.8-3.2c.5-.9 1.3-1.7 2.3-2.2 1-.5 2.2-.8 3.6-.8 1.2 0 2.2.2 3.1.6.9.4 1.6 1 2.1 1.8l-2.8 2c-.3-.4-.6-.7-1-.9-.4-.2-.9-.3-1.4-.3-.8 0-1.4.3-1.9.8-.5.5-.7 1.3-.7 2.2s.2 1.7.7 2.2c.5.5 1.1.8 1.9.8.5 0 1-.1 1.4-.3.4-.2.7-.5 1-.9l2.8 2c-.5.8-1.2 1.4-2.1 1.8-.9.4-1.9.6-3.1.6z"/>
    </g>
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Download",
    "Nitro", 
    "Discover",
    "Safety",
    "Quests",
    "Support",
    "Blog",
    "Developers",
    "Careers"
  ];

  const handleOpenDiscord = () => {
    window.open("https://discord.com/app", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Discord Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <DiscordLogo />
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-[hsl(215,8.8%,73.3%)] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Open Discord Button */}
          <div className="hidden md:block">
            <Button
              onClick={handleOpenDiscord}
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 hover:bg-gray-100"
            >
              Open Discord
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[hsl(215,8.8%,73.3%)] p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[hsl(223,21.4%,10.8%)] border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-[hsl(215,8.8%,73.3%)] block px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={handleOpenDiscord}
                  className="bg-white text-black w-full rounded-full text-sm font-medium hover:bg-gray-100"
                >
                  Open Discord
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
