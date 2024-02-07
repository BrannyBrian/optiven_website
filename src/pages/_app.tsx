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
      {/* <Navbar fluid rounded className="fixed top-0 w-full z-10 h-16">
        <Navbar.Brand href="/">
          <Image
            src="/optiven-logo.png"
            alt="Optiven Logo"
            height={100}
            width={160}
          />
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <div>
            <Dropdown
              arrowIcon={true}
              inline
              label={<Navbar.Link href="#">About</Navbar.Link>}
            >
              <Dropdown.Item href="/about">Who We Are</Dropdown.Item>
              <Dropdown.Item href="team">Our Team</Dropdown.Item>
              <Dropdown.Item>Why Us</Dropdown.Item>
              <Dropdown.Item>Awards & Milestones</Dropdown.Item>
              <Dropdown.Item>Our Partners</Dropdown.Item>
              <Dropdown.Item>Corporate Social Responsibility</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <div>
            <Dropdown
              arrowIcon={true}
              inline
              label={<Navbar.Link href="#">Information Center</Navbar.Link>}
            >
              <Dropdown.Item href="/projects-updates">
                Projects Updates
              </Dropdown.Item>
              <Dropdown.Item href="/customer-information">
                Customer Information
              </Dropdown.Item>
              <Dropdown.Item href="/faqs">FAQs</Dropdown.Item>
              <Dropdown.Item>News & Blogs</Dropdown.Item>
              <Dropdown.Item href="/photo-gallery">Photo Gallery</Dropdown.Item>
              <Dropdown.Item>Video Gallery</Dropdown.Item>
              <Dropdown.Item>Newsletters & Downloads</Dropdown.Item>
              <Dropdown.Item>Optiven in the Media</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Link href="/testimonials">Testimonials</Navbar.Link>
          <Navbar.Link href="/careers">Careers</Navbar.Link>
        </Navbar.Collapse>
        <Button href="/contact" className="bg-green-700">
          Contact
        </Button>
      </Navbar> */}
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </main>
  );
}

