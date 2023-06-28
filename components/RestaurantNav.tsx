const RestaurantNav = () => { 
  return (
    <nav className='flex text-reg border-b pb-2'>
      <a href="/restaurant/1" className='mr-7'>Overview</a>

      <a href="/restaurant/1/menu" className='mr-7'>Menu</a>
    </nav>
  )
}

export default RestaurantNav