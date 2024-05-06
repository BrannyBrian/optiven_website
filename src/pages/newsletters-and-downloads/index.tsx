import React from "react";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { FaFilePdf } from "react-icons/fa";
import { Popover } from "@headlessui/react";
import Link from "next/link";
import { ChevronsRight } from "react-feather";

const Index = ({ files }: any) => {
  const data = files.data.map((file: any) => ({
    url: file.attributes.mediaFile.data.attributes.url,
    name: file.attributes.mediaFile.data.attributes.name,
  }));
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
      Newsletters and Downloads
      </li>
    </Popover.Group>
  </ol>
</div>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-2xl w-full px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl dark:text-gray-400">
            Newsletters and Downloads
          </h1>
          <ul>
            {data.map((file: any, index: number) => (
              <li key={index}>
                <div className="flex m-2">
                  <FaFilePdf className="text-gray-500" />
                  <a
                    href={file.url}
                    download
                    className="ml-2 font-semibold text-green-500"
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
