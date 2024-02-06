import Head from "next/head";
import Link from "next/link";
import { Carousel } from "flowbite-react";
import { CheckCircle, ChevronRight } from "react-feather";
import Stairs from "@/components/stairs";
import StarRating from "@/components/starRating";
import { fetcher } from "../../lib/api";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home({ projects }: any) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const container = useRef(null);

  useEffect(() => {
    // Simulate fetching image URLs
    const fetchImageUrls = async () => {
      const urls = [
        "https://images.unsplash.com/photo-1590733839006-d7b9006c2e98?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1629016943072-0bf0ce4e2608?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1629016429417-0a01981c3cb1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ];

      // Simulate asynchronous fetching of images
      const fetchedImages = await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url);
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        })
      );

      setImageUrls(fetchedImages);
    };

    fetchImageUrls();
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -75]);

  return (
    <>
      <Head>
        <title>Optiven Limited</title>
        <meta name="description" content="Inspiring Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <main ref={container}>
          {/* carousel */}
          <div className="mx-2 h-64 md:h-96 lg:h-screen">
            <Carousel slideInterval={3000}>
              {imageUrls.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt={`home-carousel-banner-image-${index}`}
                />
              ))}
            </Carousel>
          </div>
          {/* Projects */}
          <div className="py-16 w-screen mx-auto lg:max-w-screen-xl">
            <h1 className="text-4xl border-b m-2">Featured Projects</h1>
            {projects.data.map((project: any) => (
              <div
                className="py-8 px-4 flex flex-col-reverse border-b lg:flex-row xl:flex-row"
                key={project.id}
              >
                <div className="flex flex-col justify-between w-full md:w-:-1/2">
                  <div>
                    <div className="mt-3">
                      <Link
                        href={`/projects/${project.id}`}
                        aria-label="Article"
                        className="inline-block w-full md:w-2/3 lg:w-2/3 transition-colors duration-200 hover:text-green-600"
                      >
                        <h1 className="font-sans text-4xl font-semibold leading-none tracking-tight lg:text-7xl xl:text-8xl">
                          {project.attributes.projectName}
                        </h1>
                      </Link>
                    </div>
                    <div>
                      <StarRating rating={project.attributes.projectRating} />
                    </div>
                    <p className="mb-4 text-sm w-full md:w-2/3 lg:w-2/3 text-gray-700 md:text-lg">
                      {project.attributes.projectSummary}
                    </p>
                    <div className="w-full -ml-2 grid grid-cols-3 gap-1 my-2 lg:w-2/3">
                      <div className="flex items-center border p-2 text-gray-700 rounded-xl">
                        <CheckCircle color="black" size={12} />
                        <h1 className="ml-1 text-xs">Mesh Fence</h1>
                      </div>
                      <div className="flex items-center border p-2 text-gray-700 rounded-xl">
                        <CheckCircle color="black" size={12} />
                        <h1 className="ml-1 text-xs">Electricity</h1>
                      </div>
                      <div className="flex items-center border p-2 text-gray-700 rounded-xl">
                        <CheckCircle color="black" size={12} />
                        <h1 className="ml-1 text-xs">Water on Site</h1>
                      </div>
                      <div className="flex items-center border p-2 text-gray-700 rounded-xl">
                        <CheckCircle color="black" size={12} />
                        <h1 className="ml-1 text-xs">Mesh Fence</h1>
                      </div>
                      <div className="flex items-center border p-2 text-gray-700 rounded-xl">
                        <CheckCircle color="black" size={12} />
                        <h1 className="ml-1 text-xs">Mesh Fence</h1>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex mt-4 hover:underline"
                  >
                    View Project
                    <ChevronRight size={18} />
                  </Link>
                </div>
                <motion.div style={{ y: sm }} className="w-full">
                  <Image
                    src={`http://localhost:1337${project.attributes.projectMainBanner.data.attributes.formats.large.url}`}
                    height={400}
                    width={700}
                    alt={`Image for ${project.attributes.projectName}`}
                    className="rounded-md w-full h-auto mb-4"
                  />
                </motion.div>
              </div>
            ))}
            <div className="flex justify-center items-center mt-6">
              <div className="flex justify-center items-center mt-6">
                <Link
                  href="/projects"
                  className="text-3xl md:text-4xl lg:text-5xl mt-4 flex un hover:text-green-600"
                >
                  View All Projects
                  <ChevronRight size={32} />
                </Link>
              </div>
            </div>
          </div>
          {/* Stats */}
          <h1 className="text-4xl mb-2 ml-6">The Numbers Don't Lie</h1>
          <div className="w-full pt-4 border-t border-b mx-auto lg:py-10">
            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 lg:grid-cols-6">
              <div className="text-center md:border-r">
                <h6 className="text-4xl lg:text-7xl xl:text-8xl">24</h6>
                <p className="text-sm my-4 uppercase">
                  Years of Transformation
                </p>
              </div>
              <div className="text-center md:border-r">
                <h6 className="text-4xl lg:text-7xl xl:text-8xl">60+</h6>
                <p className="text-sm my-4 uppercase">Completed Projects</p>
              </div>
              <div className="text-center md:border-r">
                <h6 className="text-4xl lg:text-7xl xl:text-8xl">7000+</h6>
                <p className="text-sm my-4 uppercase">Disbursed Title Deeds</p>
              </div>
              <div className="text-center md:border-r">
                <h6 className="text-4xl lg:text-7xl xl:text-8xl">20+</h6>
                <p className="text-sm my-4 uppercase">Awards</p>
              </div>
              <div className="text-center md:border-r">
                <h6 className="text-4xl lg:text-7xl xl:text-8xl">10000+</h6>
                <p className="text-sm my-4 uppercase">Happy Clients</p>
              </div>
              <div className="text-center">
                <h6 className="text-4xl lg:text-7xl xl:text-8xl">500+</h6>
                <p className="text-sm my-4 uppercase">Workforce</p>
              </div>
            </div>
          </div>
          {/* Blogs */}
          <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h1 className="text-4xl border-b mb-2">Optiven in the News</h1>
            <div className="mt-4 grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                  src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  className="object-cover w-full h-64"
                  alt=""
                />
                <div className="p-5 border border-t-0">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    traveling
                    <span className="text-gray-800"> — 28 Dec 2020</span>
                  </p>
                  <Link
                    href="#"
                    aria-label="Category"
                    title="Visit the East"
                    className="mb-3 text-2xl font-bold transition-colors duration-200 hover:text-green-600"
                  >
                    Visit the East
                  </Link>
                  <p className="mb-2 text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                    consequuntur magni voluptatem doloremque.
                  </p>
                  <Link
                    href="#"
                    className="text-sm mt-4 flex hover:underline hover:text-green-600"
                  >
                    Read More
                    <ChevronRight size={16} />
                  </Link>
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
                    traveling
                    <span className="text-gray-800"> — 28 Dec 2020</span>
                  </p>
                  <Link
                    href="#"
                    aria-label="Category"
                    title="Simple is better"
                    className="mb-3 text-2xl font-bold transition-colors duration-200 hover:text-green-600"
                  >
                    Simple is better
                  </Link>
                  <p className="mb-2 text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                    consequuntur magni voluptatem doloremque.
                  </p>
                  <Link
                    href="#"
                    className="text-sm mt-4 flex hover:underline hover:text-green-600"
                  >
                    Read More
                    <ChevronRight size={16} />
                  </Link>
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
                    traveling
                    <span className="text-gray-800"> — 28 Dec 2020</span>
                  </p>
                  <Link
                    href="#"
                    aria-label="Category"
                    title="Film It!"
                    className="mb-3 text-2xl font-bold transition-colors duration-200 hover:text-green-600"
                  >
                    Film It!
                  </Link>
                  <p className="mb-2 text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                    consequuntur magni voluptatem doloremque.
                  </p>
                  <Link
                    href="#"
                    className="text-sm mt-4 flex hover:underline hover:text-green-600"
                  >
                    Read More
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-6">
              <Link
                href="/blogs"
                className="text-3xl md:text-4xl lg:text-5xl mt-4 flex un hover:text-green-600"
              >
                View More Articles
                <ChevronRight size={32} />
              </Link>
            </div>
          </div>
          {/* Project Update */}
          <div className="px-4 py-8 mx-2 bg-black rounded-lg text-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="px-4 pb-16 flex flex-col-reverse border-b lg:flex-row xl:flex-row">
              <div>
                <p className="my-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                  Project Update
                </p>
                <div className="my-3">
                  <Link
                    href="#"
                    aria-label="Article"
                    className="inline-block w-full md:w-2/3 lg:w-2/3 transition-colors duration-200 hover:text-green-600"
                  >
                    <p className="font-sans text-4xl font-semibold leading-none tracking-tight lg:text-7xl xl:text-8xl">
                      Ocean View Ridge - Vipingo Project Update
                    </p>
                  </Link>
                </div>
                <p className="my-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                  20 Nov 2020
                </p>
                <p className="mb-4 text-base w-full md:w-2/3 lg:w-2/3 text-gray-700 md:text-lg">
                  Call it magical realism, call it realistic fantasy—call it
                  whatever you want, but Arimah's playfully subversive style is
                  wholly her own.
                </p>
                <Link
                  href={`#`}
                  className="flex text-sm mt-4 hover:underline hover:text-green-600"
                >
                  Read More
                  <ChevronRight size={16} />
                </Link>
              </div>
              <Image
                src={`https://images.unsplash.com/photo-1429704658776-3d38c9990511?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                height={400}
                width={700}
                alt={`Project update image`}
                className="rounded-md mb-4"
              />
            </div>
            <div className="flex justify-center items-center mt-6">
              <Link
                href="/projects-updates"
                className="text-3xl md:text-4xl lg:text-5xl mt-4 flex un hover:text-green-600"
              >
                View More Updates
                <ChevronRight size={32} />
              </Link>
            </div>
          </div>
          {/* Contact */}
        </main>
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
    isFeatured: boolean;
    quarterAcrePrice: number;
    halfAcrePrice: number;
    acrePrice: number;
    eighthAcrePrice: number;
  };
};

export async function getStaticProps() {
  try {
    const projectsResponse = await fetcher<Project[]>(
      `${process.env.STRAPI_URL}/projects?populate=*`
    );

    console.log(
      projectsResponse.data[0].attributes.projectMainBanner.data.attributes
        .formats.large.url
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
