interface Props {
  inputs : {
    firstName : string,
    lastName : string,
    email : string,
    phone : string,
    city : string,
    password : string,
  }

  handleChangeInput: (e : React.ChangeEvent<HTMLInputElement>) => void

  signingIn : boolean
}

export default function AuthModalInputs({ inputs, handleChangeInput, signingIn } : Props) {
  return (
    <div>
      {signingIn ? null :
        <div className="my-3 flex justify-between text-sm">
          <input 
            title='title' 
            placeholder="First Name" 
            type="text" 
            className='border rounded p-2 py-3 w-[49%]'
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />

          <input 
            title='title' 
            placeholder="Last Name" 
            type="text" 
            className='border rounded p-2 py-3 w-[49%]' 
            value={inputs.lastName}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      }

      <div className="my-3 flex justify-between text-sm">
        <input 
          title='title' 
          placeholder="Email" 
          type="text" 
          className='border rounded p-2 py-3 w-full' 
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      
      {signingIn ? null : 
        <div className="my-3 flex justify-between text-sm">
          <input 
            title='title' 
            placeholder="Phone" 
            type="text" 
            className='border rounded p-2 py-3 w-[49%]' 
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
          />

          <input 
            title='title' 
            placeholder="City" 
            type="text" 
            className='border rounded p-2 py-3 w-[49%]' 
            value={inputs.city}
            onChange={handleChangeInput}
            name="city"
          />
        </div>
      }
      

      <div className="my-3 flex justify-between text-sm">
        <input 
          title='title' 
          placeholder="Password" 
          type="password" 
          className='border rounded p-2 py-3 w-full' 
          value={inputs.password}
          onChange={handleChangeInput}
          name="password"
        />
      </div>
    </div>
  )
}
