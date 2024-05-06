import React from "react";
import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { ChevronsRight } from "react-feather";

type Params = {
  params: {
    slug: string;
  };
};

const index = ({ projectUpdate }: any) => {
  const { projectUpdateBody } = projectUpdate.data.attributes;
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
        <Link href="/projet-updates" className="block text-gray-700 font-semibold hover:text-green-500">
          Project Updates
        </Link>
      </li>
      <ChevronsRight
      size={20}
      className="text-gray-700"
      aria-hidden="true"
       />{projectUpdate.data.attributes.projectUpdateTitle}
    </Popover.Group>
  </ol>
</div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl sm:px-16 lg:px-48 dark:text-gray-400">
            {projectUpdate.data.attributes.projectUpdateTitle}
          </h1>
          <div className="my-4 text-lg text-gray-700 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            <div className="format lg:format-lg">
              <BlocksRenderer content={projectUpdateBody} />
            </div>
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getServerSideProps({ params }: Params) {
  const { slug } = params;
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL_PROD}project-updates/${slug}?populate=*/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching project update details: ${response.statusText}`
      );
    }

    const projectUpdateDetails = await response.json();

    // console.log(projectUpdateDetails.data.attributes);

    return {
      props: {
        projectUpdate: projectUpdateDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching project update details:", error);
    return {
      props: {
        article: null,
      },
    };
  }
}

export default index;
