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
    <div className="flex justify-between items-center w-full group-focus:to-blue-400">
      <div className="  w-96  shadow-lg flex items-center p-2 h-10 ring-[.5px] ring-gray-400 rounded-md gap-1 dark:bg-[hsl(209,23%,22%)] hover:ring-black focus:blue-400 dark:ring-[hsl(209,23%,22%)]">
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
