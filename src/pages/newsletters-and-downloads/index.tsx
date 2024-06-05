import React from "react";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";

const Index = ({ files }: any) => {
  const data = files.data.map((file: any) => ({
    url: file.attributes.mediaFile.data.attributes.url,
    name: file.attributes.mediaFile.data.attributes.name,
  }));

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] relative overflow-hidden">
        <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
          <Link
            href="/projects"
            className="inline-flex justify-between items-center py-2 px-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
          >
            <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3">
              Properties
            </span>
            <span className="text-sm font-medium">
              Have a look at our various properties
            </span>
            <svg
              className="w-2.5 h-2.5 ml-2 rtl:rotate-180"
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
              Access Our Latest Newsletters and Downloads
            </h1>
            <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
              Stay informed with the latest updates and resources from Optiven.
              Our newsletters and downloadable content provide insightful
              information, tips, and the latest news about our projects and
              industry trends. Sign up to receive our materials directly in your
              inbox and gain access to valuable tools that can enhance your
              understanding and engagement with the real estate market.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full py-16">
        <div className="max-w-3xl w-full px-4 py-8">
          <h2 className="text-4xl font-bold text-gray-700 lg:text-5xl dark:text-gray-400 mb-8 text-center">
            Newsletters and Downloads
          </h2>
          <ul className="space-y-4">
            {data.map((file: any, index: number) => (
              <li
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
              >
                <div className="flex items-center">
                  <FaFilePdf className="text-red-500 text-3xl" />
                  <a
                    href={file.url}
                    download
                    className="ml-4 text-xl font-semibold text-green-600 hover:underline dark:text-green-400"
                  >
                    {file.name}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Stairs>
  );
};

type File = {
  id: number;
  attributes: {
    mediaFileDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    mediaFile: [Object];
    localizations: [Object];
  };
};

export async function getStaticProps() {
  try {
    const filesResponse = await fetcher<File[]>("downloads?populate=*");

    return {
      props: {
        files: filesResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching files:", error);
    return {
      props: {
        files: [],
      },
    };
  }
}

export default Index;
