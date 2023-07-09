import { PrismaClient } from "@prisma/client";
import RestaurantCard from "../_components/RestaurantCard";
import RestaurantSearchCard from "./_components/RestaurantSearchCard";
import SearchHeaderInput from "./_components/SearchHeaderInput";
import SearchSideBar from "./_components/SearchSideBar";

const prisma = new PrismaClient()

const fetchRestaurantsByCity = (city : string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  }

  if (!city) return prisma.restaurant.findMany({ select })

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase()
        }
      }
    },
    select,
  })
}

const fetchLocations = async () => {
  return prisma.location.findMany()
}

const fetchCuisines = async () => {
  return prisma.cuisine.findMany()
}

export default async function Search(
{ searchParams } : { searchParams : { city : string }}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city)

  const locations = await fetchLocations()

  const cuisines = await fetchCuisines()

  return (
    <>
    <SearchHeaderInput />
    
    <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
      <SearchSideBar 
        locations={locations}
        cuisines={cuisines}
      />
      
      {restaurants.length ? (
        <div className='w-5/6'>
        {restaurants.map(restaurant => (
          <RestaurantSearchCard restaurant={restaurant} key={restaurant.id} />
        ))}
        </div>
      ) : (
        <div className='w-5/6'>
          <p>Sorry, we found no restaurants in this area.</p>
        </div>
      )}
    </div>
    </>
  )
}