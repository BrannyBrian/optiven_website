import React from "react";
import { fetcher } from "../../../../lib/api";
import { Accordion } from "flowbite-react";
import Stairs from "@/components/stairs";

const Project = ({ project }) => {
  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {project.data.attributes.projectName}
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            {project.data.attributes.projectSummary}
          </p>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>Price in KES</Accordion.Title>
              <Accordion.Content>
                <p className="text-7xl mb-2 font-extrabold">
                  {project.data.attributes.eighthAcrePrice}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Price in USD</Accordion.Title>
              <Accordion.Content>
                <p className="text-7xl mb-2 font-extrabold">
                  {project.data.attributes.eighthAcrePrice}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Price in EUR</Accordion.Title>
              <Accordion.Content>
                <p className="text-7xl mb-2 font-extrabold">
                  {project.data.attributes.eighthAcrePrice}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </section>
    </Stairs>
  );
};

export default Project;

type Project = {
  id: number;
  attributes: {
    projectName: string;
    projectRating: number;
    projectSummary: string;
    projectFeatures: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  try {
    const projectDetails = await fetcher(
      `${process.env.STRAPI_URL}/projects/${slug}`
    );
    return {
      props: {
        project: projectDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
}
