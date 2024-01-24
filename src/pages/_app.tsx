import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button, Dropdown, Footer, Navbar } from "flowbite-react";
import FoundersGrotesk from '@next/font/local'
import "@/styles/globals.css";
import "@/styles/styles.scss";

import Image from "next/image";

const founderGrotesk = FoundersGrotesk({
  src: [
    {
      path: '../../public/fonts/FoundersGrotesk-Bold.otf',
      weight: '800'
    },
    {
      path: '../../public/fonts/FoundersGrotesk-Light.otf',
      weight: '200'
    },
    {
      path: '../../public/fonts/FoundersGrotesk-Semibold.otf',
      weight: '600'
    },
    {
      path: '../../public/fonts/FoundersGrotesk-Regular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/FoundersGrotesk-Medium.otf',
      weight: '500'
    }
  ],
  variable: '--font-founders-grotesk'
})

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={founderGrotesk.className}>
      <Navbar fluid rounded>
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
              <Dropdown.Item>Project Updates</Dropdown.Item>
              <Dropdown.Item>Customer Information</Dropdown.Item>
              <Dropdown.Item href="/faqs">FAQs</Dropdown.Item>
              <Dropdown.Item>News & Blogs</Dropdown.Item>
              <Dropdown.Item>Photo Gallery</Dropdown.Item>
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
      </Navbar>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <Footer className="rounded-none bg-gray-50 pb-8 pt-16 shadow-none">
        <div className="mx-auto w-full max-w-8xl px-4 lg:px-20">
          <div className="grid w-full justify-between gap-8 md:grid-cols-2">
            <div className="mb-4 max-w-sm lg:mb-0">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/optiven-logo.png"
                  alt="Optiven Logo"
                  height={100}
                  width={160}
                />
              </Link>
              <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
                Flowbite is an ecosystem built on top of Tailwind CSS including
                a component library, block sections, a Figma design system and
                other resources.
              </p>
              <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
                Code licensed{" "}
                <a
                  href="https://github.com/themesberg/flowbite-react/blob/main/LICENSE"
                  className="text-cyan-600 hover:underline"
                >
                  MIT
                </a>
                , docs{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  rel="nofollow noopener noreferrer"
                  className="text-cyan-600 hover:underline"
                >
                  CC BY 3.0
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title
                  title="Resources"
                  className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
                />
                <Footer.LinkGroup
                  col
                  className="text-gray-600 dark:text-gray-400"
                >
                  <Footer.Link
                    href="https://github.com/themesberg/flowbite-react"
                    className="text-base"
                  >
                    GitHub
                  </Footer.Link>
                  <Footer.Link
                    href="https://flowbite.com/"
                    className="text-base"
                  >
                    Flowbite
                  </Footer.Link>
                  <Footer.Link
                    href="https://tailwindcss.com/"
                    className="text-base"
                  >
                    Tailwind CSS
                  </Footer.Link>
                  <Footer.Link
                    href="https://flowbite.com/figma/"
                    className="text-base"
                  >
                    Figma
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="Help & Support"
                  className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
                />
                <Footer.LinkGroup
                  col
                  className="text-gray-600 dark:text-gray-400"
                >
                  <Footer.Link
                    href="https://discord.gg/4eeurUVvTy"
                    className="text-base"
                  >
                    Discord
                  </Footer.Link>
                  <Footer.Link
                    href="https://github.com/themesberg/flowbite-react/discussions"
                    className="text-base"
                  >
                    Github Discussions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title
                  title="Legal"
                  className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
                />
                <Footer.LinkGroup
                  col
                  className="text-gray-600 dark:text-gray-400"
                >
                  <Footer.Link
                    href="https://flowbite.com/license/"
                    className="text-base"
                  >
                    License
                  </Footer.Link>
                  <Footer.Link
                    href="https://flowbite.com/brand/"
                    className="text-base"
                  >
                    Brand guideline
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full text-center sm:flex sm:items-center sm:justify-center">
            <Footer.Copyright
              by="All Rights Reserved. Flowbite™ is a registered trademark."
              href="/"
              year={new Date().getFullYear()}
              className="text-base"
            />
          </div>
        </div>
      </Footer>
    </main>
  );
}

