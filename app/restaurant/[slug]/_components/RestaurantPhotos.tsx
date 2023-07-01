import React from 'react'

const RestaurantPhotos = () => {
  return (
    <div>
      <h1 className='font-bold text-3xl mt-10 mb-7 border-b pb-5'>
        5 photos
      </h1>

      <div className='flex flex-wrap'>
        <img className='w-56 h-44 mr-1 mb-1' src="https://resizer.otstatic.com/v2/photos/xlarge/2/51907532.webp" alt="" />

        <img className='w-56 h-44 mr-1 mb-1' src="https://resizer.otstatic.com/v2/photos/xlarge/2/51907534.webp" alt="" />

        <img className='w-56 h-44 mr-1 mb-1' src="https://resizer.otstatic.com/v2/photos/xlarge/1/51907535.webp" alt="" />

        <img className='w-56 h-44 mr-1 mb-1' src="https://resizer.otstatic.com/v2/photos/xlarge/1/51907538.webp" alt="" />

        <img className='w-56 h-44 mr-1 mb-1' src="https://resizer.otstatic.com/v2/photos/xlarge/1/51907536.webp" alt="" />
      </div>
    </div>
  )
}

export default RestaurantPhotos