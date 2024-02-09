import Stairs from "@/components/stairs";
import Head from "next/head";
import { fetcher } from "../../../lib/api";

export default function Testimonials({ testimonials }: any) {
  return (
    <Stairs>
      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {testimonials.data.map((testimonial: Testimonial) => (
              <div
                className="lg:m-2 mb-6 p-4 border-2 rounded"
                key={testimonial.id}
              >
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://dummyimage.com/302x302"
                  />
                  <p className="leading-relaxed">
                    {testimonial.attributes.clientComment}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {testimonial.attributes.clientName}
                  </h2>
                  <p className="text-gray-500">
                    {testimonial.attributes.clientTitle}
                  </p>
                </div>
              </div>
            ))}
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
    const testimonialsResponse = await fetcher<Testimonial[]>("testimonials?populate=*");

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
