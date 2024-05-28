import Stairs from "../../../components/stairs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "react-feather";
import { Button, Carousel, Toast } from "flowbite-react";
import Image from "next/image";
import { fetcher } from "../../../../lib/api";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import PlotPriceCard from "../../../components/plotPriceCard";
import LocationList from "../../../components/locationlist";
import { FaCircleCheck } from "react-icons/fa6";

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
    projectMapLocationLink,
    valueAdditions,
  } = project.data.attributes;

  const prepareInitialPrices = (attributes: any) => {
    const formatPrice = (price: any) => {
      const numericPrice =
        typeof price === "string" ? parseFloat(price) : price;
      return numericPrice && numericPrice !== 0
        ? numericPrice.toLocaleString()
        : "-";
    };

    const initialPrices = {
      "1/8 Acre": {
        cashPrice: formatPrice(attributes.eighthAcreCashPrice),
        threeMonthsPrice: formatPrice(attributes.eigthAcre3MonthsPrice),
        sixMonthsPrice: formatPrice(attributes.eighthAcre6MonthsPrice),
        // twelveMonthsPrice: formatPrice(attributes.eighthAcre12MonthsPrice),
        deposit: formatPrice(attributes.eighthAcreDeposit),
      },
      "1/4 Acre": {
        cashPrice: formatPrice(attributes.quarterAcreCashPrice),
        threeMonthsPrice: formatPrice(attributes.quarterAcre3MonthsPrice),
        sixMonthsPrice: formatPrice(attributes.quarterAcre6MonthsPrice),
        // twelveMonthsPrice: formatPrice(attributes.quarterAcre12MonthsPrice),
        deposit: formatPrice(attributes.quarterAcreDeposit),
      },
      "1/2 Acre": {
        cashPrice: formatPrice(attributes.halfAcreCashPrice),
        threeMonthsPrice: formatPrice(attributes.halfAcre3MonthsPrice),
        sixMonthsPrice: formatPrice(attributes.halfAcre6MonthsPrice),
        // twelveMonthsPrice: formatPrice(attributes.halfAcre12MonthsPrice),
        deposit: formatPrice(attributes.halfAcreDeposit),
      },
      Acre: {
        cashPrice: formatPrice(attributes.acreCashPrice),
        threeMonthsPrice: formatPrice(attributes.acre3MonthsPrice),
        sixMonthsPrice: formatPrice(attributes.acre6MonthsPrice),
        // twelveMonthsPrice: formatPrice(attributes.acre12MonthsPrice),
        deposit: formatPrice(attributes.acreDeposit),
      },
    };

    // console.log("Prepared Initial Prices:", initialPrices);
    return initialPrices;
  };

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
          // twelveMonthsPrice:
          //   sanitizePrice(plotPrices.twelveMonthsPrice) !== null
          //     ? Math.round(
          //         sanitizePrice(plotPrices.twelveMonthsPrice) / rate
          //       ).toLocaleString()
          //     : "-",
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

  const projectsWithLocationsArray = projects.data
    .filter((project: any) => project.attributes.isActive === true)
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

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus(""); // Reset status

    const formData = new FormData(event.currentTarget);

    // Validate mandatory fields
    if (
      !formData.get("name") ||
      !formData.get("phone") ||
      !formData.get("message")
    ) {
      setToastMessage("Please fill in all required fields.");
      setShowToast(true);
      return;
    }

    // Prepend project name to the message
    const message = `Inquiry about ${projectName}\n\n${formData.get(
      "message"
    )}`;

    // Construct JSON object from form data
    const jsonData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: message,
      leadsource_id: "59",
    };

    try {
      const response = await fetch(
        "https://crm.optiven.co.ke/API/website.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
          redirect: "follow",
        }
      );

      const data = await response.json();

      if (response.ok && data.ResultCode === "0") {
        console.log("Form successfully submitted");
        console.log(jsonData);
        setToastMessage(data.ResultDesc);
      } else {
        console.error("Error submitting form:", data.ResultDesc);
        setToastMessage(data.ResultDesc || "Error submitting form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setToastMessage("Error submitting form.");
    } finally {
      setShowToast(true);
    }
  };

  return (
    <Stairs>
      <div className="bg-white dark:bg-gray-900 flex flex-col justify-center items-center h-full w-full">
        {/* Breadcrumbs */}
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
                  className="ms-1 text-xs md:text-lg md:font-bold text-gray-700 hover:text-green-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
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
                <span className="ms-1 text-xs md:text-lg font-bold text-gray-500 md:ms-2 dark:text-gray-400">
                  {projectName}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-4xl font-bold text-center text-gray-700 lg:text-7xl dark:text-gray-400">
          {projectName}
        </h1>
        <div className="px-4">
          <div className="flex justify-center">
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
              className="rounded-lg mb-4 lg:mb-8"
            />
          </div>
          <h1 className="text-3xl font-bold">Value Additions</h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-4 lg:w-full">
            {valueAdditions.data.map((valueAddition: any) => (
              <div
                className={`flex items-center border p-2 text-gray-700 rounded-xl value-addition-${project.id}`}
                key={valueAddition.id}
              >
                <CheckCircle color="black" size={16} />
                <h1 className="ml-1 font-semibold">
                  {valueAddition.attributes.valueAdditionTitle}
                </h1>
              </div>
            ))}
          </div>
          <div className=" mt-4 md:flex">
            <div className="format md:text-xl md:w-1/2 lg:text-2xl lg:w-3/4">
              <BlocksRenderer content={projectContent} />
            </div>
            <aside className="lg:w-1/4">
              <LocationList locations={uniqueLocations} />
            </aside>
          </div>
          {imageUrls.length > 0 && (
            <div className="my-8 flex justify-center">
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
              href={
                `https://portal.optiven.co.ke/dashboard/optivenwater/form.php` ||
                "#"
              }
              target="_blank"
              className="text-xl flex un hover:text-green-600 lg:text-3xl"
            >
              Water Application Form <ChevronRight size={24} />
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
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="name" className="label font-bold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input input-bordered w-full rounded-lg"
                required
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
                className="input input-bordered w-full rounded-lg"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="phone" className="label font-bold">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input input-bordered w-full rounded-lg"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="message" className="label font-bold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea textarea-bordered w-full h-32 rounded-lg resize-none"
                required
              ></textarea>
            </div>
            <div className="relative">
              <Button
                color="success"
                type="submit"
                disabled={showToast}
                className="w-full"
              >
                Submit
              </Button>
            </div>
            {showToast && (
              <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-50">
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                    <FaCircleCheck color="green" className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">{toastMessage}</div>
                  <button
                    type="button"
                    className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-500 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-gray-500 dark:hover:text-white"
                    onClick={() => setShowToast(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </Toast>
              </div>
            )}
          </form>
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
          <div className="my-4 flex flex-col justify-center items-center">
            <label
              htmlFor="currency-select"
              className="font-bold text-green-600"
            >
              Please Select Your Locality's Currency
            </label>
            <select
              title="currency-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="p-2 border rounded w-full md:w-1/2 lg:w-1/4"
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
              // twelveMonthsPrice={displayPrices[plotSize].twelveMonthsPrice}
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

    // console.log(
    //   projectDetails.data.attributes.valueAdditions.data.map(
    //     (item: any) => item.attributes.valueAdditionTitle
    //   )
    // );

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
