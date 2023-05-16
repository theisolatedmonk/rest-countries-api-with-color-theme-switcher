"use client";

import React, { useState } from "react";
import SelectLabels from "@/app/SelectLabels";
import Image from "next/image";
import search from "@/images/search-outline.svg";
import { atom, useAtom } from "jotai";
export const queryAtom = atom("");
type Props = {};

export default function SearchBar({}: Props) {
  const [query, setQuery] = useAtom(queryAtom);

  console.log(query);
  return (
    <div className="flex justify-center flex-col sm:justify-between  sm:items-center w-full  sm:flex-row">
      <div className="  w-[100%] sm:w-96  shadow-lg flex items-center p-2 h-10  border-gray-400 rounded-md gap-1 dark:bg-[hsl(209,23%,22%)]  focus-within:border-2 focus-within:border-blue-500   focus-within:shadow-2xl">
        <Image
          className="h-5 w-5 top-3 left-4 bg-transparent  z-10 "
          src={search}
          alt={""}
        />
        <input
          type="text"
          value={query}
          className="w-full h-full  border-none  outline-none rounded-md p-1 text-[hsl(0,0%,52%)] dark:bg-[hsl(209,23%,22%)] dark:"
          placeholder="Search for a country"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className=" ">
        {" "}
        <SelectLabels />
      </div>
    </div>
  );
}
