import Head from 'next/head';

let headline_primary = 'text-4xl md:text-5xl font-bold mb-4';
let headline_secondary = 'mb-2 text-3xl font-bold';
let headline_tertiary = 'mb-1 font-semibold text-lg';
let body_lg = 'prose-xl pr-5';
let body = 'prose 2xl:prose-xl';

export default function Contact() {
  return (
    <div className="Contact">
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <div className="my-16">
          <div className="w-11/12	mx-auto md:max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-x-16 lg:gap-x-24 gap-y-10 sm:gap-y-20">
              {contactTitle}
              <div className="contact-form">{contactForm}</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const contactTitle = (
  <div className="contact-title">
    <h1 className={headline_secondary}>Let's Get In Touch!</h1>
    <p className={body}>Message me your amazing idea for a project? I will get back to you when avilable.</p>
  </div>
);

const contactForm = (
  <form name="contact" method="POST" data-netlify="true">
    <div className="text-gray-700 mb-4">
      <input type="hidden" name="form-name" value="contact" />
      <label className={body} htmlFor="yourname">
        Full Name
      </label>
      <input
        className="w-full h-10 px-3 text-base placeholder-gray-800 border rounded focus:shadow-outline"
        type="text"
        name="firstname"
        id="firstname"
      />
      <span className="text-xs text-gray-600">Please Enter your first and last name</span>
    </div>
    {/* end of Full Name input */}
    <div className="text-gray-700 mb-4">
      <label className={body} htmlFor="youremail">
        Email
      </label>
      <input
        className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded focus:shadow-outline"
        type="email"
        name="email"
        id="youremail"
      />
      <span className="text-xs text-gray-600">Your email must be example@example.com</span>
    </div>
    {/* end of Email input */}
    <div className="text-gray-700 mb-4">
      <label className={body} htmlFor="yourmessage">
        What Is On Your Mind?
      </label>
      <textarea
        name="message"
        id="yourmessage"
        className="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded focus:shadow-outline"
      ></textarea>
      <span className="text-xs text-gray-600">Your email must be example@example.com</span>
    </div>
    {/* end of input */}
    <div className="mt-8">
      <button
        type="submit"
        className="flex items-center h-11 my-10 px-4 text-green-50 duration-150 bg-green-600 rounded focus:shadow-outline hover:bg-green-700"
      >
        Submit
      </button>
    </div>
    {/* end of input submit */}
  </form>
);
