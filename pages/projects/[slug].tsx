import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanityClient";

export default function ProjectsSlug({post}: any) {
  console.log(post)
  return (
    <>
      <Header />
      <main className="p-1 my-12 md:my-24">
        <div className="lg:flex lg:items-start">
          <article className="mx-auto wrapper">
            <h1 className="font-semibold sm:font-semibold leading-[1.3] display-small sm:display-medium">{post.title}</h1>
            <p className="mt-2 text-base text-gray-800 md:text-lg">{post.description}</p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const query = `*[_type == "post"]{ 'slug': slug.current }`;
  const posts = await client.fetch(query);
  const paths =
    posts?.map((post: any) => ({
      params: {
        slug: post.slug,
      },
    })) || [];
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const query = `*[_type == "post" && slug.current == $slug] {
    _id,
    title,
    description,
    'slug': slug.current,
    mainImage {
      asset-> {
        url
      }
    },
    body
  }
  `;
  const options = { slug: params.slug };
  const post = await client.fetch(query, options);
  return {
    props: { post: post[0] },
  };
}