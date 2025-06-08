import SideBar from "@/component/sidebar"

function page() {
  return (
    <div className="flex flex-col items-center justify-center  bg-black">
      <div className="bg-neutral-400 flex my-4 rounded-2xl min-h-max w-19/20">
          <div className="w-1/5 m-0" >
              <SideBar/>
          </div>
          <div>

          </div>
      </div>
    </div>
  )
}
export default page
