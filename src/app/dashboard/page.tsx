"use client"

import NewSpotForm from "@/components/newspotform"
import UserSpotList from "@/components/userspotlist"
import { Button } from "@/components/ui/button"
import { useState } from "react"



function page() {
  const [page, setpage] = useState<"A" | "B" | "C">("A");

  const ChangeToA =() =>{
      setpage("A");
  }

  const ChangeToB =() =>{
      setpage("B");
  }



  const renderComponent = () => {
    switch (page) {
      case "A":
        return <NewSpotForm/>;
      case "B":
        return <UserSpotList />
      default:
        return  <NewSpotForm/>;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full  bg-black">
      <div className="bg-neutral-500 border-1  border-neutral-400 flex my-4 rounded-2xl flex-1  w-19/20">
          <div className="w-1/5 m-0" >
              <div className="bg-neutral-600 text-white rounded-l-2xl h-full w-full p-4">
            <div className="flex items-center border-b-2 border-gray-500 pb-4 mb-4">
                <h2 className="font-bold text-lg">Dashboard</h2>
            </div>
            <div className="flex flex-col space-y-4">
                <Button variant="outline" onClick={ChangeToA} className="w-full bg-transparent">
                    Add my Spots
                </Button>
                <Button variant="outline" onClick={ChangeToB} className="w-full bg-transparent">
                    list my Spots
                </Button>
        </div>
        </div>
              </div>
              <div className="flex-1">
                {renderComponent()}
                
              </div>
          </div>
    </div>
  )
}
export default page
