import { RiGithubFill,  RiLinkedinBoxFill,   RiPinterestFill, RiSoundcloudFill } from "react-icons/ri";



export const footer_navigation = [
  {
    name: 'SoundCloud',
    href: 'https://soundcloud.com/bento-box-519166246',
    ariaLabel: "SoundCloud External Link",
    icon: (props:any) => <RiSoundcloudFill {...props} />
  },
  {
    name: 'Github',
    href: 'https://github.com/Justin-Bento',
    ariaLabel: "GitHub External Link",
    icon: (props:any) => <RiGithubFill {...props} />
  },
  {
    name: 'Pintrest',
    href: 'https://www.pinterest.ca/bentoajustin/',
    ariaLabel: "Pintrest External Link",
    icon: (props:any) => <RiPinterestFill {...props} />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/justin--bento/',
    ariaLabel: "LinedIn External Link",
    icon: (props:any) => <RiLinkedinBoxFill {...props} />
  },
]
