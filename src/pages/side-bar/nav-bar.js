import React from "react";
import { navLinks } from "./constants";
import { GiHoodedFigure } from "react-icons/gi";

function NavigationBar() {
  return (
    <div className="fixed top-5 left-0 right-0 flex items-center justify-between px-16 py-4 bg-opacity-75">
      {/* The Website's Restart page button */}
      <a href="/" className="flex items-center">
        <GiHoodedFigure className="w-20 h-20 text-stone-300 hover:scale-125 duration-200" />
      </a>

      {/* The Website's Navigations */}
      <div className="flex items-center">
        {/* The Navigation */}
        <nav className="flex space-x-10">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-xl font-semibold text-stone-300 hover:text-green-400 duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* The Resume button */}
        <a
          href="/Harry_Resume-08.08.2024.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-10 px-4 py-2 text-xl bg-green-600 font-bold text-black hover:bg-black hover:text-green-400 hover:scale-110 duration-200"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
