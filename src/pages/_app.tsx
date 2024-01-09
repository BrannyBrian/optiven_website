import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import "@/styles/globals.css";
import "@/styles/styles.scss";
import Image from "next/image";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="main">
      <div className="bg-primary px-4 py-1 ">
        <div className="flex justify-center">
          <ul className="menu menu-horizontal">
            <li className="text-white">
              <Link href="/">Diaspora</Link>
            </li>
            <li className="text-white">
              <a>Project Updates</a>
            </li>
            <li className="text-white">
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
                    <Link href="/team">Team</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            <img src="/optiven-logo.png" alt="logo" width={160} height={50} />
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
                  <li>
                    <Link href="/about">Who We Are</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/careers">Careers</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/contact"
            className="btn btn-primary text-white uppercase"
          >
            Contact
          </Link>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
      <div className="w-screen bg-primary px-4 pt-16 md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="btn btn-ghost text-xl">
              <img src="/optiven-logo.png" alt="logo" width={160} height={50} />
            </Link>
            <div className="mt-2 lg:max-w-sm">
              <p className="text-sm ">
                Optiven Group is a leading brand in the African real estate
                sector. The Group’s main objective is to empower property
                investors and transform the Society.
              </p>
              <p className="mt-4 text-sm ">
                The Real Estate arm’s flagship product is transformed value
                added plots which are particularly enhanced to suit immediate
                residential settlement, commercial purposes and futuristic
                capital gain
              </p>
              <p className="mt-4 text-sm ">
                We have prime plots on sale in Kiambu, Malindi, Thika (Gatanga
                Road) , Machakos, Kitengela, Nyeri, Nanyuki, Kisumu, Vipingo,
                Naro Moru, Malindi, Konza and Kajiado.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold text-gray-900 uppercase">
              QUICK LINKS
            </p>
            <div>
              <Link href="https://www.georgewachiuri.com/">
                <img src="/george-wachiuri-logo.png" alt="logo" />
              </Link>
              <Link href="https://www.optivenfoundation.org/">
                <img src="/optiven-foundation-logo.png" alt="logo" />
              </Link>
              <Link href="https://www.optivenhomes.co.ke/">
                <img src="/optiven-homes-logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold text-gray-900 uppercase">
              CONTACTS
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800 text-xs font-bold">
                Call/SMS/Whatsapp:
              </p>
              <a
                href="tel:+254790300300"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-xs  hover:text-green-600"
              >
                +254-790-300-300
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800 text-xs font-bold">Email:</p>
              <a
                href="mailto:info@optiven.co.ke"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-xs  hover:text-green-600"
              >
                info@optiven.co.ke
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800 text-xs font-bold">
                Head Office:
              </p>
              <a
                href="https://www.google.com/maps/place/ABSA+TOWERS,/@-1.2844744,36.8152966,17z/data=!3m1!4b1!4m6!3m5!1s0x182f10d469dd1157:0xbed1e98488ac0ba4!8m2!3d-1.2844798!4d36.8178715!16s%2Fg%2F1yfjc3qnq?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Head Office"
                title="Head Office"
                className="transition-colors duration-300 text-xs  hover:text-green-600"
              >
                Absa Towers Loita Street , 2nd Floor
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800 text-xs font-bold">
                Global Office:
              </p>
              <a
                href="https://www.google.com/maps/place/Zamani+Business+Park/@-1.3244178,36.7022711,17z/data=!3m1!4b1!4m6!3m5!1s0x182f1b65c62db9f3:0xd9262045e5295650!8m2!3d-1.3244232!4d36.704846!16s%2Fg%2F11c2r9r2d3?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Global Office"
                title="Global Office"
                className="transition-colors duration-300 text-xs  hover:text-green-600"
              >
                Zamani Business Park, Karen
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800 text-xs font-bold">Kitengela:</p>
              <a
                href="https://www.google.com/maps/place/Optiven+Business+Center+-+Acacia+Junction/@-1.2233773,36.70317,15.89z/data=!4m6!3m5!1s0x182fa16dab2b2261:0xdc270d3c121d7c96!8m2!3d-1.5243896!4d36.9448093!16s%2Fg%2F11jj1hldk9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kitengela"
                title="Kitengela"
                className="transition-colors duration-300 text-xs  hover:text-green-600"
              >
                Optiven Business Center - Acacia Junction
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800 text-xs font-bold">Nanyuki:</p>
              <a
                href="https://www.google.com/maps/place/Ubii+Plaza/@-1.2233773,36.70317,15.89z/data=!4m6!3m5!1s0x1787f62fdd92be23:0x38d65f51714c9936!8m2!3d0.006785!4d37.0735926!16s%2Fg%2F11b_3gn1c9?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nanyuki"
                title="Nanyuki"
                className="transition-colors duration-300 text-xs  hover:text-green-600"
              >
                Ubii Plaza, along Kenyatta Highway, 2nd Floor
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800 text-xs font-bold">Nakuru:</p>
              <a
                href="https://www.google.com/maps/place/Golden+Life+Mall+Nakuru/@-1.2233773,36.70317,15.89z/data=!4m6!3m5!1s0x18298dc18a5e1db1:0x61909f4908ed8bb8!8m2!3d-0.2892948!4d36.0517521!16s%2Fg%2F11j7h5zxyc?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nakuru"
                title="Nakuru"
                className="transition-colors duration-300 text-xs  hover:text-green-600"
              >
                Golden Life Mall, 7th Floor
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold text-gray-900">SOCIALS</span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="/"
                className="transition-colors duration-300 hover:text-green-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 hover:text-green-200"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="/"
                className="transition-colors duration-300 hover:text-green-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm">
              We use cookies to ensure that we give you the best experience on
              our website. View Our{" "}
              <Link
                href={"https://www.optiven.co.ke/cookie-policy/"}
                className="transition-colors duration-300 underline hover:text-green-200"
              >
                Cookie Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm">
            © Copyright 2024 Optiven Limited. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm transition-colors duration-300 hover:text-green-200"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm transition-colors duration-300 hover:text-green-200"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm transition-colors duration-300 hover:text-green-200"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

