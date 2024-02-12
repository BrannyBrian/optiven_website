import React from "react";
import Stairs from "@/components/stairs";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Params = {
  params: {
    slug: string;
  };
};

const index = ({ projectUpdate }: any) => {
  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {projectUpdate.data.attributes.projectUpdateTitle}
          </h1>
          <Markdown className="text-start" remarkPlugins={[remarkGfm]}>
            {projectUpdate.data.attributes.projectUpdateBody}
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
      `${process.env.STRAPI_URL}project-updates/${slug}?populate=*/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching project update details: ${response.statusText}`
      );
    }

    const projectUpdateDetails = await response.json();

    console.log(projectUpdateDetails);

    return {
      props: {
        projectUpdate: projectUpdateDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching project update details:", error);
    return {
      props: {
        article: null,
      },
    };
  }
}

export default index;
