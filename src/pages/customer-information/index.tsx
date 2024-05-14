import Link from "next/link";
import React from "react";
import Stairs from "@/components/stairs";
import StarRating from "@/components/starRating";
import { fetcher } from "../../../lib/api";
import { NextPage } from "next";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

type PageProps = {
  customerInfo: any;
};

const index: NextPage<PageProps> = ({ customerInfo }) => {
  const {
    platinumDetails,
    goldDetails,
    silverDetails,
    bronzeDetails,
    sapphireDetails,
    image,
  } = customerInfo.data[0].attributes;

  const getBestAvailableImageUrl = (formats: any) => {
    let imageUrl = formats.thumbnail?.url || ""; // Use thumbnail as a fallback
    if (formats.large) {
      imageUrl = formats.large.url;
    } else if (formats.medium) {
      imageUrl = formats.medium.url;
    } else if (formats.small) {
      imageUrl = formats.small.url;
    }

    // Return both the URL and the blurDataURL (the same static placeholder for now)
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
            <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 me-3">
              Properties
            </span>{" "}
            <span className="text-sm font-medium">
              View our various properties
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
            5 Levels of Optiven Properties
          </h1>
          <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            At Optiven, we offer a range of projects tailored to fit various
            budgets, each with its unique value additions. These projects are
            categorized into different levels, taking into account their
            location and proximity to essential infrastructure. As a result,
            market prices are determined by these factors, ensuring that you
            find the perfect fit for your needs and preferences.
          </p>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <div className="mb-2 text-lg font-bold flex">
                  <div>PLATINUM -</div>
                  <div className="-mt-1">
                    <StarRating rating={5} />
                  </div>
                </div>
                <div className="format md:text-lg lg:text-2xl">
                  <BlocksRenderer content={platinumDetails} />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <div className="mb-2 text-lg font-bold flex">
                  <div>GOLD -</div>
                  <div className="-mt-1">
                    <StarRating rating={4} />
                  </div>
                </div>
                <div className="format md:text-lg lg:text-2xl">
                  <BlocksRenderer content={goldDetails} />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <div className="mb-2 text-lg font-bold flex">
                  <div>SILVER -</div>
                  <div className="-mt-1">
                    <StarRating rating={3} />
                  </div>
                </div>
                <div className="format md:text-lg lg:text-2xl">
                  <BlocksRenderer content={silverDetails} />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <div className="mb-2 text-lg font-bold flex">
                  <div>BRONZE -</div>
                  <div className="-mt-1">
                    <StarRating rating={2} />
                  </div>
                </div>
                <div className="format md:text-lg lg:text-2xl">
                  <BlocksRenderer content={bronzeDetails} />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1 pb-8">
                <div className="mb-2 text-lg font-bold flex">
                  <div>SAPPHIRE -</div>
                  <div className="-mt-1">
                    <StarRating rating={1} />
                  </div>
                </div>
                <div className="format md:text-lg lg:text-2xl">
                  <BlocksRenderer content={sapphireDetails} />
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src={getBestAvailableImageUrl(image.data.attributes.formats).url}
              alt=""
            />
          </div>
        </div>
      </div>
    </Stairs>
  );
};

export async function getStaticProps() {
  try {
    const customerInfoResponse = await fetcher<any[]>(
      "customer-infos?populate=*"
    );

    // console.log(customerInfoResponse.data[0].attributes);

    return {
      props: {
        customerInfo: customerInfoResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching customerInfo:", error);
    return {
      props: {
        customerInfo: [],
      },
    };
  }
}

export default index;
