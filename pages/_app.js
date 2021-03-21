import { Appbar } from "../components/Appbar";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
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
