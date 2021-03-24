import Head from "next/head";
import WorkCard from "../components/WorkCard";
import BlogCard from "../components/BlogCard";

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Justin Bento: Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="Home">
          <div className="my-16 sm:my-12 md:my-24">
            <div className="w-11/12	mx-auto md:max-w-6xl">
              <div className="hero">
                <h1 className="mb-3 text-5xl font-semibold text-gray-900 md:text-6xl md:leading-tight md:font-bold capitalize">
                  Hi I'm Justin Bento
                </h1>
                <h2 className="text-2xl leading-relaxed mb-4 font-light text-gray-700 md:text-4xl md:tracking-relaxed md:mb-4 tracking-wide md:leading-relaxed">
                  I am a Multimedia Designer that helps businesses evolve by creating accessible solutions driven by user
                  research.
                </h2>
                <a
                  className="text-base inline-flex items-center mt-5 p-3 rounded font-medium btn text-white bg-blue-500 btn-lg sm:w-auto sm:mb-0"
                  href="/work"
                >
                  View Work
                </a>
              </div>
              {/* end of hero section */}
              <div className="projects">
                <div className="my-16 sm:my-12 md:my-24">
                  <h2 className="mb-8 text-3xl font-extrabold leading-tight text-gray-900">Recent Projects</h2>
                  <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                    {workData.map((user, index) => (
                      <div key={index}>
                        <WorkCard Headline={user.header} Media={user.media} MediaAlt={user.alt} File={user.file} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* end  of projects */}
              <div className="what">
                <div className="my-16 sm:my-12 md:my-24">
                  <h2 className="mb-8 text-3xl font-extrabold leading-tight text-gray-900">What Do I Do?</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16">
                    <div className="solve-problems">
                      <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">User Interface Design</h3>
                      <p className="text-base text-gray-500">
                        Create responsive designs that follow the web accessibility standards to help your brand be
                        innovative and inclusive.
                      </p>
                    </div>
                    <div className="accessibility">
                      <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">User Experience Design</h3>
                      <p className="text-base text-gray-500">
                        Test and iterate designs to enesure user satisfaction and web accessibility standards.
                      </p>
                    </div>
                    <div className="mobile-first">
                      <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">Front-End Web Development</h3>
                      <p className="text-base text-gray-500">
                        Develop websites with front-end technologies that support accessibility requirements and standards.
                      </p>
                    </div>
                    <div className="mobile-first">
                      <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">Branding</h3>
                      <p className="text-base text-gray-500">
                        Develop and adhere to brands standards to help give users a unified experience on web.
                      </p>
                    </div>
                  </div>
                </div>
                {/* end of recent what do i do */}
                <div className="how">
                  <div className="my-16 sm:my-12 md:my-24">
                    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">How Do I Work?</h2>
                    <p className="mb-8 text-lg text-gray-500 tracking-wide">
                      Get the insights on how my current design process, and how I dig down into powering your comapny.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 lg:gap-x-10 gap-y-20">
                      <div className="Understand">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">Phase 1: Understand</h3>
                        <p className="text-base text-gray-500">
                          In the Understand phase, inform and shared knowledges across all participants to help articulate
                          the problem for the business and user.
                        </p>
                      </div>
                      <div className="Define">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">Phase 2: Define</h3>
                        <p className="text-base text-gray-500">
                          Evaluate everything learned in the Understand phase to establish focus by defining specific
                          context and desired outcomes of potential solutions.
                        </p>
                      </div>
                      <div className="Sketch">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">Phase 3: Sketch</h3>
                        <p className="text-base text-gray-500">
                          Generate and share a broad range of ideas by looking for inspiration, solutions and narrow down
                          ideas as group to a single, well-articulated solution Sketch.
                        </p>
                      </div>
                      <div className="Decide">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">Phase 4: Decide</h3>
                        <p className="text-base text-gray-500">
                          Talk with the owners to finalize the direction, by sharing plauseable solution sketches and reach
                          a consensus on an idea through decision-making exercises.
                        </p>
                      </div>
                      <div className="Prototype">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">Phase 5: Prototype</h3>
                        <p className="text-base text-gray-500">
                          Build prototypes that are real enough to get an authentic response from a potential user and help
                          business understand what features they will need.
                        </p>
                      </div>
                      <div className="Validate">
                        <h3 className="mb-2 text-lg font-semibold leading-tight text-gray-900">Phase 6: Validate</h3>
                        <p className="text-base text-gray-500">
                          gather feedback from users and talk with stakeholders for feasibility reviews to help validate a
                          concept.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of  how */}
                <div className="why">
                  <div className="my-16 sm:my-12 md:my-24">
                    <h2 className="mb-8 text-3xl font-extrabold leading-tight text-gray-900">Why Do I Design?</h2>
                    <blockquote className="mb-8 font-serif text-xl italic tracking-wide font-thin  text-gray-800 md:leading-relaxed md:text-3xl">
                      “Why do we need to know about the human mind? Because things are designed to be used by people, and
                      without a deep understanding of people, the designs are apt to be faulty, difficult to use, difficult
                      to understand.”
                    </blockquote>
                    <blockquote className="text-xs font-semibold tracking-widest text-gray-800 uppercase ">
                      ― Donald A. Norman, The Design of Everyday Things
                    </blockquote>
                  </div>
                </div>
                {/* end of  why */}
                <div className="blog">
                  <div className="my-16 sm:my-12 md:my-24">
                    <div className="title">
                      <h2 className="mb-8 text-3xl font-extrabold leading-tight text-gray-900">Check Out My Blog Posts</h2>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
                      {blogData.map((posts, index) => (
                        <BlogCard
                          key={index}
                          Action={posts.action}
                          Media={posts.media}
                          MediaAlt={posts.alt}
                          Headline={posts.headline}
                          Description={posts.description}
                          MetaInfo={posts.info}
                          MetaDate={posts.time}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* end of blog */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const workData = [
  {
    key: 1,
    header: "MyHumber Redesign",
    media: "/01/thumbnail.png",
    alt: "Project Image Of The MyHumber Redesign",
    file: "myhumber",
  },
  {
    key: 2,
    header: "City Of Toronto App",
    media: "/02/thumbnail.webp",
    alt: "Project Image Of The City Of Toronto App",
    file: "mycto",
  },
  {
    key: 3,
    header: "Forcon Startup",
    media: "/03/thumbnail.png",
    alt: "Project Image Of The Forcon Startup",
    file: "forcon",
  },
];
const blogData = [
  {
    id: 1,
    action: "blog/posts/css-battle",
    media: "/img/blog/01/thumbnail.png",
    alt: "css-battle",
    headline: "Battling My CSS Skills",
    description:
      "Battling My CSS Skills on CSS Battle was the best way to refresh my Knowledge On CSS. What does this mean for you?",
    info: "Justin Bento",
    time: "Mar 05, 2021",
  },
  {
    id: 2,
    action: "blog/posts/json-design",
    media: "/img/blog/02/thumbnail.png",
    alt: "JSON homapge",
    headline: "Designing With Data",
    description:
      "Designers that have having a good understanding and control over the data they are designing is crucial especially in web-based products.",
    info: "Justin Bento",
    time: "Mar 05, 2021",
  },
  {
    id: 3,
    action: "blog/posts/markdown-design",
    media: "/img/blog/03/thumbnail.png",
    alt: "css-battle",
    headline: "Using Markdown For Design",
    description:
      "Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.s",
    info: "Justin Bento",
    time: "Mar 05, 2021",
  },
];
