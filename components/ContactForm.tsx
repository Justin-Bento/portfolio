
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
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="first-name"
                defaultValue="First_Name"
                className="text-sm font-bold tracking-wide"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  {...register("firstName")}
                  id="first-name"
                  autoComplete="given-name"
                  className="flex h-10 w-full rounded-md border border-input bg-white/10 px-3 py-2 text-sm border-offset-slate-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-slate-300 focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                defaultValue="Last_Name"
                className="text-sm font-bold tracking-wide"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  {...register("lastName")}
                  id="last-name"
                  autoComplete="family-name"
                  className="flex h-10 w-full rounded-md border border-input bg-white/10 px-3 py-2 text-sm border-offset-slate-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-slate-300 focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="text-sm font-bold tracking-wide"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...register("Email", { required: true })}
                  className="flex h-10 w-full rounded-md border border-input bg-white/10 px-3 py-2 text-sm border-offset-slate-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-slate-300 focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              {errors.Email && (
                <span className="text-xs capitalize font-normal tracking-wider text-red-800">
                  * Email field is required
                </span>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="text-sm font-bold tracking-wide"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows={4}
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm border-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-ring focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("Message", { required: true })}
                />
                {errors.Message && (
                  <span className="text-xs capitalize font-normal tracking-wider text-red-800">
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