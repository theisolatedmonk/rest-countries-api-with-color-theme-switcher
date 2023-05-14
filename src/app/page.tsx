import Image from "next/image";
import Link from "next/link";
// import darkMode from "@/images/moon-outline.svg";
import search from "@/images/search-outline.svg";
import SelectLabels from "./SelectLabels";
type dataType = {
  name: string;
};

import data from "../data.json";

export default function Home() {
  // const [darkMode, setDarkModeBtn] = useState(false);
  // const [darkTheam, setDarkTheam ] = useState(false);
  // function HandleDarkMode(){
  //   setDarkModeBtn(true);
  //   setDarkTheam(true);
  // }

  return (
    <div>
      {" "}
      <div>
        <main className="flex min-h-screen flex-col items-center gap-4  font-Nunito dark:bg-[#202c37]">
          {/* Header */}

          <div className="flex px-12 flex-col w-full  ">
            {/*  */}
            <ConuntrySearchAndFilter />
            <section className="flex gap-2 flex-wrap justify-between">
              {data.map((item) => (
                <Link
                  href={`/country/${item.alpha3Code}`}
                  key={item.name}
                  className="flex flex-col h-64 w-52 rounded-md  shadow-lg overflow-hidden border-2 "
                >
                  <div className=" h-32 w-full ">
                    <Image
                      width={208}
                      height={128}
                      src={item.flag}
                      alt={item.name}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col dark:text-[hsl(0,0%,100%)] p-4">
                    <p className="text-lg font-bold">{item.name}</p>
                    <div className="text-sm ">
                      <p className="">
                        <span className="font-semibold">Population:</span>
                        <span className="text-xs">{item.population}</span>
                      </p>
                      <p className="">
                        <span className="font-semibold">Region:</span>
                        <span className="text-xs">{item.region}</span>
                      </p>
                      <p className="">
                        <span className="font-semibold">Capital:</span>
                        <span className="text-xs">{item.capital}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function ConuntrySearchAndFilter() {
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
          className="w-full h-full  border-none  outline-none rounded-md p-1 text-[hsl(0,0%,52%)] dark:bg-[hsl(209,23%,22%)] dark:"
          placeholder="Search for a country"
        />
      </div>
      <div className=" ">
        {" "}
        <SelectLabels />
      </div>
    </div>
  );
}
