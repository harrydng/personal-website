import React, { useState, useEffect } from "react";
import AboutMe from "./pages/about-me";
import Experiences from "./pages/experience";
import Projects from "./pages/projects";
import Contacts from "./pages/side-bar/contacts";
import NavigationBar from "./pages/side-bar/nav-bar";
import "./index.css";

function Website() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBar, setShowBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle mouse movement, changing color on the screen
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle mouse scroll, hide the bar when the mouse scrolls down the page
  const handleMouseScroll = () => {
    const currY = window.scrollY;
    if (lastScrollY > currY) {
      setShowBar(true);
    } else {
      setShowBar(false);
    }
    setLastScrollY(currY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMouseScroll);

    return () => {
      window.removeEventListener("scroll", handleMouseScroll);
    };
  });

  return (
    <div className="h-full w-full bg-stone-950 text-white selection:bg-white selection:text-black selection:underline custom-scrollbar">
      {/* Mouse movement effect layer */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(4 47 46), rgba(3, 7, 18, 0) 70%)`,
        }}
      ></div>

      <div className="relative z-30">
        <div
          className={`navigation-bar ${
            showBar ? "navigation-bar-visible" : "navigation-bar-hidden"
          }`}
        >
          <NavigationBar />
        </div>
      </div>

      <div className="p-48 relative z-20 font-serif">
        <Contacts />

        <div className="space-y-32">
          <div id="about-me">
            <AboutMe />
          </div>

          <div id="experience">
            <Experiences />
          </div>

          <div id="projects">
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;
