import Image from "next/image";
import { urlFor } from "@/sanityClient";
import articles from '@/styles/articles.module.css';

const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <div className={`${articles.articleImageContainer}`}>
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
      return <h1 className={articles.headline1}>{children}</h1>;
    },
    h2: ({ children }: any) => {
      return <h2 className={articles.headline2}>{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className={articles.headline3}>{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className={articles.headline4}>{children}</h4>;
    },
  },
};

export default RichTextComponents;