import React from "react";
import Stairs from "@/components/stairs";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { ChevronsRight } from "react-feather";

const index = () => {
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
        <Link href="/photo-gallery" className="block text-gray-700 font-semibold hover:text-green-500">
          Photo-Gallery
        </Link>
      </li>
    </Popover.Group>
  </ol>
</div>
      <div>optiven in the media</div>
    </Stairs>
  );
};

export default index;
