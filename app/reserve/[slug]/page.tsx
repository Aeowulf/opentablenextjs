import ReserveForm from "./_components/ReserveForm";
import ReserveHeader from "./_components/ReserveHeader";

export default function Reserve() {
  return (
    <>
      <div className='border-t'> {/* h-screen */}
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
          <ReserveHeader />
          {/* HEADER */}


          {/* FORM */}
          <ReserveForm />
          {/* FORM */}
        </div>
      </div>
    </>
  )
}