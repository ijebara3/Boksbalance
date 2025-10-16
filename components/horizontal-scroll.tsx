"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface HorizontalScrollProps {
  children: ReactNode
  className?: string
  itemClassName?: string
  snapScroll?: boolean
}

export default function HorizontalScroll({
  children,
  className = "",
  itemClassName = "",
  snapScroll = true,
}: HorizontalScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Enable drag scrolling on mobile
  useEffect(() => {
    if (!isMobile || !scrollContainerRef.current) return

    const scrollContainer = scrollContainerRef.current
    let isDown = false
    let startX: number
    let scrollLeft: number

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDown = true
      scrollContainer.classList.add("active")
      if (e instanceof MouseEvent) {
        startX = e.pageX - scrollContainer.offsetLeft
      } else {
        startX = e.touches[0].pageX - scrollContainer.offsetLeft
      }
      scrollLeft = scrollContainer.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
      scrollContainer.classList.remove("active")
    }

    const handleMouseUp = () => {
      isDown = false
      scrollContainer.classList.remove("active")
    }

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return
      e.preventDefault()
      let x: number
      if (e instanceof MouseEvent) {
        x = e.pageX - scrollContainer.offsetLeft
      } else {
        x = e.touches[0].pageX - scrollContainer.offsetLeft
      }
      const walk = (x - startX) * 1.5 // Reduced scroll speed multiplier for smoother scrolling
      scrollContainer.scrollLeft = scrollLeft - walk
    }

    // Mouse events
    scrollContainer.addEventListener("mousedown", handleMouseDown as EventListener)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)
    scrollContainer.addEventListener("mouseup", handleMouseUp)
    scrollContainer.addEventListener("mousemove", handleMouseMove as EventListener)

    // Touch events
    scrollContainer.addEventListener("touchstart", handleMouseDown as EventListener)
    scrollContainer.addEventListener("touchend", handleMouseUp)
    scrollContainer.addEventListener("touchmove", handleMouseMove as EventListener)

    return () => {
      // Mouse events
      scrollContainer.removeEventListener("mousedown", handleMouseDown as EventListener)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      scrollContainer.removeEventListener("mouseup", handleMouseUp)
      scrollContainer.removeEventListener("mousemove", handleMouseMove as EventListener)

      // Touch events
      scrollContainer.removeEventListener("touchstart", handleMouseDown as EventListener)
      scrollContainer.removeEventListener("touchend", handleMouseUp)
      scrollContainer.removeEventListener("touchmove", handleMouseMove as EventListener)
    }
  }, [isMobile])

  return (
    <div
      ref={scrollContainerRef}
      className={`flex overflow-x-auto ${snapScroll ? "snap-x snap-mandatory" : ""} hide-scrollbar ${className}`}
      style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div key={index} className={`snap-start ${itemClassName}`}>
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
