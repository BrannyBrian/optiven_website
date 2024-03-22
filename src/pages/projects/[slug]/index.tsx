import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import { Carousel, Modal } from "flowbite-react";
import Image from "next/image";
import { fetcher } from "../../../../lib/api";
import { NextPage } from "next";
import { useEffect, useState } from "react";

type PageProps = {
  project: any;
  currencies: any;
};

const index: NextPage<PageProps> = ({ project, currencies }) => {
  const {
    projectMainBanner,
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
        <div className="max-w-4xl px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-7xl dark:text-gray-400">
            {projectName}
          </h1>
          <Image
            src={projectMainBanner.data.attributes.formats.large.url}
            width={1000}
            height={600}
            alt={`project-carousel-banner-image-${index}`}
            className="w-full mb-4 lg:mb-8"
          />
          <div className="format md:text-xl lg:text-2xl">
            <BlocksRenderer content={projectContent} />
          </div>
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
          <div className="flex flex-col mt-12 md:flex-row lg:flex-row justify-between items-start">
            <div className="flex justify-center items-center">
              <Link
                href={subDivisionMapLink ? subDivisionMapLink : "#"}
                target="_blank"
                className="text-xl flex un hover:text-green-600 lg:text-3xl"
              >
                Grand Master Plan
                <ChevronRight size={24} />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href={onlineOfferLetterLink ? onlineOfferLetterLink : "#"}
                target="_blank"
                className="text-xl flex un hover:text-green-600 lg:text-3xl"
              >
                Offer Letter
                <ChevronRight size={24} />
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href={waterApplicationFormLink ? waterApplicationFormLink : "#"}
                target="_blank"
                className="text-xl flex un hover:text-green-600 lg:text-3xl"
              >
                Water Application Form
                <ChevronRight size={24} />
              </Link>
            </div>
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
  try {
    const { slug } = params;
    const projectResponse = await fetch(
      `${process.env.STRAPI_URL_PROD}projects/${slug}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
        },
      }
    );

    if (!projectResponse.ok) {
      throw new Error(
        `Error fetching project details: ${projectResponse.statusText}`
      );
    }
    const projectDetails = await projectResponse.json();

    const currenciesResponse = await fetcher<any>("currencies?populate=*");

    console.log(
      projectDetails.data.attributes.projectMainBanner.data.attributes.formats
        .large.url
    );

    console.log(currenciesResponse.data[0]);

    return {
      props: {
        project: projectDetails,
        currencies: currenciesResponse.data[0],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        project: null,
        currencies: [],
      },
    };
  }
}

export default index;
