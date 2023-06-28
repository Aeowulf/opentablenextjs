export default function Home() {
  return (
    <>
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <div className='text-left text-lg py-3 m-auto flex justify-center'>
        <input 
          className='rounded mr-3 p-2 w-[450px]' 
          type="text" 
          placeholder='State, city or town' 
        />

        <button className='rounded bg-red-600 px-9 py-2 text-white'>
          Let's Go
        </button>
      </div>
    </div>

    <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
      <div className='w-1/5'>
        <div className="border-b pb-4">
          <h1 className='mb-2'>Region</h1>

          <p className="font-light text-reg">Toronto</p>
          <p className="font-light text-reg">Ottawa</p>
          <p className="font-light text-reg">Montreal</p>
          <p className="font-light text-reg">Hamilton</p>
          <p className="font-light text-reg">Kingston</p>
          <p className="font-light text-reg">Niagara</p>
        </div>

        <div className="border-b pb-4 mt-3">
          <h1 className='mb-2'>Cuisine</h1>

          <p className="font-light text-reg">Mexican</p>
          <p className="font-light text-reg">Italian</p>
          <p className="font-light text-reg">Chinese</p>
        </div>

        <div className="mt-3 pb-4">
          <h1 className='mb-2'>Price</h1>

          <div className='flex'>
            <button className="border w-full text-reg font-light rounded-l p-2">
              $
            </button>

            <button className="border-t border-b w-full text-reg font-light p-2">
              $$
            </button>

            <button className="border w-full text-reg font-light rounded-r p-2">
              $$$
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}