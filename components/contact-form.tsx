"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { sendContactEmail } from "@/lib/actions"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const isMobile = useMobile()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacy: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Send email via server action
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      })

      if (result.success) {
        setIsSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacy: false,
        })
      } else {
        setError(result.error || "Er is iets misgegaan. Probeer het later opnieuw.")
      }
    } catch (err) {
      setError("Er is iets misgegaan. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: isMobile ? 0.3 : 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Bericht verzonden!</h3>
          <p className="text-muted-foreground mobile-text">
            Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="mobile-touch-target">
                Naam
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label htmlFor="email" className="mobile-touch-target">
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="mobile-touch-target">
                Telefoon
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 mobile-touch-target"
              />
            </div>

            <div>
              <Label htmlFor="message" className="mobile-touch-target">
                Bericht
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 min-h-[120px] mobile-touch-target"
              />
            </div>

            <div className="flex items-start space-x-2 mobile-touch-target">
              <Checkbox id="privacy" checked={formData.privacy} onCheckedChange={handleCheckboxChange} required />
              <Label htmlFor="privacy" className="text-sm mobile-text">
                Ik heb het privacybeleid gelezen en begrepen.
              </Label>
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <Button type="submit" className="w-full mobile-touch-target" disabled={isSubmitting}>
              {isSubmitting ? "Verzenden..." : "Verzenden"}
            </Button>
          </div>
        </form>
      )}
    </motion.div>
  )
}
