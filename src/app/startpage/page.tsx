"use client"
import { useRouter } from "next/navigation"

function Page() {
  const router = useRouter()
    
  const toMarkretsSpots = () => {
    router.push("/marketspots")
  }

  const toDashboard = () => {
    router.push("/dashboard")
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white min-h-screen px-4">
      <div className="mt-8 sm:mt-15 w-full max-w-2xl text-center">
        <h2 className="scroll-m-20 text-2xl sm:text-4xl font-extrabold tracking-tight text-balance">
          What Are You Looking To Do?
        </h2>
      </div>

      <div className="my-10 sm:my-20 flex flex-col sm:flex-row w-full max-w-2xl gap-4 items-center justify-center">
        {/* for spot owners */}
        <button 
          onClick={toDashboard}
          className="w-full sm:w-auto transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex justify-center items-center font-bold p-6 h-40 w-full sm:w-60 border border-neutral-500 rounded-lg bg-neutral-900 bg-[url('/online-advertising-6693945.svg')] bg-blend-overlay bg-cover bg-no-repeat bg-center hover:bg-neutral-800 transition-colors">
            <h3 className="text-lg sm:text-xl">Give Spot</h3> 
          </div>
        </button>

        {/* for audience seekers */}
        <button 
          onClick={toMarkretsSpots}
          className="w-full sm:w-auto transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex justify-center items-center font-bold p-6 h-40 w-full sm:w-60 border border-neutral-500 rounded-lg bg-neutral-900 bg-[url('/communities.svg')] bg-blend-overlay bg-cover bg-no-repeat bg-center hover:bg-neutral-800 transition-colors">
            <h3 className="text-lg sm:text-xl">Get Spot</h3>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Page

