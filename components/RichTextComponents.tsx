import Image from "next/image";
import { urlFor } from "@/sanityClient";

const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <div className={`${style.blog_image_container}`}>
            <Image
              fill
              src={urlFor(value).url()}
              quality={40}
              alt=""
              loading="lazy"
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
      return <h1 className={`${style.headline1cs}`}>{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className={style.headline2}>{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className={style.headline3}>{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className={style.headline4}>{children}</h4>;
    },
  },
};

export default RichTextComponents;