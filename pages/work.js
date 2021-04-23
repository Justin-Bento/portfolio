import Head from 'next/head';
import Card from '../components/Card.js';
import { format, parseISO } from 'date-fns';
import { getWorkPosts } from '../lib/work-data';

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
                <BlogCard key={item.slug} {...item} />
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

function BlogCard({ slug, title, date, content, media, mediaAlt, type }) {
  return (
    <div>
      <Card
        Thumbnail={`/img/work/${media}`}
        ThumbnailAlt={`${mediaAlt}`}
        Link={`/work/${slug}`}
        Headline={`${title}`}
        Content={`${content.substr(0, 200)}`}
        Meta={type + `-` + format(parseISO(date), 'MMMM, uuu')}
      />
    </div>
  );
}
