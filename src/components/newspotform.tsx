"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

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
        body: JSON.stringify(form),
      });

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
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter name"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            id="image"
            name="image"
            type="url"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter description"
            required
          />
        </div>

        <div>
          <label htmlFor="platform" className="block text-sm font-medium text-gray-700">Platform</label>
          <input
            id="platform"
            name="platform"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter platform name"
            required
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            id="contact"
            name="contact"
            type="email"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="email@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="audienceType" className="block text-sm font-medium text-gray-700">Audience Type</label>
          <input
            id="audienceType"
            name="audienceType"
            type="text"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter audience type"
            required
          />
        </div>

        <div>
          <label htmlFor="spotLink" className="block text-sm font-medium text-gray-700">Spot URL</label>
          <input
            id="spotLink"
            name="spotLink"
            type="url"
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="https://example.com"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Create Spot
      </button>
    </form>
  );
}
