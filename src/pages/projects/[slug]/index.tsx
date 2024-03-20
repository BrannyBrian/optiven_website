import { useEffect, useState } from "react";
import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import { Carousel } from "flowbite-react";
import Image from "next/image";

type Params = {
  params: {
    slug: string;
  };
};

const Index = ({ project }: any) => {
  const {
    projectName,
    projectContent,
    subDivisionMapLink,
    onlineOfferLetterLink,
    waterApplicationFormLink,
  } = project.data.attributes;

  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const images = project.data.attributes.projectCarousel?.data.reduce(
      (acc: string[], carousel: any) => {
        const formats = carousel.attributes.formats;
        const imageUrl =
          formats.large?.url || formats.medium?.url || formats.small?.url;
        if (imageUrl) acc.push(imageUrl);
        return acc;
      },
      []
    );

    setImageUrls(images || []);
  }, [project]);

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="max-w-2xl w-full px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl dark:text-gray-400">
            {projectName}
          </h1>
          {imageUrls.length > 0 && (
            <div className="my-8">
              <Carousel slideInterval={3000}>
                {imageUrls.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="relative"
                    style={{ paddingBottom: "56.25%" }}
                  >
                    <Image
                      src={imageUrl}
                      layout="fill"
                      objectFit="cover"
                      alt={`project-carousel-banner-image-${index}`}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )}
          <div>
            <div className="format">
              <BlocksRenderer content={projectContent} />
            </div>
            <div className="flex flex-col mt-8 md:flex-row lg:flex-row justify-between items-start">
              <div className="flex justify-center items-center">
                <Link
                  href={subDivisionMapLink ? subDivisionMapLink : "#"}
                  target="_blank"
                  className="text-xl flex un hover:text-green-600"
                >
                  Grand Master Plan
                  <ChevronRight size={24} />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  href={onlineOfferLetterLink ? onlineOfferLetterLink : "#"}
                  target="_blank"
                  className="text-xl flex un hover:text-green-600"
                >
                  Offer Letter
                  <ChevronRight size={24} />
                </Link>
              </div>
              <div className="flex justify-center items-center">
                <Link
                  href={
                    waterApplicationFormLink ? waterApplicationFormLink : "#"
                  }
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

    console.log(projectDetails.data);

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
