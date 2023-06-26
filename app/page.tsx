import Image from 'next/image'
import Header from '@/components/Header'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
      <Header />

      {/* CARD AREA */}
      <div className='py-3 px-36 mt-10 flex flex-wrap'>
        <Card />
      </div>
      {/* CARD AREA */}
    </main>
  )
}
