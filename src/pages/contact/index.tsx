import Head from "next/head";
import Stairs from "@/components/stairs";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { ChevronsRight } from "react-feather";

export default function Contact() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
      source: event.target.source.value,
    };

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Form successfully submitted");
    } else {
      console.error("Error submitting form:", data.message);
    }
  };
  return (
    <>
      <Head>
        <title>Optiven Limited</title>
        <meta name="description" content="Inspiring Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
          <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
            <Link
              href="/projects"
              className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
            >
              <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 me-3">
                Properties
              </span>{" "}
              <span className="text-sm font-medium">
                Have a look at our various properties
              </span>
              <svg
                className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Get in Touch with Us
              </h1>
              <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                We're here to help answer your questions and ensure you get the
                information you need. Whether you’re interested in our services
                or need support, our dedicated team is ready to assist you.
                Contact us today to start the conversation and discover how we
                can help you achieve your goals.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
        </section>
        <div className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                loading="lazy"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.635453159408!2d36.70317!3d-1.2233773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d469dd1157%3A0xbed1e98488ac0ba4!2sABSA%20TOWERS%2C!5e0!3m2!1sen!2ske!4v1704787020457!5m2!1sen!2ske"
                style={{ filter: "grayscale(0.15) contrast(1.2) opacity(0.4)" }}
              />
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1 uppercase">
                    <span className="font-bold">Head Office:</span> Absa Towers
                    Loita Street, 2nd Floor
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a
                    className="text-primary leading-relaxed"
                    href="mailto:info@optiven.co.ke"
                  >
                    info@optiven.co.ke
                  </a>
                  <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">+254-790-300-300</p>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
            >
              <h2 className="text-lg mb-1 font-bold uppercase">Feedback</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Please fill in the form below and we will get back to you in the
                shortest time possible. Thank you, we value your queries.
              </p>
              <div className="relative mb-4">
                <label htmlFor="name" className="label font-bold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="label font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="phone" className="label font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="label font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea textarea-bordered w-full h-24"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="source" className="label font-bold">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  className="input input-bordered w-full"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Stairs>
    </>
  );
}
