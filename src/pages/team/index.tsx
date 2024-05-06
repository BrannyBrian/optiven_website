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
        Our Team
      </li>
    </Popover.Group>
  </ol>
</div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 pt-2 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-600">
                Core Team
              </p>
            </div>
            <h2 className="max-w-lg mt-4 mb-2 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl md:mx-auto">
              Meet the driving force behind Optiven.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Meet the innovators and experts driving our success.
            </p>
          </div>
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
