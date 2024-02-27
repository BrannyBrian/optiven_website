import Link from "next/link";
import React from "react";
import { ChevronRight } from "react-feather";
import Stairs from "@/components/stairs";

const index = () => {
  return (
    <Stairs>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            5 LEVELS OF OPTIVEN PROPERTIES
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            At Optiven we have different levels of projects that go with your
            budget. Each level has its value additions. The levels are also
            based on location and proximity to infrastructure. Market prices are
            thus based on these factors.
          </p>
        </div>
        <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div className="lg:py-6 lg:pr-16">
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">PLATINUM - ★★★★★</p>
                <p className="text-gray-700">
                  This level of a project comes with sophisticated value
                  additions such as paved cabro roads, CCTV, stone perimeter
                  fencing, and a spectacular entry gate, to mention a few.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/platinum-properties"
                    className="mt-2 flex un hover:text-green-700"
                  >
                    View Platinum Properties
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">GOLD - ★★★★</p>
                <p className="text-gray-700">
                  These properties come with mesh fencing using concrete posts,
                  gates, and solar street lights.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/gold-properties"
                    className="mt-2 flex un hover:text-green-700"
                  >
                    View Gold Properties
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">SILVER - ★★★</p>
                <p className="text-gray-700">
                  This level has properties with value additions including Mesh
                  fences, Trees, Gates and murram roads
                </p>
                <div className="flex items-center">
                  <Link
                    href="/silver-properties"
                    className="mt-2 flex un hover:text-green-700"
                  >
                    View Silver Properties
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">BRONZE - ★★</p>
                <p className="text-gray-700">
                  These projects have a marking fence and graded roads.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/bronze-properties"
                    className="mt-2 flex un hover:text-green-700"
                  >
                    View Bronze Properties
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center mr-4">
                <div>
                  <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                    <svg
                      className="w-4 text-gray-600"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <line
                        fill="none"
                        strokeMiterlimit="10"
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="22"
                      />
                      <polyline
                        fill="none"
                        strokeMiterlimit="10"
                        points="19,15 12,22 5,15"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-lg font-bold">SAPPHIRE - ★</p>
                <p className="text-gray-700">
                  These properties are bare and targeted at investors looking to
                  do Land Banking.
                </p>
                <div className="flex items-center">
                  <Link
                    href="/sapphire-properties"
                    className="mt-2 flex un hover:text-green-700"
                  >
                    View Sapphire Properties
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </Stairs>
  );
};

export default index;
