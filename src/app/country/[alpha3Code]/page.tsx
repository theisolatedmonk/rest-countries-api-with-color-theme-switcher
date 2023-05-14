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
      <span className="text-[16px] font-semibold dark:text-[hsl(0,0%,100%)]">
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
    <div className=" p-12">
      <Link href={"/"} className="mb-8 block">Back</Link>
      <div className="flex text-[16px] justify-center gap-32  w-full items-center">
        <div className="h-72 w-[50%] bg-gray-100 shadow-sm">
          <img
            alt={data[0].name}
            className="h-full w-full object-cover"
            src={data[0].flags.svg}
          />
        </div>
        <div className="flex flex-col justify-between h-72 w-[50%] p-6">
          <div className="fle flex-col">
            <div className="flex font-bold text-[24px] dark:text-[hsl(0,0%,100%)]">
              {data[0].name}
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col text-[16px] ">
                <LableValue lable={"Nativ Name"} value={"Beige"} />
                <LableValue lable={"Population"} value={1131951} />
                <LableValue lable={"Region"} value={"Europe"} />
                <LableValue lable={"Sub Region"} value={"Western Europe"} />
                <LableValue lable={"Capital"} value={"Brussels"} />
              </div>
              <div className="flex flex-col">
                <LableValue lable={"Top Level Domain"} value={"be"} />
                <LableValue lable={"Currencies"} value={"Euro"} />
                {/* <LableValue lable={"Region"} value={"Dutch, French, German"} /> */}
                {/* <LableValue lable={"Region"} value={data[0].region} /> */}
                <LableValue
                  lable={"Region"}
                  value={data[0].regionalBlocs?.map(
                    (r, i, arr) => r.name + (!(i === arr.length - 1) && ", ")
                  )}
                />
                {/* {data[0].regionalBlocs?.map((r, i) => r.name + ",")} */}
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
            <div className="text-slate-600 flex flex-wrap  place-items-center gap-2 dark:text-[hsl(0,0%,100%)]">
              {data[0].borders?.map((d) => (
                <Link
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
