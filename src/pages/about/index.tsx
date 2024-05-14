import Stairs from "@/components/stairs";
import Head from "next/head";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import { fetcher } from "../../../lib/api";
import { NextPage } from "next";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

type PageProps = {
  about: any;
};

const index: NextPage<PageProps> = ({ about }) => {
  const {
    paragraph1,
    paragraph2,
    award1,
    award2,
    award3,
    award4,
    award5,
    award6,
    mission,
    vision,
    objective1,
    objective2,
    objective3,
    objective4,
    objective5,
    ourPeople,
    workingMethodology,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
  } = about.data[0].attributes;

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
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        {/* Breadcrumbs */}
        <div className="bg-white dark:bg-gray-900 flex flex-col justify-center items-center h-full w-full">
          <nav
            className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-xs md:text-lg md:font-bold text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
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
                  <span className="ms-1 text-xs md:text-lg font-bold text-gray-500 md:ms-2 dark:text-gray-400">
                    About us
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-xl">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 uppercase md:text-4xl lg:text-5xl">
                  Who we <span className="inline-block text-primary">are</span>
                </h2>
                <div className="format md:text-lg lg:text-2xl">
                  <BlocksRenderer content={paragraph1} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src={
                    getBestAvailableImageUrl(image1.data.attributes.formats).url
                  }
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src={
                    getBestAvailableImageUrl(image2.data.attributes.formats).url
                  }
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src={
                    getBestAvailableImageUrl(image3.data.attributes.formats).url
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-600 py-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
            <div className="mb-10 lg:max-w-xl">
              <div className="mb-6">
                <div className="format md:text-lg lg:text-2xl text-white">
                  <BlocksRenderer content={paragraph2} />
                </div>
              </div>
            </div>
            <div className="relative lg:w-2/5">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={
                  getBestAvailableImageUrl(image4.data.attributes.formats).url
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="text-4xl border-b mb-2">Awards</h1>
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">01</h1>
                  <div className="format text-sm">
                    <BlocksRenderer content={award1} />
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">02</h1>
                  <div className="format text-sm">
                    <BlocksRenderer content={award2} />
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">03</h1>
                  <div className="format text-sm">
                    <BlocksRenderer content={award3} />
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">04</h1>
                  <div className="format text-sm">
                    <BlocksRenderer content={award4} />
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">05</h1>
                  <div className="format text-sm">
                    <BlocksRenderer content={award5} />
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">06</h1>
                  <div className="format text-sm">
                    <BlocksRenderer content={award6} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-6">
              <Link
                href="/awards-and-milestones"
                className="text-2xl md:text-3xl lg:text-4xl mt-4 flex un hover:text-green-700"
              >
                View More Awards
                <ChevronRight size={28} />
              </Link>
            </div>
          </div>
        </div>
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
          <h1 className="text-4xl border-b mb-4">Our Mission and Vision</h1>
          <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src={
                    getBestAvailableImageUrl(image5.data.attributes.formats).url
                  }
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Our Mission
                </h5>
                <div className="format md:text-lg lg:text-2xl">
                  <BlocksRenderer content={mission} />
                </div>
              </div>
            </div>
            <div className="transition duration-300 transform bg-wshadowounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src={
                    getBestAvailableImageUrl(image6.data.attributes.formats).url
                  }
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Our Vision
                </h5>
                <div className="format md:text-lg lg:text-2xl">
                  <BlocksRenderer content={vision} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="text-4xl border-b mb-4">Our Core Values</h1>
          <div className="grid gap-8 row-gap-5 my-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div className="duration-300 transform bg-white border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 flex justify-center items-center 5 border border-l-0 rounded-r shadow-sm">
                <h6 className="my-2 font-semibold text-3xl">Professionalism</h6>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 flex justify-center items-center 5 border border-l-0 rounded-r shadow-sm">
                <h6 className="my-2 font-semibold text-3xl">Honesty</h6>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 flex justify-center items-center 5 border border-l-0 rounded-r shadow-sm">
                <h6 className="my-2 font-semibold text-3xl">
                  Customer Obsession{" "}
                </h6>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 flex justify-center items-center 5 border border-l-0 rounded-r shadow-sm">
                <h6 className="my-2 font-semibold text-3xl">Innovation</h6>
              </div>
            </div>
          </div>
          <p className="text-base mt-2 md:text-lg">
            These core values drive the company culture which supports a
            strategy for extraordinary success for over 24 years
          </p>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-green-600">
          <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 font-sans text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Objectives
              </h2>
              <div className="flex">
                <div>
                  <div className="format md:text-lg text-white lg:text-2xl">
                    <BlocksRenderer content={objective1} />
                  </div>
                  <hr className="w-96 my-4 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="format md:text-lg text-white lg:text-2xl">
                    <BlocksRenderer content={objective2} />
                  </div>
                  <hr className="w-96 my-4 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="format md:text-lg text-white lg:text-2xl">
                    <BlocksRenderer content={objective3} />
                  </div>
                  <hr className="w-96 my-4 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="format md:text-lg text-white lg:text-2xl">
                    <BlocksRenderer content={objective4} />
                  </div>
                  <hr className="w-96 my-4 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="format md:text-lg text-white lg:text-2xl">
                    <BlocksRenderer content={objective5} />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <img
                className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                src={
                  getBestAvailableImageUrl(image7.data.attributes.formats).url
                }
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src={
                  getBestAvailableImageUrl(image8.data.attributes.formats).url
                }
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src={
                  getBestAvailableImageUrl(image9.data.attributes.formats).url
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">
              <h5 className="mb-4 text-4xl font-extrabold leading-none">
                Our People
              </h5>
              <div className="format md:text-lg lg:text-2xl">
                <BlocksRenderer content={ourPeople} />
              </div>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={
                  getBestAvailableImageUrl(image10.data.attributes.formats).url
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="py-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  bg-green-600 text-gray-200">
          <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
            <div className="mb-10 lg:max-w-xl">
              <div className="mb-6">
                <h5 className="mb-4 text-4xl font-extrabold leading-none">
                  Working Methodology
                </h5>
                <div className="format md:text-lg lg:text-2xl text-white">
                  <BlocksRenderer content={workingMethodology} />
                </div>
              </div>
            </div>
            <div className="relative lg:w-2/5">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={
                  getBestAvailableImageUrl(image11.data.attributes.formats).url
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </Stairs>
    </>
  );
};

type About = {
  id: number;
  attributes: {
    paragraph1: any;
    paragraph2: any;
    award1: any;
    award2: any;
    award3: any;
    award4: any;
    award5: any;
    award6: any;
    mission: any;
    vision: any;
    objective1: any;
    objective2: any;
    objective3: any;
    objective4: any;
    objective5: any;
    ourPeople: any;
    workingMethodology: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    image1: any;
    image2: any;
    image3: any;
    image4: any;
    image5: any;
    image6: any;
    image7: any;
    image8: any;
    image9: any;
    image10: any;
    image11: any;
    localizations: any;
  };
};

export async function getStaticProps() {
  try {
    const aboutResponse = await fetcher<About[]>("abouts?populate=*");

    console.log(aboutResponse.data[0].attributes.image1.data.attributes);

    return {
      props: {
        about: aboutResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching about:", error);
    return {
      props: {
        about: [],
      },
    };
  }
}

export default index;
