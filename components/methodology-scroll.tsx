"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MethodologyCard } from "./methodology-card"
import { useMobile } from "@/hooks/use-mobile"

interface MethodologyItem {
  title: string
  description: string
}

interface MethodologyScrollProps {
  items: MethodologyItem[]
}

export const MethodologyScroll: React.FC<MethodologyScrollProps> = ({ items }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftIndicator, setShowLeftIndicator] = useState(false)
  const [showRightIndicator, setShowRightIndicator] = useState(true)
  const isMobile = useMobile()

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftIndicator(scrollLeft > 20)
    setShowRightIndicator(scrollLeft < scrollWidth - clientWidth - 20)
  }

  const scrollTo = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const cardWidth = 280 + 20 // card width + gap
    const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", handleScroll)
      // Check initial scroll position
      handleScroll()

      return () => {
        container.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div className="relative w-full">
      {showLeftIndicator && !isMobile && (
        <button
          className="scroll-indicator scroll-indicator-left"
          onClick={() => scrollTo("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className="methodology-scroll-container overflow-x-auto w-full methodology-card-container"
      >
        {items.map((item, index) => (
          <MethodologyCard key={index} title={item.title} description={item.description} index={index} />
        ))}
      </div>

      {showRightIndicator && !isMobile && (
        <button
          className="scroll-indicator scroll-indicator-right"
          onClick={() => scrollTo("right")}
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  )
}
