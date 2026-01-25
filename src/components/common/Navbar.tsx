"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/code-icon.png'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/content", label: "Examples" },
    { href: "/text-editor", label: "TextEditor" },
    { href: "/text-editor", label: "components" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className={`text-3xl font-medium transition-colors duration-300 ${
            isScrolled ? 'text-white' : 'text-white'
          }`}>
            Custom
          </h1>
          <Link href="/" className="flex items-center">
            <div className={`relative rounded-full overflow-hidden transition-all duration-300 ${
              isScrolled ? 'brightness-0 invert' : ''
            }`}>
              <Image
                src={logo}
                alt="code Logo"
                width={100}
                height={100}
                className={`w-14 h-11 object-contain transition-all duration-300 ${
                  isScrolled 
                    ? 'brightness-0 invert' // Makes the logo white
                    : 'brightness-0 invert'
                }`}
                priority
              />
            </div>
          </Link>
        </div>

        <div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-green-400 font-medium"
                    : isScrolled 
                      ? "text-white hover:text-green-300" 
                      : "text-white hover:text-green-400"
                } transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-white/10 text-base font-medium`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className={`focus:outline-none transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br from-green-600/95 to-blue-600/95 backdrop-blur-sm z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-medium text-white">Custom</h1>
              <div className="relative rounded-full overflow-hidden bg-white/20 p-1">
                <Image
                  src={logo}
                  alt="code Logo"
                  width={80}
                  height={60}
                  className="w-10 h-8 object-contain brightness-0 invert"
                  priority
                />
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none hover:bg-white/20 p-2 rounded-lg transition-colors duration-300"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-2 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "bg-white/30 text-white border-l-4 border-green-400"
                    : "text-white hover:text-green-300"
                } hover:bg-white/20 py-4 px-4 rounded-lg transition-all duration-300 text-lg font-medium`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/30">
            <p className="text-white/80 text-center text-sm">
              © 2024 Custom Code. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-40 lg:hidden backdrop-blur-sm" 
          onClick={toggleSidebar}
        />
      )}
    </nav>
  );
}