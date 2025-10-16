"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"
import { useOptimizedAnimations } from "@/hooks/use-optimized-animations"

interface AnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedBackground({ children, className = "" }: AnimatedBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const shouldReduceMotion = useOptimizedAnimations()

  useEffect(() => {
    if (shouldReduceMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate relative position (values between -0.5 and 0.5)
      const moveX = (clientX / innerWidth - 0.5) * 2
      const moveY = (clientY / innerHeight - 0.5) * 2

      // Select all animatable elements
      const circles = backgroundRef.current.querySelectorAll(".animated-circle")
      const shapes = backgroundRef.current.querySelectorAll(".animated-shape")
      const glows = backgroundRef.current.querySelectorAll(".animated-glow")
      const dots = backgroundRef.current.querySelectorAll(".animated-dot")
      const particles = backgroundRef.current.querySelectorAll(".animated-particle")

      // Animate circles with different speeds and directions
      circles.forEach((circle, index) => {
        const factor = (index + 1) * (isMobile ? 5 : 15)
        const invertX = index % 2 === 0 ? 1 : -1
        const invertY = index % 3 === 0 ? -1 : 1
        ;(circle as HTMLElement).style.transform =
          `translate(${moveX * factor * invertX}px, ${moveY * factor * invertY}px)`
      })

      // Animate shapes with rotation and scale
      shapes.forEach((shape, index) => {
        const factor = (index + 1) * (isMobile ? 3 : 10)
        const rotate = moveX * (index + 1) * 5
        const scale = 1 + Math.abs(moveY) * 0.05
        ;(shape as HTMLElement).style.transform =
          `translate(${moveX * factor}px, ${moveY * factor}px) rotate(${rotate}deg) scale(${scale})`
      })

      // Animate glow effects with opposite movement
      glows.forEach((glow, index) => {
        const factor = (index + 1) * (isMobile ? 7 : 20)
        ;(glow as HTMLElement).style.transform = `translate(${-moveX * factor}px, ${-moveY * factor}px)`
        ;(glow as HTMLElement).style.opacity = `${0.3 + Math.abs(moveX * moveY) * 0.7}`
      })

      // Animate dots with subtle movement
      dots.forEach((dot, index) => {
        const factor = ((index % 5) + 1) * 2
        const invertX = index % 2 === 0 ? 1 : -1
        const invertY = index % 3 === 0 ? -1 : 1
        ;(dot as HTMLElement).style.transform =
          `translate(${moveX * factor * invertX}px, ${moveY * factor * invertY}px)`
      })

      // Animate particles with more dynamic movement
      particles.forEach((particle, index) => {
        const speedFactor = ((index % 3) + 1) * 3
        const distanceFactor = ((index % 5) + 1) * (isMobile ? 5 : 15)
        const rotationFactor = ((index % 7) + 1) * 10
        const invertX = index % 2 === 0 ? 1 : -1
        const invertY = index % 3 === 0 ? -1 : 1
        ;(particle as HTMLElement).style.transform =
          `translate(${moveX * distanceFactor * invertX}px, ${moveY * distanceFactor * invertY}px) rotate(${moveX * rotationFactor}deg)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isMobile, shouldReduceMotion])

  return (
    <div ref={backgroundRef} className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!shouldReduceMotion && (
          <>
            {/* Main gradient blobs - Fixed positioning to avoid navbar issues */}
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full filter blur-2xl opacity-15 animate-blob animated-circle"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 rounded-full filter blur-2xl opacity-15 animate-blob animation-delay-2000 animated-circle"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-full filter blur-2xl opacity-10 animate-blob animation-delay-4000 animated-circle"></div>

            {/* Subtle accent elements */}
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full filter blur-xl opacity-10 animate-pulse animated-shape"></div>
            <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full filter blur-xl opacity-10 animate-pulse animation-delay-2000 animated-shape"></div>

            {/* New decorative elements - Geometric shapes */}
            <div className="absolute top-[40%] left-[15%] w-16 h-16 border border-gray-700/20 rounded-lg transform rotate-45 animate-float-slow animated-shape"></div>
            <div className="absolute bottom-[40%] right-[15%] w-16 h-16 border border-gray-700/20 rounded-lg transform rotate-12 animate-float-delayed animated-shape"></div>

            {/* Diamond shapes */}
            <div className="absolute top-[30%] right-[30%] w-8 h-8 border border-gray-700/30 transform rotate-45 animate-float-slow animated-shape"></div>
            <div className="absolute bottom-[30%] left-[30%] w-8 h-8 border border-gray-700/30 transform rotate-45 animate-float-delayed animated-shape"></div>

            {/* Particle system - small floating elements */}
            <div className="absolute inset-0">
              {/* Top section particles */}
              <div className="absolute top-[25%] left-[20%] w-2 h-2 bg-gray-700/20 rounded-full animate-float-particle animated-particle"></div>
              <div className="absolute top-[35%] left-[40%] w-1 h-1 bg-gray-700/30 rounded-full animate-float-particle-delayed animated-particle"></div>
              <div className="absolute top-[30%] left-[60%] w-1.5 h-1.5 bg-gray-700/25 rounded-full animate-float-particle-slow animated-particle"></div>
              <div className="absolute top-[40%] left-[80%] w-1 h-1 bg-gray-700/30 rounded-full animate-float-particle animated-particle"></div>

              {/* Bottom section particles */}
              <div className="absolute bottom-[25%] right-[20%] w-2 h-2 bg-gray-700/20 rounded-full animate-float-particle-delayed animated-particle"></div>
              <div className="absolute bottom-[35%] right-[40%] w-1 h-1 bg-gray-700/30 rounded-full animate-float-particle animated-particle"></div>
              <div className="absolute bottom-[30%] right-[60%] w-1.5 h-1.5 bg-gray-700/25 rounded-full animate-float-particle-slow animated-particle"></div>
              <div className="absolute bottom-[40%] right-[80%] w-1 h-1 bg-gray-700/30 rounded-full animate-float-particle-delayed animated-particle"></div>
            </div>

            {/* Additional visual elements - Dot patterns */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-[15%] left-[25%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[25%] left-[35%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[35%] left-[15%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[45%] left-[45%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[55%] left-[25%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[65%] left-[55%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[75%] left-[35%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[15%] right-[25%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[25%] right-[35%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[35%] right-[15%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[45%] right-[45%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[55%] right-[25%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[65%] right-[55%] w-1 h-1 bg-white rounded-full animated-dot"></div>
              <div className="absolute top-[75%] right-[35%] w-1 h-1 bg-white rounded-full animated-dot"></div>
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_transparent_20%,_#fff_20%,_#fff_80%,_transparent_80%,_transparent),radial-gradient(circle,_transparent_20%,_#fff_20%,_#fff_80%,_transparent_80%,_transparent)_25px_25px,linear-gradient(#000_2px,_transparent_2px)_0_-1px,linear-gradient(90deg,_#000_2px,_transparent_2px)_-1px_0] bg-[length:50px_50px,50px_50px,25px_25px,25px_25px]"></div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 bg-radial-gradient-to-transparent from-transparent to-black opacity-20"></div>

            {/* Floating elements */}
            <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-gray-800 to-transparent rounded-full filter blur-md opacity-10 animate-float animated-shape"></div>
            <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-gradient-to-br from-gray-800 to-transparent rounded-full filter blur-md opacity-10 animate-float-delayed animated-shape"></div>

            {/* Subtle light rays */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-gray-800/10 to-transparent opacity-5"></div>
          </>
        )}
        {shouldReduceMotion && (
          <>
            {/* Static version for reduced motion preference */}
            <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full filter blur-2xl opacity-15"></div>
            <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-700 rounded-full filter blur-2xl opacity-15"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-full filter blur-2xl opacity-10"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full filter blur-xl opacity-10"></div>
            <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full filter blur-xl opacity-10"></div>

            {/* New static decorative elements */}
            <div className="absolute top-[40%] left-[15%] w-16 h-16 border border-gray-700/20 rounded-lg transform rotate-45"></div>
            <div className="absolute bottom-[40%] right-[15%] w-16 h-16 border border-gray-700/20 rounded-lg transform rotate-12"></div>
            <div className="absolute top-[30%] right-[30%] w-8 h-8 border border-gray-700/30 transform rotate-45"></div>
            <div className="absolute bottom-[30%] left-[30%] w-8 h-8 border border-gray-700/30 transform rotate-45"></div>

            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle,_transparent_20%,_#fff_20%,_#fff_80%,_transparent_80%,_transparent),radial-gradient(circle,_transparent_20%,_#fff_20%,_#fff_80%,_transparent_80%,_transparent)_25px_25px,linear-gradient(#000_2px,_transparent_2px)_0_-1px,linear-gradient(90deg,_#000_2px,_transparent_2px)_-1px_0] bg-[length:50px_50px,50px_50px,25px_25px,25px_25px]"></div>
            <div className="absolute inset-0 bg-radial-gradient-to-transparent from-transparent to-black opacity-20"></div>
          </>
        )}
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
