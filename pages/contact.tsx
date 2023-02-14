import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useForm, SubmitHandler } from "react-hook-form";

export default function uses() {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Contact - Justin Bento Portfolio</title>
        <meta name="title" content="Justin Bento Portfolio" />
        <meta name="description" content="Join me, on this adventure through my portfolio. Experience my passion for design, dev, and music all located  in one convenient place." />
      </Head>
      <Header />
      <main className="grid items-start p-4 my-16 lg:grid-cols-2 lg:items-center lg:my-24">
        <section className="">
          <h1 className="text-5xl leading-relaxed capitalize lg:leading-[7rem] lg:text-8xl font-display text-[#443733]">Intrested in Collaberating Togther?</h1>
        </section>
        <Contact_Form />
      </main>
      <Footer />
    </>
  )
}
type Inputs = {
  full_name: string,
  subject: string,
  email: string,
  message: string,
};

function Contact_Form() {
  const { register, handleSubmit,  formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => `mailto:bento.a.justin@gmail.com?subject=${data.subject}&body=${data.full_name + data.message}`;
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-prose" method="POST">
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="Full Name" {...register("full_name")} className="block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm" />
      <input placeholder="Subject" {...register("subject", { required: true })} className="block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm" />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="jane.doe@email.com" {...register("email", { required: true })} className="block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm" />
      <input placeholder="Write something longer than this.." {...register("message", { required: true })} className="block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm" />
      {/* errors will return when field validation fails  */}
      {errors.email && <span>This field is required</span>}
      <input type="submit" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#739884] border border-transparent rounded-md shadow-sm hover:bg-[#475E52] focus:outline-none focus:ring-2 focus:ring-[#475E52] focus:ring-offset-2 hover:cursor-pointer" />
    </form>
  );
}