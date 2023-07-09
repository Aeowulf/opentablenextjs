import fullStar from '../../public/icons/full-star.png'
import halfStar from '../../public/icons/half-star.png'
import emptyStar from '../../public/icons/empty-star.png'
import Image from 'next/image'
import { Review } from '@prisma/client'
import { calculateReviewRatingAverage } from '@/utils/calculateReviewRatingAverage'

const Stars = ({reviews} : {reviews : Review[]}) => {
  const rating = calculateReviewRatingAverage(reviews)

  const renderStars = () => {
    const stars = []

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((rating - i).toFixed(1))
    }
  }

  return (
    <Image src={fullStar} alt='' />
  )
}

export default Stars