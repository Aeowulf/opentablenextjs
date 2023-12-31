import ReservationCard from "@/app/restaurant/[slug]/_components/ReservationCard";
import RestaurantNav from "@/app/restaurant/[slug]/_components/RestaurantNav";
import RestaurantRating from "@/app/restaurant/[slug]/_components/RestaurantRating";
import RestaurantPhotos from "@/app/restaurant/[slug]/_components/RestaurantPhotos";
import ReviewCard from "@/app/restaurant/[slug]/_components/ReviewCard";
import { PrismaClient, Review } from "@prisma/client";
import RestaurantTitle from "./_components/RestaurantTitle";
import RestaurantDescription from "./_components/RestaurantDescription";
import RestaurantReviews from "./_components/RestaurantReviews";
import { notFound } from "next/navigation";

const prisma = new PrismaClient()

interface Restaurant {
  id: number
  name: string
  images: string[]
  description: string
  slug: string
  reviews: Review[]
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    }
  })

  if (!restaurant) {
    notFound()
  }

  return restaurant
}

export default async function Restaurant({ params } : { params : { slug : string }}) {
  const restaurant = await fetchRestaurantBySlug(params.slug)

  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNav slug={restaurant.slug} />

        <RestaurantTitle name={restaurant.name} />

        <RestaurantRating reviews={restaurant.reviews} />

        <RestaurantDescription description={restaurant.description} />

        <RestaurantPhotos images={restaurant.images} />

        <RestaurantReviews reviews={restaurant.reviews} />
      </div>

      <ReservationCard />
    </>
  )
}