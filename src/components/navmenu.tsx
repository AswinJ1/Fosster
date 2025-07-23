import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import type { Variants } from "framer-motion";

interface MenuItem {
  id: string;
  title: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { id: '1', title: 'Home Page' },
  { id: '2', title: 'About' },
  { id: '3', title: 'Attend Page' },
  { id: '4', title: 'Sponsor Us' },
  {
    id: '5',
    title: 'Events',
    children: [
      { id: '5.1', title: 'Lightning Talks' },
      { id: '5.2', title: 'Panel Discussions' },
      { id: '5.3', title: 'Open Source 101' },
      { id: '5.4', title: 'Workshops' },
      { id: '5.5', title: 'Job Fair' },
      { id: '5.6', title: 'Speaker sessions' },
    ]
  },
  {
    id: '7',
    title: 'Game Zones',
    children: [
      { id: '7.1', title: 'Typing Challenge' },
      { id: '7.2', title: 'Bug Fixing Race' },
      { id: '7.3', title: 'Command line quiz' },
      { id: '7.4', title: 'Opensource Quiz' },
      { id: '7.5', title: 'Regex writing' },
    ]
  },
  {
    id: '8',
    title: 'Venue',
    children: [
      { id: '8.1', title: 'Travel to Bangalore' },
      { id: '8.2', title: 'Local recommendation' },
      { id: '8.3', title: 'Hotels & Accommodation' },
    ]
  },
  { id: '9', title: 'Contact Pages' },
];

interface PerspectiveTextProps {
  label: string;
}

function PerspectiveText({ label }: PerspectiveTextProps) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full [perspective:1000px] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
      <p className="transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] text-white pointer-events-none uppercase m-0 text-xs sm:text-sm group-hover:-translate-y-full group-hover:opacity-0">
        {label}
      </p>
      <p className="absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] text-white pointer-events-none uppercase m-0 text-xs sm:text-sm opacity-0 [transform-origin:bottom_center] [transform:rotateX(-90deg)_translateY(9px)] group-hover:opacity-100">
        {label}
      </p>
    </div>
  );
}

interface ButtonProps {
  isActive: boolean;
  toggleMenu: () => void;
}

function Button({ isActive, toggleMenu }: ButtonProps) {
  return (
    <div className="absolute top-0 right-0 w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-10 lg:w-[100px] lg:h-[40px] cursor-pointer rounded-full overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{ y: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-indigo-500 group flex items-center justify-center"
          onClick={toggleMenu}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className="absolute top-full left-0 w-full h-full bg-indigo-900 group flex items-center justify-center"
          onClick={toggleMenu}
        >
          <div className="flex flex-col justify-center items-center h-full w-full [perspective:1000px] transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] [transform-style:preserve-3d] group-hover:[transform:rotateX(90deg)]">
            <p className="transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none uppercase m-0 text-white text-xs sm:text-sm font-medium group-hover:-translate-y-full group-hover:opacity-0">
              Close
            </p>
            <p className="absolute transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none uppercase m-0 text-white text-xs sm:text-sm font-medium opacity-0 [transform-origin:bottom_center] [transform:rotateX(-90deg)_translateY(9px)] group-hover:opacity-100">
              Close
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface NavItemProps {
  item: MenuItem;
  level?: number;
}

function NavItem({ item, level = 0 }: NavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-between p-2 hover:bg-indigo-100 cursor-pointer transition-colors ${
          level > 0 ? 'pl-6' : ''
        }`}
        onClick={() => item.children && setIsExpanded(!isExpanded)}
      >
        <span className={`text-indigo-900 ${level > 0 ? 'text-sm' : 'text-base'}`}>
          {item.title}
        </span>
        {item.children && (
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight size={16} className="text-indigo-700" />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {item.children && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="overflow-hidden"
          >
            {item.children.map((child) => (
              <NavItem key={child.id} item={child} level={level + 1} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Nav() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-4 sm:p-6 md:p-8 h-full overflow-y-auto"
    >
      <div className="space-y-2">
        {menuItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

const menuVariants: Variants = {
  open: {
    width: "90vw",
    height: "80vh",
    maxWidth: "480px",
    maxHeight: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween" as const, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "64px",
    height: "32px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween" as const, ease: [0.76, 0, 0.24, 1] }
  }
};

const mobileMenuVariants: Variants = {
  open: {
    width: "95vw",
    height: "85vh",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween" as const, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    width: "64px",
    height: "32px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween" as const, ease: [0.76, 0, 0.24, 1] }
  }
};

export default function ResponsiveAnimatedMenu() {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="fixed right-4 top-4 sm:right-8 sm:top-8 md:right-12 md:top-12 lg:right-[50px] lg:top-[50px] z-50">
      <motion.div
        className="bg-gradient-to-br from-indigo-400 via-indigo-500 to-blue-600 rounded-[25px] relative shadow-lg"
        variants={isMobile ? mobileMenuVariants : menuVariants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && <Nav />}
        </AnimatePresence>
      </motion.div>
      <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
      
      <style jsx>{`
        @media (max-width: 640px) {
          .text-xs { font-size: 0.65rem; }
        }
      `}</style>
    </div>
  );
}