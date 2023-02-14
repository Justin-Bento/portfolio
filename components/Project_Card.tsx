import Image from "next/image";
import Link from "next/link";

interface Project_Card_Props {
  Link: string,
  Headline: string,
  Media: string
}

export default function Project_Card(props: Project_Card_Props) {
  return (
    <>
      <Link href={props.Link} className="space-y-4">
        <div className="overflow-hidden ">
          <div className="px-4 py-5 sm:p-6">
            {/* Content goes here */}
            <div className="relative w-[960px] h-[480px]">
              <Image fill quality={40} src={props.Media} alt={`Website Image Of ${props.Headline}`} className="object-cover object-center" />
            </div>
          </div>
          <div className="px-4 py-4 sm:px-6">
            {/* Content goes here */}
            {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
            <h2 className="text-2xl font-medium leading-tight">{props.Headline || "Project Name Goes Here"}</h2>
          </div>
        </div>
      </Link>
    </>
  )
}
