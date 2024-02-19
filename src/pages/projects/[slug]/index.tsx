import React from "react";
import Stairs from "@/components/stairs";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Params = {
  params: {
    slug: string;
  };
};

const index = ({ project }: any) => {
  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {project.data.attributes.projectName}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            {project.data.attributes.projectSummary}
          </p>
          <Markdown className="text-start" remarkPlugins={[remarkGfm]}>
            {project.data.attributes.projectContent}
          </Markdown>
        </div>
      </section>
    </Stairs>
  );
};

export async function getServerSideProps({ params }: Params) {
  const { slug } = params;
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL_PROD}projects/${slug}?populate=*/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching project details: ${response.statusText}`);
    }

    const projectDetails = await response.json();

    return {
      props: {
        project: projectDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching project details:", error);
    return {
      props: {
        project: null,
      },
    };
  }
}

export default index;
