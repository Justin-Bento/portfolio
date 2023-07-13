import appbar from "@/styles/Appbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenuFill, RiExternalLinkFill } from "react-icons/ri";

export default function Appbar() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive((isActive) => !isActive);
  useEffect(() => {
    const handelResize = () => {
    if (window.innerWidth >= 1080) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
    window.addEventListener("resize", handelResize);
  });
  return (
    <>
      <header className={appbar.container}>
        <div className={appbar.grid}>
          <section className={appbar.container1}>
            <Link href="/" className={appbar.logo}>
              <Image fill quality={80} src="/justin-bento-logo.svg" alt="" />
            </Link>
            <RiMenuFill className={appbar.icons} onClick={onClick} />
          </section>
          { isActive ? <HeaderMenu /> : null }
        </div>
      </header>
    </>
  );
}

function HeaderMenu() {
  return (
    <>
    <nav>
      <ul className={appbar.List}>
        <Link href="/" className={appbar.ListItem}>Home</Link>
        <Link href="/about" className={appbar.ListItem}>About</Link>
        <Link href="/projects" className={appbar.ListItem}>Projects</Link>
        <Link href="/contact" className={appbar.ListItem}>Contact</Link>
      </ul>
    </nav>
    <section className={appbar.action}>
      <RiExternalLinkFill />
      <Link href="https://www.linkedin.com/in/justin--bento/" target="_blank" className={appbar.socialMediaa}>LinkedIn</Link>
    </section>
  </>
  )
}