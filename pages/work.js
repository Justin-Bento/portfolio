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
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {posts.map((item) => (
                <WorkListItem key={item.slug} {...item} />
              ))}
            </div>
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

function WorkListItem({ slug, title, date, content, media, mediaAlt }) {
  return (
    <div>
      <div className="img">
        <Link href={`/work/posts/${slug}`}>
          <img
            src={`/img/work/${media}`}
            class="object-cover w-full h-56 mb-3 bg-center rounded"
            alt={mediaAlt}
            loading="lazy"
          />
        </Link>
      </div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900">
        <Link href={`/work/posts/${slug}`}>
          <a className=" text-gray-900 hover:text-blue-700">{title}</a>
        </Link>
      </h2>
      <div className="description">
        <p class="mb-3 text-sm font-normal text-gray-500">
          {content.substr(0, 200)} <br /> {format(parseISO(date), "MMMM do, uuu")}
        </p>
      </div>
    </div>
  );
}
