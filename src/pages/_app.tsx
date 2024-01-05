import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/styles/globals.css";
import "@/styles/styles.scss";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="main">
      <div className="bg-primary px-4 py-1 text-white">
        <div className="flex justify-center">
          <ul className="menu menu-horizontal">
            <li>
              <Link href="/">Diaspora</Link>
            </li>
            <li>
              <a>Project Updates</a>
            </li>
            <li>
              <a>Past Projects</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a>About Us</a>
                <ul className="p-2">
                  <li>
                    <Link href="/about">Who We Are</Link>
                  </li>
                  <li>
                    <a>Our Team</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            Optiven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>About Us</summary>
                <ul className="p-2 w-32">
                  <li className="">
                    <Link href="/about">Who We Are</Link>
                  </li>
                  <li>
                    <a>Our Team</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/" className="btn btn-primary text-white uppercase">
            Contact
          </Link>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

