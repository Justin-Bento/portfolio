import Image from "next/image";
import Link from "next/link";
import project from "../styles/Project.module.css"
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
        <div className={project.project_card}>
          <div className={project.project_card_1}>
            <div className={project.project_card_2}>
              <div className={project.project_card_media_container}>
                <Image fill quality={40} src={props.Media} className={project.project_card_media} alt={props.Headline} />
              </div>
            </div>
            <div className="px-4 pb-4 space-y-2 prose dark:prose-invert">
              <h2 className={project.project_card_headline}>{props.Headline}</h2>
              <p className={project.project_card_supporting}>{props.Supporting || "Creating technology to empower civilians to explore space on their own terms."}</p>
              <button type="button" className="project_card_actions">
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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={project.project_card_icons}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  )
}

