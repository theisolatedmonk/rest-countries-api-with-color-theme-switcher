"use client";
import data from "@/data.json";
import { useAtom } from "jotai";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { queryAtom } from "./SearchBar";
import { regionAtom } from "@/app/SelectLabels";

type Props = {};

export default function Data(props: Props) {
  const [query, setQuery] = useAtom(queryAtom);
  const [region, setRegion] = useAtom(regionAtom);

  const filterData = data
    .filter((item) =>
      item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    .filter((item) =>
      item.region.toLocaleLowerCase().includes(region.toLocaleLowerCase())
    );

  return (
    <section className="flex lg:gap-20 gap-y-10 flex-col  items-center justify-center lg:flex-wrap lg:flex-row ">
      {/* {data.map((item) => ( */}
      {/* {filterData.map((item) => ( */}
      {filterData.map((item) => (
        <Link
          href={`/country/${item.alpha3Code}`}
          key={item.name}
          className="flex flex-col h-80 w-56 rounded-md  shadow-lg overflow-hidden "
        >
          <div className=" h-32 w-full shadow-md">
            <img
              src={item.flag}
              alt={item.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 dark:text-[hsl(0,0%,100%)] p-4">
            <p className="text-xl font-bold">{item.name}</p>
            <div className="text-lg ">
              <p className="">
                <span className="font-bold">Population: </span>
                <span className="text-lg">{item.population}</span>
              </p>
              <p className="">
                <span className="font-bold">Region: </span>
                <span className="text-lg">{item.region}</span>
              </p>
              <p className="">
                <span className="font-bold">Capital: </span>
                <span className="text-lg">{item.capital}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
