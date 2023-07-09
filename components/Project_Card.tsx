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
      <Link href={props.Link}>
        <div className="z-10 p-4 transition-all cursor-pointer">
          <div className="p-3 overflow-hidden transition-all border rounded-lg border-primary-200 hover:border-primary-300 hover:bg-primary-100 hover:dark:bg-slate-800/50 dark:border-primary-700">
            <div className="pt-4 sm:px-6">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md hover:shadow-none">
                <Image src={props.Media} width={32} height={32} className="object-cover w-8 h-8 rounded-full" alt={props.Headline} />
              </div>
            </div>
            <div className="px-4 pb-4 space-y-2 prose prose-invert">
              <h2 className="pt-2 pb-0 pl-0 pr-0 mt-4 mb-0 ml-0 mr-0">{props.Headline}</h2>
              <p>{props.Supporting || "Creating technology to empower civilians to explore space on their own terms."}</p>
              <button type="button" className="inline-flex items-center gap-2 py-2 mt-4 text-zinc-700 body-medium dark:text-zinc-200/70">
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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  )
}

