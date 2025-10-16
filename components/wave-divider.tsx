"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useOptimizedAnimations } from "@/hooks/use-optimized-animations"

interface WaveDividerProps {
  className?: string
  flip?: boolean
  color?: string
  height?: number
  withGlow?: boolean
}

export function WaveDivider({
  className = "",
  flip = false,
  color = "#ffffff",
  height = 120,
  withGlow = true,
}: WaveDividerProps) {
  const isMobile = useMobile()
  const shouldAnimate = useOptimizedAnimations()

  // Reduce complexity for mobile
  const mobileHeight = isMobile ? Math.min(height, 80) : height

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        height: `${mobileHeight}px`,
        marginBottom: "-1px", // Ensure no gap
      }}
    >
      {/* Optional glow effect */}
      {withGlow && (
        <div
          className="absolute left-1/4 top-1/4 w-32 h-32 rounded-full blur-3xl opacity-20 z-0"
          style={{ backgroundColor: color }}
        />
      )}

      {/* Floating elements with various shapes and sizes */}
      {/* Circle 1 - moves up and down */}
      <motion.div
        className="absolute w-8 h-8 rounded-full opacity-30 z-0"
        style={{ backgroundColor: color, left: "15%", top: "30%" }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Circle 2 - moves diagonally */}
      <motion.div
        className="absolute w-5 h-5 rounded-full opacity-20 z-0"
        style={{ backgroundColor: color, left: "35%", top: "60%" }}
        animate={{
          y: [0, -10, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.5,
        }}
      />

      {/* Circle 3 - moves horizontally */}
      <motion.div
        className="absolute w-10 h-10 rounded-full opacity-25 z-0"
        style={{ backgroundColor: color, left: "65%", top: "40%" }}
        animate={{
          x: [0, -20, 0],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      {/* Circle 4 - moves diagonally */}
      <motion.div
        className="absolute w-6 h-6 rounded-full opacity-15 z-0"
        style={{ backgroundColor: color, left: "85%", top: "55%" }}
        animate={{
          y: [0, -8, 0],
          x: [0, -12, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1.5,
        }}
      />

      {/* Square 1 - rotates and moves */}
      <motion.div
        className="absolute w-7 h-7 opacity-20 z-0"
        style={{
          backgroundColor: color,
          left: "25%",
          top: "20%",
          borderRadius: "2px",
        }}
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
          rotate: [0, 45, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4.5,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.7,
        }}
      />

      {/* Triangle 1 */}
      <motion.div
        className="absolute w-0 h-0 opacity-25 z-0"
        style={{
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderBottom: `16px solid ${color}`,
          left: "45%",
          top: "35%",
        }}
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0],
          rotate: [0, 30, 0],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 5.5,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1.2,
        }}
      />

      {/* Diamond shape */}
      <motion.div
        className="absolute opacity-20 z-0"
        style={{
          width: "14px",
          height: "14px",
          backgroundColor: color,
          transform: "rotate(45deg)",
          left: "75%",
          top: "25%",
        }}
        animate={{
          y: [0, -10, 0],
          x: [0, 15, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
      />

      {/* Small dot that moves quickly */}
      <motion.div
        className="absolute w-3 h-3 rounded-full opacity-30 z-0"
        style={{ backgroundColor: color, left: "10%", top: "50%" }}
        animate={{
          y: [0, -25, 0],
          x: [0, 25, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.2,
        }}
      />

      {/* Larger slow-moving circle */}
      <motion.div
        className="absolute w-12 h-12 rounded-full opacity-15 z-0"
        style={{ backgroundColor: color, left: "55%", top: "15%" }}
        animate={{
          y: [0, -8, 0],
          x: [0, -5, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.8,
        }}
      />

      {/* Improved wave with better shape and no bottom line */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={shouldAnimate ? { y: flip ? -3 : 3 } : false}
        animate={shouldAnimate ? { y: 0 } : false}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        style={{
          transform: flip ? "rotateX(180deg)" : "none",
        }}
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={color}
            d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,1000L0,1000Z"
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default WaveDivider
