"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
// import { HiArrowLongRight } from "react-icons/hi2";



export default function Navbar() {

  // const user =getUserInfo();
  // console.log("User Info:", user);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

//   const handleLoginLogout = () => {
//     if (isLoggedIn) {
//       // For now, just log the admin out by toggling the state
//       setIsLoggedIn(false);
//     } else {
//       // Optionally, redirect to login page or handle login logic here
//       setIsLoggedIn(true);
//     }
//   };

  const navLinks = [
    { href: "/", label: "Home  " },
    { href: "/about", label: "About  " },
    { href: "/content", label: "Examples"},
    { href: "/blog", label: "Blog  " },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50  text-[#262829] py-4">
      <div className="container  bg-green-50 mx-auto px-4 py-6 flex items-center justify-between rounded-lg">
        {/* Logo */}
        <div className="flex items-center">
            <h1 className="text-3xl font-medium">Custom Code </h1>
          {/* <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="krspeech Logo"
              width={1000}
              height={1000}
              className="rounded-full w-44 h-24 object-cover"
            /> 
          </Link> */}
        </div>

        <div>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10 rounded-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? " text-[#00adbb]"
                    : " text-[#262829]"
                } hover:text-[#00adbb]`}
              >
                {link.label}
              </Link>
            ))}
            {/* Login Button */}
            {/* <div>
              <Link href={isLoggedIn ? "#" : "/login"} passHref>
                <button
                  onClick={handleLoginLogout}
                  className="bg-[#00adbb] text-white hover:text-[#00adbb]
                  border hover:border-[#00adbb] rounded-lg hover:bg-white px-6 py-3 space-x-2 transition duration-300 ease-in-out cursor-pointer flex justify-center items-center gap-2 "
                >
                  {isLoggedIn ? "Logout" : "Log In"}
                   <HiArrowLongRight />
                </button>
              </Link>
            </div> */}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleSidebar}
            className="text-[#00adbb] focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full bg-[#00adbb] z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              {/* <Image
                src={logo}
                alt="AboutAerialLifts Logo"
                width={40}
                height={40}
              /> */}
              <span className="ml-2 text-white font-medium">
                AboutAerialLifts
              </span>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-white focus:outline-none"
            >
              <FaTimes size={24} />
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href ? "text-[#262829]" : " text-white"
                } hover:text-[#262829] py-2 border-b border-white`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for sidebar */}
      {isSidebarOpen && <div className="fixed" onClick={toggleSidebar}></div>}
    </nav>
  );
}