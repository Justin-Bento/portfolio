import { RiFacebookCircleFill, RiInstagramFill, RiTwitterFill, RiGithubFill } from "react-icons/ri"

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
    <footer className={style.footer_background}>
      <div className={style.footer_container}>
        <div className={style.footer_adjust}>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className={style.footer_links}>
              <span className={style.footer_srOnly}>{item.name}</span>
              <item.icon className={style.footer_iconSize} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className={style.footer_adjust1}>
          <p className={style.footer_copyrights}>
            &copy; {new Date().getFullYear()} Justin Bento, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
