import { IconType } from "react-icons";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiPinterestFill,
  RiSoundcloudFill,
} from "react-icons/ri";

export interface FooterNavProps {
  name: string;
  href: string;
  ariaLabel: string;
  icon: IconType; // Use IconType directly
}

export const footer_navigation: FooterNavProps[] = [
  {
    name: "SoundCloud",
    href: "https://soundcloud.com/bento-box-519166246",
    ariaLabel: "SoundCloud External Link",
    icon: RiSoundcloudFill, // Pass the icon component directly
  },
  {
    name: "Github",
    href: "https://github.com/Justin-Bento",
    ariaLabel: "GitHub External Link",
    icon: RiGithubFill, // Pass the icon component directly
  },
  {
    name: "Pintrest",
    href: "https://www.pinterest.ca/bentoajustin/",
    ariaLabel: "Pintrest External Link",
    icon: RiPinterestFill, // Pass the icon component directly
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/justin--bento/",
    ariaLabel: "LinedIn External Link",
    icon: RiLinkedinBoxFill, // Pass the icon component directly
  },
];
