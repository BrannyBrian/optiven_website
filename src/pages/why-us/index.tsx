import React from "react";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { ChevronsRight } from "react-feather";

const index = ({ whyUs }: any) => {
  const { content } = whyUs.data[0].attributes;
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
        Why Us
      </li>
    </Popover.Group>
  </ol>
</div>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-2xl w-full px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl dark:text-gray-400">
            So Why Us?
          </h1>
          <div className="format md:text-xl lg:text-2xl">
            <BlocksRenderer content={content} />
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getStaticProps() {
  try {
    const whyUsResponse = await fetcher<any>("why-uses?populate=*");

    console.log(whyUsResponse.data);

    return {
      props: {
        whyUs: whyUsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching content:", error);
    return {
      props: {
        whyUs: [],
      },
    };
  }
}

export default index;
