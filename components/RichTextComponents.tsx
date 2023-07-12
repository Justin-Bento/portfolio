import Image from "next/image";
import { urlFor } from "@/sanityClient";
import articles from "@/styles/articles.module.css";

const RichTextComponents =  {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <div className={`${articles.imageContainer}`}>
            <Image
              fill
              src={urlFor(value).url()}
              quality={40}
              alt=""
              loading="lazy"
              className={`${articles.imageMedia}`}
            />
          </div>
        </>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => <h1 className={articles.headline1}>{children}</h1>,
    h2: ({ children }: any) => <h2 className={articles.headline2}>{children}</h2>,
    h3: ({ children }: any) => <h3 className={articles.headline3}>{children}</h3>,
    h4: ({ children }: any) => <h4 className={articles.headline4}>{children}</h4>,
  },
};

export default RichTextComponents;