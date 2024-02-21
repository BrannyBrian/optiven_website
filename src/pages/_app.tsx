import { AppProps } from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import FoundersGrotesk from "@next/font/local";
import "@/styles/globals.css";
import "@/styles/styles.scss";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const founderGrotesk = FoundersGrotesk({
  src: [
    {
      path: "../../public/fonts/FoundersGrotesk-Light.otf",
      weight: "200",
    },
    {
      path: "../../public/fonts/FoundersGrotesk-Semibold.otf",
      weight: "600",
    },
  ],
  variable: "--font-founders-grotesk",
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={founderGrotesk.className}>
      <Head>
        <title>Optiven Group - Inspiring Possibilities</title>
        <meta name="description" content="Inspiring Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AnimatePresence mode="wait">
        <div className="mt-32">
          <Component key={router.route} {...pageProps} />
        </div>
      </AnimatePresence>
      <Footer />
    </main>
  );
}
