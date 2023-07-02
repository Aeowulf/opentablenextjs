import HomeHeader from '@/app/_components/HomeHeader'
import RestaurantCard from '@/app/_components/RestaurantCard'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany()

  return restaurants
}

export default async function Home() {
  const restaurants = await fetchRestaurants()

  console.log({ restaurants })

  return (
    <main>
      <HomeHeader />

      <div className='py-3 px-36 mt-10 flex flex-wrap'>
        {restaurants.map(restaurant => (
          <RestaurantCard />
        ))}
      </div>
    </main>
  )
}
