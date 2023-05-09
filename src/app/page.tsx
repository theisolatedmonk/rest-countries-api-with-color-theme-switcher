import Image from 'next/image'
import darkMode from '@/images/moon-outline.svg'
import search from '@/images/search-outline.svg'
import SelectLabels from './SelectLabels'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex  justify-between w-full p-2  shadow-lg items-center">
        <p>Where in the world?</p>
        <div className="flex">
          <Image  className='h-5 w-5' src={darkMode} alt={''}/>
          <p>Dark Mode</p>
        </div>
      </div>
      <hr className='h-full' />
<div className="flex flex-col w-full ">
<div className="flex justify-between items-center w-full ">
     <div className="  w-96  shadow-lg relative p-1 h-10  rounded-md ">
          <Image  className='h-5 w-5 top-3 left-4 bg-transparent absolute z-10' src={search} alt={''}/>
         <input type="text" className='w-full h-full top-0 left-0 absolute rounded-md' />
        </div> 
       <div className=" "> <SelectLabels/></div>
     </div>
     <div className="flex flex-col h-64 w-52 rounded-md  bg-gray-600 overflow-hidden ">
      <div className=" h-32 w-full bg-black"></div>
      <div className="flex flex-col p-4">
        <p className="text-sm">Germany</p>
        <div className="text-sm ">
          <p>Population: 81,770,900</p>
          <p>Region: Europe </p>
          <p>Capital: Berlin</p>
        </div>
      </div>

     </div>
</div>

<div className="flex flex-col hidden">
  <button className='h-4 w-8 rounded-lg'>Back</button>
  <div className="flex">
    <div className="h-64 w-80"></div>
    <div className="flex flex-col">
      <div className="flex">Belgium</div>
      <div className="flex">
        <div className="">
          <span>Native Name</span><span>Native Name</span>
        </div>
        <div className="flex flex-col"></div>
      </div>
      <div className="flex">
        <p className="">Border Countries:</p>
        <div className="">
        <p className=""></p>
        <p className=""></p>
        <p className=""></p>
        </div>
        
      </div>
    </div>
  </div>
</div>
    </main>
  )
}
