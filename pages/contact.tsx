import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";

type FormInputs = {
  First_Name: string;
  Last_Name: string;
  Email: string;
  Message: string;
};
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <>
      <Head>
        <title>Justin Bento — Contact</title>
        <meta name="title" content="Justin Bento — Contact" />
        <meta name="keywords" content="Full-Stack, website design website developer" />
        <meta name="description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://justin-bento.com/" />
        <meta property="og:title" content="Justin Bento — Contact" />
        <meta property="og:description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta property="og:image" content="/public/website-screenshot.webp" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://justin-bento.com/" />
        <meta property="twitter:title" content="Justin Bento — Contact" />
        <meta property="twitter:description" content="Explore my portfolio website showcasing my latest full-stack development work, featuring creative solutions for various clients and industries." />
        <meta property="twitter:image" content="/public/website-screenshot.webp" />
      </Head>
      <Header />
      <main className="wrapper lg:my-16">
        <section className="mb-8 prose">
          <h1>Get In Touch</h1>
          <p>Have questions or interested in collaborating? Contact me below. Open to potential clients, employers, and creatives. Let&#39;s bring your ideas to life!</p>
        </section>
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="">
          <div className="">
            <div className="flex flex-col gap-4 my-4">
              <div>
                <label
                  htmlFor="first-name"
                  defaultValue="First_Name"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    {...register("First_Name")}
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full dark:bg-slate-900 rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 dark:text-slate-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  defaultValue="Last_Name"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50 dark:bg-slate-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    {...register("Last_Name")}
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 dark:text-slate-50  dark:bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50 dark:bg-slate-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    {...register("Email", { required: true })}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 dark:text-slate-50  dark:bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                  />
                </div>
                {errors.Email && (
                  <span className="capitalize label-medium dark:text-red-400">
                    * Email field is required
                  </span>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900 dark:text-slate-50 dark:bg-slate-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-sm leading-6 text-gray-900 dark:text-slate-50  dark:bg-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
                    {...register("Message", { required: true })}
                  />
                  {errors.Message && (
                    <span className="capitalize label-medium dark:text-red-400">
                      * Message field is required
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-start mt-8">
              {/* errors will return when field validation fails  */}
              <button
                type="submit"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
