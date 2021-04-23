import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getWorkPosts } from '../lib/work-data';

let headline_primary = 'text-4xl md:text-5xl font-bold mb-4';
let headline_secondary = 'mb-6 text-3xl font-bold';
let headline_tertiary = 'my-2 font-semibold text-lg';
let body_lg = 'prose-xl pr-5';
let body = 'prose 2xl:prose-xl';
let body_sm = 'my-1 prose-sm 2xl:prose-xl';

export default function work({ posts }) {
  return (
    <div>
      <Head>
        <title>Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="my-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
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

function WorkListItem({ slug, title, date, content, media, mediaAlt, type }) {
  return (
    <div>
      <div className="img">
        <Link href={`/work/${slug}`}>
          <img
            src={`/img/work/${media}`}
            class="object-cover w-full h-56 bg-center rounded-lg my-2"
            alt={mediaAlt}
            loading="lazy"
          />
        </Link>
      </div>
      <h2 className={headline_tertiary}>
        <Link href={`/work/${slug}`}>
          <a className="text-gray-900 hover:text-green-600">{title}</a>
        </Link>
      </h2>
      <div className="description">
        <Link href={`/work/${slug}`}>
          <a>
            <p className={body_sm}>{content.substr(0, 200)}</p>
            <p className={body_sm}>
              {type} &sdot; {format(parseISO(date), 'MMMM, uuu')}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
}
