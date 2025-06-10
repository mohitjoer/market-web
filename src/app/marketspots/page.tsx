"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";


interface Spot {
  spotId: string;
  name: string;
  description: string;
  platform: string;
  spotLink: string;
  audienceType: string;
  contact: string;
  image: string;
}

function MarketPage() {
  const [spots, setSpots] = useState<Spot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchSpots() {
      try {
        setLoading(true);
        const res = await fetch("/api/spot");
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
  }, []);

  const filteredSpots = spots.filter((spot) =>
    spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    spot.platform.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <p className="text-red-400">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row bg-black min-h-screen px-4 py-10 text-white">
      {/* Filter Section */}
      <div className="w-full lg:w-1/4 flex flex-col items-center justify-start rounded-xl mb-10 lg:mb-0 lg:mr-6 bg-neutral-800 px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">🔍 Filter</h3>
        <p className="text-neutral-400 text-sm text-center">
          You can add platform, audience type or category filters here later.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-3/4 flex flex-col items-center">
        {/* Search Bar */}
        <div className="flex flex-row gap-3 w-full max-w-md bg-neutral-700 px-4 py-2 mb-10 rounded-full">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name or platform..."
            className="rounded-full text-white bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button 
            className="rounded-full font-bold"
            onClick={() => setSearchQuery("")}
            disabled={!searchQuery}
          >
            Clear
          </Button>
        </div>

        {/* Spot Listings */}
        <div className="w-full max-w-4xl space-y-6">
          <h3 className="text-3xl font-bold mb-4">
            🎯 Market Spots {loading && "(Loading...)"}
          </h3>

          {loading ? (
            <div className="animate-pulse space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-32 bg-neutral-800 rounded-2xl" />
              ))}
            </div>
          ) : filteredSpots.length === 0 ? (
            <p className="text-center text-neutral-400">No spots found.</p>
          ) : (
            filteredSpots.map((spot) => (
              <div
                key={spot.spotId}
                className="p-6 border border-neutral-700 rounded-2xl bg-neutral-900 hover:border-white transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-400">
                      {spot.name}
                    </h3>
                    <p className="text-neutral-400 mt-1">{spot.description}</p>
                  </div>

                  <div className="flex items-center gap-4 mt-2 sm:mt-0">
                    
                     <Button onClick={() => window.open(spot.spotLink, '_blank')}>Spot Link</Button>
                    <span className="bg-yellow-600 text-black text-xs px-3 py-1 rounded-full font-bold">
                      {spot.platform}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MarketPage;