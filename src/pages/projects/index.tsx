import { Card } from "flowbite-react";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import Stairs from "@/components/stairs";

const Projects = ({ projects }: any) => {
  return (
    <Stairs>
      <div className="grid grid-cols-2 p-8 md:grid-cols-4 gap-4">
        {projects.data.map((project: any) => (
          <Card
            key={project.id}
            className="max-w-sm"
            imgAlt={`Image for ${project.attributes.projectName}`}
            imgSrc={`http://localhost:1337${project.attributes.projectMainBanner.data.attributes.formats.large.url}`}
          >
            <Link
              href={`projects/${project.id}`}
              className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {project.attributes.projectName}
            </Link>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {project.attributes.projectSummary}
            </p>
          </Card>
        ))}
      </div>
    </Stairs>
  );
};

export default Projects;

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

export async function getStaticProps() {
  try {
    const projectsResponse = await fetcher<Project[]>(
      `${process.env.STRAPI_URL}/projects?populate=*`
    );

    return {
      props: {
        projects: projectsResponse,
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
