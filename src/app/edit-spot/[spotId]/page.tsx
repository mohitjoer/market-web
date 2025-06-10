"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EditSpotPage() {
  const { spotId } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState<any>(null);
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      alert("Spot updated!");
      router.push("/market");
    } else {
      alert("Update failed.");
    }
  };

  if (loading) return <p className="text-white">Loading...</p>;
  if (!formData) return <p className="text-red-500">Spot not found.</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 text-white px-4">
      <h2 className="text-3xl font-bold mb-6">Edit Spot</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" value={formData.name} onChange={handleChange} placeholder="Spot Name" />
        <Input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
        <Input name="platform" value={formData.platform} onChange={handleChange} placeholder="Platform" />
        <Input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Info" />
        <Input name="spotLink" value={formData.spotLink} onChange={handleChange} placeholder="Spot Link" />
        <Input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
        <Button type="submit" className="w-full">Update Spot</Button>
      </form>
    </div>
  );
}
