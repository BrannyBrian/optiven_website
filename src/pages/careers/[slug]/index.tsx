import React from "react";
import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const index = ({ job }: any) => {
  const { jobDescription } = job.data.attributes;
  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-xl w-full px-4 py-8">
          <div className="format">
            <BlocksRenderer content={jobDescription} />
          </div>
        </div>
      </section>
    </Stairs>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getServerSideProps({ params }: Params) {
  const { slug } = params;
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL_PROD}careers/${slug}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching job details: ${response.statusText}`);
    }

    const jobDetails = await response.json();

    console.log(jobDetails);

    return {
      props: {
        job: jobDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching job details:", error);
    return {
      props: {
        job: null,
      },
    };
  }
}

export default index;
