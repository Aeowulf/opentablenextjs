import React from 'react'

const RestaurantSearchCard = () => {
  return (
    <div className='w-5/6'>
        <div className="border-b flex pb-5">
          <img 
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/52836347.webp" 
            alt="" 
            className='w-44 rounded' 
          />

          <div className="pl-5">
            <h2 className="text-3xl">Aiana Restaurant Collective</h2>

            <div className="flex items-start">
              <div className="flex mb-2">
                *****
              </div>

              <p className="ml-2 text-sm">Awesome</p>
            </div>

            <div className="mb-9">
              <div className="font-light flex text-reg">
                <p className="mr-4">$$$</p>
                <p className="mr-4">Mexican</p>
                <p className="mr-4">Ottawa</p>
              </div>
            </div>

            <div className='text-red-600'>
              <a href="/">View more information</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RestaurantSearchCard