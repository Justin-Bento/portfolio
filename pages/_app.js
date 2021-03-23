import { Appbar } from "../components/Appbar";
import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Justin Bento • Front-end Designer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Hi, I’m Justin Bento. I am a  UI/UX designer in Canada. I enjoy helping business evolve by solving problems that enhance your brand and drive innovation."
        />
        <meta property="og:image" content="/website-meta.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preload" as="font" type="font/ttf" href="/fonts/goudy/goudy_bookletter_191.ttf" crossorigin />
      </Head>

      <header>
        <nav>
          <Appbar />
        </nav>
      </header>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
