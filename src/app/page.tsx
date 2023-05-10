import Image from "next/image";
import darkMode from "@/images/moon-outline.svg";
import search from "@/images/search-outline.svg";
import SelectLabels from "./SelectLabels";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-12 font-Nunito">
      <div className="flex  justify-between w-full p-2  shadow-lg items-center  ring-slate-600 ring-[.5px] rounded-sm">
        <p>Where in the world?</p>
        <div className="flex items-center gap-2">
          <Image className="h-5 w-5" src={darkMode} alt={""} />
          <p>Dark Mode</p>
        </div>
      </div>
      <hr className="w-full bg-slate-600" />
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

      <div className="flex text-[16px] justify-center gap-32  w-full items-center p-12">
       
        
          <div className="h-72 w-[50%] bg-green-300"></div>
          <div className="flex flex-col justify-between h-72 w-[50%] p-6">
           <div className="fle flex-col">
           <div className="flex font-bold text-[24px]">Belgium</div>
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
              <p className="text-black text-[16px] font-semibold">
                Border Countries:
              </p>
              <div className="text-slate-600 flex w-64 justify-between place-items-center gap-2 ">
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
  <span className="text-[16px] font-semibold ">{Props.lable}: </span>
    <span className='text-[16px] font-light text-slate-600'>{Props.value}</span>
  </div>
  )
}