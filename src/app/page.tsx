import Image from "next/image";
import darkMode from "@/images/moon-outline.svg";
import search from "@/images/search-outline.svg";
import SelectLabels from "./SelectLabels";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-12 font-Nunito dark:bg-[hsl(207,26%,17%)]">
      <div className="flex  justify-between w-full p-2  shadow-lg items-center  ring-slate-600 ring-[.5px] rounded-sm dark:bg-[hsl(209,23%,22%)] dark:text-[hsl(0,0%,100%)]">
        <p>Where in the world?</p>
        <div className="flex items-center gap-2">
        <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>
          <p>Dark Mode</p>
        </div>
      </div>
      
      <div className="flex flex-col w-full  ">
        <div className="flex justify-between items-center w-full group-focus:to-blue-400">
          <div className="  w-96  shadow-lg flex items-center p-2 h-10 ring-[.5px] ring-gray-400 rounded-md gap-1 dark:bg-[hsl(209,23%,22%)] hover:ring-black focus:blue-400 dark:ring-[hsl(209,23%,22%)]">
            <Image
              className="h-5 w-5 top-3 left-4 bg-transparent  z-10 "
              src={search}
              alt={""}
            />
            <input
              type="text"
              className="w-full h-full  border-none  outline-none rounded-md p-1 text-[hsl(0,0%,52%)] dark:bg-[hsl(209,23%,22%)] dark:"  placeholder="Search for a country"/>
          </div>
          <div className=" ">
            {" "}
            <SelectLabels />
          </div>
        </div>
        <div className="flex flex-col h-64 w-52 rounded-md  shadow-lg overflow-hidden ">
          <div className=" h-32 w-full bg-green-300"></div>
          <div className="flex flex-col dark:text-[hsl(0,0%,100%)] p-4">
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

      <div className="flex text-[16px] justify-center gap-32  w-full items-center p-12 hidden">
       
        
          <div className="h-72 w-[50%] bg-green-300"></div>
          <div className="flex flex-col justify-between h-72 w-[50%] p-6">
           <div className="fle flex-col">
           <div className="flex font-bold text-[24px] dark:text-[hsl(0,0%,100%)]">Belgium</div>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col text-[16px] ">
              <LableValue lable={"Nativ Name"} value={"Beige"}/>
              <LableValue lable={"Population"} value={1131951}/>
              <LableValue lable={"Region"} value={"Europe"}/>
              <LableValue lable={"Sub Region"} value={"Western Europe"}/>
              <LableValue lable={"Capital"} value={"Brussels"}/>
              </div>
              <div className="flex flex-col">
              <LableValue lable={"Top Level Domain"} value={"be"}/>
              <LableValue lable={"Currencies"} value={'Euro'}/>
              <LableValue lable={"Region"} value={"Dutch, French, German"}/>
                {/* <div className="">
                  <span className="font-light mi text ">Languages:</span>
                  <span className='"text-slate-600 font-light'>Dutch, French, German</span>
                </div> */}
  
              </div>
            </div>
           </div>

            <div className="flex gap-5">
              <p className="text-black text-[16px] font-semibold dark:text-[hsl(0,0%,100%)]">
                Border Countries:
              </p>
              <div className="text-slate-600 flex w-64 justify-between place-items-center gap-2 dark:text-[hsl(0,0%,100%)]">
                <p className="  text-xs rounded-sm w-full text-center p-1 shadow-[rgba(0,0,0,0.3)_0px_5px_15px] ">
                  France
                </p>
                <p className="  text-xs rounded-sm w-full text-center p-1 shadow-[rgba(0,0,0,0.3)_0px_5px_15px] ">
                  Germany
                </p>
                <p className="  text-xs rounded-sm w-full text-center p-1 shadow-[rgba(0,0,0,0.3)_0px_5px_15px] ">
                  Neathelands
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </main>
  );
}


import React from 'react'

type LableValueType = {
lable: string
value: string | number

}
 function LableValue(Props:LableValueType) {
  return (
    <div className=" ">
  <span className="text-[16px] font-semibold dark:text-[hsl(0,0%,100%)]">{Props.lable}: </span>
    <span className='text-[16px] font-light text-slate-600 dark:text-[hsl(0,0%,100%)]'>{Props.value}</span>
  </div>
  )
}