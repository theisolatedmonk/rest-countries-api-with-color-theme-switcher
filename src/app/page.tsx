import Image from "next/image";
import Link from "next/link";
// import darkMode from "@/images/moon-outline.svg";

import SelectLabels from "./SelectLabels";

import data from "../data.json";
import SearchBar from "@/components/SearchBar";
import Data from "@/components/Data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 px-12 font-Nunito dark:bg-[#202c37]">
      <div className="flex  flex-col w-full  ">
        <SearchBar />
        <Data />
      </div>
    </main>
  );
}
