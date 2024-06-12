import React, { useEffect, useState } from "react";
import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import LocationList from "@/components/locationlist";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import FaqItem from "@/components/faqItem";

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

const Index = ({ diaspora, projects, categoriesWithFaqs }: any) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | "all">(
    "all"
  );

  const handleFaqClick = (faqId: number) => {
    if (openFaqId === faqId) {
      setOpenFaqId(null);
    } else {
      setOpenFaqId(faqId);
    }
  };

  const getBestAvailableImageUrl = (formats: any) => {
    let imageUrl = formats.thumbnail?.url || "";
    if (formats.large) {
      imageUrl = formats.large.url;
    } else if (formats.medium) {
      imageUrl = formats.medium.url;
    } else if (formats.small) {
      imageUrl = formats.small.url;
    }
    return { url: imageUrl, blurDataURL: placeholderImage };
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const { diasporaContent, carouselImages } = diaspora.data[0].attributes;

  const leaseholdProjectsWithLocationsArray = projects.data
    .filter((project: any) => {
      const isActive = project.attributes.isActive === true;
      const ownershipType =
        project.attributes.ownershipType?.data?.attributes?.name ===
        "Leasehold";
      const projectLocation = project.attributes.projectLocation?.data !== null;
      return isActive && ownershipType && projectLocation;
    })
    .map((project: any) => project.attributes.projectLocation.data);

  const uniqueLocations = Array.from(
    new Set(
      leaseholdProjectsWithLocationsArray.map(
        (location: any) => location.attributes.projectLocation
      )
    )
  ).sort();

  useEffect(() => {
    if (carouselImages && carouselImages.data) {
      const images = carouselImages.data.reduce(
        (acc: string[], carousel: any) => {
          const formats = carousel.attributes.formats;
          const imageUrl =
            formats.large?.url || formats.medium?.url || formats.small?.url;
          if (imageUrl) acc.push(imageUrl);
          return acc;
        },
        []
      );
      console.log("Images found in useEffect:", images);
      setImageUrls(images || []);
    }
  }, [carouselImages]);

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
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Diaspora
          </h1>
          <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Optiven is committed to providing versatile investment solutions
            tailored for the diaspora community. Whether you're looking for
            residential or commercial ventures, our prime plots in promising
            locations ensure optimal returns. Our properties are accessible and
            affordable, designed to deliver quality without compromise. With
            flexible installment plans starting at accessible rates, securing
            your future has never been easier, no matter where you are in the
            world.
          </p>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div className="p-4">
        {imageUrls.length > 0 && (
          <div className="flex justify-center">
            <Carousel slideInterval={3000} className="lg:w-3/4">
              {imageUrls.map((imageUrl, index) => (
                <div
                  key={index}
                  className="relative"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <Image
                    src={imageUrl}
                    layout="fill"
                    objectFit="cover"
                    alt={`Carousel image ${index + 1}`}
                    placeholder="blur"
                    blurDataURL={placeholderImage}
                    quality={90}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
      <section className="bg-white dark:bg-gray-900 flex justify-center items-center h-full">
        <div className="mb-8 p-4">
          <div className="mt-4 md:flex md:justify-between">
            <div className="format md:text-xl lg:text-2xl lg:w-8/12">
              <BlocksRenderer content={diasporaContent} />
            </div>
            <aside className="md:ml-2" style={{ zIndex: 16 }}>
              <LocationList locations={uniqueLocations} />
            </aside>
          </div>
        </div>
      </section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="mb-8 flex justify-center">
          <select
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md px-3 py-2 mr-2 w-72"
            defaultValue="all"
          >
            <option value="all">All Categories</option>
            {categoriesWithFaqs.map((category: Category) => (
              <option key={category.id} value={category.attributes.name}>
                {category.attributes.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesWithFaqs
            .filter(
              (category: Category) =>
                selectedCategory === "all" ||
                category.attributes.name === selectedCategory
            )
            .map((category: any) => (
              <div
                key={category.id}
                className="category-card"
                style={{
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  padding: "20px",
                  backgroundColor: "#fff",
                  zIndex: 16,
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
                    <h1 className="category-title text-white text-3xl font-bold">
                      {category.attributes.category}
                    </h1>
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
                      <div
                        style={{ zIndex: 16 }}
                        className="format md:text-xl lg:text-2xl"
                      >
                        <BlocksRenderer content={faq.attributes.answer} />
                      </div>
                    </FaqItem>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </Stairs>
  );
};

type FAQAttributes = {
  question: string;
  answer: any;
  diasporaFaqCategory: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type FAQ = {
  id: number;
  attributes: FAQAttributes;
};

type CategoryAttributes = {
  name: string;
  banner: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Category = {
  id: number;
  attributes: CategoryAttributes;
  faqs: FAQ[];
};

type FaqsApiResponse = {
  data: FAQ[];
};

type CategoriesApiResponse = {
  data: Category[];
};

export async function getStaticProps() {
  try {
    const diasporaResponse = await fetcher<any>("diasporas?populate=*");
    const projectsResponse = await fetcher<any>("projects?populate=*");
    const faqsResponse: FaqsApiResponse = await fetcher(
      "diaspora-faqs?populate=*"
    );
    const categoriesResponse: CategoriesApiResponse = await fetcher(
      "diaspora-faq-categories?populate=*"
    );

    // Combine FAQs into their categories
    const categoriesWithFaqs = categoriesResponse.data.map(
      (category: Category) => ({
        ...category,
        faqs: faqsResponse.data.filter(
          (faq: FAQ) =>
            faq.attributes.diasporaFaqCategory.data.attributes.name ===
            category.attributes.name
        ),
      })
    );

    return {
      props: {
        diaspora: diasporaResponse,
        projects: projectsResponse,
        categoriesWithFaqs,
      },
    };
  } catch (error) {
    console.error("Error fetching content:", error);
    return {
      props: {
        diaspora: [],
        projects: [],
        categoriesWithFaqs: [],
      },
    };
  }
}

export default Index;
