"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionTransitionProps {
  className?: string
  fromColor?: "primary" | "secondary" | "white" | "gray"
  toColor?: "primary" | "secondary" | "white" | "gray"
}

export default function SectionTransition({
  className = "",
  fromColor = "white",
  toColor = "primary",
}: SectionTransitionProps) {
  const colorMap = {
    primary: "from-primary to-primary",
    secondary: "from-secondary to-secondary",
    white: "from-white to-white",
    gray: "from-gray-50 to-gray-50",
  }

  return (
    <div className={cn("relative h-32 md:h-40 overflow-hidden", `bg-gradient-to-b ${colorMap[toColor]}`, className)}>
      {/* Top wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            className={`fill-${fromColor}`}
            initial={{ y: 0 }}
            animate={{
              y: [0, -5, 0],
              d: [
                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,80L48,96C96,112,192,144,288,170.7C384,197,480,219,576,208C672,197,768,155,864,133.3C960,112,1056,112,1152,133.3C1248,155,1344,197,1392,218.7L1440,240L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
                "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-12 h-12 rounded-full bg-secondary/20 blur-md"
        />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/3 right-1/3 w-8 h-8 rounded-full bg-white/30 blur-sm"
        />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-10 h-10 rounded-full bg-primary/30 blur-md"
        />

        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.3 + Math.random() * 0.4,
              scale: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.3 + Math.random() * 0.4,
              scale: 0.5 + Math.random() * 0.5,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-secondary/40" : "bg-white/30"}`}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}
      </div>

      {/* Middle decorative line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0L48,5.3C96,11,192,21,288,37.3C384,53,480,75,576,69.3C672,64,768,32,864,21.3C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            className={`fill-${toColor}`}
            initial={{ y: 0 }}
            animate={{
              y: [0, 5, 0],
              d: [
                "M0,0L48,5.3C96,11,192,21,288,37.3C384,53,480,75,576,69.3C672,64,768,32,864,21.3C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                "M0,0L48,10.3C96,16,192,26,288,42.3C384,58,480,80,576,74.3C672,69,768,37,864,26.3C960,16,1056,26,1152,37C1248,48,1344,58,1392,63.7L1440,69L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                "M0,0L48,5.3C96,11,192,21,288,37.3C384,53,480,75,576,69.3C672,64,768,32,864,21.3C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
    </div>
  )
}
