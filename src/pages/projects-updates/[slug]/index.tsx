import React from "react";
import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import LocationList from "@/components/locationlist";
import { fetcher } from "../../../../lib/api";

type Params = {
  params: {
    slug: string;
  };
};

const index = ({ projectUpdate, projects }: any) => {
  const { projectUpdateBody } = projectUpdate.data.attributes;
  const projectsWithLocationsArray = projects.data
    .filter((project: any) => project.attributes.isActive === true)
    .map((project: any) => project.attributes.projectLocation.data)
    .filter((project: any) => project !== null);

  // Deduplicate and sort locations
  const uniqueLocations = Array.from(
    new Set(
      projectsWithLocationsArray.map(
        (location: any) => location.attributes.projectLocation
      )
    )
  ).sort();
  return (
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
              Explore the Latest Developments at Optiven
            </h1>
            <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
              Stay up-to-date with our ongoing and upcoming projects. Our
              updates provide insights into the progress and exciting new
              features of our properties. Discover the innovative designs and
              sustainable practices being integrated into each development,
              ensuring value and quality in our real estate portfolio.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl dark:text-gray-400">
            {projectUpdate.data.attributes.projectUpdateTitle}
          </h1>
          <div className="md:flex">
            <div className="format md:text-xl md:w-1/2 lg:text-2xl lg:w-3/4">
              <BlocksRenderer content={projectUpdateBody} />
            </div>
            <aside className="md:w-1/4 md:ml-2"  style={{ zIndex: 16 }}>
              <LocationList locations={uniqueLocations} />
            </aside>
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

    const projectsResponse = await fetcher<any>("projects?populate=*");

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
        projects: projectsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching project update details:", error);
    return {
      props: {
        article: null,
        projects: [],
      },
    };
  }
}

export default index;
