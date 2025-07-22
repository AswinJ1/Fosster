'use client'
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Calendar, Users, MapPin, Coffee, Zap, Code, MessageCircle, Mic, Building, Gift, Home, Bed, Star, Gamepad2, Bug, Terminal, BookOpen, FileText, Keyboard } from "lucide-react";

// Desktop Menu Component
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
                          <h6 className="font-semibold text-sm truncate">{submenu.name}</h6>
                          <p className="text-xs text-gray-600 truncate">{submenu.desc}</p>
                        </div>
                        <ChevronDown className="rotate-[-90deg] text-gray-400 flex-shrink-0" size={14} />
                      </div>
                      
                      {/* Nested Submenu */}
                      {nestedHover === submenu.name && submenu.nestedItems && (
                        <div className="absolute left-full top-0 ml-2 bg-white border border-gray-200 rounded-lg p-3 min-w-[250px] xl:min-w-[280px] z-60 shadow-lg">
                          <div className="grid gap-2">
                            {submenu.nestedItems.map((nestedItem: any, j: number) => (
                              <Link href={`/events/${nestedItem.name}`} key={j}>
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
                            <h6 className="font-semibold text-sm truncate">{submenu.name}</h6>
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

// Mobile Menu Component (unchanged)
function MobMenu({ Menus }: { Menus: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<number | null>(null);
  const [nestedClicked, setNestedClicked] = useState<string | null>(null);
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
    setNestedClicked(null);
  };

  return (
    <div>
      {/* Mobile Menu Button */}
      <button 
        className="xl:hidden z-[999] relative p-2 hover:bg-gray-100 rounded-md transition-colors touch-manipulation" 
        onClick={toggleDrawer}
        aria-label="Toggle menu"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[998] xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel - Fully Responsive */}
      <div
        className={`fixed left-0 top-0 h-full w-[85vw] xs:w-[300px] sm:w-[350px] md:w-[380px] lg:w-[400px] bg-[#18181A] text-white overflow-y-auto transition-transform duration-300 z-[999] xl:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ maxWidth: '420px' }}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-700">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg sm:text-xl font-bold truncate">
            Fosster 2025
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1.5 sm:p-2 hover:bg-white/10 rounded-md transition-colors flex-shrink-0 ml-2 touch-manipulation"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-3 sm:p-4">
          <ul className="space-y-1 sm:space-y-2">
            {Menus.map(({ name, subMenu }, i) => {
              const isClicked = clicked === i;
              const hasSubMenu = subMenu?.length;
              return (
                <li key={name}>
                  <button
                    className="w-full flex items-center justify-between p-2 sm:p-3 hover:bg-white/5 rounded-md cursor-pointer transition-colors text-sm sm:text-base touch-manipulation"
                    onClick={() => setClicked(isClicked ? null : i)}
                  >
                    <span className="font-medium truncate">{name}</span>
                    {hasSubMenu && (
                      <ChevronDown
                        className={`transition-transform duration-200 flex-shrink-0 ml-2 ${
                          isClicked ? "rotate-180" : ""
                        }`}
                        size={16}
                      />
                    )}
                  </button>
                  
                  {hasSubMenu && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isClicked ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="ml-3 sm:ml-4 mt-1 sm:mt-2 space-y-1">
                        {subMenu.map((submenu: any) => (
                          <li key={submenu.name}>
                            {submenu.hasNestedMenu ? (
                              <div>
                                <button 
                                  className="w-full p-1.5 sm:p-2 flex items-center justify-between hover:bg-white/5 rounded-md gap-x-2 cursor-pointer transition-colors touch-manipulation"
                                  onClick={() => setNestedClicked(nestedClicked === submenu.name ? null : submenu.name)}
                                >
                                  <div className="flex items-center gap-x-2 min-w-0">
                                    {submenu.icon && <submenu.icon size={16} className="flex-shrink-0" />}
                                    <span className="text-xs sm:text-sm truncate">{submenu.name}</span>
                                  </div>
                                  <ChevronDown
                                    className={`transition-transform duration-200 flex-shrink-0 ${
                                      nestedClicked === submenu.name ? "rotate-180" : ""
                                    }`}
                                    size={14}
                                  />
                                </button>
                                
                                {submenu.nestedItems && (
                                  <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                      nestedClicked === submenu.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                  >
                                    <ul className="ml-4 sm:ml-6 mt-1 sm:mt-2 space-y-1">
                                      {submenu.nestedItems.map((nestedItem: any) => (
                                        <Link 
                                          href={`/events/${nestedItem.name}`} 
                                          key={nestedItem.name} 
                                          onClick={() => setIsOpen(false)}
                                        >
                                          <li className="p-1.5 sm:p-2 flex items-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer transition-colors touch-manipulation">
                                            {nestedItem.icon && <nestedItem.icon size={14} className="flex-shrink-0" />}
                                            <span className="text-xs sm:text-sm truncate">{nestedItem.displayName}</span>
                                          </li>
                                        </Link>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link href={`/${submenu.name}`} onClick={() => setIsOpen(false)}>
                                <div className="p-1.5 sm:p-2 flex items-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer transition-colors touch-manipulation">
                                  {submenu.icon && <submenu.icon size={16} className="flex-shrink-0" />}
                                  <span className="text-xs sm:text-sm truncate">{submenu.name}</span>
                                </div>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

// Main Navigation Component - FIXED
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
          name: "gamezones", 
          icon: Gamepad2, 
          desc: "Gaming activities",
          hasNestedMenu: true,
          nestedItems: [
            { name: "gamezones/bug-fixing", icon: Bug, desc: "Debug challenges", displayName: "Bug Fixing" },
            { name: "gamezones/commandline-tasks", icon: Terminal, desc: "CLI competitions", displayName: "CLI Tasks" },
            { name: "gamezones/opensource-quiz", icon: BookOpen, desc: "Knowledge quiz", displayName: "Open Source Quiz" },
            { name: "gamezones/regex-writing", icon: FileText, desc: "Pattern matching", displayName: "Regex Writing" },
            { name: "gamezones/typing-challenge", icon: Keyboard, desc: "Speed typing", displayName: "Typing Challenge" }
          ]
        },
        { name: "events/jobfair", icon: Building, desc: "Career opportunities" },
        { name: "events/lightning-talks", icon: Zap, desc: "Quick presentations" },
        { name: "events/opensource-101", icon: Code, desc: "Open source basics" },
        { name: "events/panel-discussion", icon: Users, desc: "Expert panels" },
        { name: "events/speaker-sections", icon: Mic, desc: "Featured speakers" },
        { name: "events/workshops", icon: Coffee, desc: "Hands-on learning" },
      ]
    },
    {
      name: "Sponsor",
      subMenu: [
        { name: "sponsor", icon: Gift, desc: "Partnership opportunities" }
      ]
    },
    {
      name: "Venue",
      subMenu: [
        { name: "venue/banglore", icon: MapPin, desc: "Bangalore location" },
        { name: "venue/hotels", icon: Bed, desc: "Accommodation options" },
        { name: "venue/recommendation", icon: Star, desc: "Local recommendations" }
      ]
    }
  ];

  const handleMenuHover = (menuName: string) => {
    setActiveMenu(menuName);
    setNestedHover(null); // Reset nested hover when switching menus
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
          {/* Logo - Responsive sizing */}
          <Link href="/" className="flex items-center gap-2 text-base sm:text-lg lg:text-xl font-bold truncate" style={{ height: "40px" }}>
            <img
              src="/logo.jpg"
              alt="Fosster Logo"
              className="h-38 w-38 object-contain bg-transparent -my-2"
              style={{ background: "transparent" }}
            />
            
          </Link>
          
          {/* Desktop Menu - Hidden on mobile and tablet */}
          <ul className="hidden xl:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
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

          {/* Mobile Menu - Shown on mobile and tablet */}
          <MobMenu Menus={menuData} />
        </div>
      </nav>
    </div>
  );
}