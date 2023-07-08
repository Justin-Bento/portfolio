import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/sanityClient";

export default function ProjectsSlug({post}: any) {
  console.log(post)
  return (
    <>
      <Header />
      <main className="p-4 my-12 md:my-24">
        <div className="lg:flex lg:items-start">
          <section className="">
            <h1 className="text-5xl leading-relaxed capitalize lg:leading-[7rem] lg:text-8xl font-display text-[#443733]">Article Title goes here.</h1>
          </section>
          <article className="max-w-xl space-y-10 text-lg lg:text-xl leading-10 lg:leading-loose tracking-wide text-[#443733]">
            <p className="">I&#39;ve loved creating things for as long as I can remember, and wrote my first program when I was in highschool learning pascal code and basic web development. Before highschool started my parents would keep old devices and allow me to tinker with them to see whats inside and reassemble the electronics.</p>
            <p className="">The only thing I loved more than computers as a kid was music. When I was young, I remember my parents playing music at family functions and would instinctively start tapping my feet to the beat of a song. — my parents noticed this taught me basic dance moves but that didn&#39;t last long as I was a very shy kid growing up.</p>
            <p className="">I spent the next few years getting creative through music and computers, I loved doing both and one day I stumbled accros blogs talking about building interactive parts for a webpage. It took a while, but when I was 15 I settled with software developmemt as I was alway crafty but never artsy.</p>
            <p className="">Today, I&#39;m a Full Stack Developer, builds, streamlines, and be the bridge bettwen between art and the web. When I&#39;m not my free time I play chess, guitar and journal to help me .</p>
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