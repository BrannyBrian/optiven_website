import React from "react";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { ChevronsRight } from "react-feather";

const index = ({ diaspora }: any) => {
  const { diasporaContent } = diaspora.data[0].attributes;
  return (
    <Stairs>
      {/* Breadcrumbs */}
      <div className="bg-white dark:bg-gray-900 flex flex-col justify-center items-center h-full w-full">
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
                  Diaspora
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-2xl w-full px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl dark:text-gray-400">
            Diaspora
          </h1>
          <div className="format md:text-xl lg:text-2xl">
            <BlocksRenderer content={diasporaContent} />
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getStaticProps() {
  try {
    const diasporaResponse = await fetcher<any>("diasporas?populate=*");

    console.log(diasporaResponse.data);

    return {
      props: {
        diaspora: diasporaResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching content:", error);
    return {
      props: {
        diaspora: [],
      },
    };
  }
}

export default index;
