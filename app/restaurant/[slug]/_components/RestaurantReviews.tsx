import ReviewCard from "./ReviewCard"

const RestaurantReviews = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
        What 100 people are saying
      </h1>

      <div>
        <ReviewCard />
      </div>
    </div>
  )
}

export default RestaurantReviews