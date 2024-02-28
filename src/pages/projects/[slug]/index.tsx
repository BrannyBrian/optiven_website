import React, { Fragment } from "react";
import Stairs from "@/components/stairs";
import { Popover, Transition } from "@headlessui/react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { ChevronRight } from "react-feather";

type Params = {
  params: {
    slug: string;
  };
};

const paymentOptions = [
  {
    id: 1,
    cash: 1000000,
    threeMonths: 1200000,
    sixMonths: 1500000,
    twelveMonths: 1800000,
    deposit: 300000,
    size: "1/8",
  },
  {
    id: 2,
    cash: 2000000,
    threeMonths: 2400000,
    sixMonths: 3000000,
    twelveMonths: 3600000,
    deposit: 600000,
    size: "1/4",
  },
  {
    id: 3,
    cash: 4000000,
    threeMonths: 4800000,
    sixMonths: 6000000,
    twelveMonths: 7200000,
    deposit: 900000,
    size: "1/2",
  },
  {
    id: 4,
    cash: 8000000,
    threeMonths: 9600000,
    sixMonths: 12000000,
    twelveMonths: 14400000,
    deposit: 1800000,
    size: "1",
  },
];

const Index = ({ project }: any) => {
  const { projectContent } = project.data.attributes;

  return (
    <Stairs>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-lg lg:py-16">
          <h1 className="text-4xl font-bold text-gray-700 lg:text-5xl sm:px-16 lg:px-48 dark:text-gray-400">
            {project.data.attributes.projectName}
          </h1>
          <div className="my-4 text-lg text-gray-700 lg:text-xl sm:px-16 lg:px-auto dark:text-gray-400">
            <div className="format">
              <BlocksRenderer content={projectContent} />
            </div>
            {/* <div className="flex flex-col">
              <Popover.Group className="flex my-4">
                <Popover className="absolute">
                  <Popover.Button className="group inline-flex items-center rounded-md bg-green-400 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    KES
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="top-full z-10 mt-3 min-w-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {paymentOptions.map((item) => (
                          <div
                            key={item.id}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="w-full">
                              <div className="flex justify-between">
                                <div>
                                  <p className="font-extrabold secondary-text underline">
                                    {item.size} acre
                                  </p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <label className="font-bold text-xs">
                                    Cash Price (KES)
                                  </label>
                                  <span className="text-3xl font-bold primary-text">
                                    {item.cash.toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <div className="flex flex-col items-start md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      Deposit (KES)
                                    </label>
                                    <h1 className="text-xl">
                                      {item.deposit.toLocaleString()}
                                    </h1>
                                  </div>
                                </div>
                                <div className="flex flex-col md:flex-row min-w-64">
                                  <div className="flex flex-col items-end md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      3 months (KES)
                                    </label>
                                    <span className="text-xl">
                                      {item.threeMonths.toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (KES)
                                    </label>
                                    <span className="text-md">
                                      {(item.threeMonths / 3).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-end md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      6 months (KES)
                                    </label>
                                    <span className="text-xl">
                                      {item.sixMonths.toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (KES)
                                    </label>
                                    <span className="text-md">
                                      {(item.threeMonths / 6).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-end">
                                    <label className="font-bold text-xs">
                                      12 months (KES)
                                    </label>
                                    <span className="text-xl">
                                      {item.twelveMonths.toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments
                                    </label>
                                    <span className="text-md">
                                      {(item.threeMonths / 12).toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <Popover className="absolute ml-12">
                  <Popover.Button className="group inline-flex items-center rounded-md bg-green-400 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    USD
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="top-full z-10 mt-3 -ml-12 min-w-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {paymentOptions.map((item) => (
                          <div
                            key={item.id}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="w-full">
                              <div className="flex justify-between">
                                <div>
                                  <p className="font-extrabold secondary-text underline">
                                    {item.size} acre
                                  </p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <label className="font-bold text-xs">
                                    Cash Price (USD)
                                  </label>
                                  <span className="text-3xl font-bold primary-text">
                                    {Math.ceil(
                                      item.cash / 146
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <div className="flex flex-col items-start md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      Deposit (USD)
                                    </label>
                                    <h1 className="text-xl secondary-text font-bold">
                                      {Math.ceil(
                                        item.deposit / 146
                                      ).toLocaleString()}
                                    </h1>
                                  </div>
                                </div>
                                <div className="flex flex-col md:flex-row min-w-64">
                                  <div className="flex flex-col items-end md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      3 months (USD)
                                    </label>
                                    <span className="text-xl">
                                      {Math.ceil(
                                        item.threeMonths / 146
                                      ).toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (USD)
                                    </label>
                                    <span className="text-md">
                                      {Math.ceil(
                                        item.threeMonths / 3 / 146
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-end md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      6 months (USD)
                                    </label>
                                    <span className="text-xl">
                                      {Math.ceil(
                                        item.sixMonths / 146
                                      ).toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (USD)
                                    </label>
                                    <span className="text-md">
                                      {Math.ceil(
                                        item.threeMonths / 6 / 146
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-end">
                                    <label className="font-bold text-xs">
                                      12 months (USD)
                                    </label>
                                    <span className="text-xl">
                                      {Math.ceil(
                                        item.twelveMonths / 146
                                      ).toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (USD)
                                    </label>
                                    <span className="text-md">
                                      {Math.ceil(
                                        item.threeMonths / 12 / 146
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <Popover className="absolute ml-24">
                  <Popover.Button className="group inline-flex items-center rounded-md bg-green-400 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    EUR
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="top-full z-10 mt-3 -ml-24 min-w-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {paymentOptions.map((item) => (
                          <div
                            key={item.id}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="w-full">
                              <div className="flex justify-between">
                                <div>
                                  <p className="font-extrabold secondary-text underline">
                                    {item.size} acre
                                  </p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <label className="font-bold text-xs">
                                    Cash Price (EUR)
                                  </label>
                                  <span className="text-3xl font-bold primary-text">
                                    {Math.ceil(
                                      item.cash / 158
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <div className="flex flex-col items-start md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      Deposit (EUR)
                                    </label>
                                    <h1 className="text-xl">
                                      {Math.ceil(
                                        item.deposit / 158
                                      ).toLocaleString()}
                                    </h1>
                                  </div>
                                </div>
                                <div className="flex flex-col md:flex-row min-w-64">
                                  <div className="flex flex-col items-end md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      3 months (EUR)
                                    </label>
                                    <span className="text-xl">
                                      {Math.ceil(
                                        item.threeMonths / 158
                                      ).toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (EUR)
                                    </label>
                                    <span className="text-md">
                                      {Math.ceil(
                                        item.threeMonths / 3 / 158
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-end md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      6 months (EUR)
                                    </label>
                                    <span className="text-xl">
                                      {Math.ceil(
                                        item.sixMonths / 158
                                      ).toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (EUR)
                                    </label>
                                    <span className="text-md">
                                      {Math.ceil(
                                        item.threeMonths / 6 / 158
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-end">
                                    <label className="font-bold text-xs">
                                      12 months (EUR)
                                    </label>
                                    <span className="text-xl">
                                      {Math.ceil(
                                        item.twelveMonths / 158
                                      ).toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (EUR)
                                    </label>
                                    <span className="text-md">
                                      {Math.ceil(
                                        item.threeMonths / 12 / 158
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                <Popover className="absolute ml-36">
                  <Popover.Button className="group inline-flex items-center rounded-md bg-green-400 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                    GBP
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="top-full z-10 mt-3 -ml-36 min-w-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {paymentOptions.map((item) => (
                          <div
                            key={item.id}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="w-full">
                              <div className="flex justify-between">
                                <div>
                                  <p className="font-extrabold secondary-text underline">
                                    {item.size} acre
                                  </p>
                                </div>
                                <div className="flex flex-col items-end">
                                  <label className="font-bold text-xs">
                                    Cash Price (GBP)
                                  </label>
                                  <span className="text-3xl font-bold primary-text">
                                    {Math.ceil(
                                      item.cash / 184
                                    ).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <div>
                                  <div className="flex flex-col items-start md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      Deposit (GBP)
                                    </label>
                                    <h1 className="text-xl">
                                      {Math.ceil(
                                        item.deposit / 184
                                      ).toLocaleString()}
                                    </h1>
                                  </div>
                                </div>
                                <div className="flex flex-col md:flex-row min-w-64">
                                  <div className="flex flex-col items-end md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      3 months (GBP)
                                    </label>
                                    <span className="text-xl">
                                      {Math.ceil(
                                        item.threeMonths / 184
                                      ).toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (GBP)
                                    </label>
                                    <span className="text-md">
                                      {Math.ceil(
                                        item.threeMonths / 3 / 184
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-end md:mr-20 lg:mr-24">
                                    <label className="font-bold text-xs">
                                      6 months (GBP)
                                    </label>
                                    <span className="text-xl">
                                      {Math.ceil(
                                        item.sixMonths / 184
                                      ).toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (GBP)
                                    </label>
                                    <span className="text-md">
                                      {Math.ceil(
                                        item.threeMonths / 6 / 184
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-end">
                                    <label className="font-bold text-xs">
                                      12 months (GBP)
                                    </label>
                                    <span className="text-xl">
                                      {Math.ceil(
                                        item.twelveMonths / 184
                                      ).toLocaleString()}
                                    </span>
                                    <label className="font-bold text-xs">
                                      Instalments (GBP)
                                    </label>
                                    <span className="text-md">
                                      {Math.ceil(
                                        item.threeMonths / 12 / 184
                                      ).toLocaleString()}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </Popover.Group>
            </div> */}
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-start mt-6">
              <div className="flex justify-center items-center mt-6">
                <Link
                  href="#"
                  className="text-xl md:text-2xl lg:text-3xl flex un hover:text-green-600"
                >
                  Grand Master Plan
                  <ChevronRight size={24} />
                </Link>
              </div>
              <div className="flex justify-center items-center mt-6">
                <Link
                  href="#"
                  className="text-xl md:text-2xl lg:text-3xl flex un hover:text-green-600"
                >
                  Offer Letter
                  <ChevronRight size={24} />
                </Link>
              </div>
              <div className="flex justify-center items-center mt-6">
                <Link
                  href="#"
                  className="text-xl md:text-2xl lg:text-3xl flex un hover:text-green-600"
                >
                  Water Application Form
                  <ChevronRight size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Stairs>
  );
};

export async function getServerSideProps({ params }: Params) {
  const { slug } = params;
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL_PROD}projects/${slug}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN_PROD}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching project details: ${response.statusText}`);
    }

    const projectDetails = await response.json();

    return {
      props: {
        project: projectDetails,
      },
    };
  } catch (error) {
    console.error("Error fetching project details:", error);
    return {
      props: {
        project: null,
      },
    };
  }
}

export default Index;
