import appbar from "@/styles/Appbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { RiMenuFill, RiExternalLinkFill } from "react-icons/ri";

export default function Appbar() {
  return (
    <>
      <header className={appbar.container}>
        <div className={appbar.grid}>
          <section className={appbar.container1}>
          <div className={appbar.logo}>
            <Image fill quality={80} src="/justin-bento-logo.svg" alt="" />
          </div>
          <RiMenuFill className={appbar.icons} />
          </section>
          <nav className={appbar.MobileMenu}>
            <ul className={appbar.List}>
              <Link href="/" className={appbar.ListItem}>Home</Link>
              <Link href="/about" className={appbar.ListItem}>About</Link>
              <Link href="/projects" className={appbar.ListItem}>Projects</Link>
              <Link href="/contact" className={appbar.ListItem}>Contact</Link>
            </ul>
          </nav>
          <section className={appbar.action && appbar.MobileMenu}>
            <RiExternalLinkFill />
            <Link href="https://www.linkedin.com/in/justin--bento/" target="_blank" className={appbar.socialMediaa}>LinkedIn</Link>
          </section>
        </div>
      </header>
    </>
  );
}
