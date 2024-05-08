import React from "react";
import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { fetcher } from "../../../../lib/api";
import LocationList from "@/components/locationlist";

type Params = {
  params: {
    slug: string;
  };
};

const index = ({ article, projects }: any) => {
  const { articleBody } = article.data.attributes;
  // Extract projects with locations
  const projectsWithLocationsArray = projects.data
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
      <div className="bg-white dark:bg-gray-900 flex flex-col justify-center items-center h-full w-full">
        {/* Breadcrumbs */}
        <nav
          className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-xs md:text-lg md:font-bold text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
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
                <Link
                  href="/articles"
                  className="ms-1 text-xs md:text-lg md:font-bold text-gray-700 hover:text-green-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Articles
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
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
                <span className="ms-1 text-xs md:text-lg font-bold text-gray-500 md:ms-2 dark:text-gray-400">
                  {article.data.attributes.articleTitle}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16">
          <h1 className="text-4xl text-start font-bold text-gray-700 lg:text-5xl sm:px-16 lg:px-48 dark:text-gray-400">
            {article.data.attributes.articleTitle}
          </h1>
          <div className="md:flex">
            <div className="format md:text-xl md:w-1/2 lg:text-2xl lg:w-3/4">
              <BlocksRenderer content={articleBody} />
            </div>
            <aside className="md:w-1/4 md:ml-2">
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
      `${process.env.STRAPI_URL_PROD}articles/${slug}?populate=*/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
        },
      }
    );
    const projectsResponse = await fetcher<any>("projects?populate=*");

    if (!response.ok) {
      throw new Error(`Error fetching article details: ${response.statusText}`);
    }

    const articleDetails = await response.json();
    // console.log(articleDetails.data);

    return {
      props: {
        article: articleDetails,
        projects: projectsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching article details:", error);
    return {
      props: {
        article: null,
      },
    };
  }
}

export default index;
