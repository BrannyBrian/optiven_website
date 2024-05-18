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

const index = ({ articles }: any) => {
  useGSAP(() => {
    gsap.from(".article-card", {
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
              Discover Optiven's Latest Insights
            </h1>
            <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
              Delve into our collection of articles, company news, and blogs to
              stay informed about the latest trends and developments in the
              world of real estate investment. Optiven offers a wealth of
              valuable insights to guide you on your investment journey.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
          {articles.data.map((article: any) => (
            <div
              style={{ zIndex: 16 }}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg article-card"
            >
              <Image
                src={
                  getBestAvailableImageUrl(
                    article.attributes.mainArticleImage.data.attributes.formats
                  ).url
                }
                placeholder="blur"
                blurDataURL={
                  getBestAvailableImageUrl(
                    article.attributes.mainArticleImage.data.attributes.formats
                  ).blurDataURL
                }
                height={400}
                width={700}
                className="object-cover w-full h-64 md:h-72 lg:h-80"
                alt={`Image for ${article.attributes.articleName}`}
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
                  {article.attributes.articleTitle.length > 36
                    ? `${article.attributes.articleTitle.substring(0, 36)}...`
                    : article.attributes.articleTitle}
                </Link>
                <p className="text-gray-700">
                  {article.attributes.articleIntro.length > 120
                    ? `${article.attributes.articleIntro.substring(0, 100)}...`
                    : article.attributes.articleIntro}
                  {article.attributes.articleIntro.length > 120 && (
                    <Link
                      href={`projects/${article.id}`}
                      className="text-green-600 font-bold hover:underline"
                    >
                      read more
                    </Link>
                  )}
                </p>
                <Link
                  href={`articles/${article.id}`}
                  className="flex text-sm font-bold mt-4 w-24 hover:text-green-600 hover:underline"
                >
                  Read More
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Stairs>
  );
};

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
  };
};

export async function getStaticProps() {
  try {
    const articlesResponse = await fetcher<Article[]>("articles?populate=*");

    return {
      props: {
        articles: articlesResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching articles:", error);
    return {
      props: {
        articles: [],
      },
    };
  }
}

export default index;
