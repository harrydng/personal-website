import React from "react";
import { navLinks } from "./constants";
import { GiHoodedFigure } from "react-icons/gi";

function NavigationBar() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-5 left-0 right-0 flex items-center justify-between px-16 py-4 bg-opacity-75">
      <a href="/" className="flex items-center">
        <GiHoodedFigure className="w-20 h-20 text-stone-300 hover:scale-125 duration-200" />
      </a>

      <div className="flex items-center">
        <nav className="flex space-x-10">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-xl font-semibold text-stone-300 hover:text-green-400 duration-200"
            >
              {label}
            </button>
          ))}
        </nav>

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
