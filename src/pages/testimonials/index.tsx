import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { useState } from "react";
import { Modal } from "flowbite-react";
import Link from "next/link";

export default function Testimonials({ testimonials }: any) {
  const [openModal, setOpenModal] = useState<number | null>(null);
  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
          <Link
            href="/projects"
            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
          >
            <span className="ms-2 text-sm font-medium">
              View our available properties
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
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Hear from Our Satisfied Investors
          </h1>
          <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Discover the stories of those who have unlocked their investment
            opportunities with Optiven. From their experiences with residential
            and commercial ventures to the returns they've seen, our satisfied
            investors share how Optiven has helped them secure their future.
            Explore their testimonials and envision your own success with us.
          </p>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {testimonials.data.map(
              (testimonial: Testimonial, index: number) => (
                <div
                  className="lg:m-2 mb-6 p-4 border-2 rounded-xl"
                  key={testimonial.id}
                  style={{
                    zIndex: 16,
                  }}
                >
                  <div className="h-full text-center">
                    <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="/avatar.png"
                    />
                    <p className="leading-relaxed">
                      {testimonial.attributes.clientComment.length > 200
                        ? testimonial.attributes.clientComment.substring(
                            0,
                            100
                          ) + "..."
                        : testimonial.attributes.clientComment}
                      {testimonial.attributes.clientComment.length > 200 && (
                        <div
                          onClick={() => setOpenModal(index)}
                          className="text-green-600 italic cursor-pointer hover:underline"
                        >
                          read more
                        </div>
                      )}
                    </p>
                    {openModal === index && (
                      <Modal show={true} onClose={() => setOpenModal(null)}>
                        <Modal.Header>
                          <div className="text-xl">
                            {testimonial.attributes.clientName}
                          </div>
                        </Modal.Header>
                        <Modal.Body>
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {testimonial.attributes.clientComment}
                          </p>
                        </Modal.Body>
                      </Modal>
                    )}
                    <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                      {testimonial.attributes.clientName}
                    </h2>
                    <p className="text-gray-500">
                      {testimonial.attributes.clientTitle}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Stairs>
  );
}

type Testimonial = {
  id: number;
  attributes: {
    clientName: string;
    clientTitle: number;
    clientComment: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
  };
};

export async function getStaticProps() {
  try {
    const testimonialsResponse = await fetcher<Testimonial[]>(
      "testimonials?populate=*"
    );

    return {
      props: {
        testimonials: testimonialsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return {
      props: {
        testimonials: [],
      },
    };
  }
}
