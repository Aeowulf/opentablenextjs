import RestaurantNav from "@/app/restaurant/[slug]/_components/RestaurantNav"
import MenuCard from "@/app/restaurant/[slug]/menu/_components/MenuCard"

export default function Menu() {
  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNav />

      <main className="bg-white mt-5">
        <div>
          <div className="mt-4 pb-1 mb-1">
            <h1 className="font-bold text-4xl">Menu</h1>
          </div>

          <div className="flex flex-wrap justify-between">
            <MenuCard />
          </div>
        </div>
      </main>
    </div>
  )
}