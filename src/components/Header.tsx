"use client";

import { useTheme } from "next-themes";
import ToggalButton from "./ToggalButton";
import Link from "next/link";

export function Header() {
  return ( <Link
    href={"/"}
  >
 
    <div className="flex  justify-between w-full py-4 px-12  shadow-lg items-center   z-50 rounded-sm dark:bg-[hsl(209,23%,22%)] dark:text-[hsl(0,0%,100%)] top-0 sticky bg-white">
      <p className="text-lg font-bold">Where in the world?</p>
      <ToggalButton />
    </div>
    </Link>
  );
}
