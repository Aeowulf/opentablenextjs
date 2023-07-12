const Loading = () => {
  return (
    <>
    <div className="bg-white w-[70%] rounded p-3 shadow">
      <nav className="flex text-reg border-b pb-2">
        <h4 className="mr-7">Overview</h4>
        <p className="mr-7">Menu</p>
      </nav>

      <div className="mt-4 border-b pb-6 animate-pulse bg-slate-200 w-[400px] h-16 rounded"></div>

      <div className="flex items-end animate-pulse">
        <div className="ratings mt-2 flex items-center">
          <div className="flex items-center bg-slate-200 w-56"></div>
          <p className="text-reg ml-3"></p>
        </div>
        <div>
          <p className="text-reg ml-1 ml-4"> </p>
        </div>
      </div>
    </div>

    <div className='w-[27%] relative text-reg'>
      <div className='fixed w-[15%] bg-white rounded p-3 shadow'>
        <div className="text-center border-b pb-2 font-bold">
          <h4 className="mr-7 text-lg animate-pulse bg-slate-200 pb-6">
          
          </h4>
        </div>
      </div>
    </div>
    </>
  )
}

export default Loading