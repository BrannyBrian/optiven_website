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
        Awards and Milestones
       
      </li>
    </Popover.Group>
  </ol>
</div>
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
