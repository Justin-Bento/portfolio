import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { RiMenuLine, RiCloseFill, RiExternalLinkFill } from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from "../components/Logo"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative top-0 z-10">
      <nav className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 w-10 h-10 relative">
            <span className="sr-only">Your Company</span>
            <Logo className="fill-slate-900 dark:fill-slate-50" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-50"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <RiMenuLine className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="items-center hidden gap-2 lg:flex lg:flex-1 lg:justify-end">
          <Link href="https://www.linkedin.com/in/justin--bento/" target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50 hover:cursor-pointer">
            <RiExternalLinkFill className="mb-0.5" />
            LinkedIn
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white dark:bg-slate-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 w-10 h-10 relative">
              <span className="sr-only">Your Company</span>
              <Logo className="fill-slate-900 dark:fill-slate-50" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <RiCloseFill className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <div className="flow-root mt-6">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-100/30">
              <div className="py-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg dark:text-slate-50 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link href="https://docs.google.com/document/d/13TFxDfDENVr2-qXO2_zdYv6jHs-m582U/edit?usp=sharing&ouid=114993777085049054802&rtpof=true&sd=true" className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-50 hover:cursor-pointer">
                  <RiExternalLinkFill className="mb-0.5" />
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
