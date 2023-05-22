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

export default function Footer() {
  return (
    <footer className="bg-slate-200 dark:bg-black/40">
      <div className="px-6 py-12 mx-auto max-w-7xl md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-xs leading-5 text-center text-gray-500 dark:text-slate-50">
            &copy; {new Date().getFullYear()} Justin Bento, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
