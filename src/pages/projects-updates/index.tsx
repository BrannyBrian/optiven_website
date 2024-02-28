import { format } from "date-fns";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import Stairs from "@/components/stairs";
import { ChevronRight } from "react-feather";
import Image from "next/image";

const index = ({ projectUpdates }: any) => {
  return (
    <Stairs>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
          {projectUpdates.data.map((projectUpdate: ProjectUpdate) => (
            <div className="overflow-hidden transition-shadow duration-300 bg-white">
              <Image
                src={`${projectUpdate.attributes.projectUpdateMainImage.data.attributes.formats.small.url}`}
                height={400}
                width={700}
                className="object-cover w-full h-64 md:h-72 lg:h-80"
                alt={`Image for ${projectUpdate.attributes.projectUpdateTitle}`}
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-800">
                    {format(
                      new Date(projectUpdate.attributes.publishedAt),
                      "MMMM dd, yyyy"
                    )}
                  </span>
                </p>
                <Link
                  href={`projects-updates/${projectUpdate.id}`}
                  className="secondary-text mb-3 text-2xl font-bold transition-colors duration-200 hover:text-green-600"
                >
                  {projectUpdate.attributes.projectUpdateTitle}
                </Link>
                <p className="mb-2 text-gray-700">
                  {projectUpdate.attributes.projectUpdateIntro}
                </p>
                <Link
                  href={`projects-updates/${projectUpdate.id}`}
                  className="text-sm mt-4 flex un w-24 tracking-wide hover:text-green-600 font-bold"
                >
                  Read More
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        {projectUpdates.data.length === 0 && (
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={250}
              alt="not-found"
              src="/pngs/404 Error-pana.png"
            />
            <p className="text-center text-gray-700 text-3xl">
              No project updates available
            </p>
          </div>
        )}
      </div>
    </Stairs>
  );
};

type ProjectUpdate = {
  id: number;
  attributes: {
    projectUpdateTitle: string;
    projectUpdateIntro: string;
    projectUpdateBody: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
    projectUpdateMainImage: any;
  };
};

export async function getStaticProps() {
  try {
    const projectUpdatesResponse = await fetcher<ProjectUpdate[]>(
      "project-updates?populate=*"
    );

    return {
      props: {
        projectUpdates: projectUpdatesResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching project updates:", error);
    return {
      props: {
        projectUpdates: [],
      },
    };
  }
}

export default index;
