import React, { useEffect } from "react";
import Stairs from "@/components/stairs";
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { fetcher } from "../../../lib/api";
import Image from "next/image";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { ChevronsRight } from "react-feather";

interface AwardsProps {
  awards: {
    data: Award[];
  };
}

const index: React.FC<AwardsProps> = ({ awards }) => {
  useEffect(() => {
    const slider: KeenSliderInstance = new KeenSlider(".keen-slider", {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const prevBtnDesktop = document.getElementById(
      "keen-slider-previous-desktop"
    );
    const nextBtnDesktop = document.getElementById("keen-slider-next-desktop");
    const prevBtnMobile = document.getElementById("keen-slider-previous");
    const nextBtnMobile = document.getElementById("keen-slider-next");

    const addSliderNavigation = (
      prevBtn: HTMLElement | null,
      nextBtn: HTMLElement | null
    ) => {
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => slider.prev());
        nextBtn.addEventListener("click", () => slider.next());
      }
    };

    addSliderNavigation(prevBtnDesktop, nextBtnDesktop);
    addSliderNavigation(prevBtnMobile, nextBtnMobile);

    return () => {
      slider.destroy();
      const removeSliderNavigation = (
        prevBtn: HTMLElement | null,
        nextBtn: HTMLElement | null
      ) => {
        if (prevBtn && nextBtn) {
          prevBtn.removeEventListener("click", () => slider.prev());
          nextBtn.removeEventListener("click", () => slider.next());
        }
      };
      removeSliderNavigation(prevBtnDesktop, nextBtnDesktop);
      removeSliderNavigation(prevBtnMobile, nextBtnMobile);
    };
  }, []);

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
              Why Choose Optiven?
            </h1>
          </div>
        </div>
        <div className="bg-gradient-to-b from-green-50 to-transparent dark:from-green-900 w-full h-full absolute top-0 left-0 z-0" />
      </section>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
            <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Discover Our Trophies of Excellence
              </h2>

              <p className="mt-4 text-gray-700">
                Behold the fruits of our labor - a testament to our dedication,
                innovation, and unwavering commitment to excellence.
              </p>

              <div className="hidden lg:mt-8 lg:flex lg:gap-4">
                <button
                  aria-label="Previous slide"
                  id="keen-slider-previous-desktop"
                  className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>

                <button
                  aria-label="Next slide"
                  id="keen-slider-next-desktop"
                  className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                >
                  <svg
                    className="size-5 rtl:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="-mx-6 lg:col-span-2 lg:mx-0">
              <div id="keen-slider" className="keen-slider">
                <div id="keen-slider" className="keen-slider">
                  {awards.data
                    .sort((a, b) => {
                      return (
                        parseInt(b.attributes.awardYear) -
                        parseInt(a.attributes.awardYear)
                      );
                    })
                    .map((award: Award) => (
                      <div key={award.id} className="keen-slider__slide">
                        <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                          <div>
                            <div className="mt-4">
                              <Image
                                width={100}
                                height={100}
                                alt={`trophy ${award.id}`}
                                src={"/trophy.png"}
                              />
                              <p className="mt-4 uppercase text-2xl font-bold text-rose-600 sm:text-3xl">
                                {award.attributes.awardTitle}
                              </p>
                              <p className="mt-1 leading-relaxed text-gray-700">
                                {award.attributes.awardDescription}
                              </p>
                            </div>
                          </div>
                          <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                            &mdash; {award.attributes.awardYear}
                          </footer>
                        </blockquote>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4 lg:hidden">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                className="size-5 -rotate-180 transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </Stairs>
  );
};

type Award = {
  id: number;
  attributes: {
    awardTitle: string;
    awardYear: string;
    awardDescription: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export async function getStaticProps() {
  try {
    const awardsResponse = await fetcher<Award[]>("awards?populate=*");

    return {
      props: {
        awards: awardsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching awards:", error);
    return {
      props: {
        awards: [],
      },
    };
  }
}

export default index;
