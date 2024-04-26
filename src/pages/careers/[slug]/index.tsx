import React from "react";
import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { ChevronsRight } from "react-feather";

const index = ({ job }: any) => {
  const { jobDescription } = job.data.attributes;
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
        <Link href="/careers" className="block text-gray-700 font-semibold hover:text-green-500">
          Careers
        </Link>
      </li>
      
    </Popover.Group>
  </ol>
</div>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-xl w-full px-4 py-8">
          <div className="format md:text-xl lg:text-2xl">
            <BlocksRenderer content={jobDescription} />
          </div>
        </div>
      </section>
    </Stairs>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getServerSideProps({ params }: Params) {
  const { slug } = params;
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL_PROD}careers/${slug}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching job details: ${response.statusText}`);
    }

    const jobDetails = await response.json();

    // console.log(jobDetails);
    // console.log(jobDetails.data.attributes);

    return {
      props: {
        job: jobDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching job details:", error);
    return {
      props: {
        job: null,
      },
    };
  }
}

export default index;
