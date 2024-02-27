import React from "react";
import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

type Params = {
  params: {
    slug: string;
  };
};

const index = ({ article }: any) => {
  const { articleBody } = article.data.attributes;
  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl sm:px-16 lg:px-48 dark:text-gray-400">
            {article.data.attributes.articleTitle}
          </h1>
          <div className="my-4 text-lg text-gray-700 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            <BlocksRenderer content={articleBody} />
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
      `https://diligent-action-b51f63e5a1.strapiapp.com/api/articles/${slug}?populate=*/`,
      {
        headers: {
          Authorization: `Bearer f3a2942ed67a172aec3c7e7ee90d78e58d26e13e0cfa0c56a300a38c52dd11fb69b7943129d34bb53d7bfebf1672a9f7fa44c1b5a67b0e541a39acf5f80ad461cfa77777ba3dd8dea50e4cfa82367592547c24b2385d7af98df22699e13d8ad1318d948137f160a663fe3f71963d2868f8432c83b21a6d179ddd1ec4d4143261`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching article details: ${response.statusText}`);
    }

    const articleDetails = await response.json();
    // console.log(articleDetails.data);

    return {
      props: {
        article: articleDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching article details:", error);
    return {
      props: {
        article: null,
      },
    };
  }
}

export default index;
