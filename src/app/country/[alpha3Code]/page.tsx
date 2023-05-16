import React, { ReactNode } from "react";
import countryData from "@/data.json";
import Link from "next/link";
import Image from "next/image";

type LableValueType = {
  lable: string;
  value: string | number | ReactNode;
};
function LableValue(Props: LableValueType) {
  return (
    <div className=" ">
      <span className="text-[16px] font-bold dark:text-[hsl(0,0%,100%)]">
        {Props.lable}:{" "}
      </span>
      <span className="text-[16px] font-light text-slate-600 dark:text-[hsl(0,0%,100%)]">
        {Props.value}
      </span>
    </div>
  );
}

interface CountryPageType {
  params: { alpha3Code: string };
  searchParams: {};
}

export default function Country(props: CountryPageType) {
  console.log("props -", props.params.alpha3Code);
  const alpha3Code = props.params.alpha3Code;
  console.log("countryData -", countryData);

  const data = countryData.filter(
    (country) => country.alpha3Code == alpha3Code
  );

  return (
    <div className=" p-12 flex flex-col min-h-screen  items-start dark:bg-[#202c37]">
      <Link
        href={"/"}
        className="mb-8 block shadow-[rgba(0,0,0,0.3)_0px_5px_15px] w-16 text-center rounded-md  p-1"
      >
        Back
      </Link>
      <div className="flex flex-col text-[16px] justify-center gap-10  sm:justify-between  w-full  sm:flex-row ">
        <div className="h-80  sm:w-[50%] bg-gray-100 shadow-sm">
          <img
            alt={data[0].name}
            className="h-full w-full object-cover"
            src={data[0].flags.svg}
          />
        </div>
        <div className="flex flex-col justify-between h-72 sm:w-[50%] p-6 w-full ">
          <div className="fle flex-col">
            <div className="flex font-bold text-[24px] dark:text-[hsl(0,0%,100%)]">
              {data[0].name}
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center ">
              <div className="flex flex-col text-lg sm:w-[50%]">
                <LableValue
                  lable={"Nativ Name"}
                  value={`${data[0].nativeName}`}
                />
                <LableValue
                  lable={"Population"}
                  value={`${data[0].population}`}
                />
                <LableValue lable={"Region"} value={`${data[0].region}`} />
                <LableValue
                  lable={"Sub Region"}
                  value={`${data[0].subregion}`}
                />
                <LableValue lable={"Capital"} value={`${data[0].capital}`} />
              </div>
              <div className="flex flex-col text-lg sm:w-[50%]">
                <LableValue
                  lable={"Top Level Domain"}
                  value={`${data[0].topLevelDomain}`}
                />
                <LableValue
                  lable={"Currencies"}
                  value={`${data[0].currencies?.map((d) => d.name)}`}
                />

                <LableValue
                  lable={"Region"}
                  value={data[0].regionalBlocs?.map(
                    (r, i, arr) => r.name + (!(i === arr.length - 1) && ", ")
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <p className="text-black text-lg font-bold dark:text-[hsl(0,0%,100%)] sm:w-[40%]">
              Border Countries:
            </p>
            <div className="text-slate-600 flex flex-wrap  place-items-center gap-2 dark:text-[hsl(0,0%,100%)]">
              {data[0].borders?.map((d: string, index: number) => (
                <Link
                  key={index}
                  href={`/country/${d}`}
                  className=" w-fit  text-xs rounded-sm  px-4 text-center p-1 shadow-[rgba(0,0,0,0.3)_0px_5px_15px] "
                >
                  {d}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
