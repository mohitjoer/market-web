import { Button } from "@/component/ui/button"
import { Input } from "@/components/ui/input"

function page() {
  return (
    <div className="flex flex-row items-center justify-center h-full bg-black text-white">
      {/* filter */}
        <div className="flex flex-col items-center justify-center rounded-xl  m-4 w-1/4 bg-neutral-800 px-4 py-10">
          <h3 className="text-white font-bold text-2xl">Filter</h3>
        </div>
        <div className="flex flex-col items-center justify-center h-full w-3/4 max-w-6xl px-4 py-10">
        {/* search bar */}
          <div className="flex flex-row gap-4 w-2/6 bg-neutral-700 px-3 py-2 my-10 items-center justify-center  rounded-full text-white">
            <Input type="text" className="rounded-full "/>

            <Button className="rounded-full font-bold">Search</Button>
          </div>
        {/* list of spots */}
          <div className="flex flex-col items-start justify-start w-full max-w-4xl bg-neutral-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-white font-bold text-2xl mb-4">Market Spots</h3>
            
              
              <div className="bg-neutral-800 w-1/1  p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-white font-semibold text-lg">Spot Name</h4>
                <p className="text-gray-400">Description of the market spot.</p>
              </div>
             
            
          </div>
        </div>
    </div>
  )
}
export default page