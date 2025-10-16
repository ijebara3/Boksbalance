"use client"

import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
  className?: string
  description?: string
  alignment?: "left" | "center" | "right"
}

export function SectionTitle({ subtitle, title, description, alignment = "left", className = "" }: SectionTitleProps) {
  const isMobile = useMobile()

  const alignmentClasses = () => {
    if (isMobile) {
      return "text-center" // Always center on mobile
    }

    switch (alignment) {
      case "center":
        return "text-center"
      case "right":
        return "text-right"
      default:
        return "text-left"
    }
  }

  return (
    <div className={cn("mb-12", alignmentClasses(), className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl">{subtitle}</p>}
    </div>
  )
}
