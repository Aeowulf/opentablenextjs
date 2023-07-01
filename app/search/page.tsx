import Restaurant from "../restaurant/[slug]/page";
import RestaurantSearchCard from "./_components/RestaurantSearchCard";
import SearchHeaderInput from "./_components/SearchHeaderInput";
import SearchSideBar from "./_components/SearchSideBar";

export default function Search() {
  return (
    <>
    <SearchHeaderInput />
    
    <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
      {/* SEARCH SIDE BAR */}
      <SearchSideBar />
      {/* SEARCH SIDE BAR */}
      
      {/* RESTAURANT SEARCH CARD */}
      <RestaurantSearchCard />
      {/* RESTAURANT SEARCH CARD */}
    </div>
    </>
  )
}