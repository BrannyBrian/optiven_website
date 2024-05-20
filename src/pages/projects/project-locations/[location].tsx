import { GetServerSideProps } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "react-feather";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../../lib/api";
import { useRouter } from "next/router";
import StarRating from "@/components/starRating";

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

type Project = {
  id: number;
  attributes: {
    projectName: string;
    projectRating: number;
    projectSummary: string;
    isActive: boolean;
    projectMainBanner: {
      data: {
        attributes: {
          formats: {
            thumbnail?: { url: string };
            large?: { url: string };
            medium?: { url: string };
            small?: { url: string };
          };
        };
      };
    };
  };
};

type ProjectsApiResponse = {
  data: Project[];
};

const LocationPage = ({ projects }: { projects: Project[] }) => {
  const router = useRouter();
  if (router.isFallback || !router.isReady) {
    return <div>Loading...</div>;
  }

  const { location } = router.query;

  const getBestAvailableImageUrl = (formats: any) => {
    let imageUrl = formats.thumbnail?.url || ""; // Use thumbnail as a fallback
    if (formats.large) {
      imageUrl = formats.large.url;
    } else if (formats.medium) {
      imageUrl = formats.medium.url;
    } else if (formats.small) {
      imageUrl = formats.small.url;
    }
    return { url: imageUrl, blurDataURL: placeholderImage };
  };

  return (
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
              See our various properties
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
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Properties in {location}
          </h1>
          <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Optiven provides versatile investment solutions tailored to your
            needs. From residential to commercial ventures, our prime plots in
            promising locations ensure optimal returns. Our properties are both
            accessible and affordable, designed to deliver quality without
            compromise. With flexible installment plans starting at accessible
            rates, securing your future has never been easier with us.
          </p>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
          {projects
            .filter((project) => project.attributes.isActive)
            .map((project: Project) => (
              <div
                style={{ zIndex: 16 }}
                key={project.id}
                className="overflow-hidden rounded-xl transition-shadow duration-300 bg-white"
              >
                <Link href={`/projects/${project.id}`}>
                  <Image
                    src={
                      getBestAvailableImageUrl(
                        project.attributes.projectMainBanner.data.attributes
                          .formats
                      ).url
                    }
                    placeholder="blur"
                    blurDataURL={
                      getBestAvailableImageUrl(
                        project.attributes.projectMainBanner.data.attributes
                          .formats
                      ).blurDataURL
                    }
                    alt={`Image for ${project.attributes.projectName}`}
                    width={700}
                    height={400}
                    className="object-cover w-full h-64 md:h-72 lg:h-80"
                  />
                </Link>
                <div className="p-4 border border-t-0">
                  <Link href={`/projects/${project.id}`}>
                    <p className="secondary-text text-2xl font-bold transition-colors duration-200 hover:text-green-600">
                      {project.attributes.projectName}
                    </p>
                  </Link>
                  <div className="mb-2">
                    <StarRating rating={project.attributes.projectRating} />
                  </div>
                  <p className="text-gray-700">
                    {project.attributes.projectSummary.length > 120
                      ? `${project.attributes.projectSummary.substring(
                          0,
                          100
                        )}...`
                      : project.attributes.projectSummary}
                    {project.attributes.projectSummary.length > 120 && (
                      <Link
                        href={`/projects/${project.id}`}
                        className="text-green-600 font-bold hover:underline"
                      >
                        read more
                      </Link>
                    )}
                  </p>
                  <div className="flex items-center">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-sm mt-4 flex w-24 tracking-wide hover:text-green-600 font-bold"
                    >
                      Read More <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {projects.length === 0 && (
          <div className="flex flex-col justify-center items-center">
            <Image
              width={400}
              height={250}
              alt="not-found"
              src="/pngs/404 Error-pana.png"
            />
            <p className="text-center text-gray-700 text-3xl">
              No projects available
            </p>
          </div>
        )}
      </div>
    </Stairs>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { location } = context.params as { location: string };
  const encodedLocation = encodeURIComponent(location);
  try {
    const projectsResponse = await fetcher<ProjectsApiResponse>(
      `projects?filters[projectLocation][projectLocation][$eq]=${encodedLocation}&populate=*`
    );
    return {
      props: {
        projects: projectsResponse.data,
      },
    };
  } catch (error) {
    console.error("Error fetching projects for location:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
};

export default LocationPage;
