import Stairs from "@/components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { ChevronRight, ChevronsRight } from "react-feather";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { fetcher } from "../../../../lib/api";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import PlotPriceCard from "@/components/PlotPriceCard";
import { Popover } from "@headlessui/react";
import LocationList from "@/components/locationlist";

// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

type PageProps = {
  project: any;
  currencies: any;
  projects: any;
};

const index: NextPage<PageProps> = ({ project, projects, currencies }) => {
  const {
    projectMainBanner,
    projectName,
    projectContent,
    subDivisionMapLink,
    onlineOfferLetterLink,
    waterApplicationFormLink,
    projectMapLocationLink,
  } = project.data.attributes;

  const prepareInitialPrices = (attributes: any) => ({
    "1/8 Acre": {
      cashPrice: attributes.eighthAcreCashPrice
        ? Number(attributes.eighthAcreCashPrice).toLocaleString()
        : "-",
      threeMonthsPrice: attributes.eigthAcre3MonthsPrice
        ? Number(attributes.eigthAcre3MonthsPrice).toLocaleString()
        : "-",
      sixMonthsPrice: attributes.eighthAcre6MonthsPrice
        ? Number(attributes.eighthAcre6MonthsPrice).toLocaleString()
        : "-",
      twelveMonthsPrice: attributes.eighthAcre12MonthsPrice
        ? Number(attributes.eighthAcre12MonthsPrice).toLocaleString()
        : "-",
      deposit: attributes.eighthAcreDeposit
        ? Number(attributes.eighthAcreDeposit).toLocaleString()
        : "-",
    },
    "1/4 Acre": {
      cashPrice: attributes.quarterAcreCashPrice
        ? Number(attributes.quarterAcreCashPrice).toLocaleString()
        : "-",
      threeMonthsPrice: attributes.quarterAcre3MonthsPrice
        ? Number(attributes.quarterAcre3MonthsPrice).toLocaleString()
        : "-",
      sixMonthsPrice: attributes.quarterAcre6MonthsPrice
        ? Number(attributes.quarterAcre6MonthsPrice).toLocaleString()
        : "-",
      twelveMonthsPrice: attributes.quarterAcre12MonthsPrice
        ? Number(attributes.quarterAcre12MonthsPrice).toLocaleString()
        : "-",
      deposit: attributes.quarterAcreDeposit
        ? Number(attributes.quarterAcreDeposit).toLocaleString()
        : "-",
    },
    "1/2 Acre": {
      cashPrice: attributes.halfAcreCashPrice
        ? Number(attributes.halfAcreCashPrice).toLocaleString()
        : "-",
      threeMonthsPrice: attributes.halfAcre3MonthsPrice
        ? Number(attributes.halfAcre3MonthsPrice).toLocaleString()
        : "-",
      sixMonthsPrice: attributes.halfAcre6MonthsPrice
        ? Number(attributes.halfAcre6MonthsPrice).toLocaleString()
        : "-",
      twelveMonthsPrice: attributes.halfAcre12MonthsPrice
        ? Number(attributes.halfAcre12MonthsPrice).toLocaleString()
        : "-",
      deposit: attributes.halfAcreDeposit
        ? Number(attributes.halfAcreDeposit).toLocaleString()
        : "-",
    },
    Acre: {
      cashPrice: attributes.acreCashPrice
        ? Number(attributes.acreCashPrice).toLocaleString()
        : "-",
      threeMonthsPrice: attributes.acre3MonthsPrice
        ? Number(attributes.acre3MonthsPrice).toLocaleString()
        : "-",
      sixMonthsPrice: attributes.acre6MonthsPrice
        ? Number(attributes.acre6MonthsPrice).toLocaleString()
        : "-",
      twelveMonthsPrice: attributes.acre12MonthsPrice
        ? Number(attributes.acre12MonthsPrice).toLocaleString()
        : "-",
      deposit: attributes.acreDeposit
        ? Number(attributes.acreDeposit).toLocaleString()
        : "-",
    },
  });

  const initialPrices: any = prepareInitialPrices(project.data.attributes);

  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [displayPrices, setDisplayPrices] = useState<any>(initialPrices);
  const [currency, setCurrency] = useState("KES");

  useEffect(() => {
    switch (currency) {
      case "USD":
        handleUSDConversion();
        break;
      case "EUR":
        handleEURConversion();
        break;
      case "GBP":
        handleGBPConversion();
        break;
      default:
        resetToKESPrices();
        break;
    }
  }, [currency]);

  const updatePricesForCurrency = (conversionRate: number) => {
    const rate = Number(conversionRate);
    if (isNaN(rate) || rate <= 0) {
      console.error("Invalid conversion rate:", conversionRate);
      return;
    }
    const sanitizePrice = (price: any): any => {
      const numericPrice = Number(price.replace(/,/g, ""));
      return !isNaN(numericPrice) && numericPrice > 0 ? numericPrice : null;
    };

    const updatedPrices = Object.keys(initialPrices).reduce(
      (acc: { [key: string]: any }, plotSize) => {
        const plotPrices = initialPrices[plotSize];
        acc[plotSize] = {
          cashPrice:
            sanitizePrice(plotPrices.cashPrice) !== null
              ? Math.round(
                  sanitizePrice(plotPrices.cashPrice) / rate
                ).toLocaleString()
              : "-",
          threeMonthsPrice:
            sanitizePrice(plotPrices.threeMonthsPrice) !== null
              ? Math.round(
                  sanitizePrice(plotPrices.threeMonthsPrice) / rate
                ).toLocaleString()
              : "-",
          sixMonthsPrice:
            sanitizePrice(plotPrices.sixMonthsPrice) !== null
              ? Math.round(
                  sanitizePrice(plotPrices.sixMonthsPrice) / rate
                ).toLocaleString()
              : "-",
          twelveMonthsPrice:
            sanitizePrice(plotPrices.twelveMonthsPrice) !== null
              ? Math.round(
                  sanitizePrice(plotPrices.twelveMonthsPrice) / rate
                ).toLocaleString()
              : "-",
          deposit:
            sanitizePrice(plotPrices.deposit) !== null
              ? Math.round(
                  sanitizePrice(plotPrices.deposit) / rate
                ).toLocaleString()
              : "-",
        };
        return acc;
      },
      {}
    );

    setDisplayPrices(updatedPrices);
  };

  const resetToKESPrices = () => {
    setDisplayPrices(initialPrices);
  };

  const handleUSDConversion = () =>
    updatePricesForCurrency(currencies.attributes.usdToKES);
  const handleEURConversion = () =>
    updatePricesForCurrency(currencies.attributes.euroToKES);
  const handleGBPConversion = () =>
    updatePricesForCurrency(currencies.attributes.gbpToKES);

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

  // Extract projects with locations
  const projectsWithLocationsArray = projects.data
    .map((project: any) => project.attributes.projectLocation.data)
    .filter((project: any) => project !== null);

  // Deduplicate and sort locations
  const uniqueLocations = Array.from(
    new Set(
      projectsWithLocationsArray.map(
        (location: any) => location.attributes.projectLocation
      )
    )
  ).sort();

  return (
    <Stairs>
      <div className="flex flex-col lg:flex-row">
        <section className="bg-white dark:bg-gray-900 flex flex-col justify-center items-center h-full w-full">
          <nav
            className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-lg font-bold text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-white"
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
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
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
                  <Link
                    href="/projects"
                    className="ms-1 text-lg font-bold text-gray-700 hover:text-green-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Properties
                  </Link>
                </div>
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
                  <span className="ms-1 text-lg font-bold text-gray-500 md:ms-2 dark:text-gray-400">
                    {projectName}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="max-w-4xl px-4 py-8 md:py-10 lg:py-20">
            <h1 className="text-4xl font-bold text-gray-700 lg:text-7xl dark:text-gray-400">
              {projectName}
            </h1>
            <Image
              src={
                getBestAvailableImageUrl(
                  projectMainBanner.data.attributes.formats
                ).url
              }
              placeholder="blur"
              blurDataURL={
                getBestAvailableImageUrl(
                  projectMainBanner.data.attributes.formats
                ).blurDataURL
              }
              width={1000}
              height={600}
              alt={`Main banner image for ${projectName}`}
              className="w-full mb-4 lg:mb-8"
            />
            <div className="flex">
              <div className="format md:text-xl md:w-1/2 lg:text-2xl lg:w-3/4">
                <BlocksRenderer content={projectContent} />
              </div>
              <aside className="lg:w-1/4">
                <LocationList locations={uniqueLocations} />
              </aside>
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
                        alt={`Carousel image ${index + 1} for ${projectName}`}
                        placeholder="blur"
                        blurDataURL={placeholderImage}
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
            <div className="flex flex-col mt-12 md:flex-row lg:flex-row justify-between items-start">
              <Link
                href={subDivisionMapLink || "#"}
                target="_blank"
                className="text-xl flex un hover:text-green-600 lg:text-3xl"
              >
                Grand Master Plan <ChevronRight size={24} />
              </Link>
              <Link
                href={onlineOfferLetterLink || "#"}
                target="_blank"
                className="text-xl flex un hover:text-green-600 lg:text-3xl"
              >
                Offer Letter <ChevronRight size={24} />
              </Link>
              <Link
                href={waterApplicationFormLink || "#"}
                target="_blank"
                className="text-xl flex un hover:text-green-600 lg:text-3xl"
              >
                Water Application Form <ChevronRight size={24} />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="w-full h-full inset-0"
            loading="lazy"
            title="map"
            src={projectMapLocationLink}
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-lg mb-1 font-bold uppercase">
            Secure your piece of {projectName} today
          </h2>
          <div className="relative mb-4">
            <label htmlFor="name" className="label font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="label font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="phone" className="label font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="input input-bordered w-full"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="label font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea textarea-bordered w-full h-24"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="source" className="label font-bold">
              How did you hear about us?
            </label>
            <input
              type="text"
              id="source"
              name="source"
              className="input input-bordered w-full"
            />
          </div>
          <button className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
            Send
          </button>
        </div>
      </div>
      <div className="w-screen py-4 px-4 md:py-6 md:px-6 lg:py-10 lg:px-10">
        <div className="text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Investment
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            *Prices in 6 and 12 Months are inclusive of deposit placed.
          </p>
          <div className="my-4">
            <select
              title="currency-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="KES">KES</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
        <div className="grid gap-4 row-gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {Object.keys(displayPrices).map((plotSize) => (
            <PlotPriceCard
              key={plotSize}
              plotSize={plotSize}
              cashPrice={displayPrices[plotSize].cashPrice}
              threeMonthsPrice={displayPrices[plotSize].threeMonthsPrice}
              sixMonthsPrice={displayPrices[plotSize].sixMonthsPrice}
              twelveMonthsPrice={displayPrices[plotSize].twelveMonthsPrice}
              deposit={displayPrices[plotSize].deposit}
            />
          ))}
        </div>
      </div>
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
    const projectsResponse = await fetcher<any>("projects?populate=*");

    if (!projectResponse.ok) {
      throw new Error(
        `Error fetching project details: ${projectResponse.statusText}`
      );
    }
    const projectDetails = await projectResponse.json();

    const currenciesResponse = await fetcher<any>("currencies?populate=*");

    return {
      props: {
        project: projectDetails,
        currencies: currenciesResponse.data[0],
        projects: projectsResponse,
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
