import Image from "next/image";
import { urlFor } from "@/sanityClient";

const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <div className="relative w-full aspect-video mb-4">
            <Image
              fill
              src={urlFor(value).url()}
              quality={40}
              alt=""
              loading="lazy"
              className="block object-fit object-center rounded-xl"
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
      return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-extrabold tracking-wide transition-colors first:mt-0">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="scroll-m-20 text-2xl font-bold tracking-normal">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="scroll-m-20 text-xl font-semibold tracking-wide block">{children}</h4>;
    },
    p: ({ children }: any) => {
      return <p className="">{children}</p>;
    },
    
  },
};

export default RichTextComponents;