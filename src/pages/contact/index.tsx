import Head from "next/head";
import Stairs from "@/components/stairs";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Optiven Limited</title>
        <meta name="description" content="Inspiring Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
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
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
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
                <label htmlFor="message" className="label font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea textarea-bordered w-full h-24"
                />
              </div>
              <button className="text-white btn btn-primary uppercase">
                Send
              </button>
            </div>
          </div>
        </div>
      </Stairs>
    </>
  );
}
