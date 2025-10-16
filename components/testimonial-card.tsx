"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
  delay?: number
  className?: string
}

export function TestimonialCard({ quote, author, role, delay = 0, className = "" }: TestimonialCardProps) {
  const isMobile = useMobile()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`p-6 bg-white rounded-xl shadow-md ${
        isMobile ? "min-w-[280px] flex-shrink-0" : "w-full"
      } ${className}`}
    >
      <div className="mb-4 text-[#FF6B00]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-4">{quote}</p>
      <div className="font-bold">{author}</div>
      {role && <div className="text-gray-500 text-sm">{role}</div>}
    </motion.div>
  )
}
