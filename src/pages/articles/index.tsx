import { format } from "date-fns";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import Stairs from "@/components/stairs";
import { ChevronRight,  ChevronsRight } from "react-feather";
import Image from "next/image";
import { Popover } from "@headlessui/react";

// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

const index = ({ articles }: any) => {
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

<div className="container mx-auto">
  <ol className="flex justify-start space-x-2 rtl:space-x-reverse">
    <Popover.Group className="hidden lg:flex lg:gap-x-4">
      <li>
        <Link href="/" className="block text-gray-700 font-semibold hover:text-green-500">
          <span className="ml-1"> Home</span>
        </Link>
      </li>
      <ChevronsRight
      size={20}
      className="text-gray-700"
      aria-hidden="true"
       />
      <li>
        
         Blogs & Company News
        
      </li>
    </Popover.Group>
  </ol>
</div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:max-w-sm sm:mx-auto md:max-w-full">
          {articles.data.map((article: any) => (
            <div className="overflow-hidden transition-shadow duration-300 bg-white">
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
                  {article.attributes.articleTitle}
                </Link>
                <p className="text-gray-700">
                  {article.attributes.articleIntro.length > 120
                    ? `${article.attributes.articleIntro.substring(0, 100)}...`
                    : article.attributes.articleIntro}
                  {article.attributes.articleIntro.length > 120 && (
                    <Link
                      href={`projects/${article.id}`}
                      className="text-green-600 italic hover:underline"
                    >
                      read more
                    </Link>
                  )}
                </p>
                <Link
                  href={`articles/${article.id}`}
                  className="text-sm mt-4 flex un w-24 tracking-wide hover:text-green-600 font-bold"
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
