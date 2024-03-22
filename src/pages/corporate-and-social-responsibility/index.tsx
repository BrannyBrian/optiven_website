import React from "react";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const index = ({ csr }: any) => {
  const { csrContent } = csr.data[0].attributes;
  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-2xl w-full px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl dark:text-gray-400">
            Corporate and Social Responsibility
          </h1>
          <div className="format">
            <BlocksRenderer content={csrContent} />
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getStaticProps() {
  try {
    const csrResponse = await fetcher<any>(
      "corporate-social-responsibilities?populate=*"
    );

    console.log(csrResponse.data);

    return {
      props: {
        csr: csrResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching content:", error);
    return {
      props: {
        csr: [],
      },
    };
  }
}

export default index;
