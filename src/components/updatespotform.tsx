"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function UpdateSpotForm ({ spotId }: { spotId: string }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    platform: "",
    contact: "",
    audienceType: "",
    spotLink: "",
    image: ""
  })

  useEffect(() => {
    async function fetchSpot() {
      const res = await fetch(`/api/spot/${spotId}`)
      const data = await res.json()
      if (data.success) {
        setFormData(data.spot)
      }
    }
    fetchSpot()
  }, [spotId])

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch(`/api/spot/${spotId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })

    const data = await res.json()
    if (data.success) {
      alert("Spot updated successfully!")
    } else {
      alert("Update failed.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <Input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <Input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <Input name="platform" value={formData.platform} onChange={handleChange} placeholder="Platform" />
      <Input name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" />
      <Input name="audienceType" value={formData.audienceType} onChange={handleChange} placeholder="Audience Type" />
      <Input name="spotLink" value={formData.spotLink} onChange={handleChange} placeholder="Spot Link" />
      <Input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
      <Button type="submit">Update Spot</Button>
    </form>
  )
}
