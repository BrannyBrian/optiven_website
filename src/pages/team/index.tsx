import Stairs from "@/components/stairs";
import Head from "next/head";
import Image from "next/image";
import { fetcher } from "../../../lib/api";

export default function Team({ teams }: any) {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta name="description" content="Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <div className="p-8 grid gap-10 grid-cols-1 lg:grid-cols-2 lg:p-16">
          {teams.data.map((member: Team, index: number) => (
            <div
              key={index}
              className="bg-base-100 shadow-md rounded-b-xl md:rounded-r-xl flex flex-col md:flex-row lg:rounded-r-xl"
            >
              <div className="md:w-1/2">
                <Image
                  src={`${member.attributes.teamMemberImage.data.attributes.formats.small.url}`}
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
                <p className="text-sm">
                  {member.attributes.teamMemberDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Stairs>
    </>
  );
}

type Team = {
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
    const teamsResponse = await fetcher<Team[]>("teams?populate=*");

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
