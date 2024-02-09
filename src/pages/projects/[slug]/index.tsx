import React from "react";
import { Accordion } from "flowbite-react";
import Stairs from "@/components/stairs";

// Define the type for the params object
type Params = {
  params: {
    slug: string;
  };
};

const Project = ({ project }: any) => {
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
              <Accordion.Title>Eighth Acre Price</Accordion.Title>
              <Accordion.Content>
                <p className="text-7xl mb-2 font-extrabold">
                  {project.data.attributes.eighthAcrePrice}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Quarter Acre Price</Accordion.Title>
              <Accordion.Content>
                <p className="text-7xl mb-2 font-extrabold">
                  {project.data.attributes.quarterAcrePrice}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Half Acre Price</Accordion.Title>
              <Accordion.Content>
                <p className="text-7xl mb-2 font-extrabold">
                  {project.data.attributes.halfAcrePrice}
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

export async function getServerSideProps({ params }: Params) {
  const { slug } = params;
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL}projects/${slug}?populate=*/`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching project details: ${response.statusText}`);
    }

    const projectDetails = await response.json();

    return {
      props: {
        project: projectDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching project details:", error);
    return {
      props: {
        project: null,
      },
    };
  }
}
