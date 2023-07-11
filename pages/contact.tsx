import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm, SubmitHandler } from "react-hook-form";
import Head from "next/head";
import contact from "@/styles/contact.module.css";

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
      <main className="container">
        <section>
          <h1 className="headline">Get In Touch</h1>
          <p className="body">Have questions or interested in collaborating? Contact me below. Open to potential clients, employers, and creatives. Let&#39;s bring your ideas to life!</p>
        </section>
        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="">
          <div className="">
            <div className={contact.layout}>
              <div>
                <label
                  htmlFor="first-name"
                  defaultValue="First_Name"
                  className={contact.label}
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    {...register("First_Name")}
                    id="first-name"
                    autoComplete="given-name"
                    className={contact.input}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  defaultValue="Last_Name"
                  className={contact.label}
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    {...register("Last_Name")}
                    id="last-name"
                    autoComplete="family-name"
                    className={contact.input}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className={contact.label}
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    id="email"
                    autoComplete="email"
                    {...register("Email", { required: true })}
                    className={contact.input}
                  />
                </div>
                {errors.Email && (
                  <span className={contact.inputWarning}>
                    * Email field is required
                  </span>
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className={contact.label}
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    className={contact.input}
                    {...register("Message", { required: true })}
                  />
                  {errors.Message && (
                    <span className={contact.inputWarning}>
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
                className={contact.submit}
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
