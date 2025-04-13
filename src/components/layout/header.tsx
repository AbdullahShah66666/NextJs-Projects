"use client";

import ThemeToggle from "@/components/theme/themeTogglingButton";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleIconRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleLinkClicked = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = sidebarRef.current;
      const toggleIcon = toggleIconRef.current;

      if (
        sidebar &&
        !sidebar.contains(e.target as Node) &&
        toggleIcon &&
        !toggleIcon.contains(e.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className='font-semibold'>
      {/* Top Navbar */}
      <div className='hidden sm:flex flex-row justify-end gap-1 mr-5'>
        {navItems.map((item) => (
          <motion.div
            key={`navbar-top-${item.href}`}
            whileHover={{
              scale: 1.02,
              transition: { type: "spring", stiffness: 100, damping: 5 },
            }}
            className='text-black px-7 py-1.5 hover:bg-gray-400 transition-bg duration-200 rounded-sm'
          >
            <Link href={item.href}>{item.label}</Link>
          </motion.div>
        ))}
      </div>

      <div className='flex flex-row justify-between'>
        {/* Toggle Icon */}
        <div
          ref={toggleIconRef}
          onClick={toggleSidebar}
          className='sm:hidden cursor-pointer z-50 ml-2 mt-1 w-fit'
        >
          <AnimatePresence mode='wait'>
            {isSidebarOpen ? (
              <motion.div
                key='back'
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <IoIosArrowBack size={25} color='black' />
              </motion.div>
            ) : (
              <motion.div
                key='hamburger'
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <RxHamburgerMenu
                  className='icon-thicker'
                  size={25}
                  color='black'
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Theme Toggling Icons */}
        <div className='flex flex-row gap-2 absolute right-1'>
          <ThemeToggle />
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            ref={sidebarRef}
            layout
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{
              opacity: { duration: 0.3 },
              x: { duration: 0.4 },
            }}
            className='rounded-b-lg rounded-t-none fixed top-8 left-0 w-auto h-screen bg-gray-300 z-10 flex flex-col items-start justify-start'
          >
            {navItems.map((item) => (
              <motion.div
                key={`navbar-side-${item.href}`}
                whileHover={{
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 5 },
                }}
                className='text-black px-3 py-1.5 rounded-md w-full hover:bg-gray-400 transition-bg duration-200'
              >
                <Link href={item.href} onClick={handleLinkClicked}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
