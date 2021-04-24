import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Article } from '../../components/Article';
import { Breadcrumb } from '../../components/Breadcrumb';

import { getWorkPosts } from '../../lib/work-data';

export default function Work({ title, date, content, description, media }) {
  const hydratedContent = hydrate(content);

  return (
    <div>
      <Head>
        <title>Work: {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src={`/img/work/${media}`} alt="" className="w-full h-80 mb-16 object-cover" />
        <div className="w-11/12  mx-auto sm:max-w-4xl">
          <div className="work-post">
            <Breadcrumb Name="Work" Link="/work" PathName={title} />
            <Article Headline={title} Meta={format(parseISO(date), 'MMMM do, uuu')} Subtitle={description} />
            <div className="prose my-8 sm:max-w-5xl">{hydratedContent}</div>
            {/* end  of wrapper */}
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const workPosts = getWorkPosts();
  const { data, content } = workPosts.find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getWorkPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
