import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import TestimonialsCarousel from "@/components/testimonialsCarousel";

export default function Testimonials({ testimonials }: any) {
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
          <TestimonialsCarousel testimonials={testimonials.data} />
        </div>
      </div>
    </Stairs>
  );
}

type Testimonial = {
  id: number;
  attributes: {
    clientName: string;
    clientTitle: string;
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
