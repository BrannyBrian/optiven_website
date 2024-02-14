import Stairs from "@/components/stairs";
import Head from "next/head";
import Link from "next/link";
import { ChevronRight } from "react-feather";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-xl">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 uppercase md:text-4xl lg:text-5xl">
                  Who we <span className="inline-block text-primary">are</span>
                </h2>
                <p className="md:text-lg">
                  Optiven is a leading brand in the region and has a number of
                  flourishing Strategic Business Units (SBUs) that include
                  Optiven Real Estate,{" "}
                  <Link
                    href={"https://www.optivenhomes.co.ke/"}
                    className="un text-green-600 font-bold"
                    target="_blank"
                  >
                    Optiven Homes
                  </Link>
                  , and Optiven Water. The firm has also gained a foothold into
                  the hospitality industry with its{" "}
                  <Link
                    href={"https://www.gmcplace.co.ke/"}
                    className="un text-green-600 font-bold"
                    target="_blank"
                  >
                    GMC Place
                  </Link>{" "}
                  and food franchises{" "}
                  <Link
                    href={"https://www.facebook.com/SpurAtTheHubKaren"}
                    className="un text-green-600 font-bold"
                    target="_blank"
                  >
                    Eagle Peak Spur.
                  </Link>
                </p>
                <p className="mt-2  md:text-lg">
                  Optiven also has a soft arm, which undertakes charity works,
                  by the name{" "}
                  <Link
                    href={"https://www.optivenfoundation.org/"}
                    className="un text-green-600 font-bold"
                    target="_blank"
                  >
                    Optiven Foundation
                  </Link>
                  . The Foundation has so far been involved in numerous
                  philanthropic works in its quest to transform the social
                  well-being of thousands of Kenyans.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center -mx-4 lg:pl-8">
              <div className="flex flex-col items-end px-3">
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <img
                  className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
              </div>
              <div className="px-3">
                <img
                  className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                  src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-600 py-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
            <div className="mb-10 lg:max-w-xl">
              <div className="mb-6">
                <p className="text-base text-white md:text-lg">
                  Optiven is captained by its Founder and CEO,{" "}
                  <Link
                    href={"https://www.georgewachiuri.com/"}
                    className="un-white text-white font-bold"
                    target="_blank"
                  >
                    George Wachiuri
                  </Link>
                  , and is rightly living up to its mission, which is to create
                  an environment that positively transforms its staff,
                  customers, and all its stakeholders through offering
                  state-of-the-art products and services.
                </p>
                <p className="text-base text-white mt-2 md:text-lg">
                  The firm aims at creating over 30,000 direct employees by the
                  year 2030, and has continued to be a differentiated and
                  trusted name that regularly receives accolades both inside and
                  outside Kenya. Optiven has also empowered over 10, 000 Kenyans
                  to own property and also directly and indirectly employed
                  about 2, 000 employees across the real estate and hospitality
                  sector.
                </p>
              </div>
            </div>
            <div className="relative lg:w-2/5">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="text-4xl border-b mb-2">Awards</h1>
          <div className="container px-5 py-4 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">01</h1>
                  <p className="leading-relaxed mb-6">
                    The Top Real Estate company in the DIASPORA at the
                    Starbrands East Africa Awards ceremony that took place on
                    21st April 2023
                  </p>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">02</h1>
                  <p className="leading-relaxed mb-6">
                    Real Estate company Optiven has been awarded for its GoGreen
                    Initiative 2022 by KEPSA
                  </p>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">03</h1>
                  <p className="leading-relaxed mb-6">
                    Scooped the best employer in East Africa 2019 by East Africa
                    Best Employer Brand Awards
                  </p>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">04</h1>
                  <p className="leading-relaxed mb-6">
                    Real Estate company Optiven has been awarded for its GoGreen
                    Initiative 2022 by KEPSA
                  </p>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">05</h1>
                  <p className="leading-relaxed mb-6">
                    Real Estate company Optiven has been awarded for its GoGreen
                    Initiative 2022 by KEPSA
                  </p>
                </div>
              </div>
              <div className="p-2 md:w-1/3 md:h-72 w-full">
                <div className="h-full bg-gray-100 p-8 rounded">
                  <h1 className="text-7xl border-b mb-2 font-medium">06</h1>
                  <p className="leading-relaxed mb-6">
                    Real Estate company Optiven has been awarded for its GoGreen
                    Initiative 2022 by KEPSA
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-6">
              <Link
                href="/awards"
                className="text-2xl md:text-3xl lg:text-4xl mt-4 flex un hover:text-green-700"
              >
                View More Awards
                <ChevronRight size={28} />
              </Link>
            </div>
          </div>
        </div>
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
          <h1 className="text-4xl border-b mb-4">Our Mission and Vision</h1>
          <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
            <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Our Mission
                </h5>
                <p className="mb-5 text-gray-700">
                  To create an environment that Positively Transforms our Staff,
                  Customers, and other Stakeholders through offering
                  state-of-the-Art Products and Services.
                </p>
              </div>
            </div>
            <div className="transition duration-300 transform bg-wshadowounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
              <div className="relative">
                <img
                  className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
              </div>
              <div className="px-6 py-8 sm:px-8">
                <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                  Our Vision
                </h5>
                <p className="mb-5 text-gray-700">
                  To be the champions of Social Economic Transformation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h1 className="text-4xl border-b mb-4">Our Core Values</h1>
          <div className="grid gap-8 row-gap-5 my-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div className="duration-300 transform bg-white border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 flex justify-center items-center 5 border border-l-0 rounded-r shadow-sm">
                <h6 className="my-2 font-semibold text-3xl">Professionalism</h6>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 flex justify-center items-center 5 border border-l-0 rounded-r shadow-sm">
                <h6 className="my-2 font-semibold text-3xl">Honesty</h6>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 flex justify-center items-center 5 border border-l-0 rounded-r shadow-sm">
                <h6 className="my-2 font-semibold text-3xl">
                  Customer Obsession{" "}
                </h6>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-green-600 hover:-translate-y-2">
              <div className="h-full p-5 flex justify-center items-center 5 border border-l-0 rounded-r shadow-sm">
                <h6 className="my-2 font-semibold text-3xl">Innovation</h6>
              </div>
            </div>
          </div>
          <p className="text-base mt-2 md:text-lg">
            These core values drive the company culture which supports a
            strategy for extraordinary success for over 24 years
          </p>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-green-600">
          <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 font-sans text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Objectives
              </h2>
              <div className="flex">
                <div>
                  <p className="text-lg text-white">
                    To provide affordable prime properties to professionals and
                    business people.
                  </p>
                  <hr className="w-96 my-4 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <p className="text-lg text-white">
                    To link up homeowners and developers with the market
                  </p>
                  <hr className="w-96 my-4 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <p className="text-lg text-white">
                    To give back to the community through our soft arm, Optiven
                    Foundation
                  </p>
                  <hr className="w-96 my-4 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <p className="text-lg text-white">
                    To create 30,000 jobs by the year 2030
                  </p>
                  <hr className="w-96 my-4 border-gray-300" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <p className="text-lg text-white">
                    To transit from a private company to public owned company
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <img
                className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                className="object-cover w-full h-48 rounded shadow-lg"
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="lg:pr-10">
              <h5 className="mb-4 text-4xl font-extrabold leading-none">
                Our People
              </h5>
              <p className="mb-6 text-gray-900 text-lg md:w-3/4">
                Optiven has go-getters and high-level caliber staff who propel
                the growth of the enterprise. We are strong believers in having
                the best of what the market can offer. Our staff are motivated
                and they deliver services in a timely manner. We also believe in
                strong alliances and networking with other market-leading
                professionals. We have built relationships with progressing
                organizations that are key stakeholders to our company as we
                carry out our activities.
              </p>
            </div>
            <div>
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="py-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  bg-green-600 text-gray-200">
          <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
            <div className="mb-10 lg:max-w-xl">
              <div className="mb-6">
                <h5 className="mb-4 text-4xl font-extrabold leading-none">
                  Working Methodology
                </h5>
                <p className="text-base md:text-lg">
                  Optiven works through stable business networks and has very
                  well-established relations with both the central and devolved
                  governments as well as the relevant ministries. We have also
                  developed close working relations with both local and
                  international partners and institutions across relevant
                  sectors and industries.
                </p>
                <p className="text-base mt-2 md:text-lg">
                  Besides, we have established strong partnerships with various
                  financial providers including but not limited to Equity Bank,
                  Commercial Bank of Africa, Consolidated Bank, and Co-operative
                  Bank of Kenya. We have further enhanced our relationship with
                  like-minded partners such as private equity entities and
                  regulators to help us achieve our mission and vision.
                </p>
              </div>
            </div>
            <div className="relative lg:w-2/5">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </Stairs>
    </>
  );
}
