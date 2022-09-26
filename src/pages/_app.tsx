import "../styles.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo titleTemplate="%s | Lea Will" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
