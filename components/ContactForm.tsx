
import ThankYouPage from "@/layout/ThankYou"
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import contact from "@/styles/contact.module.css";

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
      <form onSubmit={handleSubmit(sendToFormspree)} method="POST" className="">
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