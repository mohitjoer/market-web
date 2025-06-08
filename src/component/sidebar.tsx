import { Button } from "./ui/button"

function SideBar() {
  return (
    <div className="bg-neutral-600 text-white rounded-l-2xl h-full w-full p-4">
        <div className="flex items-center border-b-2 border-gray-500 pb-4 mb-4">
            <h2 className="font-bold text-lg">Dashboard</h2>
        </div>
        <div className="flex flex-col space-y-4">
            <Button variant="outline"  className="w-full bg-transparent">
                Add Spots
            </Button>
            
            <Button variant="outline" className="w-full bg-transparent">
                list Spots
            </Button>
        </div>
    </div>
  )
}
export default SideBar