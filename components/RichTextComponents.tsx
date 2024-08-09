import Image from "next/image";
import { urlFor } from "@/sanityClient";

const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <div className="relative w-full aspect-[4/3]">
            <Image
              fill
              src={urlFor(value).url()}
              alt=""
              loading="lazy"
              className="block object-cover object-center pb-8"
            />
          </div>
        </>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="my-6 ml-6 space-y-6 list-disc  [&>li]:mt-2">{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol className="my-6 ml-6 space-y-6 list-decimal [&>li]:mt-2">{children}</ol>;
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => {
      return <h1 className="text-5xl font-bold dark:text-white">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="text-4xl font-bold dark:text-white">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-3xl font-bold dark:text-white">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-2xl font-bold dark:text-white">{children}</h4>;
    },
    h5: ({ children }: any) => {
      return <h4 className="text-xl font-bold dark:text-white">{children}</h4>;
    },
    h6: ({ children }: any) => {
      return <h4 className="text-lg font-bold dark:text-white">{children}</h4>;
    },
    p: ({ children }: any) => {
      return <p className="leading-7 text-base dark:text-white">{children}</p>;
    },
    blockquote: ({ children }: any) => {
      return <blockquote className="mt-6 border-l-2 pl-6 italic dark:text-white">{children}</blockquote>;
    },
    code: ({ children }: any) => {
      return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {children}
        </code>
      );
    },
  },
};

export default RichTextComponents;
