import Head from 'next/head';
import {
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('../components/Card.js'));
const Footer = dynamic(() => import('../components/Footer.js'));

let headline_primary = 'text-4xl md:text-4xl font-bold mb-4';
let headline_secondary = 'mb-4 text-3xl font-bold capitalize';
let headline_tertiary = 'mb-1 font-semibold text-lg';
let body_lg = 'prose-xl pr-5 text-gray-600';
let body = 'prose 2xl:prose-xl';

const how = [
  {
    id: 1,
    Icon_Bg:
      'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'search-sharp',
    Headline: 'Understand',
    Body: 'Understand the problem from a business, user and competitor level and create a shared knowledge base for everyone in the project.',
  },
  {
    id: 2,
    Icon_Bg:
      'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'book-sharp',
    Headline: 'Define',
    Body: 'Your business needs by creating a shared knowledge base for everyone in the project by evaluating the problem.',
  },
  {
    id: 3,
    Icon_Bg:
      'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'create-sharp',
    Headline: 'Sketch',
    Body: 'A broad range of ideas by looking for inspiration. Then narrow the ideas by considering key features that fit into a single sketch.',
  },
  {
    id: 4,
    Icon_Bg:
      'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'checkmark-circle-sharp',
    Headline: 'Decide',
    Body: 'Finalize the concept to be prototyped, by sharing the solution sketch and address the project focus. To ensure everyone is on the same page.',
  },
  {
    id: 5,
    Icon_Bg:
      'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'desktop-sharp',
    Headline: 'Prototype',
    Body: 'Create interactive prototypes of the solution sketch, to allow clients and users to interact with the design before launch.',
  },
  {
    id: 6,
    Icon_Bg:
      'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'checkmark-circle-sharp',
    Headline: 'Validate',
    Body: 'The design by testing the sample product. While seeing how people interact with the product in real world  situations. .',
  },
  {
    id: 7,
    Icon_Bg:
      'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'git-branch-sharp',
    Headline: 'Iterate',
    Body: 'The design by compiling the responses and testing the new changes to see if the design meets the needs of the clients.',
  },
  {
    id: 8,
    Icon_Bg:
      'flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full mb-2',
    Icon: 'rocket-sharp',
    Headline: 'Launch',
    Body: 'The finalized design and using the correct tools and ensuring that the final design is up to date and follows industry standards.',
  },
];
const what = [
  {
    id: 1,
    Headline: 'User Interface Design',
    Body: ' Create simple yet intuitive designs that are invisible to the user to help things get things done more quickly while adhering to company standards.',
  },
  {
    id: 2,
    Headline: 'User Experience Design',
    Body: 'Research how users interact with your product by having a deep understanding of your users, needs, value and abilities and limitations.',
  },
  {
    id: 3,
    Headline: 'Front-End Website Development',
    Body: 'Bring the design to life, by programminig the final design and  seeing if the design fits the web standards and best practices.',
  },
  {
    id: 4,
    Headline: 'MicroCopy',
    Body: 'Speak to your audience by removing all technical jargon, and help your audience understand their goal.',
  },
];
const why = [
  {
    icons: 'checkmark-circle-outline',
    message: 'Solve Real-World Problems Through Design.',
  },
  {
    icons: 'checkmark-circle-outline',
    message: 'Collaborate with people around the world.',
  },
  {
    icons: 'checkmark-circle-outline',
    message: 'Constantly Learn New Standards and Technologies.',
  },
  {
    icons: 'checkmark-circle-outline',
    message: 'Understand The World Through People.',
  },
  {
    icons: 'checkmark-circle-outline',
    message: 'Help Solve Problems and  Make A Difference.',
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
                <div className="flex flex-col items-start justify-center">
                  <h1 className={headline_primary}>Hey I'm Justin Bento</h1>
                  <p className={body_lg}>
                    I am a product and visual designer, who creates intuitive
                    and clean designs to help people achieve their goal.
                  </p>
                  <Link
                    className="my-8"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={200}
                    offset={-50}
                  >
                    <button className="h-11 px-4 text-green-50 transition-colors duration-150 bg-green-600 rounded-lg focus:shadow-outline hover:bg-green-700">
                      View Work
                    </button>
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
            <div className="What my-24" id="what">
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
            <div className="projects my-24" id="projects">
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
                  Link="/work/myhumber"
                  Thumbnail="../img/work/01/thumbnail.png"
                  MediaAlt="MyHumber Website"
                  Headline="Redesigning MyHumber"
                  Content="MyHumber is a mandatory dashboard for staff and studnets at Humber College. To find out the users pains I sent out a form to Humber Colleges staff and studnets to hear their thoughts on MyHumber."
                  tags="School Project"
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
            <div className="How my-24" id="how">
              <h2 className={headline_secondary}>How Do I Work?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 lg:gap-x-10 gap-y-10">
                {how.map((stages, index) => (
                  <div className="grid-item mt-2" key={index}>
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
            <div className="Why my-24" id="why">
              <section className=" mx-auto max-w-7xl">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-20 gap-x-10 lg:gap-x-24">
                  <div className="">
                    <h2 className={headline_secondary}>Why Do I Design?</h2>
                  </div>
                  <div className="">
                    {why.map((item, index) => {
                      return (
                        <div className="flex items-center py-2" key={index}>
                          <div className="p-2">
                            <ion-icon name={item.icons}></ion-icon>
                          </div>
                          <p className={body}>{item.message}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>
            {/* end of Why section */}
            <div className="about-me my-24" id="about">
              <h1 className={headline_secondary}>get to know me </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="mb-10">
                  <p className={body}>
                    Hi, I’m Justin Bento. Thank you for looking at my website. I
                    got into website design and development through my
                    Multimedia Design class in High School. Ever since then I
                    was addicted Website Design and Development and studied
                    these practices further in college.
                  </p>
                </div>
                <p className={body}>
                  When I am not designing, you can find me playing the piano and
                  practicing music for fun or playing video games. When I am not
                  doing any hobbies, I like to I like head to the gym, cook, and
                  socialize with close friends and my family to help me.
                </p>
              </div>
            </div>
            {/* end of Why section */}
          </div>
          <Footer />
          {/* end of wrapper */}
        </div>
      </main>
    </div>
  );
}
