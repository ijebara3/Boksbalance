"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Brain, Dumbbell, Heart, Shield, User, ArrowRight, CheckCircle2, Clock, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useOptimizedAnimations } from "@/hooks/use-optimized-animations"
import { useMobile } from "@/hooks/use-mobile"

// Animation variants - simplified for smoother performance
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Reduced for subtler animation
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 10 }, // Reduced y offset for subtler animation
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Faster animation
      ease: "easeOut",
    },
  },
  hover: {
    y: -3, // Reduced hover movement
    boxShadow: "0 8px 20px rgba(0, 160, 188, 0.1)",
    transition: {
      duration: 0.2, // Faster hover transition
      ease: "easeOut",
    },
  },
}

export default function ProgrammaPage() {
  const isMobile = useMobile()
  const { getAnimationProps, getViewportSettings, isMobile: isMobileOptimized } = useOptimizedAnimations()
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [phasesRef, phasesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [themesRef, themesInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [methodsRef, methodsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Main background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white"></div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>

          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300a0bc' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Ons Programma</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Psy-boks biedt een unieke combinatie van bokstraining en ambulante begeleiding voor jongeren.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">12 weken programma</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <User className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Individuele begeleiding</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Shield className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Terugvalpreventie</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link href="/aanmelden">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Aanmelden
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                  >
                    Contact opnemen
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/1op1boksen3.jpg" alt="BoksBalance programma" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Dumbbell className="h-8 w-8 text-primary" />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  <Brain className="h-8 w-8 text-primary" />
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-2xl -z-10 hidden md:block"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10 hidden md:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program Phases Section */}
      <section ref={phasesRef} className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl transform translate-y-1/3 -translate-x-1/3"></div>

          {/* Boxing gloves decorative element */}
          <motion.div
            initial={{ opacity: 0.1, y: -20 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 opacity-10 hidden lg:block"
          >
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
              <path d="M12,2C9.97,2 8.1,2.67 6.6,3.8L4.8,2L4,2.8L5.4,4.2C4.17,5.67 3.5,7.5 3.5,9.5A9,9 0 0,0 12.5,18.5C17.5,18.5 21.5,14.5 21.5,9.5C21.5,5.5 17.5,2 12,2M16.06,6.44L17.47,5.03C16.9,4.46 16.44,4.15 16.06,4.03L15.5,5.88C15.47,6.15 15.44,6.42 15.41,6.7L16.06,6.44M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V16.91C16.17,16.43 18.5,13.5 18.5,10A6.5,6.5 0 0,0 12,3.5C10.27,3.5 8.71,4.07 7.47,5.03L8.88,6.44C9.15,4.94 10.5,4 12,4M8.7,7.5L7.7,6.5C7.87,6.33 8.15,6.15 8.5,6.05L8.03,4.03C7.16,4.33 6.5,4.79 6,5.29L7.47,6.76C7.5,7.03 7.8,7.3 8.7,7.5M6.32,8.82L5.56,8.06C5.06,9.79 5.32,10.77 5.56,11.06L7.5,9.12C6.97,9.12 6.64,9.03 6.32,8.82M9.08,10.18L7.14,12.12C8.29,12.44 9,12.03 9.38,11.77L10.97,13.35C11.94,14.32 12.5,13.97 12.79,13.65L11.24,12.1C11.5,11.35 11.5,10.75 11.24,10C10.97,9.26 10.44,8.82 9.08,10.18M7.16,5.56L6.3,5.56C6.38,5.44 6.46,5.31 6.56,5.18L5.83,4.46C5.58,4.73 5.38,5.03 5.21,5.35L6.11,6.25C6.29,6.18 6.5,6.06 7.16,5.56M10.91,7.32L9.5,5.91C9.03,6.5 8.82,6.91 8.67,7.18L10.03,8.53C10.29,8.29 10.56,8 10.91,7.32M11.77,9.08L13.17,10.5C14.21,9.12 13.91,8.5 13.78,8.26L12.03,6.5C11.88,7.09 11.65,8.15 11.77,9.08Z" />
            </svg>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={phasesInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
              12-weken programma
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Opbouw van het Programma</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Het Psy-boks-programma is opgebouwd in verschillende fases, verspreid over 12 weken, elk gericht op
              specifieke vaardigheden en ontwikkeling.
            </p>
          </motion.div>

          {/* Program phases - Timeline style */}
          <div className="relative mb-20">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-secondary rounded-full hidden lg:block"></div>

            {/* Mobile horizontal scroll container - Always visible on mobile */}
            <div className="lg:hidden mobile-scroll-container">
              <div className="mobile-scroll-wrapper">
                {/* Fase 1 - Mobile */}
                <motion.div
                  className="mobile-scroll-item"
                  variants={cardVariants}
                  initial="hidden"
                  animate={phasesInView ? "visible" : "hidden"}
                  whileHover="hover"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full relative overflow-hidden">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mt-8 -mr-8"></div>

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold shadow-lg mb-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">Fase 1: Basisvaardigheden</h3>
                    <div className="w-12 h-1 bg-secondary mb-4 rounded-full"></div>
                    <p className="text-gray-600 mb-4">
                      Jongeren leren basis bokstechnieken en werken aan eerste vaardigheden rondom spanningsregulatie en
                      zelfcontrole. Deze fase legt het fundament voor verdere ontwikkeling.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Basis bokstechnieken</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Eerste spanningsregulatie</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Zelfcontrole oefeningen</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm font-medium text-primary">Weken 1-4</span>
                      <div className="flex items-center text-sm text-secondary font-medium">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>4 weken</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Fase 2 - Mobile */}
                <motion.div
                  className="mobile-scroll-item"
                  variants={cardVariants}
                  initial="hidden"
                  animate={phasesInView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                  whileHover="hover"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full relative overflow-hidden">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mt-8 -mr-8"></div>

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold shadow-lg mb-4">
                      <Brain className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">Fase 2: Gevorderde vaardigheden</h3>
                    <div className="w-12 h-1 bg-secondary mb-4 rounded-full"></div>
                    <p className="text-gray-600 mb-4">
                      Jongeren verdiepen hun emotieregulatie, werken aan bewustwording van gedachten en gevoelens en
                      oefenen sociale vaardigheden in een veilige omgeving.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Emotieregulatie verdieping</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Gedachten bewustwording</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Sociale vaardigheden</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm font-medium text-primary">Weken 5-8</span>
                      <div className="flex items-center text-sm text-secondary font-medium">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>4 weken</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Fase 3 - Mobile */}
                <motion.div
                  className="mobile-scroll-item"
                  variants={cardVariants}
                  initial="hidden"
                  animate={phasesInView ? "visible" : "hidden"}
                  transition={{ delay: 0.4 }}
                  whileHover="hover"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full relative overflow-hidden">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mt-8 -mr-8"></div>

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold shadow-lg mb-4">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">Fase 3: Integratie en zelfstandigheid</h3>
                    <div className="w-12 h-1 bg-secondary mb-4 rounded-full"></div>
                    <p className="text-gray-600 mb-4">
                      Jongeren passen geleerde vaardigheden toe in (gecontroleerde) sparringsvormen en ontwikkelen een
                      persoonlijk actieplan voor blijvende resultaten.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Toepassing in sparring</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Persoonlijk actieplan</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Zelfstandige toepassing</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm font-medium text-primary">Weken 9-12</span>
                      <div className="flex items-center text-sm text-secondary font-medium">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>4 weken</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Fase 4 - Mobile */}
                <motion.div
                  className="mobile-scroll-item"
                  variants={cardVariants}
                  initial="hidden"
                  animate={phasesInView ? "visible" : "hidden"}
                  transition={{ delay: 0.6 }}
                  whileHover="hover"
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full relative overflow-hidden">
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mt-8 -mr-8"></div>

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold shadow-lg mb-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">Fase 4: Terugvalpreventie</h3>
                    <div className="w-12 h-1 bg-secondary mb-4 rounded-full"></div>
                    <p className="text-gray-600 mb-4">
                      Na het traject bieden we nazorggesprekken aan na 4, 8 en 12 weken om terugval te signaleren en te
                      voorkomen.
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Nazorggesprek na 4 weken</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Nazorggesprek na 8 weken</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">Nazorggesprek na 12 weken</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-sm font-medium text-primary">Na het traject</span>
                      <div className="flex items-center text-sm text-secondary font-medium">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>3 maanden nazorg</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Desktop timeline grid */}
            <div className="hidden lg:grid grid-cols-2 gap-8">
              {/* Phase 1 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={phasesInView ? "visible" : "hidden"}
                whileHover="hover"
                className="lg:col-start-1 lg:text-right"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative h-full">
                  <div className="absolute top-6 -right-4 lg:block hidden">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center lg:justify-end">
                    <Shield className="h-5 w-5 mr-2 lg:order-2 lg:ml-2 lg:mr-0" />
                    <span>Fase 1: Basisvaardigheden</span>
                  </h3>
                  <div className="w-12 h-1 bg-secondary mb-4 rounded-full lg:ml-auto"></div>
                  <p className="text-gray-600 mb-4">
                    Jongeren leren basis bokstechnieken en werken aan eerste vaardigheden rondom spanningsregulatie en
                    zelfcontrole. Deze fase legt het fundament voor verdere ontwikkeling.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start lg:justify-end">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 lg:order-2 lg:ml-2 lg:mr-0 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Basis bokstechnieken</span>
                    </div>
                    <div className="flex items-start lg:justify-end">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 lg:order-2 lg:ml-2 lg:mr-0 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Eerste spanningsregulatie</span>
                    </div>
                    <div className="flex items-start lg:justify-end">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 lg:order-2 lg:ml-2 lg:mr-0 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Zelfcontrole oefeningen</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center text-sm text-secondary font-medium">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>4 weken</span>
                    </div>
                    <span className="text-sm font-medium text-primary">Weken 1-4</span>
                  </div>
                </div>
              </motion.div>

              {/* Empty space for timeline */}
              <div className="hidden lg:block"></div>

              {/* Phase 2 */}
              <div className="hidden lg:block"></div>

              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={phasesInView ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
                whileHover="hover"
                className="lg:col-start-2"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative h-full">
                  <div className="absolute top-6 -left-4 lg:block hidden">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <Brain className="h-5 w-5 mr-2" />
                    <span>Fase 2: Gevorderde vaardigheden</span>
                  </h3>
                  <div className="w-12 h-1 bg-secondary mb-4 rounded-full"></div>
                  <p className="text-gray-600 mb-4">
                    Jongeren verdiepen hun emotieregulatie, werken aan bewustwording van gedachten en gevoelens en
                    oefenen sociale vaardigheden in een veilige omgeving.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Emotieregulatie verdieping</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Gedachten bewustwording</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Sociale vaardigheden</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">Weken 5-8</span>
                    <div className="flex items-center text-sm text-secondary font-medium">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>4 weken</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={phasesInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
                whileHover="hover"
                className="lg:col-start-1 lg:text-right"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative h-full">
                  <div className="absolute top-6 -right-4 lg:block hidden">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center lg:justify-end">
                    <Heart className="h-5 w-5 mr-2 lg:order-2 lg:ml-2 lg:mr-0" />
                    <span>Fase 3: Integratie en zelfstandigheid</span>
                  </h3>
                  <div className="w-12 h-1 bg-secondary mb-4 rounded-full lg:ml-auto"></div>
                  <p className="text-gray-600 mb-4">
                    Jongeren passen geleerde vaardigheden toe in (gecontroleerde) sparringsvormen en ontwikkelen een
                    persoonlijk actieplan voor blijvende resultaten.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start lg:justify-end">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 lg:order-2 lg:ml-2 lg:mr-0 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Toepassing in sparring</span>
                    </div>
                    <div className="flex items-start lg:justify-end">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 lg:order-2 lg:ml-2 lg:mr-0 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Persoonlijk actieplan</span>
                    </div>
                    <div className="flex items-start lg:justify-end">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 lg:order-2 lg:ml-2 lg:mr-0 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Zelfstandige toepassing</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center text-sm text-secondary font-medium">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>4 weken</span>
                    </div>
                    <span className="text-sm font-medium text-primary">Weken 9-12</span>
                  </div>
                </div>
              </motion.div>

              {/* Empty space for timeline */}
              <div className="hidden lg:block"></div>

              {/* Phase 4 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={phasesInView ? "visible" : "hidden"}
                transition={{ delay: 0.6 }}
                whileHover="hover"
                className="lg:col-start-2"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative h-full">
                  <div className="absolute top-6 -left-4 lg:block hidden">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">
                      4
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    <span>Fase 4: Terugvalpreventie</span>
                  </h3>
                  <div className="w-12 h-1 bg-secondary mb-4 rounded-full"></div>
                  <p className="text-gray-600 mb-4">
                    Na het traject bieden we nazorggesprekken aan na 4, 8 en 12 weken om terugval te signaleren en te
                    voorkomen.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Nazorggesprek na 4 weken</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Nazorggesprek na 8 weken</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Nazorggesprek na 12 weken</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">Na het traject</span>
                    <div className="flex items-center text-sm text-secondary font-medium">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>3 maanden nazorg</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={phasesInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 text-primary/10">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-primary">Praktijkvoorbeeld</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 relative">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/programmapraktijkvoorbeeld.jpg"
                      alt="Jongeren tijdens bokstraining"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full -z-10 hidden md:block"></div>
                </div>
                <div className="md:w-2/3">
                  <p className="italic text-lg text-gray-600 mb-4">
                    "Tijdens de integratiefase leert een 17-jarige jongen die snel opvliegend is, om in een lichte
                    sparring zijn boosheid te controleren en kalm te blijven onder druk."
                  </p>
                  <p className="text-gray-600">
                    Door gerichte oefeningen en reflectiemomenten heeft hij geleerd zijn emoties te herkennen voordat ze
                    escaleren. De fysieke training geeft hem een uitlaatklep, terwijl de begeleiding hem helpt inzicht
                    te krijgen in zijn triggers en alternatieve reacties te ontwikkelen.
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                      <Image
                        src="/images/AliZoubai.jpg"
                        alt="Ali Zoubai, Trainer Psy-boks"
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Ali Zoubai</p>
                      <p className="text-sm text-gray-500">Trainer Psy-boks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Themes Section */}
      <section
        ref={themesRef}
        className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle circles */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2"></div>

          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Subtle wave at bottom */}
          <svg
            className="absolute bottom-0 left-0 w-full text-white/5"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40L48,42.7C96,45,192,51,288,53.3C384,56,480,56,576,50.7C672,45,768,35,864,36.7C960,39,1056,53,1152,56.7C1248,61,1344,55,1392,52L1440,49L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={themesInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Thema's per Fase</h2>
            <div className="w-20 h-1 bg-white/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Elke fase van het programma richt zich op specifieke thema's die bijdragen aan de ontwikkeling van de
              jongeren.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={themesInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Theme 1 - Now Zelfinzicht */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-3 group-hover:bg-white/30 transition-colors duration-300">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Zelfinzicht</h3>
              </div>
              <p className="text-white/80 mb-4">
                Door reflectie en begeleiding krijgen jongeren inzicht in hun eigen gedragspatronen en de oorzaken
                hiervan.
              </p>
              <p className="text-white/80">
                Hierdoor kunnen ze bewuster keuzes maken en verantwoordelijkheid nemen voor hun acties.
              </p>

              {/* Progress indicator */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-sm mb-2">
                  <span>Fase 1</span>
                  <span>Fase 3</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-secondary/70 rounded-full"
                    style={{ width: "33%" }}
                  ></div>
                </div>
              </div>
            </motion.div>

            {/* Theme 2 - Now Emotieregulatie */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-3 group-hover:bg-white/30 transition-colors duration-300">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Emotieregulatie</h3>
              </div>
              <p className="text-white/80 mb-4">
                Jongeren leren herkennen wanneer hun spanning oploopt en welke technieken ze kunnen inzetten om emoties
                zoals boosheid, angst of verdriet te reguleren.
              </p>
              <p className="text-white/80">
                Boksen biedt een directe fysieke ingang om deze emoties te voelen en te leren sturen.
              </p>

              {/* Progress indicator */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-sm mb-2">
                  <span>Fase 1</span>
                  <span>Fase 3</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-secondary/70 rounded-full"
                    style={{ width: "66%" }}
                  ></div>
                </div>
              </div>
            </motion.div>

            {/* Theme 3 */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

              <div className="flex items-center mb-4">
                <div className="bg-white/20 p-3 rounded-full mr-3 group-hover:bg-white/30 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Zelfvertrouwen en Weerbaarheid</h3>
              </div>
              <p className="text-white/80 mb-4">
                Door succeservaringen in de trainingen bouwen jongeren aan hun zelfvertrouwen.
              </p>
              <p className="text-white/80">
                Ze leren grenzen stellen, opkomen voor zichzelf en omgaan met afwijzing of kritiek.
              </p>

              {/* Progress indicator */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center text-sm mb-2">
                  <span>Fase 1</span>
                  <span>Fase 3</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-secondary to-secondary/70 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={themesInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full -mt-20 -mr-20"></div>

              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-white/20 p-2 rounded-lg mr-3">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Praktijkvoorbeeld
              </h3>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 relative">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/praktijkvoorbeeldneezeggen.png"
                      alt="Jongere leert defensieve technieken en grenzen stellen tijdens bokstraining"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className="italic text-xl text-white/90 mb-4">
                    "Een 15-jarige jongen leert tijdens een individuele training hoe hij fysiek en verbaal 'nee' kan
                    zeggen. Door defensieve bokstechnieken oefent hij letterlijk en figuurlijk het afweren van
                    ongewenste invloeden."
                  </p>
                  <p className="text-white/80">
                    In de eerste fase leert hij basishouding en verdedigingstechnieken die hem letterlijk steviger doen
                    staan. In fase twee oefent hij met het herkennen van situaties waarin hij grenzen wil stellen en hoe
                    hij deze kan communiceren. In de laatste fase past hij dit toe in realistische scenario's en
                    ontwikkelt hij een persoonlijk actieplan voor moeilijke situaties in zijn dagelijks leven.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methods Section */}
      <section ref={methodsRef} className="py-24 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl transform translate-y-1/3 -translate-x-1/3"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={methodsRef ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Onze aanpak
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Werkvormen en Methodieken</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Tijdens Psy-boks maken we gebruik van een combinatie van fysieke, mentale en sociale werkvormen.
            </p>
          </motion.div>

          {/* Methods cards - Horizontal scroll on mobile */}
          <div className="methodology-cards-container">
            <div className="methodology-cards-wrapper">
              {/* Method 1 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={methodsInView ? "visible" : "hidden"}
                whileHover="hover"
                className="methodology-card"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start mb-4 gap-2">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold break-words hyphens-auto text-balance leading-tight">
                      Bokstraining
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Gerichte technieken en combinaties die aansluiten bij het thema van de sessie (bijvoorbeeld
                    controle, grenzen stellen, samenwerken).
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Jab-cross combinaties voor focus</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Verdedigingstechnieken voor grenzen</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Partnerwerk voor samenwerking</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Method 2 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={methodsInView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
                whileHover="hover"
                className="methodology-card"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start mb-4 gap-2">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold break-words hyphens-auto text-balance leading-tight">
                      Ademhalingstechnieken
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Jongeren leren ademhalingsoefeningen zoals de 4-7-8 techniek om stressmomenten te reguleren.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>4-7-8 ademhalingstechniek</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Buikademhaling voor kalmte</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Ademfocus tijdens inspanning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Method 3 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={methodsInView ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
                whileHover="hover"
                className="methodology-card"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start mb-4 gap-2">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold break-words hyphens-auto text-balance leading-tight">
                      Reflectieopdrachten
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Na fysieke activiteiten reflecteren jongeren op hun gedrag, emoties en gedachten, gekoppeld aan hun
                    persoonlijke doelen.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Emotielogboek bijhouden</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Gedachten uitdagen oefening</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Succesmomenten identificeren</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Method 5 */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={methodsInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
                whileHover="hover"
                className="methodology-card"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start mb-4 gap-2">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold break-words hyphens-auto text-balance leading-tight">
                      Praktijkopdrachten
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Jongeren krijgen opdrachten mee om ook buiten de sessies te oefenen, zoals het herkennen van
                    spanningssignalen of het benoemen van successen.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Dagelijks spanningssignalen noteren</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Succesmomenten bijhouden</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Grenzen stellen in dagelijks leven</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="methodology-scroll-indicators">
              <div className="methodology-scroll-indicator bg-black/20 dark:bg-white/20"></div>
              <div className="methodology-scroll-indicator bg-black/20 dark:bg-white/20"></div>
              <div className="methodology-scroll-indicator bg-black/20 dark:bg-white/20"></div>
              <div className="methodology-scroll-indicator bg-black/20 dark:bg-white/20"></div>
            </div>
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={methodsInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="mt-16"
          >
            <div className="bg-primary/5 rounded-lg p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full -mt-20 -mr-20"></div>

              <h3 className="text-xl font-bold mb-6 text-primary flex items-center">
                <span className="bg-primary/10 p-2 rounded-lg mr-3">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Praktijkvoorbeeld
              </h3>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 relative">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/teen-boxing.jpg"
                      alt="Jongere met bokshandschoenen"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full -z-10 hidden md:block"></div>
                </div>
                <div className="md:w-3/4">
                  <p className="italic text-xl text-gray-700 mb-4">
                    "Een jongen die vaak lichamelijk gespannen is, leert via boksen eerst spanning los te laten en
                    vervolgens door individuele begeleiding woorden te geven aan wat hij ervaart."
                  </p>
                  <p className="text-gray-600">
                    Door de combinatie van fysieke oefeningen en reflectiemomenten leert hij niet alleen zijn
                    lichaamssignalen herkennen, maar ook begrijpen wat deze betekenen en hoe hij hierop kan reageren. De
                    bokstraining geeft hem een veilige uitlaatklep voor zijn spanning, terwijl de individuele
                    begeleiding hem helpt zijn ervaringen te verwoorden.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 group">
                        <span>Neem contact op</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link href="/doelgroep">
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                      >
                        Bekijk onze doelgroep
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-primary/90 z-0"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Animated circles */}
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          />

          {/* Boxing gloves icon */}
          <motion.div
            initial={{ opacity: 0.05, y: -10 }}
            animate={{ opacity: 0.05, y: 10 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
            className="absolute top-10 right-10 hidden lg:block"
          >
            <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M12,2C9.97,2 8.1,2.67 6.6,3.8L4.8,2L4,2.8L5.4,4.2C4.17,5.67 3.5,7.5 3.5,9.5A9,9 0 0,0 12.5,18.5C17.5,18.5 21.5,14.5 21.5,9.5C21.5,5.5 17.5,2 12,2M16.06,6.44L17.47,5.03C16.9,4.46 16.44,4.15 16.06,4.03L15.5,5.88C15.47,6.15 15.44,6.42 15.41,6.7L16.06,6.44M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V16.91C16.17,16.43 18.5,13.5 18.5,10A6.5,6.5 0 0,0 12,3.5C10.27,3.5 8.71,4.07 7.47,5.03L8.88,6.44C9.15,4.94 10.5,4 12,4M8.7,7.5L7.7,6.5C7.87,6.33 8.15,6.15 8.5,6.05L8.03,4.03C7.16,4.33 6.5,4.79 6,5.29L7.47,6.76C7.5,7.03 7.8,7.3 8.7,7.5M6.32,8.82L5.56,8.06C5.06,9.79 5.32,10.77 5.56,11.06L7.5,9.12C6.97,9.12 6.64,9.03 6.32,8.82M9.08,10.18L7.14,12.12C8.29,12.44 9,12.03 9.38,11.77L10.97,13.35C11.94,14.32 12.5,13.97 12.79,13.65L11.24,12.1C11.5,11.35 11.5,10.75 11.24,10C10.97,9.26 10.44,8.82 9.08,10.18M7.16,5.56L6.3,5.56C6.38,5.44 6.46,5.31 6.56,5.18L5.83,4.46C5.58,4.73 5.38,5.03 5.21,5.35L6.11,6.25C6.29,6.18 6.5,6.06 7.16,5.56M10.91,7.32L9.5,5.91C9.03,6.5 8.82,6.91 8.67,7.18L10.03,8.53C10.29,8.29 10.56,8 10.91,7.32M11.77,9.08L13.17,10.5C14.21,9.12 13.91,8.5 13.78,8.26L12.03,6.5C11.88,7.09 11.65,8.15 11.77,9.08Z" />
            </svg>
          </motion.div>

          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Wave at top */}
          <div className="absolute top-0 left-0 right-0 overflow-hidden">
            <svg
              className="w-full text-white"
              style={{ height: "50px" }}
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/20">
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Klaar om te beginnen?</h2>
                <div className="w-20 h-1 bg-white/40 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Neem contact met ons op om te bespreken hoe Psy-boks kan bijdragen aan de ontwikkeling van jongeren
                  in uw omgeving.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 shadow-lg w-full sm:w-auto font-semibold"
                    >
                      <span className="flex items-center">
                        Neem contact op
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    </Button>
                  </Link>
                  <Link href="/doelgroep">
                    <Button
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90 shadow-lg border-2 border-white/20 w-full sm:w-auto font-semibold"
                    >
                      Bekijk onze doelgroep
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
