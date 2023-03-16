import Image from "next/image";
import Link from "next/link";

interface Project_Card_Props {
  Link: string,
  Headline: string,
  Supporting: string,
  Media: string
}

export default function Project_Card(props: Project_Card_Props) {
  return (
    <>
      <Link href={props.Link} target="_blank">
        <div className="z-10 p-4 transition-all cursor-pointer">
          <div className="p-3 overflow-hidden transition-all border rounded-lg border-primary-200 hover:border-primary-300 hover:bg-primary-100 hover:dark:bg-slate-800/50 ">
            <div className="pt-4 sm:px-6">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-none">
                <Image src={props.Media} width={32} height={32} className="object-cover w-8 h-8 rounded-full" alt={props.Headline} />
              </div>
            </div>
            <div className="px-4 pb-4 space-y-2">
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">{props.Headline}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{props.Supporting || "Creating technology to empower civilians to explore space on their own terms."}</p>
              <button type="button" className="inline-flex items-center gap-2 py-2 mt-4 text-xs font-medium text-gray-700 dark:text-zinc-100">
                <Link_Icon />
                View Project
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

function Link_Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mb-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  )
}

