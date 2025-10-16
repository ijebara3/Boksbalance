"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Check, X, ArrowRight, Users, Shield, Brain, Heart, Target, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useOptimizedAnimations } from "@/hooks/use-optimized-animations"
import { useMobile } from "@/hooks/use-mobile"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 30px rgba(0, 160, 188, 0.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export default function DoelgroepPage() {
  const isMobile = useMobile()
  const { getAnimationProps, getViewportSettings, isMobile: isMobileOptimized } = useOptimizedAnimations()
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [targetGroupRef, targetGroupInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [exclusionRef, exclusionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [goalsRef, goalsInView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Onze Doelgroep</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              BoksBalance richt zich op jongeren van 12 tot en met 18 jaar die moeite ervaren met motivatie,
              gedragsregulatie, emotieregulatie, zelfbeeld of sociale vaardigheden.
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-secondary rounded-full"></div>
            </div>

            {/* Age indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium">Jongeren tussen 12-18 jaar</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md flex items-center">
                <Shield className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium">Geen diagnose vereist</span>
              </div>
              <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md flex items-center">
                <Brain className="h-5 w-5 text-primary mr-2" />
                <span className="text-sm font-medium">Individuele begeleiding</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-12 text-white"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* Target Group Section */}
      {/* Target Groups */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Voor wie is BoksBalance?
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Onze Doelgroep</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">
              BoksBalance richt zich op jongeren die uitdagingen ervaren op verschillende gebieden. We kijken naar de
              individuele behoeften van elke jongere.
            </p>
          </div>

          <div className={isMobile ? "space-y-8 mt-12" : "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12"}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/doelgroepyouthboxingtraining.jpg"
                  alt="Doelgroep jongeren"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Users className="h-8 w-8 text-primary" />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                >
                  <Heart className="h-8 w-8 text-primary" />
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-2xl -z-10 hidden md:block"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full -z-10 hidden md:block"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Voor wie is BoksBalance?</h3>
              <div className="w-16 h-1 bg-secondary mb-6 rounded-full"></div>
              <p className="text-muted-foreground mb-8">
                BoksBalance richt zich op jongeren van 12 tot en met 18 jaar die moeite ervaren met:
              </p>

              <div className="space-y-4">
                {isMobile ? (
                  <div className="mobile-scroll-container">
                    <div className="mobile-scroll-wrapper">
                      <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="mobile-scroll-item bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-start">
                          <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Motivatie</h4>
                            <p className="text-gray-600 text-sm">
                              Jongeren die moeite hebben met het vinden en behouden van motivatie voor school, hobby's
                              of andere activiteiten.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="mobile-scroll-item bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-start">
                          <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Gedragsregulatie</h4>
                            <p className="text-gray-600 text-sm">
                              Jongeren die moeite hebben met het reguleren van hun gedrag in verschillende situaties,
                              zoals impulscontrole.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="mobile-scroll-item bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-start">
                          <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Emotieregulatie</h4>
                            <p className="text-gray-600 text-sm">
                              Jongeren die moeite hebben met het herkennen, begrijpen en reguleren van hun emoties zoals
                              boosheid, angst of verdriet.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={cardVariants}
                        whileHover="hover"
                        className="mobile-scroll-item bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="flex items-start">
                          <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">Zelfbeeld of sociale vaardigheden</h4>
                            <p className="text-gray-600 text-sm">
                              Jongeren die worstelen met een negatief zelfbeeld of moeite hebben met sociale interacties
                              en communicatie.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Motivatie</h4>
                          <p className="text-gray-600 text-sm">
                            Jongeren die moeite hebben met het vinden en behouden van motivatie voor school, hobby's of
                            andere activiteiten.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Gedragsregulatie</h4>
                          <p className="text-gray-600 text-sm">
                            Jongeren die moeite hebben met het reguleren van hun gedrag in verschillende situaties,
                            zoals impulscontrole.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Emotieregulatie</h4>
                          <p className="text-gray-600 text-sm">
                            Jongeren die moeite hebben met het herkennen, begrijpen en reguleren van hun emoties zoals
                            boosheid, angst of verdriet.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex items-start">
                        <div className="bg-green-100 p-2 rounded-full mr-4 shrink-0">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Zelfbeeld of sociale vaardigheden</h4>
                          <p className="text-gray-600 text-sm">
                            Jongeren die worstelen met een negatief zelfbeeld of moeite hebben met sociale interacties
                            en communicatie.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <p className="text-gray-700 italic">
                  "Een officiële diagnose is niet vereist voor deelname. We kijken naar de individuele behoeften van
                  elke jongere en bieden een programma op maat."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exclusion Criteria Section */}
      <section
        ref={exclusionRef}
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
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
            animate={exclusionInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Exclusiecriteria</h2>
            <div className="w-20 h-1 bg-white/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Om de veiligheid en effectiviteit te waarborgen, kunnen jongeren met onderstaande kenmerken worden
              uitgesloten.
            </p>
          </motion.div>

          <div className={isMobile ? "mb-16" : "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"}>
            {isMobile ? (
              <div className="mobile-scroll-container mb-8">
                <div className="mobile-scroll-wrapper">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mobile-scroll-item bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

                    <div className="flex flex-col sm:flex-row items-start mb-4">
                      <div className="bg-white/20 p-3 rounded-full mr-4 mb-3 sm:mb-0 shrink-0">
                        <X className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Ernstige psychotische stoornissen</h3>
                        <p className="text-white/80 text-sm sm:text-base">
                          Jongeren met actieve psychotische symptomen hebben eerst passende zorg nodig voordat deelname
                          mogelijk is.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mobile-scroll-item bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

                    <div className="flex flex-col sm:flex-row items-start mb-4">
                      <div className="bg-white/20 p-3 rounded-full mr-4 mb-3 sm:mb-0 shrink-0">
                        <X className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Ernstige medische beperkingen</h3>
                        <p className="text-white/80 text-sm sm:text-base">
                          Medische condities die fysieke inspanning onmogelijk of gevaarlijk maken, vereisen een
                          aangepast programma.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mobile-scroll-item bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

                    <div className="flex flex-col sm:flex-row items-start mb-4">
                      <div className="bg-white/20 p-3 rounded-full mr-4 mb-3 sm:mb-0 shrink-0">
                        <X className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Ernstige verslavingsproblematiek</h3>
                        <p className="text-white/80 text-sm sm:text-base">
                          Actieve verslavingsproblematiek zonder stabiliteit vereist eerst gespecialiseerde
                          verslavingszorg.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mobile-scroll-item bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

                    <div className="flex flex-col sm:flex-row items-start mb-4">
                      <div className="bg-white/20 p-3 rounded-full mr-4 mb-3 sm:mb-0 shrink-0">
                        <X className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Gebrek aan motivatie</h3>
                        <p className="text-white/80 text-sm sm:text-base">
                          Volledige onwil tot samenwerking of deelname maakt het programma ineffectief. Een minimale
                          bereidheid is noodzakelijk.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

                  <div className="flex flex-col sm:flex-row items-start mb-4">
                    <div className="bg-white/20 p-3 rounded-full mr-4 mb-3 sm:mb-0 shrink-0">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ernstige psychotische stoornissen</h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        Jongeren met actieve psychotische symptomen hebben eerst passende zorg nodig voordat deelname
                        mogelijk is.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

                  <div className="flex flex-col sm:flex-row items-start mb-4">
                    <div className="bg-white/20 p-3 rounded-full mr-4 mb-3 sm:mb-0 shrink-0">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ernstige medische beperkingen</h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        Medische condities die fysieke inspanning onmogelijk of gevaarlijk maken, vereisen een aangepast
                        programma.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

                  <div className="flex flex-col sm:flex-row items-start mb-4">
                    <div className="bg-white/20 p-3 rounded-full mr-4 mb-3 sm:mb-0 shrink-0">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Ernstige verslavingsproblematiek</h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        Actieve verslavingsproblematiek zonder stabiliteit vereist eerst gespecialiseerde
                        verslavingszorg.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-white/10 transition-colors duration-300"></div>

                  <div className="flex flex-col sm:flex-row items-start mb-4">
                    <div className="bg-white/20 p-3 rounded-full mr-4 mb-3 sm:mb-0 shrink-0">
                      <X className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Gebrek aan motivatie</h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        Volledige onwil tot samenwerking of deelname maakt het programma ineffectief. Een minimale
                        bereidheid is noodzakelijk.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={exclusionInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
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
                      src="/images/teenboxingadhd.jpg"
                      alt="Jongere met ADHD"
                      width={300}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <p className="italic text-xl text-white/90 mb-4 text-center sm:text-left">
                    "Een jongere met een stabiele ADHD-diagnose zonder bijkomende zware problematiek kan prima
                    deelnemen; een jongere met acute psychose zal eerst passende zorg nodig hebben voordat instroom
                    mogelijk is."
                  </p>
                  <p className="text-white/80 text-center sm:text-left text-sm sm:text-base">
                    We beoordelen elke aanmelding individueel en kijken naar de specifieke situatie van de jongere. Bij
                    twijfel overleggen we met betrokken zorgprofessionals om te bepalen of BoksBalance op dat moment de
                    juiste interventie is.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goals Section */}
      <section ref={goalsRef} className="py-24 bg-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl transform translate-y-1/3 -translate-x-1/3"></div>

          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300a0bc' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={goalsInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Wat we bereiken
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Algemene Doelen</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600">
              Binnen BoksBalance richten wij ons op het realiseren van de volgende algemene doelen.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={goalsInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className={isMobile ? "" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}
          >
            {isMobile ? (
              <div className="mobile-scroll-container mb-8">
                <div className="mobile-scroll-wrapper">
                  {/* Goal 1 - Mobile */}
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="mobile-scroll-item bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <div className="flex items-start gap-2 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                        Vergroten van zelfredzaamheid
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Jongeren leren zelf keuzes maken en verantwoordelijkheid nemen voor hun acties en toekomst.
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Zelfstandig beslissingen nemen</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Verantwoordelijkheid dragen</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Goal 2 - Mobile */}
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="mobile-scroll-item bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <div className="flex items-start gap-2 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                        Verbeteren van sociale vaardigheden
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Jongeren ontwikkelen beter contact, samenwerking en communicatie met anderen.
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Effectieve communicatie</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Goal 3 - Mobile */}
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="mobile-scroll-item bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <div className="flex items-start gap-2 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                        Bevorderen van emotieregulatie
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Jongeren herkennen en reguleren hun emoties adequaat in verschillende situaties.
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Emoties herkennen</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Kalm blijven onder druk</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Goal 4 - Mobile */}
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="mobile-scroll-item bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <div className="flex items-start gap-2 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                        Opbouwen van een positief zelfbeeld
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Jongeren leren zichzelf te waarderen en hun eigen kracht en kwaliteiten te zien.
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Zelfvertrouwen opbouwen</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Eigen kwaliteiten herkennen</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Goal 5 - Mobile */}
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="mobile-scroll-item bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <div className="flex items-start gap-2 mb-4">
                      <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <Brain className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                        Ontwikkelen van copingvaardigheden
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Jongeren leren omgaan met stress, tegenslag en conflicten op een gezonde manier.
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Stressmanagement</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Conflicthantering</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  {/* Goal 6 - Mobile */}
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="mobile-scroll-item bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <div className="flex items-start gap-2 mb-4">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                        Ondersteunen bij dagstructuur
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Jongeren krijgen handvatten om structuur aan te brengen in hun dagelijks leven.
                    </p>

                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <ul className="space-y-1">
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Planning en organisatie</span>
                        </li>
                        <li className="text-sm text-gray-600 flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                          <span>Routine opbouwen</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            ) : (
              <>
                {/* Goal 1 */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start gap-2 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                      Vergroten van zelfredzaamheid
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Jongeren leren zelf keuzes maken en verantwoordelijkheid nemen voor hun acties en toekomst.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Zelfstandig beslissingen nemen</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Verantwoordelijkheid dragen</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Goal 2 */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start gap-2 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                      Verbeteren van sociale vaardigheden
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Jongeren ontwikkelen beter contact, samenwerking en communicatie met anderen.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Effectieve communicatie</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Goal 3 */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start gap-2 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                      Bevorderen van emotieregulatie
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Jongeren herkennen en reguleren hun emoties adequaat in verschillende situaties.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Emoties herkennen</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Kalm blijven onder druk</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Goal 4 */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start gap-2 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                      Opbouwen van een positief zelfbeeld
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Jongeren leren zichzelf te waarderen en hun eigen kracht en kwaliteiten te zien.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Zelfvertrouwen opbouwen</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Eigen kwaliteiten herkennen</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Goal 5 */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start gap-2 mb-4">
                    <div className="bg-primary/10 p-2 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                      Ontwikkelen van copingvaardigheden
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Jongeren leren omgaan met stress, tegenslag en conflicten op een gezonde manier.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Stressmanagement</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Conflicthantering</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* Goal 6 */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white rounded-xl p-6 shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                  <div className="flex items-start gap-2 mb-4">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold leading-tight break-words hyphens-auto">
                      Ondersteunen bij dagstructuur
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    Jongeren krijgen handvatten om structuur aan te brengen in hun dagelijks leven.
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Planning en organisatie</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-secondary mr-2 shrink-0" />
                        <span>Routine opbouwen</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={goalsInView ? "visible" : "hidden"}
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
                      src="/images/femaleteenboxer.jpg"
                      alt="Zelfverzekerd meisje"
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
                    "Een 13-jarige meisje dat moeite heeft met groepsdruk leert tijdens het programma 'nee' te zeggen,
                    haar grenzen aan te geven en eigen keuzes te maken, zonder angst voor afwijzing."
                  </p>
                  <p className="text-gray-600">
                    Door de combinatie van fysieke oefeningen en reflectiemomenten leert ze niet alleen haar
                    lichaamssignalen herkennen, maar ook begrijpen wat deze betekenen en hoe ze hierop kan reageren. De
                    bokstraining geeft haar zelfvertrouwen en een gevoel van kracht, terwijl de begeleiding haar helpt
                    deze kracht ook in sociale situaties in te zetten.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 group">
                        <span>Neem contact op</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    <Link href="/programma">
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                      >
                        Bekijk ons programma
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
                  Neem contact met ons op om te bespreken hoe BoksBalance kan bijdragen aan de ontwikkeling van jongeren
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
                  <Link href="/programma">
                    <Button
                      size="lg"
                      className="bg-primary text-white hover:bg-primary/90 shadow-lg border-2 border-white/20 w-full sm:w-auto font-semibold"
                    >
                      Bekijk ons programma
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
