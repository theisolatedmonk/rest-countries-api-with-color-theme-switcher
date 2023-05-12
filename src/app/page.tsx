import Image from "next/image";
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
        <main className="flex min-h-screen flex-col items-center gap-4  font-Nunito dark:bg-[hsl(207,26%,17%)]">
          {/* Header */}
          <Header/>
          <div className="flex px-12 flex-col w-full  ">
            {/*  */}
            <ConuntrySearchAndFilter />
            <section className="flex gap-2 flex-wrap justify-between">
              {data.map((item) => (
                <div
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
                </div>
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

function Header() {
  return (
    <div className="flex  justify-between w-full p-2  shadow-lg items-center    rounded-sm dark:bg-[hsl(209,23%,22%)] dark:text-[hsl(0,0%,100%)]">
      <p>Where in the world?</p>
      <div className="flex items-center gap-2">
        <button
          id="theme-toggle"
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          <svg
            id="theme-toggle-dark-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            className="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <p>Dark Mode</p>
      </div>
    </div>
  );
}
