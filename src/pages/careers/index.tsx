import { useState } from "react";
import Stairs from "@/components/stairs";
import Head from "next/head";
import { Card, Select, TextInput } from "flowbite-react";
import Link from "next/link";
import { Briefcase, ChevronRight, MapPin, ChevronsRight } from "react-feather";
import { fetcher } from "../../../lib/api";

export default function Careers({ careers, locations }: any) {
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJobLocation(e.target.value);
  };

  const filteredCareers = careers.data.filter((job: Career) => {
    const titleMatch = job.attributes.jobTitle
      .toLowerCase()
      .includes(jobTitle.toLowerCase());
    const locationMatch =
      jobLocation === "" ||
      job.attributes.jobLocations.data.some(
        (location: any) =>
          location.attributes.jobLocation.toLowerCase() ===
          jobLocation.toLowerCase()
      );

    return titleMatch && locationMatch;
  });

  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="Careers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
          <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
            <Link
              href="/about"
              className="inline-flex justify-between items-center py-2 px-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
            >
              <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 mr-3">
                About Us
              </span>{" "}
              <span className="text-sm font-medium">
                Get to learn what we're all about and what we stand for
              </span>
              <svg
                className="w-2.5 h-2.5 ml-2 rtl:rotate-180"
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
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Join Our Team at Optiven!
              </h1>
              <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                At Optiven, we believe in empowering our team to innovate, grow,
                and succeed. We offer a dynamic work environment that fosters
                creativity and collaboration. With a commitment to professional
                development and work-life balance, we provide our employees with
                the tools and support they need to achieve their career goals.
                Explore the opportunities to be part of a team that values
                progress and rewards hard work.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
        </section>
        <div
          style={{ zIndex: 16 }}
          className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8"
        >
          <div className="mx-auto lg:max-w-2xl">
            <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <p className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-red-600 md:text-3xl lg:text-4xl dark:text-white">
              Caution Alert
            </p>
            <p className="text-base text-gray-700 md:text-lg">
              As part of our mandate to operate transparently, take note that
              all our job openings are always posted on our website. There
              should be NO Canvassing and Optiven does not charge for job
              interviews. After consideration based on your qualifications, an
              official email with our official contacts will be sent to you with
              an email ending with{" "}
              <span className="text-green-600">@optiven.co.ke</span>
            </p>
            <p className="font-bold mt-4 md:text-lg">Please Note</p>
            <p className="text-base text-gray-700 md:text-lg">
              We do not charge for interviews or placements. In case you
              encounter please contact us:
            </p>
            <div>
              <ul className="list-disc ml-6 mt-2">
                <li>
                  <span className="font-bold">Call:</span> 0715 9280112
                </li>
                <li>
                  <span className="font-bold">Email :</span>{" "}
                  recruitment@optiven.co.ke
                </li>
                <li>
                  <span className="font-bold">Offices:</span> Absa Towers Loita
                  street 2nd floor
                </li>
              </ul>
            </div>
            <p className="font-bold mt-4 md:text-lg">
              Optiven is an Equal opportunity employer.
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-2 md:mt-8 p-4">
          <div className="flex items-center justify-center mb-4 space-x-2">
            <TextInput
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Search by Job Title"
              type="text"
              className="rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
            />
            <Select
              value={jobLocation}
              onChange={handleLocationChange}
              title="job-select"
              className="rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"
            >
              <option value="">All Locations</option>
              {locations.data.map((location: any, index: number) => (
                <option key={index} value={location.attributes.jobLocation}>
                  {location.attributes.jobLocation}
                </option>
              ))}
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCareers.map((job: Career, index: number) => (
              <Card
                key={index}
                className="py-4 transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex space-x-2 items-center mb-2">
                  <Briefcase className="text-green-600" />
                  <Link
                    href={`careers/${job.id}`}
                    className="text-xl font-bold text-gray-900 dark:text-white hover:text-green-600"
                  >
                    {job.attributes.jobTitle}
                  </Link>
                </div>
                <div className="flex space-x-2 items-center mb-4">
                  <MapPin size={16} className="text-green-600" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {job.attributes.jobLocations.data
                      .map((item: any) => item.attributes.jobLocation)
                      .join(", ")}
                  </p>
                </div>
                <div className="flex justify-end">
                  <Link
                    href={`careers/${job.id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-800 dark:text-green-300 dark:hover:text-green-500"
                  >
                    View Details
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Stairs>
    </>
  );
}

type Career = {
  id: number;
  attributes: {
    jobTitle: string;
    isOpen: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    jobLocations: any;
    jobDescription: any;
  };
};

type JobLocation = {
  id: number;
  attributes: {
    jobTitle: string;
    careers: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export async function getStaticProps() {
  try {
    const careersResponse = await fetcher<Career[]>("careers?populate=*");
    const locationsResponse = await fetcher<JobLocation[]>(
      "job-locations?populate=*"
    );

    // console.log(
    //   careersResponse.data.map((item: any) =>
    //     item.attributes.jobLocations.data.map(
    //       (item: any) => item.attributes.jobLocation
    //     )
    //   )
    // );

    // console.log(locationsResponse.data.map((item: any) => item.attributes.jobLocation))

    return {
      props: {
        careers: careersResponse,
        locations: locationsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching careers:", error);
    return {
      props: {
        careers: [],
      },
    };
  }
}
