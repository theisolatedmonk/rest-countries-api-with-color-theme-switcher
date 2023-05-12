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


export  function DetailsPage() {
  return (
    <div className="flex text-[16px] justify-center gap-32  w-full items-center p-12 hidden">
       
        
    <div className="h-72 w-[50%] bg-green-300"></div>
    <div className="flex flex-col justify-between h-72 w-[50%] p-6">
     <div className="fle flex-col">
     <div className="flex font-bold text-[24px] dark:text-[hsl(0,0%,100%)]">Brazil</div>
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
  )
}