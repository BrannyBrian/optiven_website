import Stairs from "@/components/stairs";
import Head from "next/head";

export default function Team() {
  return (
    <>
      <Head>
        <title>Team</title>
        <meta name="description" content="Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stairs>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-primary">
              Board and Management Team
            </p>
          </div>
          <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:min-w-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="relative w-full h-72 lg:w-72 lg:h-96 rounded">
                <img
                  className="absolute object-cover w-full h-full md:w-3/4 md:h-3/4"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
              </div>
              <div className="mx-0 mt-2 md:mx-2 lg:mt-0">
                <p className="text-lg font-bold">George Wachiuri</p>
                <p className="mb-4 text-xs font-semibold md:mb-1">CEO</p>
                <p className="mb-4 text-sm md:text-xs">
                  George is the CEO of Optiven Limited. He is currently a PhD
                  candidate at the Jomo Kenyatta University of Agriculture and
                  Technology. He holds a Masters’s degree in Business
                  Administration (University of Nairobi), and a Bachelor of
                  Commerce (Marketing option) Degree from University of Nairobi.
                  He is a Certified Public Accountant – CPA (K) and is a former
                  Lecturer at Daystar University. His entrepreneurial spirit
                  developed early, and was awarded the Entreprenuer of the year
                  1997 by the University of Nairobi. He has over 21 years
                  working experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="relative w-full h-72 lg:w-72 lg:h-96 rounded">
                <img
                  className="absolute object-cover w-full h-full md:w-3/4 md:h-3/4"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
              </div>
              <div className="mx-0 mt-2 md:mx-2 lg:mt-0">
                <p className="text-lg font-bold">Charles Muraguri</p>
                <p className="mb-4 text-xs font-semibold md:mb-1">
                  Projects Director
                </p>
                <p className="mb-4 text-sm md:text-xs">
                  Charles is the Projects Director at Optiven Limited. He has
                  been with Optiven since the company’s inception. He has over
                  18 years Experience in the company.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="relative w-full h-72 lg:w-72 lg:h-96 rounded">
                <img
                  className="absolute object-cover w-full h-full md:w-3/4 md:h-3/4"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
              </div>
              <div className="mx-0 mt-2 md:mx-2 lg:mt-0">
                <p className="text-lg font-bold">Mary Wacuka</p>
                <p className="mb-4 text-xs font-semibold md:mb-1">
                  Director, Strategy and Operations
                </p>
                <p className="mb-4 text-sm md:text-xs">
                  She holds a Master’s Degree in Business Administration and a
                  Bachelor of Commerce (Marketing Option) from the University of
                  Nairobi. She is also trained in Owner-Manager Program at
                  Strathmore University and a holder of CPA section 4. She has
                  over 22 years experience in Sales, Marketing, Operations and
                  Strategy.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="relative w-full h-72 lg:w-72 lg:h-96 rounded">
                <img
                  className="absolute object-cover w-full h-full md:w-3/4 md:h-3/4"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
              </div>
              <div className="mx-0 mt-2 md:mx-2 lg:mt-0">
                <p className="text-lg font-bold">Bishop Phillips Katutu</p>
                <p className="mb-4 text-xs font-semibold md:mb-1">
                  Non Executive Director
                </p>
                <p className="mb-4 text-sm md:text-xs">
                  He holds a Masters Degree in Peace Studies and International
                  Relations from Catholic University of Eastern Africa and a
                  Bachelor of Arts in Religious Studies, from Global University.
                  He also holds a Diploma in Development Management from Daystar
                  University. He is a specialist in peace building, conflict
                  resolution and reconciliation with more than six years’
                  experience in conflict management, peace building as well as
                  training and dialogue facilitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Stairs>
    </>
  );
}
