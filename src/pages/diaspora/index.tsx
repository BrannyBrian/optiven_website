import React, { useEffect, useState } from "react";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import LocationList from "@/components/locationlist";
import { Carousel } from "flowbite-react";
import Image from "next/image";

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

const index = ({ diaspora, projects }: any) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const { diasporaContent, carouselImages } = diaspora.data[0].attributes;

  const leaseholdProjectsWithLocationsArray = projects.data
    .filter((project: any) => {
      const isActive = project.attributes.isActive === true;
      const ownershipType =
        project.attributes.ownershipType?.data?.attributes?.name ===
        "Leasehold";
      const projectLocation = project.attributes.projectLocation?.data !== null;
      return isActive && ownershipType && projectLocation;
    })
    .map((project: any) => project.attributes.projectLocation.data);

  // Deduplicate and sort locations
  const uniqueLocations = Array.from(
    new Set(
      leaseholdProjectsWithLocationsArray.map(
        (location: any) => location.attributes.projectLocation
      )
    )
  ).sort();

  useEffect(() => {
    if (carouselImages && carouselImages.data) {
      const images = carouselImages.data.reduce(
        (acc: string[], carousel: any) => {
          const formats = carousel.attributes.formats;
          const imageUrl =
            formats.large?.url || formats.medium?.url || formats.small?.url;
          if (imageUrl) acc.push(imageUrl);
          return acc;
        },
        []
      );
      console.log("Images found in useEffect:", images); // Add debugging line here
      setImageUrls(images || []);
    }
  }, [carouselImages]);

  return (
    <Stairs>
      {/* Breadcrumbs */}
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
          <Link
            href="/projects"
            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
          >
            <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 me-3">
              Properties
            </span>{" "}
            <span className="text-sm font-medium">
              Have a look at our various properties
            </span>
            <svg
              className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
          </Link>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Diaspora
          </h1>
          <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Optiven is committed to providing versatile investment solutions
            tailored for the diaspora community. Whether you're looking for
            residential or commercial ventures, our prime plots in promising
            locations ensure optimal returns. Our properties are accessible and
            affordable, designed to deliver quality without compromise. With
            flexible installment plans starting at accessible rates, securing
            your future has never been easier, no matter where you are in the
            world.
          </p>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>

      <div className="p-4">
        {imageUrls.length > 0 && (
          <div className="flex justify-center">
            <Carousel slideInterval={3000} className="lg:w-3/4">
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
                    alt={`Carousel image ${index + 1}`}
                    placeholder="blur"
                    blurDataURL={placeholderImage}
                    quality={90} // Increased image quality
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="mb-8 p-4">
          <div className="mt-4 md:flex md:justify-between">
            <div className="format md:text-xl lg:text-2xl lg:w-8/12">
              <BlocksRenderer content={diasporaContent} />
            </div>
            <aside className="md:ml-2" style={{ zIndex: 16 }}>
              <LocationList locations={uniqueLocations} />
            </aside>
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getStaticProps() {
  try {
    const diasporaResponse = await fetcher<any>("diasporas?populate=*");
    const projectsResponse = await fetcher<any>("projects?populate=*");

    return {
      props: {
        diaspora: diasporaResponse,
        projects: projectsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching content:", error);
    return {
      props: {
        diaspora: [],
        projects: [],
      },
    };
  }
}

export default index;
