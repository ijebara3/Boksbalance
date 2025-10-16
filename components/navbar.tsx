"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Over Ons", href: "/over-ons" },
  { name: "Programma", href: "/programma" },
  { name: "Doelgroep", href: "/doelgroep" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Fixed header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
        )}
        style={{ pointerEvents: "auto" }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            href="/"
            className="relative z-[9999] transition-transform duration-300 hover:scale-105 hidden md:block"
          >
            <Image
              src="/images/boksbalance-logo.png"
              alt="BoksBalance Logo"
              width={120}
              height={60}
              className="h-12 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-black/5",
                  pathname === item.href ? "text-black" : "text-gray-600 hover:text-black",
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-black mx-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            <Link href="/aanmelden">
              <Button
                className="ml-4 bg-black hover:bg-black/90 text-white shadow-sm hover:shadow transition-all"
                size="sm"
              >
                Aanmelden
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button - Always visible and clickable */}
          <div className="md:hidden relative z-[10000]" style={{ pointerEvents: "auto" }}>
            <button
              className="p-2 rounded-full bg-white/90 shadow-md transition-colors hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Sluit menu" : "Open menu"}
              style={{ pointerEvents: "auto" }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.05 }}
                  >
                    <X className="h-6 w-6 text-black" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.05 }}
                  >
                    <Menu className="h-6 w-6 text-black" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Separate from header */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-[9998]"
            onClick={() => setIsOpen(false)}
            style={{ pointerEvents: "auto" }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu - Separate from header */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: "100%" }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-xl md:hidden z-[9999] overflow-y-auto"
            style={{ pointerEvents: "auto" }}
          >
            <div className="p-6 pb-24">
              <div className="flex justify-between items-center mb-8">
                <Image
                  src="/images/boksbalance-logo.png"
                  alt="BoksBalance Logo"
                  width={100}
                  height={50}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Sluit menu"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <motion.nav
                className="flex flex-col space-y-1"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.03, delayChildren: 0.05 },
                  },
                  closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      open: { y: 0, opacity: 1 },
                      closed: { y: -5, opacity: 0 },
                    }}
                    transition={{ duration: 0.08 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        pathname === item.href
                          ? "text-black bg-black/5"
                          : "text-gray-600 hover:text-black hover:bg-gray-50",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.name}</span>
                      {pathname === item.href && (
                        <motion.span
                          layoutId="mobile-navbar-indicator"
                          className="ml-auto w-1.5 h-1.5 rounded-full bg-black"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: -5, opacity: 0 },
                  }}
                  transition={{ duration: 0.15 }}
                  className="pt-4"
                >
                  <Link href="/aanmelden" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-black hover:bg-black/90 text-white">Aanmelden</Button>
                  </Link>
                </motion.div>
              </motion.nav>

              <div className="mt-12 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-4">Contact</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-600">
                    <span className="bg-black/10 p-1.5 rounded-full mr-3">
                      <svg className="h-3.5 w-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                    <span>nassimelmasaoudi1997@hotmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="bg-black/10 p-1.5 rounded-full mr-3">
                      <svg className="h-3.5 w-3.5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </span>
                    <span>+31 6 23199757</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
