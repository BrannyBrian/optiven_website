import React from "react";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const index = ({ diaspora }: any) => {
  const { diasporaContent } = diaspora.data[0].attributes;
  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-2xl w-full px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl dark:text-gray-400">
            Diaspora
          </h1>
          <div className="format">
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
