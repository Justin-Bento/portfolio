
import ThankYouPage from "@/layout/ThankYou"
import {
  useForm
} from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { Button } from "./Button";
import { RiSendPlane2Line } from "react-icons/ri";

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
        <div className="lg:max-w-3xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                defaultValue="First_Name"
                className="text-sm font-bold capitalize"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  {...register("firstName")}
                  id="first-name"
                  autoComplete="given-name"
                  className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input dark:bg-primary-950/10 dark:caret-primary-50 bg-white/10 dark:carrot-primary-200 dark:focus-visible:border-primary-700 dark:border-primary-700 file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-primary-40 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-primary-300 focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                defaultValue="Last_Name"
                className="text-sm font-bold capitalize"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  {...register("lastName")}
                  id="last-name"
                  autoComplete="family-name"
                  className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input dark:bg-primary-950/10 dark:caret-primary-50 bg-white/10 dark:carrot-primary-200 dark:focus-visible:border-primary-700 dark:border-primary-700 file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-primary-40 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-primary-300 focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="text-sm font-bold capitalize"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...register("Email", { required: true })}
                  className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input dark:bg-primary-950/10 dark:caret-primary-50 bg-white/10 dark:carrot-primary-200 dark:focus-visible:border-primary-700 dark:border-primary-700 file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-primary-40 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-primary-300 focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              {errors.Email && (
                <span className="text-xs font-normal tracking-wider text-red-800 capitalize">
                  * Email field is required
                </span>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-bold capitalize"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows={4}
                  className="flex w-full h-10 px-3 py-2 text-sm min-h-[80px] border rounded-md border-input dark:bg-primary-950/10 dark:caret-primary-50 bg-white/10 dark:carrot-primary-200 dark:focus-visible:border-primary-700 dark:border-primary-700 file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-primary-40 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-primary-300 focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("Message", { required: true })}
                />
                {errors.Message && (
                  <span className="text-xs font-normal tracking-wider text-red-800 capitalize">
                    * Message field is required
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="mt-8">
            {/* errors will return when field validation fails  */}
            <Button
              type="submit"
              variant="secondary"
              className="gap-1"
            >
              <RiSendPlane2Line />
              Send message
            </Button>
          </div>
        </div>
      </form>

    </>
  )
}