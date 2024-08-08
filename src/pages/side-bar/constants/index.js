import { LiaGithub } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { LiaInstagram } from "react-icons/lia";
import { LiaFacebookSquare } from "react-icons/lia";

export const navLinks = [
  { id: "about-me", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
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
    href: "https://www.facebook.com/",
    Icon: LiaFacebookSquare,
    alt: "Facebook",
  },
  {
    href: "https://github.com/harrydng",
    Icon: LiaGithub,
    alt: "Github",
  },
];

export const email = [{ email: "harryoduong2405@gmail.com" }];
