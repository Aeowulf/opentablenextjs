import Image from 'next/image'
import RestaurantHeader from '@/components/RestaurantHeader'

export default function Home() {
  return (
    <>
      <RestaurantHeader />

      {/* RESTAURANT DETAILS */}
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        <div className='bg-white w-[70%] rounded p-3 shadow'>
          {/* RESTAURANT NAVBAR */}
          <nav className='flex text-reg border-b pb-2'>
            <a href="" className='mr-7'>Overview</a>

            <a href="" className='mr-7'>Menu</a>
          </nav>
          {/* RESTAURANT NAVBAR */}


          {/* RESTAURANT TITLE */}
          <div className='mt-4 border-b pb-6'>
            <h1 className='font-bold text-6xl'>Milestones Grill</h1>
          </div>
          {/* RESTAURANT TITLE */}


          {/* RESTAURANT RATING */}
          <div className='flex items-end'>
            <div className='ratings mt-2 flex items-center'>
              <p>*****</p>

              <p className='text-reg ml-3'>4.9</p>
            </div>

            <div>
              <p className='text-reg ml-4'>600 Reviews</p>
            </div>
          </div>
          {/* RESTAURANT RATING */}


          {/* RESTAURANT DESCRIPTION */}
          <div className='mt-4'>
            <p className='text-lg font-light'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eos veniam tempore aliquid nobis odit dolorem sed dolores! Eos rem sed autem incidunt eum at et porro voluptatum amet nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis nihil rerum molestiae amet illum, enim in expedita.
            </p>
          </div>
          {/* RESTAURANT DESCRIPTION */}


          {/* RESTAURANT PHOTOS */}
          <div></div>
          {/* RESTAURANT PHOTOS */}
        </div>
      </div>
      {/* RESTAURANT DETAILS */}
    </>
  )
}