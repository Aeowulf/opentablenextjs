import { Review } from "@prisma/client"
import ReviewCard from "./ReviewCard"

const RestaurantReviews = ({ reviews } : { reviews : Review[] }) => {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
        {reviews.length > 1 ? 
          <>What {reviews.length} people are saying</> 
        : reviews.length === 1 ?
          <>What 1 person is saying</>
        : <>No Reviews</>}
        
      </h1>

      <div>
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantReviews