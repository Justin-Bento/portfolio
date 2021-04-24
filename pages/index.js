import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/Card.js';

let headline_primary = 'text-4xl md:text-5xl font-bold mb-4';
let headline_secondary = 'mb-4 text-3xl font-bold';
let headline_tertiary = 'mb-1 font-semibold text-lg';
let body_lg = 'prose-xl pr-5';
let body = 'prose 2xl:prose-xl';

const how = [
  {
    id: 1,
    Icon_Bg: 'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'search-sharp',
    Headline: 'Understand',
    Body:
      'Understand to be understood by creating a shared base across all participants and articulate the problem from business, user, competitor.',
  },
  {
    id: 2,
    Icon_Bg: 'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'book-sharp',
    Headline: 'Define',
    Body:
      'Evaluates everything learned to establish a main focus, by defining specific context and desired outcomes of potential solutions.',
  },
  {
    id: 3,
    Icon_Bg: 'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'create-sharp',
    Headline: 'Sketch',
    Body:
      'Generate and shares a broad range of ideas for consideration, by narrow down ideas into a single, well-articulated Solution Sketch.',
  },
  {
    id: 4,
    Icon_Bg: 'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'checkmark-circle-sharp',
    Headline: 'Decide',
    Body:
      'Finalize the concept to be prototyped by sharing a Solution Sketch, to help find a consensus on a single idea. To finalize the products direction ',
  },
  {
    id: 5,
    Icon_Bg: 'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'desktop-sharp',
    Headline: 'Prototype',
    Body:
      'Create an Interactive prototype of the concept, for clients and users to get an authentic response, by mapping out the exact flow.',
  },
  {
    id: 6,
    Icon_Bg: 'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'checkmark-circle-sharp',
    Headline: 'Validate',
    Body:
      'Put your concept in front of users and gather feedback from users who interact with your product, and conduct stakeholder feasibility reviews',
  },
  {
    id: 7,
    Icon_Bg: 'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'git-branch-sharp',
    Headline: 'Iterate',
    Body:
      'Gather feedback, update the design, and present new findings to the client to ensure that the product is meets the clients expectations. ',
  },
  {
    id: 8,
    Icon_Bg: 'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'rocket-sharp',
    Headline: 'Launch',
    Body:
      'Aid in the development process, by collaberating with developers to ensure that the design translates well the final version product',
  },
];
const what = [
  {
    id: 1,
    Headline: 'User Interface Design',
    Body:
      'Create responsive designs that follow the web accessibility standards to help your brand be innovative and inclusive.',
  },
  {
    id: 2,
    Headline: 'User Experience Design',
    Body: 'Bridge the gap between the user, development team, and business stakeholders to make the product enjoyable.',
  },
  {
    id: 3,
    Headline: 'Front-End Website Development',
    Body: 'Develop concepts to life and improve the quality of web pages by using the latests standards for the web.',
  },
  {
    id: 4,
    Headline: 'Micro Copy',
    Body: 'Modernize a website voice that guides, engage and cue users into functionality, by removing industry jargon.',
  },
];

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="Home">
          <div className="w-11/12 mx-auto md:max-w-6xl">
            <div className="Hero my-10 md:my-16">
              <section className="grid grid-cols-1 gap-0 bg-opacity-25 md:grid-cols-2">
                <div className="flex flex-col items-start justify-center px-4">
                  <h1 className={headline_primary}>Hey I'm Justin Bento</h1>
                  <p className={body_lg}>
                    I’m a multimedia designer from Toronto, focused on finding solutions that are easy to use and help
                    people achieve their goals.
                  </p>
                  <Link href="/work">
                    <a>
                      <button className="flex items-center h-11 my-10 px-4 text-green-50 duration-150 bg-green-600 rounded focus:shadow-outline hover:bg-green-700">
                        View Work
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="flex justify-end">
                  <img
                    src="./img/profile.png"
                    alt="Justin Bento profile picture"
                    className="object-cover w-full h-full bg-gray-100  md:w-10/12 md:h-full"
                    loading="lazy"
                  />
                </div>
              </section>
            </div>
            {/* end of hero section */}
            <div className="What my-24">
              <h2 className={headline_secondary}>What Do I Do?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                {what.map((stages, index) => (
                  <div className="md:flex md:align-top" key={index}>
                    <div className="col-1 mb-2 md:mt-1 md:pr-2">
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                    </div>
                    <div className="col-2">
                      <h3 className={headline_tertiary}>{stages.Headline}</h3>
                      <p className={body}>{stages.Body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* end of What section */}
            <div className="projects my-24">
              <h2 className={headline_secondary}>Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-x-16 lg:gap-x-20 gap-y-20">
                <Card
                  Link="/work/css-battle"
                  Thumbnail="../img/work/04/thumbnail.png"
                  MediaAlt="CSS Battle Website Homepages"
                  Headline="Battling My Skills With CSS"
                  Content="After starting at a computer day in and day out. I realized I had mental fatigue with school and being creative, I felt burnted out."
                  tags="Personal Project"
                />
                <Card
                  Link="/work/mycto"
                  Thumbnail="../img/work/02/thumbnail.webp"
                  MediaAlt="Final Design For Application"
                  Headline="City Of Tornoto App Design"
                  Content="Create an mobile app for the City Of Tornoto, that engages Tornoto Youth's in City planning projects. While featuring augmented reality (A.R)."
                  tags="Personal Project"
                />
                <Card
                  Link="/work/forcon"
                  Thumbnail="../img/work/03/thumbnail.png"
                  MediaAlt="Forcon Adversisement"
                  Headline="Creating A Startup Brand"
                  Content="The goal of this company is to help international students transition into Canada. Get To Know Forcon's Story."
                  tags="Branding"
                />
              </div>
            </div>
            {/* end of projects section */}
            <div className="How my-24">
              <h2 className={headline_secondary}>How Do I Work?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 lg:gap-x-20 gap-y-20">
                {how.map((stages, index) => (
                  <div className="grid-item" key={index}>
                    <div className={stages.Icon_Bg}>
                      <ion-icon name={stages.Icon}></ion-icon>
                    </div>
                    <h3 className={headline_tertiary}>{stages.Headline}</h3>
                    <p className={body}>{stages.Body}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* end of How section */}
            <div className="Why my-24">
              <section className=" mx-auto max-w-7xl">
                <section className="mx-auto max-w-7xl">
                  <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-20 gap-x-10 lg:gap-x-24">
                    <div className="">
                      <h2 className={headline_secondary}>Why Do I Design?</h2>
                    </div>
                    <div className="">
                      <div className="flex items-center py-2">
                        <div className="p-2">
                          <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </div>
                        <p className={body}>Solve Real-World Prolems Through Design</p>
                      </div>
                      {/*  */}
                      <div className="flex items-center py-2">
                        <div className="p-2">
                          <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </div>
                        <p className={body}>Collaberate With People</p>
                      </div>
                      {/*  */}
                      <div className="flex items-center py-2">
                        <div className="p-2">
                          <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </div>
                        <p className="text-lg text-gray-700">Constantly Learn New Things</p>
                      </div>
                      {/*  */}
                      <div className="flex items-center py-2">
                        <div className="p-2">
                          <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </div>
                        <p className={body}>Understand The World Through People </p>
                      </div>
                      {/*  */}
                      <div className="flex items-center py-2">
                        <div className="p-2">
                          <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </div>
                        <p className={body}>Make A Difference</p>
                      </div>
                      {/*  */}
                    </div>
                  </div>
                </section>
              </section>
            </div>
            {/* end of Why section */}
            <div className="Collab my-24">
              <h2 className={headline_secondary}>Let's Work Togther</h2>
              <p className={body}>
                I'm available for full time opportunities and I'm always open to chat about design and find new ways to
                collaberate with people. Does this sound like you?
              </p>
              <button
                className="flex items-center h-11 my-10 px-4 text-green-50 duration-150 bg-green-600 rounded focus:shadow-outline hover:bg-green-700"
                onClick={() => navigator.clipboard.writeText('hello@justinbento.ca')}
              >
                hello@justinbento.ca
              </button>
            </div>
            {/* end of Why section */}
          </div>
          {/* end of wrapper */}
        </div>
      </main>
    </div>
  );
}
