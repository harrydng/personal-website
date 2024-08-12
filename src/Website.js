import React, { useState, useEffect } from "react";
import AboutMe from "./pages/about-me";
import Experiences from "./pages/experience";
import Projects from "./pages/projects";
import Contacts from "./pages/side-bar/contacts";
import NavigationBar from "./pages/side-bar/nav-bar";
import Introduction from "./pages/introduction";
import ContactMe from "./pages/contact-me";
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
    // Add event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle mouse scroll, hide the bar when the mouse scrolls down the page
  const handleMouseScroll = () => {
    const currY = window.scrollY;

    if (currY < lastScrollY) {
      // Scrolling up
      setShowBar(true);
    } else if (currY > lastScrollY) {
      // Scrolling down
      setShowBar(false);
    }

    // Log values for debugging (optional)
    console.log("Current Y:", currY);
    console.log("Last Scroll Y:", lastScrollY);
    console.log("Show Bar:", showBar);

    setLastScrollY(currY);
  };

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener("scroll", handleMouseScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleMouseScroll);
    };
  }, [lastScrollY]); // Add `lastScrollY` as a dependency to update on scroll

  return (
    <div className="h-full w-full bg-stone-950 text-stone-300">
      {/* Mouse movement effect layer */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(4 47 46), rgba(3, 7, 18, 0) 100%)`,
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

        <div className="space-y-24">
          <div>
            <Introduction />
          </div>

          <div id="about-me">
            <div id="about-me-spacer" className="h-14" />
            <AboutMe />
          </div>

          <div id="experience">
            <div id="experience-spacer" className="h-14" />
            <Experiences />
          </div>

          <div id="projects">
            <div id="projects-spacer" className="h-14" />
            <Projects />
          </div>

          <div id="contact-me">
            <div id="contact-me-spacer" className="h-14" />
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;
