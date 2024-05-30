import { format } from "date-fns";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import Stairs from "@/components/stairs";
import { ChevronRight } from "react-feather";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

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

type ProjectUpdatesProps = {
  projectUpdates: {
    data: ProjectUpdate[];
  };
};

const index = ({ projectUpdates }: ProjectUpdatesProps) => {
  useGSAP(() => {
    gsap.from(".update-card", {
      duration: 1,
      opacity: 0,
      y: 50, // moves up from 50 pixels below
      stagger: 0.66, // delay between each card animation
      scrollTrigger: {
        trigger: ".projects-container",
        start: "top bottom", // starts when the top of ".projects-container" hits the bottom of the viewport
        end: "bottom top", // ends when the bottom hits the top of the viewport
        toggleActions: "play none none none",
      },
    });

    // Cleanup function to kill all ScrollTriggers to prevent memory leaks
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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

  // Sort project updates by publication date (newest first)
  const sortedProjectUpdates = projectUpdates.data.sort((a, b) => {
    return (
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
    );
  });

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
              Have a look at our various properties
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
          <div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Explore the Latest Developments at Optiven
            </h1>
            <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
              Stay up-to-date with our ongoing and upcoming projects. Our
              updates provide insights into the progress and exciting new
              features of our properties. Discover the innovative designs and
              sustainable practices being integrated into each development,
              ensuring value and quality in our real estate portfolio.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
          {sortedProjectUpdates.map((projectUpdate: ProjectUpdate) => (
            <div
              key={projectUpdate.id}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg update-card"
              style={{ zIndex: 16 }}
            >
              <Image
                src={
                  getBestAvailableImageUrl(
                    projectUpdate.attributes.projectUpdateMainImage.data
                      .attributes.formats
                  ).url
                }
                placeholder="blur"
                blurDataURL={
                  getBestAvailableImageUrl(
                    projectUpdate.attributes.projectUpdateMainImage.data
                      .attributes.formats
                  ).blurDataURL
                }
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
                  {projectUpdate.attributes.projectUpdateTitle.length > 40
                    ? `${projectUpdate.attributes.projectUpdateTitle.substring(
                        0,
                        36
                      )}...`
                    : projectUpdate.attributes.projectUpdateTitle}
                </Link>
                <p className="mb-2 text-gray-700">
                  {projectUpdate.attributes.projectUpdateIntro.length > 120
                    ? `${projectUpdate.attributes.projectUpdateIntro.substring(
                        0,
                        100
                      )}...`
                    : projectUpdate.attributes.projectUpdateIntro}
                  {projectUpdate.attributes.projectUpdateIntro.length > 120 && (
                    <Link
                      href={`projects-updates/${projectUpdate.id}`}
                      className="text-green-600 font-bold hover:underline"
                    >
                      read more
                    </Link>
                  )}
                </p>
                <Link
                  href={`projects-updates/${projectUpdate.id}`}
                  className="flex text-sm font-bold mt-4 w-24 hover:text-green-600 hover:underline"
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
