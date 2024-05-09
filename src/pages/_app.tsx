import { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import FoundersGrotesk from "@next/font/local";

import Navbar from "@/components/navbar";
// import MagneticButton from "@/components/magneticbutton";
import Footer from "@/components/footer";
import "@/styles/globals.css";
import "@/styles/styles.scss";

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
          <div className="fixed end-6 bottom-6 group z-20">
            <Link href="https://wa.me/+254790300300">
              <Image
                src={`/amani.png`}
                width={400}
                height={400}
                className="w-auto h-32"
                alt="amani-chatbot"
              />
            </Link>
          </div>
        </div>
      </AnimatePresence>
      <Footer />
    </main>
  );
}
