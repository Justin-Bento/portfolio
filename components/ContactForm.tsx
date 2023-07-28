
import ThankYouPage from "@/layout/ThankYou"
import {
  useForm
} from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";

type FormInputs = {
  firstName: string;
  lastName: string;
  Email: string;
  Message: string;
};

export default function ContactForm() {
  const [serverState, sendToFormspree] = useFormspree(`${process.env.NEXT_PUBLIC_FORM_DATA}`); // replace
  const { register, handleSubmit, formState: { errors }, } = useForm<FormInputs>();
  if (serverState.succeeded) { return <ThankYouPage /> }
  return (
    <>
      <section>
        <h1 className="headline">Get In Touch</h1>
        <p className="body">Have questions or interested in collaborating? Contact me below.</p>
      </section>
      <form onSubmit={handleSubmit(sendToFormspree)} method="POST" className="">
        <div className="">
          <div className="flex h-10 w-full rounded-md border border-input bg-white/10 px-3 py-2 text-sm ring-offset-slate-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
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
                  {...register("firstName")}
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
                  {...register("lastName")}
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
          <div className="">
            {/* errors will return when field validation fails  */}
            <button
              type="submit"
              className="btn_primary"
            >
              Send message
            </button>
          </div>
        </div>
      </form>

    </>
  )
}