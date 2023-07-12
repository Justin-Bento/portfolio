import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill, RiGithubFill } from "react-icons/ri"
import footer from "@/styles/Footer.module.css";

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: any) => (
      <RiFacebookCircleFill {...props} />
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: any) => (
      <RiInstagramFill {...props} />
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: any) => (
      <RiTwitterFill {...props} />
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: any) => (
      <RiGithubFill {...props} />
    ),
  },
]
// flex justify-center space-x-6 md:order-2
export default function Footer() {
  return (
    <footer className={footer.background}>
      <div className={footer.container}>
        <div className={footer.adjust}>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className={footer.links}>
              <span className={footer.srOnly}>{item.name}</span>
              <item.icon className={footer.iconSize} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className={footer.adjust1}>
          <p className={footer.copyrights}>
            &copy; {new Date().getFullYear()} Justin Bento, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
