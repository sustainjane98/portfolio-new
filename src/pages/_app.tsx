import "../styles.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { ColorSchemeProvider } from "../provider/colorscheme.provider";
import { Navigation } from "../components/shared/navigation";
import { Footer } from "../components/shared/footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate="%s | Jane Will" />
      <ColorSchemeProvider>
        <Navigation />
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
        <Footer />
      </ColorSchemeProvider>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
      </Head>
    </>
  );
}

export default MyApp;
