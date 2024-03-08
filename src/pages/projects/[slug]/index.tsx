import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { ChevronRight } from "react-feather";

type Params = {
  params: {
    slug: string;
  };
};

const Index = ({ project }: any) => {
  const { projectName } = project.data.attributes;
  const { projectContent } = project.data.attributes;
  const { subDivisionMapLink } = project.data.attributes;
  const { onlineOfferLetterLink } = project.data.attributes;
  const { waterApplicationFormLink } = project.data.attributes;

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-xl w-full px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl dark:text-gray-400">
            {projectName}
          </h1>
          <div>
            <div className="format">
              <BlocksRenderer content={projectContent} />
            </div>
            <div className="flex flex-col mt-8 md:flex-row lg:flex-row justify-between items-start">
              <div className="flex justify-center items-center">
                <Link
                  href={subDivisionMapLink}
                  target="_blank"
                  className="text-xl flex un hover:text-green-600"
                >
                  Grand Master Plan
                  <ChevronRight size={24} />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  href={onlineOfferLetterLink}
                  target="_blank"
                  className="text-xl flex un hover:text-green-600"
                >
                  Offer Letter
                  <ChevronRight size={24} />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  href={waterApplicationFormLink}
                  target="_blank"
                  className="text-xl flex un hover:text-green-600"
                >
                  Water Application Form
                  <ChevronRight size={24} />
                </Link>
              </div>
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
      `${process.env.STRAPI_URL_PROD}projects/${slug}?populate=*`,
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

export default Index;
