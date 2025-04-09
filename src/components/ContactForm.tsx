"use client";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import ThankYou from "@/layout/ThankYou";
import { SendHorizontal } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(
    `${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  );
  if (state.succeeded) {
    return <ThankYou />;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-8">
        <fieldset className="space-y-3">
          <Label htmlFor="firstName" defaultValue="firstName">
            First Name
          </Label>
          <Input
            type="text"
            id="firstName"
            autoComplete="family-name"
            placeholder="eg: john, james, smith"
            className="ring-1 ring-black/50 dark:ring-white/70"
          />
          <ValidationError
            prefix="firstName"
            field="firstName"
            errors={state.errors}
          />
        </fieldset>
        {/* This is the end Of First Name Input  */}
        <fieldset className="space-y-3">
          <Label htmlFor="email" defaultValue="email">
            Last Name
          </Label>
          <Input
            type="text"
            id="lastName"
            autoComplete="lastName"
            placeholder="eg: doe, maine..."
            className="ring-1 ring-black/50 dark:ring-white/70"
          />
          <ValidationError
            prefix="lastName"
            field="lastName"
            errors={state.errors}
          />
          {/* This is the end Of Lats Name Input  */}
        </fieldset>
        <fieldset className="space-y-3">
          <Label htmlFor="email" defaultValue="email">
            Email Address
          </Label>
          <Input
            type="email"
            id="email"
            autoComplete="family-name"
            placeholder="eg: smith-doe@example.com"
            className="ring-1 ring-black/50 dark:ring-white/70"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          {/* This is the end Of Email Input  */}
        </fieldset>
        <fieldset className="space-y-3">
          <Label htmlFor="userMessage" defaultValue="userMessage">
            Your Message
          </Label>
          <Textarea
            id="userMessage"
            name="userMessage"
            className="my-1.5 ring-1 ring-black/50 dark:ring-white/70"
          />
          <ValidationError
            prefix="userMessage"
            field="userMessage"
            errors={state.errors}
          />
        </fieldset>
        <fieldset className="space-y-3">
          <Button type="submit" disabled={state.submitting}>
            Submit
            <SendHorizontal />
          </Button>
          <ValidationError errors={state.errors} />
        </fieldset>
      </form>
    </>
  );
}
