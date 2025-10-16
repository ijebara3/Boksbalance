"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useOptimizedAnimations } from "@/hooks/use-optimized-animations"

interface MethodologyCardProps {
  title: string
  description: string
  index: number
}

export const MethodologyCard: React.FC<MethodologyCardProps> = ({ title, description, index }) => {
  const { shouldReduceMotion } = useOptimizedAnimations()

  const variants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0.6,
      y: shouldReduceMotion ? 0 : 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="methodology-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      <div className="methodology-card-content">
        <h3 className="methodology-card-title">{title}</h3>
        <p className="methodology-card-description">{description}</p>
      </div>
    </motion.div>
  )
}
