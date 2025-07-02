'use client';
import React from 'react';

import { useState } from "react";
import { Button } from "@components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";

export default function FOSSterHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      label: "About", 
      href: "#about",
      children: [
        { label: "What is FOSSter", href: "#what-is-fosster" },
        { label: "Why Attend", href: "#why-attend" },
        { label: "Who Should Attend", href: "#who-should-attend" }
      ]
    },
    { 
      label: "Events", 
      href: "#events",
      children: [
        { label: "Lightning Talks", href: "#lightning-talks" },
        { label: "Panel Discussions", href: "#panel-discussions" },
        { label: "Tech Workshops", href: "#tech-workshops" },
        { label: "Open Source 101", href: "#open-source-101" },
        { label: "Job Fair", href: "#job-fair" },
        { label: "Game Zone", href: "#game-zone" }
      ]
    },
    { label: "Speakers", href: "#speakers" },
    { 
      label: "Sponsor", 
      href: "#sponsor",
      children: [
        { label: "Become a Sponsor", href: "#become-sponsor" },
        { label: "Sponsorship Packages", href: "#sponsorship-packages" },
        { label: "Partner Benefits", href: "#partner-benefits" }
      ]
    },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm  ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-[hsl(235,85%,64%)]">FOSS</span>
                <span className="text-[hsl(300,85%,70%)]">ter</span>
                <span className="text-sm text-gray-400 ml-2">2025</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.children ? (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="text-gray-300 hover:text-[hsl(235,85%,64%)] px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors duration-200 group"
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      className="min-w-[200px] bg-[hsl(223,21%,11%)] border border-gray-700 shadow-xl rounded-md z-[60]"
                      align="start"
                      sideOffset={8}
                      alignOffset={0}
                      side="bottom"
                      avoidCollisions={true}
                      sticky="always"
                    >
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.label} asChild>
                          <a
                            href={child.href}
                            className="w-full px-4 py-3 text-sm text-gray-300 hover:text-[hsl(235,85%,64%)] hover:bg-[hsl(223,21%,15%)] transition-colors duration-150 cursor-pointer rounded-sm focus:outline-none focus:ring-2 focus:ring-[hsl(235,85%,64%)] focus:ring-opacity-50"
                          >
                            {child.label}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-300 hover:text-[hsl(235,85%,64%)] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-[hsl(235,85%,64%)] text-[hsl(235,85%,64%)] hover:bg-[hsl(235,85%,64%)] hover:text-white transition-colors duration-200"
            >
              Call for Speakers
            </Button>
            <Button
              variant="outline"
              className="border-[hsl(300,85%,70%)] text-[hsl(300,85%,70%)] hover:bg-[hsl(300,85%,70%)] hover:text-white transition-colors duration-200"
            >
              Sponsor Us
            </Button>
            <Button className="bg-[hsl(235,85%,64%)] hover:bg-[hsl(235,85%,60%)] text-white transition-colors duration-200">
              Register Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 p-2 transition-colors duration-200"
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
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[hsl(223,21%,11%)] shadow-lg border-t border-gray-700 z-[55]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[hsl(235,85%,64%)] block px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="text-gray-400 hover:text-[hsl(235,85%,64%)] block px-3 py-1 text-sm transition-colors duration-200"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-[hsl(235,85%,64%)] text-[hsl(235,85%,64%)] hover:bg-[hsl(235,85%,64%)] hover:text-white transition-colors duration-200"
                >
                  Call for Speakers
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-[hsl(300,85%,70%)] text-[hsl(300,85%,70%)] hover:bg-[hsl(300,85%,70%)] hover:text-white transition-colors duration-200"
                >
                  Sponsor Us
                </Button>
                <Button className="w-full bg-[hsl(235,85%,64%)] hover:bg-[hsl(235,85%,60%)] text-white transition-colors duration-200">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}