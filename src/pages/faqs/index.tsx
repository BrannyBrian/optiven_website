import FaqItem from "@/components/faqItem";
import Head from "next/head";
import Stairs from "@/components/stairs";
import Image from "next/image";
import { fetcher } from "../../../lib/api";
import { useState } from "react";

// Define a type for the category data structure

type FAQAttributes = {
  question: string;
  answer: string;
  category: string; // Assuming the category is just a string here. Adjust if it's more complex.
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type FAQ = {
  id: number;
  attributes: FAQAttributes;
};

type CategoryAttributes = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: string;
  banner: {
    url: string;
  };
};

type Category = {
  id: number;
  attributes: CategoryAttributes;
};

type FaqsApiResponse = {
  data: FAQ[];
};

type CategoriesApiResponse = {
  data: Category[];
};

// Sample base64 image data for blurDataURL (usually much smaller)
const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

const Faq: React.FC<{ categories: Category[] }> = ({ categories }) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    "all"
  );

  // Function to handle opening a FAQ item
  const handleFaqClick = (faqId: number) => {
    if (openFaqId === faqId) {
      // If the FAQ is already open, close it
      setOpenFaqId(null);
    } else {
      // Open the clicked FAQ and close others
      setOpenFaqId(faqId);
    }
  };

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

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Optiven Limited</title>
        <meta name="description" content="Inspiring Possibilities" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        FAQs
      </li>
    </Popover.Group>
  </ol>
</div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-center space-y-4  mb-20">
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          </div>
          <div className="mb-8 flex justify-center">
            <select
              onChange={handleCategoryChange}
              className="border border-gray-300 rounded-md px-3 py-2 mr-2 w-72"
              defaultValue="all"
            >
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.attributes.category}>
                  {category.attributes.category}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories
              .filter(
                (category) =>
                  selectedCategory === "all" ||
                  category.attributes.category === selectedCategory
              )
              .map((category:any) => (
                <div
                  key={category.id}
                  className="category-card"
                  style={{
                    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                    border: "1px solid #e0e0e0",
                    borderRadius: "8px",
                    padding: "20px",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                    <Image
                      src={
                        getBestAvailableImageUrl(
                          category.attributes.banner.data.attributes.formats
                        ).url
                      }
                      placeholder="blur"
                      blurDataURL={
                        getBestAvailableImageUrl(
                          category.attributes.banner.data.attributes.formats
                        ).blurDataURL
                      }
                      layout="fill"
                      objectFit="cover"
                      alt={category.attributes.category}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <h3 className="category-title text-white text-3xl font-bold">
                        {category.attributes.category}
                      </h3>
                    </div>
                  </div>
                  <div className="faq-content space-y-4">
                    {category.faqs.map((faq: any, index: number) => (
                      <FaqItem
                        key={index}
                        id={faq.id}
                        title={faq.attributes.question}
                        isOpen={openFaqId === faq.id}
                        onToggle={() => handleFaqClick(faq.id)}
                      >
                        {faq.attributes.answer}
                      </FaqItem>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Stairs>
    </>
  );
};

export async function getStaticProps() {
  try {
    const faqsResponse: FaqsApiResponse = await fetcher("faqs?populate=*");
    const categoriesResponse: CategoriesApiResponse = await fetcher(
      "faq-categories?populate=*"
    );

    //console.log(faqsResponse.data[0].attributes.category.data.attributes.category)

    // Combine FAQs into their categories
    const categoriesWithFaqs = categoriesResponse.data.map((category) => ({
      ...category,
      faqs: faqsResponse.data.filter(
        (faq: any) =>
          faq.attributes.category.data.attributes.category ===
          category.attributes.category
      ),
    }));

    //  console.log(categoriesWithFaqs[0].attributes.banner.data.attributes.formats.large.url)

    return {
      props: {
        categories: categoriesWithFaqs,
      },
    };
  } catch (error) {
    console.error("Error fetching FAQs or categories:", error);
    return {
      props: {
        categories: [],
      },
    };
  }
}

export default Faq;
