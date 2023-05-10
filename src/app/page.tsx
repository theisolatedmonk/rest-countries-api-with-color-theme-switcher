import Image from "next/image";
import darkMode from "@/images/moon-outline.svg";
import search from "@/images/search-outline.svg";
import SelectLabels from "./SelectLabels";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-12">
      <div className="flex  justify-between w-full p-2  shadow-lg items-center  ring-slate-500 ring-[.5px] rounded-sm">
        <p>Where in the world?</p>
        <div className="flex items-center gap-2">
          <Image className="h-5 w-5" src={darkMode} alt={""} />
          <p>Dark Mode</p>
        </div>
      </div>
      <hr className="w-full bg-slate-500" />
      <div className="flex flex-col w-full  hidden">
        <div className="flex justify-between items-center w-full group-focus:to-blue-400">
          <div className="  w-96  shadow-lg flex items-center p-2 h-10 ring-[.5px] ring-gray-400 rounded-md gap-1 hover:ring-black focus:blue-400">
            <Image
              className="h-5 w-5 top-3 left-4 bg-transparent  z-10 "
              src={search}
              alt={""}
            />
            <input
              type="text"
              className="w-full h-full  border-none outline-none rounded-md p-1"
            />
          </div>
          <div className=" ">
            {" "}
            <SelectLabels />
          </div>
        </div>
        <div className="flex flex-col h-64 w-52 rounded-md  shadow-lg overflow-hidden ">
          <div className=" h-32 w-full bg-green-300"></div>
          <div className="flex flex-col p-4">
            <p className="text-lg font-bold">Germany</p>
            <div className="text-sm ">
              <p className="">
                <span className="font-semibold">Population:</span>
                <span className="text-xs">81,770,900</span>
              </p>
              <p className="">
                <span className="font-semibold">Region:</span>
                <span className="text-xs">Europe</span>
              </p>
              <p className="">
                <span className="font-semibold">Capital:</span>
                <span className="text-xs">Berlin</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 ">
       
        <div className="flex">
          <div className="h-64 w-80"></div>
          <div className="flex flex-col">
            <div className="flex font-extrabold">Belgium</div>
            <div className="flex">
              <div className="flex flex-col ">
                <div className=" ">
                  <span className="font-medium ">Native Name:</span>
                  <span className='"text-slate-500'>Belgie</span>
                </div>
                <div className="">
                  <span className="font-medium ">Population:</span>
                  <span className='"text-slate-500'>11,319,51</span>
                </div>
                <div className="">
                  <span className="font-medium ">Region:</span>
                  <span className='"text-slate-500'>Europe</span>
                </div>
                <div className="">
                  <span className="font-medium ">Sub Region:</span>
                  <span className='"text-slate-500'>Western Europe</span>
                </div>
                <div className="">
                  <span className="font-medium ">Capital:</span>
                  <span className='"text-slate-500'>Brussels</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" ">
                  <span className="font-medium ">Top Level Domain:</span>
                  <span className='"text-slate-500'>be</span>
                </div>
                <div className="">
                  <span className="font-medium ">Currencies:</span>
                  <span className='"text-slate-500'>Euro</span>
                </div>
                <div className="">
                  <span className="font-medium ">Languages:</span>
                  <span className='"text-slate-500'>Dutch, French, German</span>
                </div>
  
              </div>
            </div>

            <div className="flex">
              <p className="text-black text-sm font-medium">
                Border Countries:
              </p>
              <div className="text-slate-500 flex w-64 justify-between place-items-center gap-2 ">
                <p className="ring-[.5px]  ring-slate-500 text-xs rounded-sm w-full text-center p-1">
                  France
                </p>
                <p className="ring-[.5px]  ring-slate-500 text-xs rounded-sm w-full text-center p-1">
                  Germany
                </p>
                <p className="ring-[.5px]  ring-slate-500 text-xs rounded-sm w-full text-center p-1">
                  Neathelands
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
