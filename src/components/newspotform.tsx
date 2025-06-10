"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";


export default function NewSpotForm() {
    const { user } = useUser();
    
    const [form, setForm] = useState({
        name: "",
        image: "",
        description: "",
        platform: "",
        contact: "",
        audienceType: "",
        spotLink: "",
        createduserid: user?.id, 
    });

    

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    try {
      const res = await fetch("/api/spot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          createduserid: user?.id,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to create spot");
      }

      const data = await res.json();
      console.log("Submitted:", data);

      setForm({
        name: "",
        image: "",
        description: "",
        platform: "",
        contact: "",
        audienceType: "",
        spotLink: "",
        createduserid: user?.id,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full h-full p-6 space-y-6 bg-neutral-700 border-l-1 border-neutral-400 rounded-r-lg shadow-md">
      <div className="space-y-4">
        <div className="w-full sm:w-1/3">
          <label htmlFor="name" className="block text-m font-bold  text-gray-200">Spot Name</label>
          <Input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="w-full sm:w-1/3">
          <label htmlFor="image" className="block text-m font-bold  text-gray-200">Image URL</label>
          <Input
            name="image"
            type="url"
            value={form.image}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="w-full sm:w-1/3">
          <label htmlFor="description" className="block text-m font-bold  text-gray-200">Description</label>
          <Textarea
            name="description"
            value={form.description}
            rows={4}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter description"
            required
          />
        </div>

        <div className="w-full sm:w-1/3">
          <label htmlFor="platform" className="block text-m font-bold  text-gray-200">Platform</label>
          <Input
            name="platform"
            type="text"
            value={form.platform}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter platform name"
            required
          />
        </div>

        <div className="w-full sm:w-1/3">
          <label htmlFor="contact" className="block text-m font-bold  text-gray-200">Contact Email</label>
          <Input
            name="contact"
            type="email"
            value={form.contact}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="email@example.com"
            required
          />
        </div>

        <div className="w-full sm:w-1/3">
          <label htmlFor="audienceType" className="block text-m font-bold  text-gray-200">Audience Type</label>
          <Input
            name="audienceType"
            type="text"
            value={form.audienceType}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter audience type"
            required
          />
        </div>

        <div className="w-full sm:w-1/3">
          <label htmlFor="spotLink" className="block text-m font-bold  text-gray-200">Spot URL</label>
          <Input
            name="spotLink"
            type="url"
            value={form.spotLink}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="https://example.com"
            required
          />
        </div>
      </div>
      <div className="w-full sm:w-1/3">
        <button
          type="submit"
          className="w-full sm:w-1/3 flex justify-center  py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Spot
        </button>
      </div>
    </form>
  );
}
