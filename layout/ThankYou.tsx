import Link from "next/link";
import style from '@/styles/contact.module.css'
export default function ThankYou() {
  return (
    <>
      <section>
        <h1 className="headline">Thanks for getting in touch!</h1>
        <p className="body">Reaching out can be difficult for some people. Thanks, for taking the first step..</p>
        <div className={style.thankYou}>
          <Link href="/projects" className="btn_primary">Browse my projects</Link>
          <Link href="/" className="btn_secondary">Back to www.justin-bento.com/</Link>
        </div>
      </section>
    </>
  )
}