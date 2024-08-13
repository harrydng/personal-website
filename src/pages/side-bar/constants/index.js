import { LiaGithub } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaSpotify } from "react-icons/lia";

export const navLinks = [
  { id: "about-me-spacer", label: "About Me" },
  { id: "experience-spacer", label: "Experiences" },
  { id: "projects-spacer", label: "Projects" },
  { id: "contact-me-spacer", label: "Contact Me" },
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
    href: "https://open.spotify.com/user/zr34zl3kmyt0p2wru1jkqsdx5?si=6604db2b69a74cc7",
    Icon: LiaSpotify,
    alt: "Spotify",
  },
];
