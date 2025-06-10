"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SpotFormData {
  name?: string;
  description?: string;
  platform?: string;
  contact?: string;
  spotLink?: string;
  image?: string;
}

export default function EditSpotPage() {
  const { spotId } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState<SpotFormData>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpot() {
      try {
        const res = await fetch(`/api/spot/${spotId}`);
        const json = await res.json();
        if (json.success) {
          setFormData(json.spot);
        }
      } catch (err) {
        console.error("Failed to fetch spot", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSpot();
  }, [spotId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/spot/${spotId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    if (json.success) {
      router.push(`/dashboard`);
    } else {
      alert("Update failed.");
    }
  };

  if (loading) return <p className="text-white">Loading...</p>;
  if (!formData) return <p className="text-red-500">Spot not found.</p>;

  return (
    <div className="w-full px-4 py-10 bg-black text-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Edit Spot</h2>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium">Spot Name</label>
          <Input id="name" name="name" value={formData.name || ""} onChange={handleChange} placeholder="Spot Name" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="mb-2 font-medium">Description</label>
          <Input id="description" name="description" value={formData.description || ""} onChange={handleChange} placeholder="Description" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="platform" className="mb-2 font-medium">Platform</label>
            <Input id="platform" name="platform" value={formData.platform || ""} onChange={handleChange} placeholder="Platform" />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="contact" className="mb-2 font-medium">Contact Info</label>
            <Input id="contact" name="contact" value={formData.contact || ""} onChange={handleChange} placeholder="Contact Info" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col flex-1">
            <label htmlFor="spotLink" className="mb-2 font-medium">Spot Link</label>
            <Input id="spotLink" name="spotLink" value={formData.spotLink || ""} onChange={handleChange} placeholder="Spot Link" />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="image" className="mb-2 font-medium">Image URL</label>
            <Input id="image" name="image" value={formData.image || ""} onChange={handleChange} placeholder="Image URL" />
          </div>
        </div>

        <Button type="submit" className="w-full sm:w-auto px-6 py-2 rounded-full bg-white text-black font-bold hover:bg-gray-300 transition">
          Update Spot
        </Button>
      </form>
    </div>
  );
}
