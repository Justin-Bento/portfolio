import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { getWorkPosts } from "../lib/work-data";

export default function work({ posts }) {
  return (
    <div>
      <Head>
        <title>Justin Bento: Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="my-8">
          <div className="w-11/12	mx-auto md:max-w-6xl">
            {posts.map((item) => (
              <WorkListItem key={item.slug} {...item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const workPosts = getWorkPosts();
  return {
    props: {
      posts: workPosts.map(({ data, slug, content }) => ({
        ...data,
        date: data.date.toISOString(),
        slug,
        content,
      })),
    },
  };
}

function WorkListItem({ slug, title, date, content }) {
  return (
    <div>
      <div className="work-date">
        <p className="pt-12 mb-3 text-sm font-normal text-gray-500">{format(parseISO(date), "MMMM do, uuu")}</p>
      </div>
      <div className="work-Heading">
        <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
          <Link href={`/work/posts/${slug}`}>
            <a className=" font-bold capitalize text-gray-900 hover:text-blue-700">{title}</a>
          </Link>
        </h2>
      </div>
      <div className="work-supporting">
        <p className="text-lg leading-relaxed">{content.substr(0, 300)}</p>
      </div>
      <div className="work-action">
        <Link href={`/work/posts/${slug}`}>
          <button className="p-2 mt-2 text-sm rounded text-gray-800 transition-colors duration-150 bg-gray-200 focus:shadow-outline hover:bg-gray-300">
            Continue Reading
          </button>
        </Link>
      </div>
    </div>
  );
}
