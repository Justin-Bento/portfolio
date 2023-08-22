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
              className="block object-cover object-center rounded-xl"
            />
          </div>
        </>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul>{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol>{children}</ol>;
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => {
      return <h1 className="">{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className="pb-2 text-3xl font-extrabold tracking-wide transition-colors scroll-m-20 first:mt-0">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-2xl font-bold tracking-normal scroll-m-20">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="block text-xl font-semibold tracking-wide scroll-m-20">{children}</h4>;
    },
    p: ({ children }: any) => {
      return <p className="">{children}</p>;
    },
    
  },
};

export default RichTextComponents;