import { format } from "date-fns";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import Stairs from "@/components/stairs";
import { ChevronRight } from "react-feather";
import Image from "next/image";
import { useState } from "react";

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
    if (formats.large) {
      return formats.large.url;
    } else if (formats.medium) {
      return formats.medium.url;
    } else if (formats.small) {
      return formats.small.url;
    } else {
      return formats.thumbnail.url;
    }
  };
  return (
    <Stairs>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="-mt-10 md:flex">
          <div className="mb-4 flex flex-col md:mr-2 lg:mr-4">
            <label className="font-bold text-sm">Project Rating</label>
            <select
              onChange={(e) =>
                setSelectedRating(
                  e.target.value === "all" ? "all" : parseInt(e.target.value)
                )
              }
              className="w-72"
            >
              <option value="all">All Ratings</option>
              <option value="5">Platinum</option>
              <option value="4">Gold</option>
              <option value="3">Silver</option>
              <option value="2">Bronze</option>
              <option value="1">Sapphire</option>
            </select>
          </div>
          <div className="mb-4 flex flex-col">
            <label className="font-bold text-sm">Project Location</label>
            <select
              onChange={(e) => setSelectedLocation(e.target.value)}
              value={selectedLocation}
              className="w-72"
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
            .filter((project: any) => project.attributes.isActive === false)
            .map((project: any) => (
              <div
                className="overflow-hidden transition-shadow duration-300 bg-white"
                key={project.id}
              >
                <Link href={`projects/${project.id}`} aria-label="Project">
                  <Image
                    src={getBestAvailableImageUrl(
                      project.attributes.projectMainBanner.data.attributes
                        .formats
                    )}
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
                        className="text-green-600 italic hover:underline"
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
          (project: any) => project.attributes.isActive === false
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
