import appbar from "@/styles/Appbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenuFill, RiExternalLinkFill } from "react-icons/ri";

export default function Appbar() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive((isActive) => !isActive);
  return (
    <>
      <header className={appbar.navbar}>
        <div className={appbar.navbar_container}>
          <section className={appbar.navbar_box_1}>
            <Link href="/" className={appbar.navbar_logo}>
              <Image fill quality={80} src="/justin-bento-logo.svg" alt="" />
            </Link>
            <RiMenuFill className={appbar.navbar_icons} onClick={onClick} />
          </section>
                <nav>
                  <ul className={appbar.navbar_list}>
                    <Link href="/" className={appbar.navbar_list_item}>Home</Link>
                    <Link href="/about" className={appbar.navbar_list_item}>About</Link>
                    <Link href="/projects" className={appbar.navbar_list_item}>Projects</Link>
                    <Link href="/contact" className={appbar.navbar_list_item}>Contact</Link>
                  </ul>
                </nav>
                <section className={appbar.navbar_box_3}>
                  <RiExternalLinkFill />
                  <Link href="https://www.linkedin.com/in/justin--bento/" target="_blank" className={appbar.navbar_social_link}>LinkedIn</Link>
                </section>
        </div>
      </header>
    </>
  );
}
