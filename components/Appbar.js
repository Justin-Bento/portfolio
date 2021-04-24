import Link from 'next/link';

export default function Appbar() {
  return (
    <div className=" w-full bg-white sm:px-4 sticky top-0 shadow-sm  z-10">
      <div className="max-w-6xl	mx-auto px-2 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="logo">
            <img src="/logo.webp" alt="website logo" width="24" height="36" loading="lazy" />
          </div>
          <div className="links">
            <div className="flex items-center space-x-1">
              <div className="space-x-1 inline-flex">
                {NextLinks.map((website, index) => (
                  <div key={index}>
                    <Link href={website.Link}>
                      <a className="px-4 duration-75 py-2 hover:text-green-900 hover:bg-green-50">{website.Page}</a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Appbar };

const NextLinks = [
  {
    key: 1,
    Link: '/',
    Page: 'Home',
  },
  {
    key: 2,
    Link: '/work',
    Page: 'Work',
  },
  {
    key: 3,
    Link: '/about',
    Page: 'About',
  },
  {
    key: 4,
    Link: '/contact',
    Page: 'Contact',
  },
];
