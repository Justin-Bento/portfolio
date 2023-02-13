import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="">
        <nav className="px-2 sm:px-4 py-2.5 rounded">
          <div className="flex flex-wrap items-center justify-between">
            <Link href="/" aria-label="home-page-internal-link" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap font-display">JB</span>
            </Link>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                <li>
                  <Link aria-label="home-page-internal-link" href="/" className="font-sans block py-2 pl-3 pr-4 text-[#443733] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#B45720] md:p-0">Home</Link>
                </li>
                <li>
                  <Link aria-label="about-page-internal-link" href="/about" className="font-sans block py-2 pl-3 pr-4 text-[#443733] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#B45720] md:p-0">About</Link>
                </li>
                <li>
                  <Link aria-label="project-page-internal-link" href="/projects" className="font-sans block py-2 pl-3 pr-4 text-[#443733] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#B45720] md:p-0">Projects</Link>
                </li>
                <li>
                  <Link aria-label="contact-page-internal-link" href="/contact" className="font-sans block py-2 pl-3 pr-4 text-[#443733] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#B45720] md:p-0">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
    </>
  )
}