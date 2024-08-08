import ThankYouPage from "@/layout/ThankYou";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { RiSendPlane2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";

type FormInputs = {
  firstName: string;
  lastName: string;
  Email: string;
  Message: string;
};

export default function ContactForm() {
  // Set up the Formspree integration and form handling
  const [serverState, sendToFormspree] = useFormspree(`${process.env.NEXT_PUBLIC_FORM_DATA}`); // replace
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  // If the form submission is successful, redirect to the ThankYouPage
  if (serverState.succeeded) {
    return <ThankYouPage />;
  }
  // Define styles for input elements, text areas, labels, and error messages
  let styles = {
    input:
      "flex w-full h-10 px-3 py-2 text-sm border rounded-md ring-1 ring-gray-500 dark:ring-gray-50 dark:text-neutral-50 border-input dark:bg-primary-950/10 dark:caret-primary-50 bg-white/10 dark:carrot-primary-50 dark:focus-visible:border-primary-40 dark:border-primary-40 file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-primary-40 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-primary-300 focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    textArea:
      "flex w-full h-10 px-3 py-2 text-sm min-h-[80px] border dark:text-neutral-50 ring-1 ring-gray-500 dark:ring-gray-50 rounded-md border-input dark:bg-primary-950/10 dark:caret-primary-50 bg-white/10 dark:carrot-primary-50 dark:focus-visible:border-primary-40 dark:border-primary-40 file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-primary-40 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-primary-300 focus-visible:border-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    lables: "prose-sm font-bold capitalize",
    errrorMessages: "text-xs font-normal tracking-wider text-red-800 dark:text-red-400 capitalize",
  };
  return (
    <>
      <form onSubmit={handleSubmit(sendToFormspree)} method="POST" className="">
        <div className="lg:max-w-3xl">
          {/* Grid layout with two columns for better responsiveness */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* First Name input */}
            <div>
              <label htmlFor="first-name" defaultValue="First_Name" className={styles.lables}>
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  {...register("firstName")}
                  id="first-name"
                  autoComplete="given-name"
                  className={styles.input}
                />
              </div>
            </div>
            {/* Last Name input */}
            <div>
              <label htmlFor="last-name" defaultValue="Last_Name" className={styles.lables}>
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  {...register("lastName")}
                  id="last-name"
                  autoComplete="family-name"
                  className={styles.input}
                />
              </div>
            </div>
            {/* Email input */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className={styles.lables}>
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  {...register("Email", { required: true })}
                  className={styles.input}
                />
              </div>
              {/* Display error message if Email field is required and not filled */}
              {errors.Email && <span className={styles.errrorMessages}>* Email field is required</span>}
            </div>
            {/* Message input */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className={styles.lables}>
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows={4}
                  className={styles.textArea}
                  {...register("Message", { required: true })}
                />
                {/* Display error message if message field is required and not filled */}
                {errors.Message && <span className={styles.errrorMessages}>* Message field is required</span>}
              </div>
            </div>
          </div>
          <div className="mt-8">
            {/* errors will return when field validation fails  */}
            <Button type="submit" variant="secondary" className="gap-2.5">
              <RiSendPlane2Line />
              Send message
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
