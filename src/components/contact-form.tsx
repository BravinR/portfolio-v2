"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Message sent successfully!")
    setIsLoading(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Your Name"
          required
          className="bg-[#1a1027] border-[#2a2037] focus:border-green-400 text-white"
        />
      </div>
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Your Email"
          required
          className="bg-[#1a1027] border-[#2a2037] focus:border-green-400 text-white"
        />
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Your Message"
          required
          className="min-h-[150px] bg-[#1a1027] border-[#2a2037] focus:border-green-400 text-white"
        />
      </div>
      <Button
        type="submit"
        className="w-full border border-green-400 text-green-400 hover:bg-green-800 "
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}

