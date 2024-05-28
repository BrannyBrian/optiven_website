import Head from "next/head";
import Stairs from "@/components/stairs";
import Link from "next/link";
import { useState } from "react";
import { Button, Toast } from "flowbite-react";
import { FaCircleCheck } from "react-icons/fa6";

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus(""); // Reset status

    const formData = new FormData(event.currentTarget);

    // Validate mandatory fields
    if (
      !formData.get("name") ||
      !formData.get("phone") ||
      !formData.get("message")
    ) {
      setToastMessage("Please fill in all required fields.");
      setShowToast(true);
      return;
    }

    // Construct JSON object from form data
    const jsonData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      leadsource_id: "59",
    };

    try {
      const response = await fetch(
        "https://crm.optiven.co.ke/API/website.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
          redirect: "follow",
        }
      );

      const data = await response.json();

      if (response.ok && data.ResultCode === "0") {
        console.log("Form successfully submitted");
        setToastMessage(data.ResultDesc);
      } else {
        console.error("Error submitting form:", data.ResultDesc);
        setToastMessage(data.ResultDesc || "Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setToastMessage("Error submitting form.");
    } finally {
      setShowToast(true);
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
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input input-bordered w-full rounded-lg"
                  required
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
                  className="input input-bordered w-full rounded-lg"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="phone" className="label font-bold">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input input-bordered w-full rounded-lg"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="label font-bold">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea textarea-bordered w-full h-32 rounded-lg resize-none"
                  required
                ></textarea>
              </div>
              <div className="relative">
                <Button
                  color="success"
                  type="submit"
                  disabled={showToast}
                  className="w-full"
                >
                  Submit
                </Button>
              </div>
              {showToast && (
                <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50">
                  <Toast>
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                      <FaCircleCheck color="green" className="h-5 w-5" />
                    </div>
                    <div className="ml-3 text-sm font-normal">
                      {toastMessage}
                    </div>
                    <button
                      type="button"
                      className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-gray-500 dark:hover:text-white"
                      onClick={() => setShowToast(false)}
                    >
                      <span className="sr-only">Close</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </Toast>
                </div>
              )}
            </form>
          </div>
        </div>
      </Stairs>
    </>
  );
}
