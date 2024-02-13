import { format } from "date-fns";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import Stairs from "@/components/stairs";
import { ChevronRight } from "react-feather";
import Image from "next/image";

const index = ({ projects }: any) => {
  return (
    <Stairs>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
          {projects.data.map((project: any) => (
            <div
              className="overflow-hidden transition-shadow duration-300 bg-white"
              key={project.id}
            >
              <Link href={`projects/${project.id}`} aria-label="Project">
                <Image
                  src={`${project.attributes.projectMainBanner.data.attributes.formats.small.url}`}
                  height={400}
                  width={700}
                  className="object-cover w-full h-64 md:h-72 lg:h-80"
                  alt={`Image for ${project.attributes.projectName}`}
                />
              </Link>
              <div className="p-4 border border-t-0">
                <p className="text-xs font-semibold tracking-wide uppercase">
                  {format(
                    new Date(project.attributes.publishedAt),
                    "MMMM dd, yyyy"
                  )}
                </p>
                <Link
                  href={`projects/${project.id}`}
                  aria-label="Project"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="secondary-text text-2xl font-bold transition-colors duration-200 hover:text-green-600">
                    {project.attributes.projectName}
                  </p>
                </Link>
                <p className="text-gray-700 text-sm">
                  {project.attributes.projectSummary}
                </p>
                <div className="flex items-center">
                  <Link
                    href={`projects/${project.id}`}
                    className="text-sm mt-4 flex un w-24 tracking-wide hover:text-green-600 font-bold"
                  >
                    Read More
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <Image
              src={`${article.attributes.mainArticleImage.data.attributes.formats.small.url}`}
              height={400}
              width={700}
              className="object-cover w-full h-64 md:h-72 lg:h-80"
              alt={`Image for ${article.attributes.articleName}`}
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                {
                  article.attributes.articleCategory.data[0].attributes
                    .articleCategoryName
                }
                <span className="text-gray-800">
                  {" "}
                  —{" "}
                  {format(
                    new Date(article.attributes.publishedAt),
                    "MMMM dd, yyyy"
                  )}
                </span>
              </p>
              <Link
                href={`articles/${article.id}`}
                className="secondary-text mb-3 text-2xl font-bold transition-colors duration-200 hover:text-green-600"
              >
                {article.attributes.articleTitle}
              </Link>
              <p className="mb-2 text-gray-700">
                {article.attributes.articleIntro}
              </p>
              <Link
                href={`articles/${article.id}`}
                className="text-sm mt-4 flex un w-24 tracking-wide hover:text-green-600 font-bold"
              >
                Read More
                <ChevronRight size={16} />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </Stairs>
  );
};

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

export default index;
