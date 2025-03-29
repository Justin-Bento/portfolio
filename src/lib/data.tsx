import { AudioLines, Github, Linkedin, MapPin } from "lucide-react";
import { Icon } from "lucide-react"; // This is the correct import for IconType

export interface FooterNavProps {
  name: string;
  href: string;
  ariaLabel: string;
  icon: React.ElementType; // Correct type for the icon components
}

export const footer_navigation: FooterNavProps[] = [
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/bento-box-519166246",
    ariaLabel: "SoundCloud External Link",
    icon: AudioLines, // Pass the icon component directly
  },
  {
    name: "Github",
    href: "https://github.com/Justin-Bento",
    ariaLabel: "GitHub External Link",
    icon: Github, // Pass the icon component directly
  },
  {
    name: "Pintrest",
    href: "https://www.pinterest.ca/bentoajustin/",
    ariaLabel: "Pintrest External Link",
    icon: MapPin, // Pass the icon component directly
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/justin--bento/",
    ariaLabel: "LinedIn External Link",
    icon: Linkedin, // Pass the icon component directly
  },
];
