import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import Link from "next/link";
import { ChevronsRight } from "react-feather";
import { Popover } from "@headlessui/react";

export default function Testimonials({ testimonials }: any) {
  const [openModal, setOpenModal] = useState<number | null>(null);
  return (
    <Stairs>

<div className="container mx-auto">
  <ol className="flex justify-start space-x-2 rtl:space-x-reverse">
    <Popover.Group className="hidden lg:flex lg:gap-x-4">
      <li>
        <Link href="/" className="block text-gray-700 font-semibold hover:text-green-500">
          <span className="ml-1"> Home</span>
        </Link>
      </li>
      <ChevronsRight
      size={20}
      className="text-gray-700"
      aria-hidden="true"
       />
      <li>
        Testimonials
      </li>
    </Popover.Group>
  </ol>
</div>
      <div>
        <div className="container px-5 py-24 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {testimonials.data.map(
              (testimonial: Testimonial, index: number) => (
                <div
                  className="lg:m-2 mb-6 p-4 border-2 rounded"
                  key={testimonial.id}
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
