"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const isMobile = useMobile()

  useEffect(() => {
    // Shorter delay on mobile for better perceived performance
    const timer = setTimeout(
      () => {
        setIsLoading(false)
      },
      isMobile ? 200 : 300,
    )

    return () => clearTimeout(timer)
  }, [isMobile])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: isMobile ? 0.2 : 0.3 }}
              className="w-16 h-16 relative"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Render children with opacity transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: isMobile ? 0.2 : 0.3 }}
        className={isMobile ? "reduce-motion" : ""}
      >
        {children}
      </motion.div>
    </>
  )
}
