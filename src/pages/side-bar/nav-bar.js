import React from "react";
import { navLinks } from "./constants";

function NavigationBar() {
  return (
    <div className="fixed top-16 right-16 flex items-center">
      {/* The Navigation */}
      <nav className="flex space-x-10">
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="text-xl font-semibold hover:text-cyan-700 duration-200"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* The resume button */}
      <a
        href="/Harry_Resume-08.08.2024.pdf"
        className="ml-10 px-4 py-2 border-4 border-black rounded bg-red-800 text-xl font-bold text-black hover:bg-white hover:text-black hover:scale-110 duration-200"
      >
        Resume
      </a>
    </div>
  );
}

export default NavigationBar;
