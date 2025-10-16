"use client"

import { motion } from "framer-motion"

interface HamburgerButtonProps {
  isOpen: boolean
  toggle: () => void
  className?: string
}

export function HamburgerButton({ isOpen, toggle, className = "" }: HamburgerButtonProps) {
  return (
    <motion.button
      className={`relative z-50 flex flex-col justify-center items-center w-12 h-12 rounded-full bg-white shadow-md focus:outline-none ${className}`}
      onClick={toggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <motion.span
        className="block w-6 h-0.5 bg-black rounded-full"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 2 : -4,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-black rounded-full my-1"
        animate={{
          opacity: isOpen ? 0 : 1,
          x: isOpen ? 20 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="block w-6 h-0.5 bg-black rounded-full"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -2 : 4,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
