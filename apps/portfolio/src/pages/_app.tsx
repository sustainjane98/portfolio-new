import "../styles.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { ColorSchemeProvider } from "../provider/colorscheme.provider";
import { Navigation } from "../components/shared/navigation";
import { Footer } from "../components/shared/footer";
import { AnimatePresence } from "framer-motion";
import { AlertProvider } from "../provider/alert.provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const qc = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={qc}>
      <DefaultSeo titleTemplate="%s | Jane Will" />
      <ColorSchemeProvider>
        <AlertProvider>
          <Navigation />
          <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
        </AlertProvider>
      </ColorSchemeProvider>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
      </Head>
    </QueryClientProvider>
  );
}

export default MyApp;
