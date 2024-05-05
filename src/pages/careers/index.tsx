import { useState } from "react";
import Stairs from "@/components/stairs";
import Head from "next/head";
import { Card, Select, TextInput } from "flowbite-react";
import Link from "next/link";
import { Briefcase, ChevronRight, MapPin, ChevronsRight } from "react-feather";
import { fetcher } from "../../../lib/api";
import { Popover } from "@headlessui/react";

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
        <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
          <div className="mx-auto lg:max-w-2xl">
            <div className="max-w-xl mb-10 md:mx-auto lg:max-w-2xl md:mb-12">
              <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                We're looking for YOU!
              </h2>
              <p className="font-bold md:text-lg">
                Are you committed, trainable, with self-drive and with good
                relationship skills with team members?
              </p>
              <p className="text-base text-gray-700 md:text-lg">
                At Optiven Group, we are looking for you to join the family
                through giving innovative solutions to our customers and
                innovatively meet targets through self-driven targets. So, if
                these challenges are surmountable for you, we welcome your
                application to the open positions available at the moment.
              </p>
            </div>
            <div className="mb-4 transition-shadow duration-300 hover:shadow-xl lg:mb-6">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <p className="font-bold md:text-lg">Caution Alert</p>
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
              <ul>
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
            />
            <Select
              value={jobLocation}
              onChange={handleLocationChange}
              title="job-select"
            >
              <option value="">All Locations</option>
              {locations.data.map((location: any, index: number) => (
                <option key={index} value={location.attributes.jobLocation}>
                  {location.attributes.jobLocation}
                </option>
              ))}
            </Select>
          </div>
          {/* List of jobs */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filteredCareers.map((job: Career, index: number) => (
              <Card className="py-4" key={index}>
                <div className="flex space-x-2">
                  <Briefcase />
                  <Link
                    href={`careers/${job.id}`}
                    className="text-2xl font-bold"
                  >
                    {job.attributes.jobTitle}
                  </Link>
                </div>
                <div className="flex space-x-2">
                  <MapPin size={16} />
                  <p className="flex items-center text-sm">
                    {job.attributes.jobLocations.data.map(
                      (item: any) => item.attributes.jobLocation
                    )}
                  </p>
                </div>
                <div className="flex justify-end hover:text-green-600 hover:underline">
                  <Link
                    href={`careers/${job.id}`}
                    className="flex items-center text-xs justify-end"
                  >
                    View More
                  </Link>
                  <ChevronRight size={12} />
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
