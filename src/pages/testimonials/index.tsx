import Stairs from "@/components/stairs";
import { fetcher } from "../../../lib/api";
import Link from "next/link";
import TestimonialsCarousel from "@/components/testimonials-page/testimonialsCarousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const placeholderImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwAB/aurH8kAAAAASUVORK5CYII=";

export default function Testimonials({ testimonials, photos, video }: any) {
  const [clientRendered, setClientRendered] = useState(false);

  useEffect(() => {
    setClientRendered(true);
  }, []);

  const getBestAvailableImageUrl = (formats: any) => {
    let imageUrl = formats?.thumbnail?.url || ""; // Default to thumbnail if available
    if (formats?.large) {
      imageUrl = formats.large.url;
    } else if (formats?.medium) {
      imageUrl = formats.medium.url;
    } else if (formats?.small) {
      imageUrl = formats.small.url;
    }

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
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Hear from Our Satisfied Investors
          </h1>
          <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            Discover the stories of those who have unlocked their investment
            opportunities with Optiven. From their experiences with residential
            and commercial ventures to the returns they've seen, our satisfied
            investors share how Optiven has helped them secure their future.
            Explore their testimonials and envision your own success with us.
          </p>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div>
        <div className="container px-5 py-4 mx-auto">
          {clientRendered && (
            <TestimonialsCarousel testimonials={testimonials.data} />
          )}
        </div>
      </div>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          {clientRendered && video.data.length > 0 && (
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Video
              </h2>
              <div
                className="relative w-full h-0"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={video.data[0].attributes.video.data.attributes.url}
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="Featured Video"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="pt-4 px-4 mx-auto max-w-screen-xl text-center lg:pt-8 z-10 relative">
          <p className="text-start mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
            We also take pride in sharing moments of joy as our clients receive
            their title deeds. These photos capture the excitement and
            satisfaction of our clients as they secure their investment with
            Optiven. Each image tells a story of trust, accomplishment, and the
            beginning of a prosperous journey. Witness the smiles and
            celebrations of those who have placed their confidence in us and
            joined the Optiven family.
          </p>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          {clientRendered && (
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
              {photos.data[0]?.attributes.images.data.map((photo: any) => {
                const formats = photo.attributes.formats;
                if (!formats) {
                  return null;
                }
                const { url, blurDataURL } = getBestAvailableImageUrl(formats);
                return (
                  <div key={photo.id} className="mb-4 break-inside-avoid">
                    <Image
                      src={url}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      height={400}
                      width={700}
                      className="rounded-lg"
                      alt={`Image for ${photo.attributes.name}`}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Stairs>
  );
}

type Testimonial = {
  id: number;
  attributes: {
    clientName: string;
    clientTitle: string;
    clientComment: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
  };
};

type Photo = {
  id: number;
  attributes: {
    images: any;
  };
};

type Video = {
  id: number;
  attributes: {
    video: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export async function getStaticProps() {
  try {
    const testimonialsResponse = await fetcher<Testimonial>(
      "testimonials?populate=*"
    );
    const photosResponse = await fetcher<Photo>(
      "testimonial-images?populate=*"
    );
    const videoResponse = await fetcher<Video>(
      "testimonial-feature-videos?populate=*"
    );

    return {
      props: {
        testimonials: testimonialsResponse,
        photos: photosResponse,
        video: videoResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return {
      props: {
        testimonials: [],
        photos: [],
        video: [],
      },
    };
  }
}
