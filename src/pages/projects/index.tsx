import { fetcher } from "../../../lib/api";
import Link from "next/link";
import Stairs from "@/components/stairs";
import { ChevronRight, ChevronsRight } from "react-feather";
import Image from "next/image";
import { useState } from "react";
import { Popover } from "@headlessui/react";

// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

const Index = ({ projects }: { projects: { data: Project[] } }) => {
  const [selectedRating, setSelectedRating] = useState<number | "all">("all");
  const [selectedLocation, setSelectedLocation] = useState<string | "all">(
    "all"
  );

  // Extract projects with locations
  const projectsWithLocationsArray = projects.data
    .map((project: Project) => project.attributes.projectLocation.data)
    .filter((project: any) => project !== null);

  // Deduplicate and sort locations
  const uniqueLocations = Array.from(
    new Set(
      projectsWithLocationsArray.map(
        (location: any) => location.attributes.projectLocation
      )
    )
  ).sort();

  // Filter projects based on selected rating and location
  const filteredProjects = projects.data
    .filter((project) => {
      const matchesRating =
        selectedRating === "all" ||
        project.attributes.projectRating === selectedRating;
      const matchesLocation =
        selectedLocation === "all" ||
        (project.attributes.projectLocation.data &&
          project.attributes.projectLocation.data.attributes.projectLocation ===
            selectedLocation);
      return matchesRating && matchesLocation;
    })
    .sort((a, b) =>
      a.attributes.projectName.localeCompare(b.attributes.projectName)
    );

  const getBestAvailableImageUrl = (formats: any) => {
    let imageUrl = formats.thumbnail?.url || ""; // Use thumbnail as a fallback
    if (formats.large) {
      imageUrl = formats.large.url;
    } else if (formats.medium) {
      imageUrl = formats.medium.url;
    } else if (formats.small) {
      imageUrl = formats.small.url;
    }

    // Return both the URL and the blurDataURL (the same static placeholder for now)
    return { url: imageUrl, blurDataURL: placeholderImage };
  };

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 z-10 relative">
          <Link
            href="/customer-information"
            className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-green-700 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-800"
          >
            <span className="text-xs bg-green-600 rounded-full text-white px-4 py-1.5 me-3">
              Important
            </span>{" "}
            <span className="text-sm font-medium">
              See more information about our properties
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
            Unlock Investment Opportunities with Optiven
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Optiven is your ultimate destination for investment solutions. Our
            projects cater to various needs, whether you seek immediate
            residential settlement, commercial ventures, or future capital
            gains. Across multiple locations, including those known for their
            potential growth and development, we offer prime plots strategically
            positioned for optimal returns. As we prioritize delivering value to
            you, our properties are designed to be accessible, ensuring
            affordability without compromising quality. With flexible
            installment plans, starting from accessible rates, investing in your
            future has never been more attainable.
          </p>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="md:flex md:justify-center -mt-10">
          <div className="mb-4 flex flex-col md:mr-2">
            <label className="font-bold text-sm">Property Rating</label>
            <select
              style={{ zIndex: 16 }}
              onChange={(e) =>
                setSelectedRating(
                  e.target.value === "all" ? "all" : parseInt(e.target.value)
                )
              }
              className="w-full md:w-72 rounded-lg"
            >
              <option value="all">All Ratings</option>
              <option value="5">Platinum ★★★★★</option>
              <option value="4">Gold ★★★★</option>
              <option value="3">Silver ★★★</option>
              <option value="2">Bronze ★★</option>
              <option value="1">Sapphire ★</option>
            </select>
          </div>
          <div className="mb-4 flex flex-col">
            <label className="font-bold text-sm">Property Location</label>
            <select
              style={{ zIndex: 16 }}
              onChange={(e) => setSelectedLocation(e.target.value)}
              value={selectedLocation}
              className="w-full md:w-72 rounded-lg"
            >
              <option value="all">All Locations</option>
              {uniqueLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
          {(filteredProjects || [])
            .filter((project: any) => project.attributes.isActive === true)
            .map((project: any) => (
              <div
                className="overflow-hidden rounded-xl transition-shadow duration-300 bg-white"
                key={project.id}
              >
                <Link href={`projects/${project.id}`} aria-label="Project">
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
                    height={400}
                    width={700}
                    className="object-cover w-full h-64 md:h-72 lg:h-80"
                    alt={`Image for ${project.attributes.projectName}`}
                  />
                </Link>
                <div className="p-4 border border-t-0">
                  <Link
                    href={`projects/${project.id}`}
                    aria-label="Project"
                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    <p className="secondary-text text-2xl font-bold transition-colors duration-200 hover:text-green-600">
                      {project.attributes.projectName}
                    </p>
                  </Link>
                  <p className="text-gray-700">
                    {project.attributes.projectSummary.length > 120
                      ? `${project.attributes.projectSummary.substring(
                          0,
                          100
                        )}...`
                      : project.attributes.projectSummary}
                    {project.attributes.projectSummary.length > 120 && (
                      <Link
                        href={`projects/${project.id}`}
                        className="text-green-600 font-bold hover:underline"
                      >
                        read more
                      </Link>
                    )}
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
        </div>
        {projects.data.filter(
          (project: any) => project.attributes.isActive === true
        ).length === 0 && (
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

type Project = {
  id: number;
  attributes: {
    projectName: string;
    projectRating: number;
    projectSummary: string;
    projectFeatures: string;
    eighthAcrePrice: number;
    quarterAcrePrice: number;
    halfAcrePrice: number;
    acrePrice: number;
    isFeatured: boolean;
    projectContent: any;
    isActive: boolean;
    projectMainBanner: any;
    projectLocation: any;
    subProjects: any;
    projectUpdate: any;
    valueAdditions: any;
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

export default Index;
