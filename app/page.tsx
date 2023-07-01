import Image from 'next/image'
import HomeHeader from '@/app/_components/HomeHeader'
import RestaurantCard from '@/app/_components/RestaurantCard'

export default function Home() {

  return (
    <main>
      <HomeHeader />

      {/* CARD AREA */}
      <div className='py-3 px-36 mt-10 flex flex-wrap'>
        <RestaurantCard />
      </div>
      {/* CARD AREA */}
    </main>
  )
}
