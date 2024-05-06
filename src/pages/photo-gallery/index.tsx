import React from "react";
import { fetcher } from "../../../lib/api";
import Image from "next/image";
import Stairs from "@/components/stairs";
import Link from "next/link";
import { Home, ChevronsRight } from "react-feather";
import { Popover } from "@headlessui/react";
// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

const index = ({ photos }: any) => {
  const getBestAvailableImageUrl = (formats: any) => {
    let imageUrl = formats.thumbnail?.url || ""; // Default to thumbnail if available
    if (formats.large) {
      imageUrl = formats.large.url;
    } else if (formats.medium) {
      imageUrl = formats.medium.url;
    } else if (formats.small) {
      imageUrl = formats.small.url;
    }

    // Assuming 'placeholderImage' is the base64 string for the blur effect
    return { url: imageUrl, blurDataURL: placeholderImage };
  };

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
          <Link
            href="/projects"
            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
          >
            <span className="ms-2 text-sm font-medium">
              View our available properties
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
            Explore Optiven's Visual Journey
          </h1>
          <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Immerse yourself in the vibrant world of Optiven through our
            captivating photo gallery. Witness the beauty of our properties, the
            excitement of our events, and the joy of our satisfied customers.
            Explore the moments that define us and envision the possibilities of
            partnering with Optiven.
          </p>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            {photos.data.map((photo: Photo) => (
              <div key={photo.id} className="mb-4 break-inside-avoid">
                <Image
                  src={
                    getBestAvailableImageUrl(
                      photo.attributes.photo.data.attributes.formats
                    ).url
                  }
                  placeholder="blur"
                  blurDataURL={
                    getBestAvailableImageUrl(
                      photo.attributes.photo.data.attributes.formats
                    ).blurDataURL
                  }
                  // layout="responsive"
                  height={400}
                  width={700}
                  className="rounded-lg"
                  alt={`Image for ${photo.attributes.photoTitle}`}
                />
                {/* <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-600 mb-1">
                    {photo.attributes.photoTitle}
                  </h2>
                  <p className="leading-relaxed">
                    {photo.attributes.photoDescription}
                  </p>
                </div>*/}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Stairs>
  );
};

type Photo = {
  id: number;
  attributes: {
    photo: any;
    photoTitle: string;
    photoDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export async function getStaticProps() {
  try {
    const photosResponse = await fetcher<Photo[]>("photo-galleries?populate=*");

    return {
      props: {
        photos: photosResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching photos:", error);
    return {
      props: {
        photos: [],
      },
    };
  }
}

export default index;
