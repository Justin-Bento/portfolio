import { RiGithubFill,  RiLinkedinBoxFill,   RiPinterestFill, RiSoundcloudFill } from "react-icons/ri";



export const footer_navigation = [
  {
    name: 'SoundCloud',
    href: 'https://soundcloud.com/bento-box-519166246',
    icon: (props:any) => <RiSoundcloudFill {...props} />
  },
  {
    name: 'Github',
    href: 'https://github.com/Justin-Bento',
    icon: (props:any) => <RiGithubFill {...props} />
  },
  {
    name: 'Pintrest',
    href: 'https://www.pinterest.ca/bentoajustin/',
    icon: (props:any) => <RiPinterestFill {...props} />
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/justin--bento/',
    icon: (props:any) => <RiLinkedinBoxFill {...props} />
  },
]
