import { format } from "date-fns";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import Stairs from "@/components/stairs";
import { ChevronRight } from "react-feather";
import Image from "next/image";

const Projects = ({ projects }: any) => {
  return (
    <Stairs>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
          {projects.data.map((project: any) => (
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <Link href={`projects/${project.id}`} aria-label="Project">
                <Image
                  src={`${project.attributes.projectMainBanner.data.attributes.formats.small.url}`}
                  height={400}
                  width={700}
                  alt={`Image for ${project.attributes.projectName}`}
                  className="rounded-md w-full h-2/5 mb-4"
                />
              </Link>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  {format(
                    new Date(project.attributes.publishedAt),
                    "MMMM dd, yyyy"
                  )}
                </p>
                <Link
                  href={`projects/${project.id}`}
                  aria-label="Project"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5 hover:text-green-600">
                    {project.attributes.projectName}
                  </p>
                </Link>
                <p className="mb-2 text-gray-700">
                  {project.attributes.projectSummary}
                </p>
                <div className="flex items-center mt-4">
                  <Link
                    href={`projects/${project.id}`}
                    className="flex un hover:text-green-700"
                  >
                    Read More
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
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
    const projectsResponse = await fetcher<Project[]>("projects?populate=*");

    // Debugging
    // console.log(
    //   projectsResponse.data[0].attributes.projectMainBanner.data.attributes
    //     .formats.medium.url
    // );

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
