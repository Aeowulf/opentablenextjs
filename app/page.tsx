import Image from 'next/image'
import HomeHeader from '@/components/HomeHeader'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
      <HomeHeader />

      {/* CARD AREA */}
      <div className='py-3 px-36 mt-10 flex flex-wrap'>
        <Card />
      </div>
      {/* CARD AREA */}
    </main>
  )
}
