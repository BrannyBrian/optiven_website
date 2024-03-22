import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";

const index = ({ privacyPolicy }: any) => {
  const { privacyPolicyDescription } = privacyPolicy.data[0].attributes;

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-xl w-full px-4 py-8">
          <div className="format lg:text-2xl">
            <BlocksRenderer content={privacyPolicyDescription} />
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getStaticProps() {
  try {
    const privacyPolicyResponse = await fetcher<any>(
      "privacy-policies?populate=*"
    );

    // console.log(privacyPolicyResponse.data);

    return {
      props: {
        privacyPolicy: privacyPolicyResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
    return {
      props: {
        privacyPolicy: [],
      },
    };
  }
}

export default index;
