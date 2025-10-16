"use client"

import { useState, useEffect } from "react"
import { useMobile } from "./use-mobile"

type AnimationVariant = "fadeIn" | "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scale" | "none"

interface AnimationProps {
  initial: Record<string, any>
  animate: Record<string, any>
  transition: Record<string, any>
}

export function useOptimizedAnimations() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => {
      setShouldReduceMotion(mediaQuery.matches)
    }

    // Initial check
    updateMotionPreference()

    // Add listener for changes
    mediaQuery.addEventListener("change", updateMotionPreference)

    // Clean up
    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference)
    }
  }, [])

  // Function to get animation properties based on variant
  const getAnimationProps = (variant: AnimationVariant): AnimationProps => {
    // If reduced motion is preferred, return minimal animation
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3 },
      }
    }

    // Otherwise, return full animation based on variant
    switch (variant) {
      case "fadeIn":
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.7 },
        }
      case "fadeUp":
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
        }
      case "fadeDown":
        return {
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
        }
      case "fadeLeft":
        return {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.7 },
        }
      case "fadeRight":
        return {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.7 },
        }
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.7 },
        }
      case "none":
      default:
        return {
          initial: {},
          animate: {},
          transition: {},
        }
    }
  }

  // Function to get viewport settings for IntersectionObserver
  const getViewportSettings = () => {
    return {
      once: true,
      margin: isMobile ? "0px 0px 50px 0px" : "0px 0px 100px 0px",
    }
  }

  return {
    getAnimationProps,
    getViewportSettings,
    isMobile: shouldReduceMotion || isMobile,
  }
}
