import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";

const index = ({ tsAndQs }: any) => {
  const termsAndConditionsContent =
    tsAndQs?.data?.[0]?.attributes?.termsAndConditionsContent ?? [];

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-xl w-full px-4 py-8">
          <div className="format md:text-xl lg:text-2xl">
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

    return {
      props: {
        tsAndQs: tsAndQsResponse ?? { data: [] },
      },
    };
  } catch (error) {
    console.error("Error fetching terms and conditions:", error);

    return {
      props: {
        tsAndQs: { data: [] },
      },
    };
  }
}

export default index;
