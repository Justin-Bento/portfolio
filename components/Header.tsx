import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2">
        <section className="flex items-center justify-between">
          <p className="text-3xl font-display">JB</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
        </section>
        <nav className="flex-col hidden gap-8 md:inline-flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/uses">Uses</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
    </>
  )
}