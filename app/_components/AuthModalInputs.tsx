export default function AuthModalInputs() {
  return (
    <div>
      <div className="my-3 flex justify-between text-sm">
        <input 
          title='title' 
          placeholder="First Name" 
          type="text" 
          className='border rounded p-2 py-3 w-[49%]' 
        />

        <input 
          title='title' 
          placeholder="Last Name" 
          type="text" 
          className='border rounded p-2 py-3 w-[49%]' 
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input 
          title='title' 
          placeholder="Email" 
          type="text" 
          className='border rounded p-2 py-3 w-full' 
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input 
          title='title' 
          placeholder="Phone" 
          type="text" 
          className='border rounded p-2 py-3 w-[49%]' 
        />

        <input 
          title='title' 
          placeholder="City" 
          type="text" 
          className='border rounded p-2 py-3 w-[49%]' 
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input 
          title='title' 
          placeholder="Password" 
          type="text" 
          className='border rounded p-2 py-3 w-full' 
        />
      </div>
    </div>
  )
}
