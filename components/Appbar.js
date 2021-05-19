// import Link from 'next/link';
import React, { useRef } from 'react';
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

export default function Appbar() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between">
        <div className="logo">
          <Link to="home" spy={true} smooth={true} duration={200} offset={0}>
            <a>
              <img
                src="/logo.webp"
                alt="website logo"
                width="24"
                height="36"
                loading="lazy"
              />
            </a>
          </Link>
        </div>
        <div className="links">
          <div className="flex items-center space-x-1">
            <div className="space-x-1 inline-flex">
              <div className="">
                <Link
                  className="px-4 duration-75 py-2 transition-colors hover:text-green-900 hover:bg-green-50"
                  to="what"
                  spy={true}
                  smooth={true}
                  duration={200}
                  offset={-50}
                >
                  <a>What</a>
                </Link>
              </div>
              {/* end of Navlinks */}
              <div className="">
                <Link
                  className="px-4 duration-75 py-2 transition-colors hover:text-green-900 hover:bg-green-50"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={200}
                  offset={-50}
                >
                  <a>Projects</a>
                </Link>
              </div>
              {/* end of Navlinks */}
              <div className="">
                <Link
                  className="px-4 duration-75 py-2 transition-colors hover:text-green-900 hover:bg-green-50"
                  to="how"
                  spy={true}
                  smooth={true}
                  duration={200}
                  offset={-50}
                >
                  <a>How</a>
                </Link>
              </div>
              {/* end of Navlinks */}
              <div className="">
                <Link
                  className="px-4 duration-75 py-2 transition-colors hover:text-green-900 hover:bg-green-50"
                  to="why"
                  spy={true}
                  smooth={true}
                  duration={200}
                  offset={-50}
                >
                  <a>Why</a>
                </Link>
              </div>
              <div className="">
                <Link
                  className="px-4 duration-75 py-2 transition-colors hover:text-green-900 hover:bg-green-50"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={200}
                  offset={-50}
                >
                  <a>About</a>
                </Link>
              </div>
              {/* end of Navlinks */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Appbar };
