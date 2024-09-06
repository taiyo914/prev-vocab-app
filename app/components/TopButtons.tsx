"use client";

import { color } from "framer-motion";
import Link from "next/link";

const TopButtons = () => {
  return (
    <div className="p-5 mx-auto max-w-[1200px]">
      <div className="flex justify-center space-x-4 xl:space-x-10">
        <Link
          href="new"
          className="text-center w-1/2 py-2  font-semibold rounded-md shadow-md hover:bg-gray-200  transition-all duration-300 border"
        >
          単語を追加する
        </Link>
        <Link
          href="review"
          className="text-center w-1/2 py-2 border font-semibold bg-blue-600 rounded-md shadow-md  text-white hover:bg-blue-500 transition-all duration-300"
        >
          復 習
        </Link>
      </div>
    </div>
  );
};

export default TopButtons;