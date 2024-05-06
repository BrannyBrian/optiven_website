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
import { FaUmbrellaBeach, FaFaucet } from "react-icons/fa";
import { PiWallFill, } from "react-icons/pi";
import { FaBoreHole } from "react-icons/fa6";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { GiGuards,GiCctvCamera,GiOpenGate  } from "react-icons/gi";


import { Popover } from "@headlessui/react";


// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

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

  return (
    <Stairs>

<div className="container mx-auto">
  <ol className="flex justify-start space-x-2 rtl:space-x-reverse">
    <Popover.Group className="hidden lg:flex lg:gap-x-4">
      <li>
        <Link href="/" className="block text-gray-700 font-semibold hover:text-green-500">
          <span className="ml-1"> Home</span>
        </Link>
      </li>
      <ChevronsRight
      size={20}
      className="text-gray-700"
      aria-hidden="true"
       />
      <li>
      <Link href="/projects" className="block text-gray-700 font-semibold hover:text-green-500">
          <span className="ml-1"> Properties</span>
        </Link>
      </li>
      <ChevronsRight
      size={20}
      className="text-gray-700"
      aria-hidden="true"
       />{projectName}
    </Popover.Group>
  </ol>
</div>
      <section
        className="bg-white dark:bg-gray-900 flex
      flex-col justify-center items-center h-full w-full"
      >
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
          {/* // render the value additions */}
          <div>
            <h1 className=" flex justify-center text-md font-bold">Value Additions</h1>

            <div className="grid grid-cols-4 justify-between items-center border mt-3 p-6 text-gray-700 rounded-xl">
          
              <span>
                <PiWallFill className="text-white text-5xl icon bg-green-600 rounded-2xl"/>
                <span className="align-items text-md">Wall</span>
              </span>
              <span>
                <FaFaucet className="text-white text-5xl icon bg-green-600 rounded-2xl" />
                <span className="align-items text-md ">Water</span>
              </span>
              <span>
                <FaBoreHole className="text-white text-5xl icon bg-green-600 rounded-2xl "/>
                <span className="align-items text-md">BoreHole</span>
              </span>
              <span>
                <FaUmbrellaBeach className="text-white text-5xl icon bg-green-600 rounded-2xl " />
                <span className="align-items text-md">Coastal Bliss</span>
              </span>
              <span>
                <HiOutlineArrowCircleUp className="text-white text-5xl icon bg-green-600 rounded-2xl"/>
                <span className="align-items text-md">Beacons</span>
              </span>
              <span>
                <GiGuards className="text-white text-5xl icon bg-green-600 rounded-2xl " />
                <span className="align-items text-md">Security</span>
              </span>
              <span>
                <GiCctvCamera  className="text-white text-5xl icon bg-green-600 rounded-2xl "/>
                <span className="align-items text-md">CCTV</span>
              </span>
              <span>
                <GiOpenGate   className="text-white text-5xl icon bg-green-600 rounded-2xl " />
                <span className="align-items text-md">Gate</span>
              </span>
              
            </div>
          </div>

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
