"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface Spot {
  spotId: string;
  name: string;
  description: string;
  platform: string;
  spotLink: string;
}

function UserSpotList() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const [spots, setSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpots() {
      try {
        const res = await fetch("/api/user");
        
       
        
        if (!res.ok) {
          throw new Error("Failed to fetch spots");
        }
        
        const json = await res.json();
        setSpots(json.spots || []);
      } catch (error) {
        console.error("Failed to fetch spots", error);
        setError(error instanceof Error ? error.message : "Failed to load spots");
      } finally {
        setLoading(false);
      }
    }

    fetchSpots();
  }, [isLoaded, userId, router]);


  const deleteCall =()=>{

  }

  const editCall =(spotId:string)=>{
    router.push(`/edit-spot/${spotId}`)
  }
  
    if (error) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
          <p className="text-red-400">Error: {error}</p>
        </div>
      );
    }
  return (
    <div className="flex items-center flex-col">
      <div className="border-b-2 w-9/10 flex justify-center  border-neutral-300 mb-3">
        <h2 className="text-2xl p-2 font-bold text-white">List of spots</h2>
      </div>
      {loading ? (
            <div className="animate-pulse space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-32 bg-neutral-800 rounded-2xl" />
              ))}
            </div>
          ) : (
            spots.map((spot) => (
              <div
                key={spot.spotId}
                className="p-6 w-9/10 border  border-neutral-700 rounded-2xl bg-neutral-900 hover:border-white transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-rowz sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-400">
                      {spot.name}
                    </h3>
                    <p className="text-neutral-400 mt-1">{spot.description}</p>
                  </div>

                  <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    <span className="bg-yellow-600 text-black text-xs px-3 py-1 rounded-full font-bold">
                      {spot.platform} 
                    </span>
                    <Button onClick={() => window.open(spot.spotLink, '_blank')}>Spot Link</Button>
                    <Button variant="outline" onClick={() =>editCall(spot.spotId)}className="bg-transparent text-white rounded-full">Edit</Button>
                    <Button variant={"outline"} onClick={deleteCall} className="bg-transparent text-white rounded-full"><DeleteOutlineOutlinedIcon/></Button>
                  </div>
                </div>
              </div>
            ))
          )}
    </div>
  )
}
export default UserSpotList