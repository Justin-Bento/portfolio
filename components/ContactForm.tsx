import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import ThankYou from "@/layout/ThankYou";
import { RiSendPlane2Line } from "react-icons/ri";

type FormInputs = {
  firstName: string;
  lastName: string;
  Email: string;
  Message: string;
};

export default function ContactForm() {
  const [serverState, sendToFormspree] = useFormspree(`${process.env.NEXT_PUBLIC_FORM_DATA}`); // replace
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  // If the form submission is successful, redirect to the ThankYouPage
  if (serverState.succeeded) {
    return <ThankYou />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(sendToFormspree)} method="POST" className="w-full h-auto ">
        <div className="grid grid-cols-2 gap-6">
          <div data-form="last-name" className="">
            <Label htmlFor="first-name" defaultValue="First_Name">
              First Name
            </Label>
            <Input
              type="text"
              {...register("firstName")}
              id="first-name"
              autoComplete="given-name"
              placeholder="eg: John, James"
              className="ring-1 ring-black mt-1.5"
            />
          </div>
          <div data-form="first-name" className="">
            <Label htmlFor="last-name" defaultValue="Last_Name">
              Last Name
            </Label>
            <Input
              type="text"
              {...register("lastName")}
              id="last-name"
              autoComplete="family-name"
              placeholder="eg: Smith, Doe"
              className="ring-1 ring-black mt-1.5"
            />
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              autoComplete="email"
              {...register("Email", { required: true })}
              placeholder="eg: jamesSmith@example.com"
              className="ring-1 ring-black mt-1.5"
            />
          </div>
          <div data-form="user-message" className="sm:col-span-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              rows={4}
              {...register("Message", { required: true })}
              className="ring-1 ring-black mt-1.5"
            />
            {errors.Message && <span className="text-sm text-red-500">* Message field is required</span>}
          </div>
          <div data-form="user-message" className="sm:col-span-2">
            <Button
              type="submit"
              variant="default"
              className="flex items-center gap-2 dark:bg-gray-200 dark:text-black"
            >
              <RiSendPlane2Line className="size-4" />
              Send Message
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
