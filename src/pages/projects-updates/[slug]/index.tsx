import React from "react";
import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
// import { useParams } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

// const fetchData = async () => {
//   const params = useParams();
//   const { slug } = params;
//   const req = await fetch(
//     `${process.env.STRAPI_URL_PROD}project-updates/${slug}?populate=*/`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
//       },
//     }
//   );
//   const res = await req.json();
//   return res.data;
// };

const index = ({ projectUpdate }: any) => {
  const { projectUpdateBody } = projectUpdate.data.attributes;
  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl sm:px-16 lg:px-48 dark:text-gray-400">
            {projectUpdate.data.attributes.projectUpdateTitle}
          </h1>
          <div className="my-4 text-lg text-gray-700 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            <div className="format lg:format-lg">
              <BlocksRenderer content={projectUpdateBody} />
            </div>
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getServerSideProps({ params }: Params) {
  const { slug } = params;
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL_PROD}project-updates/${slug}?populate=*/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching project update details: ${response.statusText}`
      );
    }

    const projectUpdateDetails = await response.json();

    // console.log(projectUpdateDetails.data.attributes);

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
