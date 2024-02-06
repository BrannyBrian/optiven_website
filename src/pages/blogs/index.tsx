import Link from "next/link";
import React from "react";
import { ChevronRight } from "react-feather";
import Stairs from "@/components/stairs";

const index = () => {
  return (
    <Stairs>
      <div className="px-4 pt-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h1 className="text-4xl border-b mb-2">Optiven in the News</h1>
        <div className="mt-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3 sm:mx-auto">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                traveling
                <span className="text-gray-800"> — 28 Dec 2020</span>
              </p>
              <Link
                href="#"
                aria-label="Category"
                title="Visit the East"
                className="mb-3 text-2xl font-bold transition-colors duration-200 hover:text-green-600"
              >
                Visit the East
              </Link>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <Link
                href="#"
                className="text-sm mt-4 flex hover:underline hover:text-green-600"
              >
                Read More
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                traveling
                <span className="text-gray-800"> — 28 Dec 2020</span>
              </p>
              <Link
                href="#"
                aria-label="Category"
                title="Simple is better"
                className="mb-3 text-2xl font-bold transition-colors duration-200 hover:text-green-600"
              >
                Simple is better
              </Link>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <Link
                href="#"
                className="text-sm mt-4 flex hover:underline hover:text-green-600"
              >
                Read More
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                traveling
                <span className="text-gray-800"> — 28 Dec 2020</span>
              </p>
              <Link
                href="#"
                aria-label="Category"
                title="Film It!"
                className="mb-3 text-2xl font-bold transition-colors duration-200 hover:text-green-600"
              >
                Film It!
              </Link>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <Link
                href="#"
                className="text-sm mt-4 flex hover:underline hover:text-green-600"
              >
                Read More
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Stairs>
  );
};

export default index;
