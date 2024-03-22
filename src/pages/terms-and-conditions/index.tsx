import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";

const index = ({ tsAndQs }: any) => {
  const { termsAndConditionsContent } = tsAndQs.data[0].attributes;

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-xl w-full px-4 py-8">
          <div className="format lg:text-2xl">
            <BlocksRenderer content={termsAndConditionsContent} />
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getStaticProps() {
  try {
    const tsAndQsResponse = await fetcher<any>(
      "terms-and-conditions?populate=*"
    );

    // console.log(tsAndQsResponse.data);

    return {
      props: {
        tsAndQs: tsAndQsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching cookie policy:", error);
    return {
      props: {
        tsAndQs: [],
      },
    };
  }
}

export default index;
