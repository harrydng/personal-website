import { LiaGithub } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaSpotify } from "react-icons/lia";

export const navLinks = [
  { id: "about-me", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact-me", label: "Contact Me" },
];

export const socialMedia = [
  {
    href: "https://www.linkedin.com/in/harrydng/",
    Icon: LiaLinkedin,
    alt: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/_harrydng/",
    Icon: LiaInstagram,
    alt: "Instagram",
  },
  {
    href: "https://github.com/harrydng",
    Icon: LiaGithub,
    alt: "Github",
  },
  {
    href: "https://open.spotify.com/",
    Icon: LiaSpotify,
    alt: "Spotify",
  },
];
