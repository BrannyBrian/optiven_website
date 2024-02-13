import { AppProps } from "next/app";
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
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </main>
  );
}

