"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  delay?: number
  className?: string
  iconClassName?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  delay = 0,
  className = "",
  iconClassName = "",
}: FeatureCardProps) {
  const isMobile = useMobile()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col p-6 bg-white rounded-xl shadow-md ${
        isMobile ? "min-w-[280px] flex-shrink-0" : "w-full"
      } ${className}`}
    >
      {icon && <div className={`mb-4 text-[#FF6B00] ${iconClassName}`}>{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
