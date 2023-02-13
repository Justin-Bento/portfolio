import Link from "next/link";

interface Project_Card_Props {
  Link: string,
  Headline: string
}

export default function Project_Card(props: Project_Card_Props) {
  return (
    <>
      <Link href={props.Link} className="">
        <div className="bg-white w-[720px] h-[300px]">1</div>
        <div className="">
          <div className="w-[50px] h-fit bg-gray-400"></div>
          <h2 className="text-2xl font-medium leading-tight">{props.Headline || "Project Name Goes Here"}</h2>
        </div>
      </Link>
    </>
  )
}
