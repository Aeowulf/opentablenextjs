import ReservationCard from "@/app/restaurant/[slug]/_components/ReservationCard";
import RestaurantNav from "@/app/restaurant/[slug]/_components/RestaurantNav";
import RestaurantRating from "@/app/restaurant/[slug]/_components/RestaurantRating";
import RestaurantPhotos from "@/app/restaurant/[slug]/_components/RestaurantPhotos";
import ReviewCard from "@/app/restaurant/[slug]/_components/ReviewCard";

export default function Restaurant() {
  return (
    <>
      {/* <RestaurantHeader /> */}

      {/* RESTAURANT DETAILS */}
      {/* <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'> */}
        <div className='bg-white w-[70%] rounded p-3 shadow'>
          {/* RESTAURANT NAVBAR */}
          <RestaurantNav />
          {/* RESTAURANT NAVBAR */}


          {/* RESTAURANT TITLE */}
          <div className='mt-4 border-b pb-6'>
            <h1 className='font-bold text-6xl'>Milestones Grill</h1>
          </div>
          {/* RESTAURANT TITLE */}


          {/* RESTAURANT RATING */}
          <RestaurantRating />
          {/* RESTAURANT RATING */}


          {/* RESTAURANT DESCRIPTION */}
          <div className='mt-4'>
            <p className='text-lg font-light'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eos veniam tempore aliquid nobis odit dolorem sed dolores! Eos rem sed autem incidunt eum at et porro voluptatum amet nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis nihil rerum molestiae amet illum, enim in expedita.
            </p>
          </div>
          {/* RESTAURANT DESCRIPTION */}


          {/* RESTAURANT PHOTOS */}
          <RestaurantPhotos />
          {/* RESTAURANT PHOTOS */}


          {/* RESTAURANT REVIEWS */}
          <div>
            <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
              What 100 people are saying
            </h1>

            <div>
              {/* REVIEW CARD */}
              <ReviewCard />
              {/* REVIEW CARD */}
            </div>
          </div>
          {/* RESTAURANT REVIEWS */}
        </div>

        {/* RESERVATION CARD */}
        <ReservationCard />
        {/* RESERVATION CARD */}
      {/* </div> */}
      {/* RESTAURANT DETAILS */}
    </>
  )
}