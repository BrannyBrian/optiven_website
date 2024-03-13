import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";

const index = ({ cookiePolicy }: any) => {
  const { cookiePolicyContent } = cookiePolicy.data[0].attributes;

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-xl w-full px-4 py-8">
          <div className="format">
            <BlocksRenderer content={cookiePolicyContent} />
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getStaticProps() {
  try {
    const cookiePolicyResponse = await fetcher<any>(
      "cookie-policies?populate=*"
    );

    // console.log(cookiePolicyResponse.data);

    return {
      props: {
        cookiePolicy: cookiePolicyResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching cookie policy:", error);
    return {
      props: {
        cookiePolicy: [],
      },
    };
  }
}

export default index;
