import Image from 'next/image'
import darkMode from '@/images/moon-outline.svg'
import search from '@/images/search-outline.svg'

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
      <div className="flex justify-between w-40 shadow-lg">
          <button className='border-none h-6 w-6 bg-black'>
         
          </button>
         <input type="text" />
        </div>
    </main>
  )
}
