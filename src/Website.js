import AboutMe from "./pages/about-me/AboutMe";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import LinkedIn from "./assets/LinkedInIcon.webp";
import Instagram from "./assets/InstagramIcon.png";
import Facebook from "./assets/FacebookIcon.png";
import React, { useState, useEffect } from 'react';

function Website() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Handle mouse movement
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

    const navLinks = [
        { id: "about-me", label: "About Me" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
    ];

    const socialLinks = [
        { href: "https://www.linkedin.com/in/harrydng/", src: LinkedIn, alt: "LinkedIn" },
        { href: "https://www.instagram.com/_harrydng/", src: Instagram, alt: "Instagram" },
        { href: "https://www.facebook.com/profile.php?id=100074423335147", src: Facebook, alt: "Facebook" }
    ];

    return (
        <div
            className="relative h-screen w-full leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div
                className="pointer-events-none fixed inset-0 z-[-1] transition duration-300"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                }}
            ></div>
            <nav>
                {navLinks.map(({id, label}) => (
                    <a key={id} href={`#${id}`} className="nav-link">{label}</a>))}
            </nav>

            <div id="about-me">
                <AboutMe/>
            </div>

            <div id="experience">
                <Experience/>
            </div>
            <div id="projects">
                <Projects/>
            </div>

            <div>
                {socialLinks.map(({href, src, alt}) => (
                    <a key={alt} href={href}><img src={src} alt={alt} className="icon-link"/></a>
                ))}
            </div>
        </div>
    );
}

export default Website;
