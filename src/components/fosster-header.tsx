'use client'
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Users, Calendar, MessageCircle, Gamepad2, Bug, Terminal, BookOpen, FileText, Keyboard, Building, Zap, Code, Mic, Coffee, Gift, MapPin, Bed, Star } from "lucide-react";
import ResponsiveAnimatedMenu from "./navmenu";

// Desktop Menu Component (unchanged)
function DesktopMenu({ 
  menu, 
  isHover, 
  nestedHover, 
  onMouseEnter, 
  onMouseLeave, 
  onNestedHover 
}: { 
  menu: any;
  isHover: boolean;
  nestedHover: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onNestedHover: (name: string | null) => void;
}) {
  const hasSubMenu = menu?.subMenu?.length;
  
  // Responsive grid columns based on screen size and item count
  const getGridCols = (itemCount: number) => {
    if (itemCount <= 3) return 1;
    if (itemCount <= 6) return 2;
    return 3;
  };

  const gridCols = hasSubMenu ? getGridCols(menu.subMenu.length) : 1;

  return (
    <li
      className="group/link relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      key={menu.name}
    >
      <span className="flex items-center gap-1 hover:bg-blue-100 cursor-pointer px-2 xl:px-3 py-1 rounded-xl text-sm xl:text-base transition-colors duration-200">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className={`mt-[0.6px] duration-200 w-4 h-4 ${isHover ? 'rotate-180' : ''}`} />
        )}
      </span>
      {hasSubMenu && (
        <div
          className={`sub-menu absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg p-3 xl:p-4 z-50 transition-all duration-300 shadow-lg ${
            isHover ? "opacity-100 visible" : "opacity-0 invisible"
          } ${
            gridCols === 1 ? "min-w-[280px] xl:min-w-[300px]" : 
            gridCols === 2 ? "min-w-[450px] xl:min-w-[500px]" : 
            "min-w-[600px] xl:min-w-[700px]"
          }`}
          style={{
            transform: isHover ? "rotateX(0deg)" : "rotateX(-15deg)",
            transformOrigin: "top",
          }}
        >
          <div
            className={`grid gap-3 xl:gap-4 ${
              gridCols === 3
                ? "grid-cols-2 xl:grid-cols-3"
                : gridCols === 2
                ? "grid-cols-1 xl:grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {hasSubMenu &&
              menu.subMenu.map((submenu: any, i: number) => (
                <div key={i} className="relative">
                  {submenu.hasNestedMenu ? (
                    <div
                      className="relative cursor-pointer"
                      onMouseEnter={() => onNestedHover(submenu.name)}
                      onMouseLeave={() => onNestedHover(null)}
                    >
                      <div className="flex items-center gap-x-2 xl:gap-x-3 group/menubox p-2 rounded-md hover:bg-blue-100">
                        <div className="bg-blue-100 w-fit p-1.5 xl:p-2 rounded-md group-hover/menubox:bg-blue-500 group-hover/menubox:text-white duration-300">
                          {submenu.icon && <submenu.icon size={16} className="xl:w-[18px] xl:h-[18px]" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h6 className="font-semibold text-sm truncate">{submenu.displayName || submenu.name}</h6>
                          <p className="text-xs text-gray-600 truncate">{submenu.desc}</p>
                        </div>
                        <ChevronDown className="rotate-[-90deg] text-gray-400 flex-shrink-0" size={14} />
                      </div>
                      
                      {/* Nested Submenu */}
                      {nestedHover === submenu.name && submenu.nestedItems && (
                        <div className="absolute left-full top-0 ml-2 bg-white border border-gray-200 rounded-lg p-3 min-w-[250px] xl:min-w-[280px] z-60 shadow-lg">
                          <div className="grid gap-2">
                            {submenu.nestedItems.map((nestedItem: any, j: number) => (
                              <Link href={`/${nestedItem.name}`} key={j}>
                                <div className="flex items-center gap-x-2 xl:gap-x-3 group/nested p-2 rounded-md hover:bg-blue-100">
                                  <div className="bg-blue-100 w-fit p-1.5 xl:p-2 rounded-md group-hover/nested:bg-blue-500 group-hover/nested:text-white duration-300">
                                    {nestedItem.icon && <nestedItem.icon size={14} className="xl:w-4 xl:h-4" />}
                                  </div>
                                  <div className="min-w-0">
                                    <h6 className="font-semibold text-sm truncate">{nestedItem.displayName}</h6>
                                    <p className="text-xs text-gray-600 truncate">{nestedItem.desc}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={`/${submenu.name}`}>
                      <div className="relative cursor-pointer">
                        <div className="flex items-center gap-x-2 xl:gap-x-3 group/menubox p-2 rounded-md hover:bg-blue-100">
                          <div className="bg-blue-100 w-fit p-1.5 xl:p-2 rounded-md group-hover/menubox:bg-blue-500 group-hover/menubox:text-white duration-300">
                            {submenu.icon && <submenu.icon size={16} className="xl:w-[18px] xl:h-[18px]" />}
                          </div>
                          <div className="min-w-0">
                            <h6 className="font-semibold text-sm truncate">{submenu.displayName || submenu.name}</h6>
                            <p className="text-xs text-gray-600 truncate">{submenu.desc}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </li>
  );
}

// Main Navigation Component
export default function FOSSterHeader() {
  // Centralized state management for desktop menu
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [nestedHover, setNestedHover] = useState<string | null>(null);

  const menuData = [
    {
      name: "About",
      subMenu: [
        { name: "about", icon: Users, desc: "Learn about our mission" },
        { name: "attend", icon: Calendar, desc: "Join our events" },
        { name: "contact-us", icon: MessageCircle, desc: "Get in touch" }
      ]
    },
    {
      name: "Events",
      subMenu: [
        { 
          name: "Game Zones", 
          icon: Gamepad2, 
          desc: "Gaming activities",
          hasNestedMenu: true,
          nestedItems: [
            { name: "events/gamezones/bug-fixing", icon: Bug, desc: "Debug challenges", displayName: "Bug Fixing" },
            { name: "events/gamezones/commandline-tasks", icon: Terminal, desc: "CLI competitions", displayName: "CLI Tasks" },
            { name: "events/gamezones/opensource-quiz", icon: BookOpen, desc: "Knowledge quiz", displayName: "Open Source Quiz" },
            { name: "events/gamezones/regex-writing", icon: FileText, desc: "Pattern matching", displayName: "Regex Writing" },
            { name: "events/gamezones/typing-challenge", icon: Keyboard, desc: "Speed typing", displayName: "Typing Challenge" }
          ]
        },
        { name: "events/jobfair", icon: Building, desc: "Career opportunities", displayName: "Job Fair" },
        { name: "events/lightning-talks", icon: Zap, desc: "Quick presentations", displayName: "Lightning Talks" },
        { name: "events/opensource-101", icon: Code, desc: "Open source basics", displayName: "Open Source 101" },
        { name: "events/panel-discussion", icon: Users, desc: "Expert panels", displayName: "Panel Discussion" },
        { name: "events/speaker-sections", icon: Mic, desc: "Featured speakers", displayName: "Speaker Sessions" },
        { name: "events/workshops", icon: Coffee, desc: "Hands-on learning", displayName: "Workshops" },
      ]
    },
    {
      name: "Sponsor",
      subMenu: [
        { name: "sponsor", icon: Gift, desc: "Partnership opportunities", displayName: "Become a Sponsor" }
      ]
    },
    {
      name: "Venue",
      subMenu: [
        { name: "venue/banglore", icon: MapPin, desc: "Bangalore location", displayName: "Bangalore" },
        { name: "venue/hotels", icon: Bed, desc: "Accommodation options", displayName: "Hotels & Accommodation" },
        { name: "venue/recommendation", icon: Star, desc: "Local recommendations", displayName: "Local Recommendations" }
      ]
    }
  ];

  const handleMenuHover = (menuName: string) => {
    setActiveMenu(menuName);
    setNestedHover(null);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setNestedHover(null);
  };

  const handleNestedHover = (nestedName: string | null) => {
    setNestedHover(nestedName);
  };

  return (
    <div className="bg-white text-black sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-base sm:text-lg lg:text-xl font-bold truncate" style={{ height: "40px" }}>
            <img
              src="/logo.jpg"
              alt="Fosster Logo"
              className="h-38 w-38 object-contain bg-transparent -my-2"
              style={{ background: "transparent" }}
            />
          </Link>
          
          {/* Desktop Menu - Centered */}
          <div className="hidden xl:flex flex-1 justify-center">
            <ul className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
              {menuData.map((menu) => (
                <DesktopMenu 
                  key={menu.name} 
                  menu={menu}
                  isHover={activeMenu === menu.name}
                  nestedHover={nestedHover}
                  onMouseEnter={() => handleMenuHover(menu.name)}
                  onMouseLeave={handleMenuLeave}
                  onNestedHover={handleNestedHover}
                />
              ))}
            </ul>
          </div>

          {/* Empty space to balance the layout */}
          <div className="hidden xl:block w-[120px]"></div>
        </div>
      </nav>
      
      {/* Animated Mobile Menu - Shown on mobile and tablet */}
      <div className="xl:hidden">
        <ResponsiveAnimatedMenu />
      </div>
    </div>
  );
}