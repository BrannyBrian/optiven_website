import { Card } from "flowbite-react";
import { fetcher } from "../../../lib/api";
import Link from "next/link";

const Projects = ({ projects }: any) => {
  return (
    <div className="grid grid-cols-2 p-8 md:grid-cols-4 gap-4">
      {projects.data.map((project: any) => (
        <Card
          key={project.id}
          className="max-w-sm"
          imgAlt={`Image for ${project.attributes.projectName}`}
          imgSrc={`https://images.unsplash.com/photo-1429704658776-3d38c9990511?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
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
      `${process.env.STRAPI_URL}/projects`
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
