import Stairs from "@/components/stairs";
import Head from "next/head";
import Image from "next/image";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { ChevronsRight } from "react-feather";

export default function Team({ teams }: any) {
  const sortedTeamMembers = teams.data.sort(
    (a: TeamMember, b: TeamMember) => a.id - b.id
  );

  const getBestAvailableImage = (formats: any) => {
    if (formats.large) {
      return formats.large.url;
    } else if (formats.medium) {
      return formats.medium.url;
    } else if (formats.small) {
      return formats.small.url;
    } else {
      return formats.thumbnail.url;
    }
  };

  return (
    <>
      <Head>
        <title>Team</title>
        <meta name="description" content="Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Meet the People Behind Optiven
              </h1>
              <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                Discover the skilled and passionate individuals who drive
                Optiven's success. Our team comprises experts dedicated to
                excellence in real estate and community development. Learn more
                about the professionals whose innovation and hard work continue
                to propel our vision forward and create lasting value for our
                stakeholders.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
        </section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="p-8 grid gap-10 grid-cols-1 lg:grid-cols-2 lg:p-12">
            {sortedTeamMembers.map((member: TeamMember, index: number) => (
              <div
                key={index}
                className="bg-base-100 shadow-md rounded-b-xl md:rounded-r-xl flex flex-col md:flex-row lg:rounded-r-xl"
              >
                <div className="md:w-1/2">
                  <Image
                    src={getBestAvailableImage(
                      member.attributes.teamMemberImage.data.attributes.formats
                    )}
                    alt={`Image for ${member.attributes.teamMember}`}
                    width={400}
                    height={300}
                    className="object-cover w-full sm:rounded-t-xl md:rounded-l-xl lg:rounded-l-xl"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h2 className="font-semibold text-lg uppercase">
                    {member.attributes.teamMember}
                  </h2>
                  <h3 className="font-semibold text-md text-gray-400">
                    {member.attributes.teamMemberRole}
                  </h3>
                  <p className="text-sm">
                    {member.attributes.teamMemberDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Stairs>
    </>
  );
}

type TeamMember = {
  id: number;
  attributes: {
    teamMember: string;
    teamMemberRole: string;
    teamMemberDescription: string;
    teamMemberImage: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export async function getStaticProps() {
  try {
    const teamsResponse = await fetcher<TeamMember[]>("teams?populate=*");

    return {
      props: {
        teams: teamsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching teams:", error);
    return {
      props: {
        teams: [],
      },
    };
  }
}
