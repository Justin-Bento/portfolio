import Image from "next/image";
import Link from "next/link";
import style from "../styles/project_card.module.css"
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
      <Link href={props.Link} className={style.project_card_links}>
        <article className={style.project_card_surface}>
          <div className={style.project_card_iconSurface}>
            <div className={style.project_card_iconContainer}>
              <Image width={40} height={40} quality={40} src={props.Media} className={style.project_card_media} alt={props.Headline} />
            </div>
          </div>
          <div className="">
            <h2 className={style.project_card_title}>{props.Headline}</h2>
            <p className={style.project_card_supporting}>{props.Supporting || "Creating technology to empower civilians to explore space on their own terms."}</p>
            <button type="button" className={style.project_card_actions}>
              <RiLinksFill className={style.project_card_icons} />
              View Project
            </button>
          </div>
        </article>
      </Link>
    </>
  )
}