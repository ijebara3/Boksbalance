"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface CircleImageProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
  className?: string
  delay?: number
}

export default function CircleImage({ src, alt, size = "md", className = "", delay = 0 }: CircleImageProps) {
  const isMobile = useMobile()

  const sizeClass = () => {
    if (isMobile) {
      return "w-48 h-48" // Smaller size on mobile
    }

    switch (size) {
      case "sm":
        return "w-32 h-32"
      case "md":
        return "w-48 h-48"
      case "lg":
        return "w-64 h-64"
      default:
        return "w-64 h-64"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn("relative overflow-hidden rounded-full border-4 border-white shadow-lg", sizeClass(), className)}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />
    </motion.div>
  )
}
