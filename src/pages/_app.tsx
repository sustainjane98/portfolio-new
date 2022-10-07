import "../styles.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { ColorSchemeProvider } from "../provider/colorscheme.provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate="%s | Jane Will" />
      <ColorSchemeProvider>
        <Component {...pageProps} />
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
