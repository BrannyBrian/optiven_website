import Link from "next/link";
import { Carousel } from "flowbite-react";
import { CheckCircle, ChevronRight } from "react-feather";
import Stairs from "@/components/stairs";
import StarRating from "@/components/starRating";
import { fetcher } from "../../lib/api";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { format } from "date-fns";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Partners from "@/components/partners";
gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    id: 1,
    partnerName: "Optiven Foundation",
    partnerLogo: "/optiven-foundation-logo.png",
  },
  {
    id: 2,
    partnerName: "Optiven Homes",
    partnerLogo: "/optiven-homes-logo.png",
  },
  {
    id: 3,
    partnerName: "GMC Place",
    partnerLogo: "/gmc-logo.png",
  },
  {
    id: 4,
    partnerName: "Equity Bank",
    partnerLogo: "/equity-bank-logo.png",
  },
];

export default function Home({
  projects,
  articles,
  projectUpdate,
  carouselImages,
}: any) {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const container = useRef(null);

  useEffect(() => {
    const urls = carouselImages.data[0].attributes.images.data.map(
      (item: any) => item.attributes.formats.medium.url
    );
    setImageUrls(urls);
  }, []);

  useGSAP(() => {
    const projectNames = document.querySelectorAll(".project-name");
    const projectSummaries = document.querySelectorAll(".project-summary");
    const stars = document.querySelectorAll(".stars");
    const projectImg = document.querySelectorAll(".project-img");

    projectNames.forEach((name) => {
      gsap.from(name, {
        duration: 1,
        autoAlpha: 0,
        y: 25,
        ease: "none",
        scrollTrigger: {
          trigger: name,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    });

    projectSummaries.forEach((summary) => {
      gsap.from(summary, {
        duration: 1,
        autoAlpha: 0,
        y: 75,
        ease: "none",
        scrollTrigger: {
          trigger: summary,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    });

    stars.forEach((star) => {
      gsap.from(star, {
        duration: 1,
        autoAlpha: 0,
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: star,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    });

    projectImg.forEach((star) => {
      gsap.from(star, {
        duration: 1,
        autoAlpha: 0,
        x: 50,
        ease: "none",
        scrollTrigger: {
          trigger: star,
          start: "top bottom",
          toggleActions: "play none none reverse",
        },
      });
    });

    projects.data.forEach((project: Project) => {
      const valueAdditions = document.querySelectorAll(
        `.value-addition-${project.id}`
      );
      gsap.from(valueAdditions, {
        duration: 0.5, // Duration for each animation
        autoAlpha: 0, // Fade in from invisible to visible
        y: 20, // Start 20 pixels down from original position
        ease: "none",
        stagger: 0.2, // Delay between each value addition animation
        scrollTrigger: {
          trigger: `.project-${project.id}`, // Use project-specific class as trigger
          start: "top center", // Animation starts when the top of the trigger hits the center of the viewport
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -25]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -75]);

  return (
    <>
      <Stairs>
        <main ref={container}>
          {/* carousel */}
          <div className="-mt-16 lg:-mt-8 lg:h-screen">
            <div className="h-3/4">
              <div className="mx-2 h-72 md:h-96 lg:h-full">
                <Carousel slideInterval={3000}>
                  {imageUrls.map((imageUrl, index) => (
                    <Image
                      key={index}
                      src={imageUrl}
                      height={500}
                      width={2000}
                      alt={`home-carousel-banner-image-${index}`}
                    />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
          {/* Projects */}
          <div className="py-16 -mt-20 w-screen mx-auto lg:max-w-screen-xl lg:-mt-56">
            <h1 className="text-4xl border-b m-2">Featured Projects</h1>
            {(projects.data || [])
              .filter(
                (project: Project) => project.attributes.isFeatured === true
              )
              .map((project: Project) => (
                <div
                  className={`py-8 px-4 flex flex-col-reverse border-b lg:flex-row xl:flex-row project-${project.id}`}
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
                          <h1 className="project-name secondary-text text-4xl font-semibold leading-none tracking-tight lg:text-7xl xl:text-8xl hover:text-green-700">
                            {project.attributes.projectName}
                          </h1>
                        </Link>
                      </div>
                      <div className="stars">
                        <StarRating rating={project.attributes.projectRating} />
                      </div>
                      <p className="project-summary my-4 text-lg w-full md:w-full lg:w-2/3 text-gray-700 md:text-xl">
                        {project.attributes.projectSummary}
                      </p>
                      <div className="w-full -ml-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-2 lg:w-full">
                        {project.attributes.valueAdditions.data.map(
                          (valueAddition: any) => (
                            <div
                              className={`flex items-center border p-2 text-gray-700 rounded-xl value-addition-${project.id}`}
                              key={valueAddition.id}
                            >
                              <CheckCircle color="black" size={16} />
                              <h1 className="ml-1 font-semibold">
                                {valueAddition.attributes.valueAdditionTitle}
                              </h1>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex mt-4 un text-green-600 md:text-black hover:text-green-600 w-24"
                    >
                      View Project
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                  <div className="project-img w-full">
                    <Link href={`/projects/${project.id}`}>
                      <Image
                        src={`${project.attributes.projectMainBanner.data.attributes.formats.medium.url}`}
                        height={400}
                        width={700}
                        alt={`Image for ${project.attributes.projectName}`}
                        className="rounded-md w-full h-auto mb-4"
                      />
                    </Link>
                  </div>
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
          <div className="bg-green-600 py-8">
            <h1 className="text-4xl mb-2 mx-6 text-gray-200 border-b">
              Numbers Don't Lie
            </h1>
            <div className="w-full pt-4 mx-auto lg:py-10 text-gray-300">
              <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 lg:grid-cols-6">
                <div className="text-center md:border-r">
                  <h6 className="text-4xl lg:text-7xl xl:text-8xl">24</h6>
                  <p className="text-sm mb-4 uppercase">
                    Years of Transformation
                  </p>
                </div>
                <div className="text-center md:border-r">
                  <h6 className="text-4xl lg:text-7xl xl:text-8xl">60+</h6>
                  <p className="text-sm mb-4 uppercase">Completed Projects</p>
                </div>
                <div className="text-center md:border-r">
                  <h6 className="text-4xl lg:text-7xl xl:text-8xl">7000+</h6>
                  <p className="text-sm mb-4 uppercase">
                    Disbursed Title Deeds
                  </p>
                </div>
                <div className="text-center md:border-r">
                  <h6 className="text-4xl lg:text-7xl xl:text-8xl">20+</h6>
                  <p className="text-sm mb-4 uppercase">Awards</p>
                </div>
                <div className="text-center md:border-r">
                  <h6 className="text-4xl lg:text-7xl xl:text-8xl">10000+</h6>
                  <p className="text-sm mb-4 uppercase">Happy Clients</p>
                </div>
                <div className="text-center">
                  <h6 className="text-4xl lg:text-7xl xl:text-8xl">500+</h6>
                  <p className="text-sm mb-4 uppercase">Workforce</p>
                </div>
              </div>
            </div>
          </div>
          {/* Articles */}
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <h1 className="text-4xl border-b mb-4">Optiven in the News</h1>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
              {articles.data
                .filter(
                  (article: Article) => article.attributes.isFeatured === true
                )
                .map((article: Article) => (
                  <div className="overflow-hidden transition-shadow duration-300 bg-white h-max">
                    <Image
                      src={`${article.attributes.mainArticleImage.data.attributes.formats.small.url}`}
                      height={400}
                      width={700}
                      className="object-cover w-full h-64 md:h-72 lg:h-80"
                      alt={`Image for ${article.attributes.articleTitle}`}
                    />
                    <div className="p-5 border border-t-0">
                      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        {article.attributes.articleCategory.data.map(
                          (category: any) =>
                            `${category.attributes.articleCategoryName} — `
                        )}
                        <span className="text-gray-800">
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
                        className="flex text-xl mt-4 w-28 un hover:text-green-600 tracking-wide"
                      >
                        Read More
                        <ChevronRight size={20} className="pt-1" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-6">
              <Link
                href="/articles"
                className="text-3xl md:text-4xl lg:text-5xl mt-4 flex un hover:text-green-600"
              >
                View More Articles
                <ChevronRight size={32} />
              </Link>
            </div>
          </div>
          <Partners partners={partners} />
          {/* Project Update */}
          <div className="px-4 py-8 mx-auto bg-black text-white lg:px-8 lg:py-20">
            {projectUpdate.data
              .filter(
                (projectUpdate: ProjectUpdate) =>
                  projectUpdate.attributes.isFeatured === true
              )
              .map((projectUpdate: ProjectUpdate) => (
                <div>
                  <div className="px-4 pb-16 flex flex-col-reverse border-b lg:flex-row xl:flex-row">
                    <div>
                      <p className="my-2 text-xs font-semibold tracking-wide text-gray-300 uppercase">
                        Project Update
                      </p>
                      <div className="my-3">
                        <Link
                          href={`projects-updates/${projectUpdate.id}`}
                          aria-label="Article"
                          className="inline-block w-full md:w-2/3 lg:w-full transition-colors duration-200 hover:text-green-600"
                        >
                          <p className="font-sans text-4xl font-semibold leading-none tracking-tight lg:text-7xl xl:text-8xl text-gray-400">
                            {projectUpdate.attributes.projectUpdateTitle}
                          </p>
                        </Link>
                      </div>
                      <p className="my-2 text-xs font-semibold tracking-wide text-gray-300 uppercase">
                        {format(
                          new Date(projectUpdate.attributes.publishedAt),
                          "MMMM dd, yyyy"
                        )}
                      </p>
                      <p className="mb-4 text-base w-full md:w-full lg:w-2/3 text-gray-400 md:text-xl">
                        {projectUpdate.attributes.projectUpdateIntro}
                      </p>
                      <Link
                        href={`projects-updates/${projectUpdate.id}`}
                        className="flex text-xl mt-4 w-28 un hover:text-green-600 tracking-wide"
                      >
                        Read More
                        <ChevronRight size={20} className="pt-1" />
                      </Link>
                    </div>
                    <Image
                      src={`${projectUpdate.attributes.projectUpdateMainImage.data.attributes.formats.small.url}`}
                      height={400}
                      width={700}
                      className="w-full h-64 md:h-auto"
                      alt={`Image for ${projectUpdate.attributes.projectUpdateTitle}`}
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
              ))}
          </div>
          {/* Contact */}
        </main>
      </Stairs>
    </>
  );
}

type Article = {
  id: number;
  attributes: {
    articleTitle: string;
    articleIntro: string;
    articleBody: string;
    locale: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
    mainArticleImage: any;
    articleCategory: any;
  };
};

type CarouselImage = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    images: any;
    localizations: any;
  };
};

type Project = {
  id: number;
  attributes: {
    projectName: string;
    projectRating: number;
    projectSummary: string;
    projectMainBanner: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
    quarterAcrePrice: number;
    halfAcrePrice: number;
    acrePrice: number;
    eighthAcrePrice: number;
    valueAdditions: any;
  };
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
    const articlesResponse = await fetcher<Article[]>("articles?populate=*");
    const carouselsResponse = await fetcher<CarouselImage[]>(
      "carousels?populate=*"
    );
    const projectsResponse = await fetcher<Project[]>("projects?populate=*");
    const projectUpdateResponse = await fetcher<ProjectUpdate[]>(
      "project-updates?populate=*"
    );

    return {
      props: {
        articles: articlesResponse,
        carouselImages: carouselsResponse,
        projects: projectsResponse,
        projectUpdate: projectUpdateResponse,
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("An error occurred while fetching:", error);
    return {
      props: {
        articles: [],
        carouselImages: [],
        projects: [],
        projectUpdate: [],
      },
    };
  }
}
