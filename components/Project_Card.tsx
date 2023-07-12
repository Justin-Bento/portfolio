import Image from "next/image";
import Link from "next/link";
import project_card from "../styles/project_card.module.css"
import { RiLinksFill } from "react-icons/ri";
interface Project_Card_Props {
  Link: string,
  Headline: string,
  Supporting: string,
  Media: string
}

export default function Project_Card(props: Project_Card_Props) {
  return (
    <>
      <Link href={props.Link} className={project_card.links}>
        <article className={project_card.surface}>
          <div className={project_card.iconSurface}>
            <div className={project_card.iconContainer}>
              <Image width={40} height={40} quality={40} src={props.Media} className={project_card.media} alt={props.Headline} />
            </div>
          </div>
          <div className="">
            <h2 className={project_card.title}>{props.Headline}</h2>
            <p className={project_card.supporting}>{props.Supporting || "Creating technology to empower civilians to explore space on their own terms."}</p>
            <button type="button" className={project_card.actions}>
              <RiLinksFill className={project_card.icons} />
              View Project
            </button>
          </div>
        </article>
      </Link>
    </>
  )
}