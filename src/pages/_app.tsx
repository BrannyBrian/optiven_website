import { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import FoundersGrotesk from "@next/font/local";

import Navbar from "@/components/navbar";
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
        <title>Optiven Limited - Inspiring Possibilities in Real Estate</title>
        <meta
          name="description"
          content="Optiven Limited offers value-added plots and land in various parts of Kenya. Discover sustainable development and innovative solutions with us."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Optiven, Real Estate Kenya, Value-added plots, Land for sale Kenya, Land for sale Nanyuki, Land for sale Kajiado, Land for sale Kitengela, Land for sale Malindi, Land for sale Nakuru, Land for sale Konza, Land for sale Thika, Sustainable Development, Innovative Solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Optiven Group - Inspiring Possibilities in Real Estate"
        />
        <meta
          property="og:description"
          content="Optiven Group offers value-added plots and land in various parts of Kenya. Discover sustainable development and innovative solutions with us."
        />
        <meta property="og:url" content="https://www.optiven.co.ke" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Optiven Group - Inspiring Possibilities in Real Estate"
        />
        <meta
          name="twitter:description"
          content="Optiven Group offers value-added plots and land in various parts of Kenya. Discover sustainable development and innovative solutions with us."
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        <link rel="canonical" href="https://www.optiven.co.ke" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Optiven Group",
            "url": "https://www.optiven.co.ke",
            "logo": "https://www.optiven.co.ke/optiven-logo.png",
            "description": "Optiven Group offers value-added plots and land in various parts of Kenya. Discover sustainable development and innovative solutions with us.",
            "sameAs": [
              "https://www.facebook.com/Optivenlimited",
              "https://x.com/OptivenLimited",
              "https://www.linkedin.com/company/optiven-limited",
              "https://www.youtube.com/@OptivenKenyaLimited",
              "https://www.tiktok.com/@optivenlimited"

            ],
            "areaServed": {
              "@type": "Place",
              "name": "Kenya"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+254790300300",
              "contactType": "Customer Service"
            }
          }
          `}
        </script>
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
                alt="Chat with Amani on WhatsApp"
              />
            </Link>
          </div>
        </div>
      </AnimatePresence>
      <Footer />
    </main>
  );
}
