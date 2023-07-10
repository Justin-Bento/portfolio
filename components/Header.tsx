import Link from "next/link";
import appbar from "../styles/Appbar.module.css";
import { RiExternalLinkFill } from "react-icons/ri";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <>
      <header className={appbar.header1}>
        <section className={appbar.header2}>
          <div className={appbar.header3}>
            <p>Logo</p>
            <p>Menu</p>
          </div>
          <div className={appbar.header4}>
            {navigation.map((items: any) => {
              return (
                <>
                  <Link href={items.href}>{items.name}</Link>
                </>
              );
            })}
          </div>
          <div className={appbar.header5}>
            <Link href="https://www.linkedin.com/in/justin--bento/" target="_blank" className={appbar.header6}>
              <RiExternalLinkFill />
              LinkedIn
            </Link>
          </div>
        </section>
      </header>
    </>
  );
}
