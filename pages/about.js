import Head from "next/head";
import Experience from "../components/Experience";

export default function About() {
  return (
    <div>
      <Head>
        <title>Justin Bento: About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="my-8">
          <div className="w-11/12	mx-auto md:max-w-6xl">
            <div className="know-me">
              <div className="mb-4">
                <h1 className="mb-4 text-xl font-bold text-black md:text-2xl capitalize">get to know me </h1>
                <p className="text-base text-black mb-4">
                  Hi, my name is Justin Bento. I am a student at Humber College that focouses on website design and
                  development. I got into website design and development through a class in my Multimedia Design course our
                  class had to create a single landing page and develop a replica with html and css and ever since then I
                  wanted to know more about it so I applied to a Multimedia Design and Development course at Humber College.
                </p>
                <p className="text-base text-black mb-4">
                  Humber College has taught me the necessary skills to land a job in the Multimedia Design and Development
                  filed. This course taught how to take ownership of my projects by applying effective design workflows, ux
                  methodlogies, and understand varous design tools to enhance my projects. you can view my design here or
                  code here and let me know what you think.
                </p>
              </div>
            </div>
            {/* end of know me */}
            <div className="experience">
              <div className="my-8">
                <h2 className="mb-4 text-xl font-bold text-black md:text-2xl capitalize">My Experience</h2>
                <Experience
                  Title="UI/UX Designer"
                  EmploymentType="Humber College, Multimedia Design And Development Class Assignment"
                  StartEndDate="Humber College"
                  Location="Toronto, Ontario, Canada"
                  Description="A college and I created a fake business that helped international students transition into Canada. Both of us created the brand's identity, and my job was to make the website.I did this by making brand guidelines, creating user flows, interactive wireframes, and ensured the best web design practices.Doing this allowed us to ensure the website had a unified experience throughout the page"
                />
                <Experience
                  Title="Class Project, February 2020"
                  EmploymentType="Humber College, Multimedia Design And Development Class Assignment"
                  StartEndDate="Humber College"
                  Location="Toronto, Ontario, Canada"
                  Description="Redesigned Humber College's school dashboard for a project. I used design thinking methods to help me understand Humber College's students and staff pains. Created soloutions that benifited the userse and business of MyHumber"
                />
                <Experience
                  Title="Hack-A-Thon for the Global Affairs Canada"
                  EmploymentType="Humber College, Hack-A-Thon"
                  StartEndDate="Humber College"
                  Location="Toronto, Ontario, Canada"
                  Description="Our objective was to make an engaging staple-piece that is interactive and bold for the airport. However there are 3 rules we had to follow. Create an interactive center pice that is engaging for the airport. This item must display data that are from the Canadian travellers Government Consular Services. The item can not include electricity and must be light-weight and portable."
                />
              </div>
            </div>
            {/* end of experience */}
            <div className="awards">
              <div className="my-8">
                <h2 className="mb-4 text-xl font-bold text-black md:text-2xl capitalize">Awards</h2>
                <p className="text-base text-black">
                  Deans List, Humber College Multimedia Design and Development, Febuary 2020
                </p>
              </div>
            </div>
            {/* end of awards */}
          </div>
        </div>
      </main>
    </div>
  );
}
