"use client";

import { useState } from "react";
import { Moon, Sun, Search } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="fixed left-0 z-50 flex items-center justify-between w-full px-8 bg-black top-6 font-poppins">
      {/* Left - Logo with Uniform Padding */}
      <div className="px-8 text-lg font-bold text-white">Logo</div>

      {/* Center - Cylindrical Header with Gradient Border */}
      <div className="relative w-[60%] max-w-4xl flex justify-center">
        <header className="relative flex items-center justify-between w-full px-8 py-3 bg-black rounded-full shadow-lg border-gradient">
          {/* Navigation Links + Search (Uniform Spacing) */}
          <nav className="flex items-center justify-between w-full font-semibold text-white gap-x-6">
            {["Book a call", "About", "Episodes", "Blogs", "Contact"].map(
              (item, index) => (
                <a key={index} href="#" className="transition hover:text-orange-400">
                  {item}
                </a>
              )
            )}

            {/* Search Icon (Aligned & Spaced Properly) */}
            <button className="flex items-center justify-center w-10 h-10 text-white bg-orange-500 rounded-full shadow-md">
              <Search size={20} />
            </button>
          </nav>
        </header>
      </div>

      {/* Right - Theme Toggle with Uniform Padding */}
      <button onClick={() => setDarkMode(!darkMode)} className="px-8 text-white">
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
};

export default Navbar;
