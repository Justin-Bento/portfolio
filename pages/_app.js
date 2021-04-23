import { Appbar } from '../components/Appbar';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

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
        <meta property="og:image" content="https://www.justinbento.com/website-meta.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header>
        <nav>
          <Appbar />
        </nav>
      </header>

      <Component {...pageProps} />
      <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
    </div>
  );
}

export default MyApp;
