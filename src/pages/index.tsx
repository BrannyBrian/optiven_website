import Head from "next/head";
import Link from "next/link";
import { Card, Carousel } from "flowbite-react";
import { ChevronRight } from "react-feather";
import Stairs from "@/components/stairs";
import { fetcher } from "../../lib/api";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Optiven Limited</title>
        <meta name="description" content="Inspiring Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <div className="h-64 md:h-96 lg:h-screen">
          <Carousel slideInterval={3000}>
            <img
              src="https://images.unsplash.com/photo-1590733839006-d7b9006c2e98?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="home-carousel-banner-image"
            />
            <img
              src="https://images.unsplash.com/photo-1629016943072-0bf0ce4e2608?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="home-carousel-banner-image"
            />
            <img
              src="https://images.unsplash.com/photo-1629016429417-0a01981c3cb1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="home-carousel-banner-image"
            />
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="home-carousel-banner-image"
            />
            <img
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="home-carousel-banner-image"
            />
          </Carousel>
        </div>

        {/* Projects */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-xl">Featured Projects</h1>
          </div>
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {projects.data.map((project) => (
              <Card
                key={project.id} // Ensure each card has a unique key
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
          <div className="flex justify-center items-center mt-6">
            <Link
              href="/projects"
              className="flex text-green-800 hover:underline"
            >
              View All Projects
              <ChevronRight />
            </Link>
          </div>
        </div>
        {/* Stats */}
        <div className="w-full py-16 mx-auto lg:py-20 bg-black text-white">
          <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 lg:grid-cols-6">
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                24
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">
                Years of Transformation
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                60+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">
                Completed Projects
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                7000+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">
                Disbursed Title Deeds
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                20+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">Awards</p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                10000+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">
                Happy Clients
              </p>
            </div>
            <div className="text-center">
              <h6 className="text-4xl font-extralight lg:text-5xl xl:text-6xl">
                500+
              </h6>
              <p className="text-xs my-4 uppercase lg:text-base">Workforce</p>
            </div>
          </div>
        </div>
        {/* Blogs */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    traveling
                  </a>
                  <span className="text-gray-600">— 28 Dec 2020</span>
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Visit the East"
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Visit the East
                </a>
                <p className="mb-2 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    traveling
                  </a>
                  <span className="text-gray-600">— 28 Dec 2020</span>
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Simple is better"
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Simple is better
                </a>
                <p className="mb-2 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <img
                src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="object-cover w-full h-64"
                alt=""
              />
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <a
                    href="/"
                    className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                    aria-label="Category"
                    title="traveling"
                  >
                    traveling
                  </a>
                  <span className="text-gray-600">— 28 Dec 2020</span>
                </p>
                <a
                  href="/"
                  aria-label="Category"
                  title="Film It!"
                  className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  Film It!
                </a>
                <p className="mb-2 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </Stairs>
    </>
  );
}

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

