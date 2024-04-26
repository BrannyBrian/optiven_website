import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { Popover } from "@headlessui/react";
import { ChevronsRight } from "react-feather";
import Link from "next/link";

const index = ({ cookiePolicy }: any) => {
  const { cookiePolicyContent } = cookiePolicy.data[0].attributes;

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
        Cookie Policy
      </li>
    </Popover.Group>
  </ol>
</div>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-xl w-full px-4 py-8">
          <div className="format md:text-xl lg:text-2xl">
            <BlocksRenderer content={cookiePolicyContent} />
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getStaticProps() {
  try {
    const cookiePolicyResponse = await fetcher<any>(
      "cookie-policies?populate=*"
    );

    // console.log(cookiePolicyResponse.data);

    return {
      props: {
        cookiePolicy: cookiePolicyResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching cookie policy:", error);
    return {
      props: {
        cookiePolicy: [],
      },
    };
  }
}

export default index;
