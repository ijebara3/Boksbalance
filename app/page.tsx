"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ArrowRight, Brain, Dumbbell, Heart, Shield, Award, Users, BookOpen, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import AnimatedBackground from "@/components/animated-background"
import WaveDivider from "@/components/wave-divider"
import SectionTransition from "@/components/section-transition"
import { useOptimizedAnimations } from "@/hooks/use-optimized-animations"
import { useMobile } from "@/hooks/use-mobile"

export default function Home() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true })
  const { getAnimationProps, getViewportSettings, isMobile } = useOptimizedAnimations()
  const mobileView = useMobile()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <>
      {/* Hero Section */}
      <AnimatedBackground className="pt-0 pb-20 md:pt-24 md:pb-20">
        {/* Mobile logo at top - only visible on mobile with animation */}
        <div className="md:hidden pt-4 pb-6 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-70"></div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative w-36 h-36 mx-auto bg-white/80 rounded-full shadow-lg p-3 border border-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-md"></div>
              <Image
                src="/images/boksbalance-logo.png"
                alt="BoksBalance Logo"
                width={144}
                height={144}
                className="w-full h-auto relative z-10"
                priority
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary/40 rounded-full"></div>
              <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary/30 rounded-full"></div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-2"
            >
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto"></div>
            </motion.div>
          </motion.div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div {...getAnimationProps("fadeLeft")} className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                Boksen en Ambulante Begeleiding voor Jongeren
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Psy-boks biedt een unieke combinatie van fysieke training en ambulante begeleiding voor jongeren
                tussen 12 en 18 jaar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 w-full"
                  onClick={() => {
                    const introSection = document.getElementById("introductie-section")
                    if (introSection) {
                      introSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  Meer informatie
                </Button>
                <Link href="/contact" className="w-full">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 w-full bg-transparent"
                  >
                    Contact opnemen
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div {...getAnimationProps("fadeRight")} className="md:w-1/2 hidden md:flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/boksbalance-logo.png"
                  alt="BoksBalance Logo"
                  width={400}
                  height={400}
                  className="w-full h-auto animate-float"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Transition between Hero and Introductie */}
      <SectionTransition fromColor="white" toColor="primary" />

      {/* Introductie Section */}
      <section
        id="introductie-section"
        className="relative bg-gradient-to-br from-primary to-primary/90 text-white py-24 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
          <div className="absolute -bottom-24 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>

          {/* Animated boxing gloves */}
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 opacity-10"
          >
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2C9.97,2 8.1,2.67 6.6,3.8L4.8,2L4,2.8L5.4,4.2C4.17,5.67 3.5,7.5 3.5,9.5A9,9 0 0,0 12.5,18.5C17.5,18.5 21.5,14.5 21.5,9.5C21.5,5.5 17.5,2 12,2M16.06,6.44L17.47,5.03C16.9,4.46 16.44,4.15 16.06,4.03L15.5,5.88C15.47,6.15 15.44,6.42 15.41,6.7L16.06,6.44M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V16.91C16.17,16.43 18.5,13.5 18.5,10A6.5,6.5 0 0,0 12,3.5C10.27,3.5 8.71,4.07 7.47,5.03L8.88,6.44C9.15,4.94 10.5,4 12,4M8.7,7.5L7.7,6.5C7.87,6.33 8.15,6.15 8.5,6.05L8.03,4.03C7.16,4.33 6.5,4.79 6,5.29L7.47,6.76C7.5,7.03 7.8,7.3 8.7,7.5M6.32,8.82L5.56,8.06C5.06,9.79 5.32,10.77 5.56,11.06L7.5,9.12C6.97,9.12 6.64,9.03 6.32,8.82M9.08,10.18L7.14,12.12C8.29,12.44 9,12.03 9.38,11.77L10.97,13.35C11.94,14.32 12.5,13.97 12.79,13.65L11.24,12.1C11.5,11.35 11.5,10.75 11.24,10C10.97,9.26 10.44,8.82 9.08,10.18M7.16,5.56L6.3,5.56C6.38,5.44 6.46,5.31 6.56,5.18L5.83,4.46C5.58,4.73 5.38,5.03 5.21,5.35L6.11,6.25C6.29,6.18 6.5,6.06 7.16,5.56M10.91,7.32L9.5,5.91C9.03,6.5 8.82,6.91 8.67,7.18L10.03,8.53C10.29,8.29 10.56,8 10.91,7.32M11.77,9.08L13.17,10.5C14.21,9.12 13.91,8.5 13.78,8.26L12.03,6.5C11.88,7.09 11.65,8.15 11.77,9.08Z" />
            </svg>
          </motion.div>

          {/* Waves at the bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-16 text-white"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                fill="currentColor"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                fill="currentColor"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.7 }}
            viewport={getViewportSettings()}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 inline-block relative">
              Introductie BoksBalance
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary rounded-full"></span>
            </h2>
            <p className="text-xl md:text-2xl max-wxl mx-auto text-white/90">
              Ontwikkeld vanuit de overtuiging dat jongeren fysieke kracht en mentale veerkracht samen nodig hebben om
              gezond op te groeien.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: isMobile ? -10 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.7, delay: isMobile ? 0.05 : 0.2 }}
              viewport={getViewportSettings()}
              className="md:col-span-7 relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-secondary/20 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  Wat is BoksBalance?
                </h3>
                <div className="space-y-4 text-white/90">
                  <p>
                    BoksBalance is ontwikkeld vanuit de overtuiging dat jongeren fysieke kracht en mentale veerkracht
                    samen nodig hebben om gezond op te groeien.
                  </p>
                  <p>
                    In een wereld die steeds hogere eisen stelt aan jongeren op school, thuis en in de maatschappij biedt BoksBalance een unieke combinatie van fysieke training en ambulante begeleiding.
                  </p>
                  <div className="pt-2">
                    <div className="inline-flex items-center text-secondary">
                      <span className="font-medium">Doelgroep:</span>
                      <span className="ml-2 bg-secondary/20 text-white text-sm py-1 px-3 rounded-full">12-18 jaar</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10 hidden md:block"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isMobile ? 10 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.7, delay: isMobile ? 0.1 : 0.4 }}
              viewport={getViewportSettings()}
              className="md:col-span-5 relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl h-full">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="bg-secondary/20 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                  </span>
                  Wat leren jongeren?
                </h3>
                <div className="space-y-4 text-white/90">
                  <p>
                    Binnen het programma leren jongeren hoe zij hun energie kunnen kanaliseren, grenzen kunnen aangeven
                    en hun emoties beter kunnen herkennen en reguleren.
                  </p>
                  <p>
                    Door het boksen ervaren zij fysieke inspanning en discipline, terwijl de ambulante begeleiding hen
                    tegelijkertijd leert reflecteren op hun gedrag en emoties.
                  </p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10 hidden md:block"></div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.7, delay: isMobile ? 0.15 : 0.6 }}
            viewport={getViewportSettings()}
            className="mt-16 text-center"
          >
            <Link href="/programma">
              <Button variant="secondary" size="lg" className="group relative overflow-hidden">
                <span className="relative z-10">Lees meer over ons programma</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Wave divider between Introductie and Doel en Visie */}
      <div className="bg-primary">
        <WaveDivider color="#ffffff" flip={true} height={120} withGlow={true} />
      </div>

      {/* Doel en Visie Section */}
      <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl transform translate-y-1/3 -translate-x-1/3"></div>

          <svg
            className="absolute right-0 top-1/4 text-primary/5 w-64 h-64"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M42.7,-73.2C55.9,-65.7,67.7,-55.3,76.3,-42.2C84.9,-29.1,90.4,-14.6,89.8,-0.3C89.2,13.9,82.6,27.8,73.6,39.5C64.6,51.2,53.3,60.8,40.3,67.4C27.3,74,13.7,77.7,-0.4,78.3C-14.4,79,-28.8,76.6,-41.8,70.1C-54.8,63.6,-66.3,53,-74.3,39.7C-82.2,26.4,-86.5,13.2,-85.5,0.6C-84.5,-12,-78.1,-24,-70.3,-35.3C-62.4,-46.6,-53.1,-57.2,-41.5,-65.4C-29.9,-73.5,-14.9,-79.2,0.2,-79.6C15.4,-79.9,30.8,-74.9,42.7,-73.2Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            className="absolute left-0 bottom-1/4 text-secondary/5 w-72 h-72"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M47.7,-79.1C62.9,-71.9,77.2,-61.3,84.2,-47.2C91.3,-33,91.2,-16.5,88.9,-1.3C86.7,13.8,82.4,27.7,74.4,39.4C66.3,51.2,54.5,60.9,41.3,67.4C28.1,73.9,14,77.2,-0.2,77.5C-14.4,77.8,-28.9,75.1,-41.9,68.7C-54.9,62.3,-66.5,52.2,-74.2,39.4C-81.9,26.6,-85.7,13.3,-85.6,0C-85.5,-13.2,-81.5,-26.4,-74.1,-38.1C-66.8,-49.8,-56.1,-60,-43.5,-67.2C-30.9,-74.5,-15.5,-78.8,0.4,-79.5C16.2,-80.2,32.5,-77.3,47.7,-79.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.3 : 0.7 }}
            viewport={getViewportSettings()}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary mobile-heading">Doel en Visie</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mobile-text">
              BoksBalance heeft als doel jongeren te ondersteunen in hun ontwikkeling tot weerbare, bewuste en
              zelfstandige individuen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
                  <Image
                    src="/images/teenagerboxing.jpg"
                    alt="Bokstraining jongere met rode handschoenen"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                  <Image
                    src="/images/programmateenboxingsession.jpg"
                    alt="Jongere met bokstrainer"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-xl z-30"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/programmapraktijkvoorbeeld.webp"
                    alt="Jongeren tijdens kickbokstraining"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-md"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full blur-md"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary mobile-heading">
                Onze visie is gebaseerd op drie pijlers
              </h3>

              <div className="space-y-8">
                {/* For mobile, we'll create a horizontal scrollable container */}
                {mobileView ? (
                  <div className="mobile-scroll-container">
                    <div className="mobile-scroll-wrapper">
                      <motion.div
                        className="mobile-scroll-item bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-full mr-4">
                            <Dumbbell className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-2">Fysieke kracht</h4>
                            <p className="text-gray-600 mobile-text">
                              Jongeren ervaren hun lichaam als bron van kracht en stabiliteit, wat bijdraagt aan een
                              positief zelfbeeld en zelfvertrouwen.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="mobile-scroll-item bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-full mr-4">
                            <Brain className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-2">Mentale kracht</h4>
                            <p className="text-gray-600 mobile-text">
                              Jongeren ontwikkelen veerkracht om om te gaan met tegenslagen en uitdagingen in hun
                              dagelijks leven.
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="mobile-scroll-item bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start">
                          <div className="bg-primary/10 p-3 rounded-full mr-4">
                            <Heart className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-2">Emotionele intelligentie</h4>
                            <p className="text-gray-600 mobile-text">
                              Jongeren leren emoties te herkennen, begrijpen en reguleren, wat essentieel is voor
                              gezonde relaties en persoonlijke groei.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <>
                    <motion.div
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <Dumbbell className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Fysieke kracht</h4>
                          <p className="text-gray-600">
                            Jongeren ervaren hun lichaam als bron van kracht en stabiliteit, wat bijdraagt aan een
                            positief zelfbeeld en zelfvertrouwen.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <Brain className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Mentale kracht</h4>
                          <p className="text-gray-600">
                            Jongeren ontwikkelen veerkracht om om te gaan met tegenslagen en uitdagingen in hun
                            dagelijks leven.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-full mr-4">
                          <Heart className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">Emotionele intelligentie</h4>
                          <p className="text-gray-600">
                            Jongeren leren emoties te herkennen, begrijpen en reguleren, wat essentieel is voor gezonde
                            relaties en persoonlijke groei.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-4 border-l-4 border-secondary bg-white/50 rounded-r-lg"
              >
                <p className="text-gray-600 mobile-text">
                  Door boksen en individuele begeleiding te combineren, creëren we een setting waarin jongeren hun eigen
                  kracht ontdekken, leren omgaan met emoties en sociale vaardigheden ontwikkelen.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programma Section - Horizontaal scrollbare secties voor mobiel */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl transform translate-y-1/3 -translate-x-1/3"></div>

          {/* Decorative patterns */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300a0bc' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">
              Ons 12-weken programma
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-primary mobile-heading">
              Opbouw van het Programma
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-700 mobile-text">
              Het BoksBalance-programma is opgebouwd in verschillende fases, verspreid over 12 weken, elk gericht op
              specifieke vaardigheden en ontwikkeling.
            </p>
          </motion.div>

          {/* Timeline steps - Always use horizontal scroll on mobile */}
          <div className="relative mb-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary via-primary to-secondary rounded-full hidden lg:block"></div>

            {/* Mobile horizontal scroll container - Always visible on mobile */}
            <div className="lg:hidden mobile-scroll-container">
              <div className="mobile-scroll-wrapper">
                {/* Fase 1 - Mobile */}
                <div className="mobile-scroll-item">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shadow-lg mb-4">
                      1
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      <span>Fase 1: Basisvaardigheden</span>
                    </h3>
                    <p className="text-gray-600 mobile-text">
                      Jongeren leren basis bokstechnieken en werken aan eerste vaardigheden rondom spanningsregulatie en
                      zelfcontrole. Deze fase legt het fundament voor verdere ontwikkeling.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm font-bold text-primary bg-gray-100 px-3 py-1 rounded-full">
                        Weken 1-4
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fase 2 - Mobile */}
                <div className="mobile-scroll-item">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shadow-lg mb-4">
                      2
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                      <Brain className="h-5 w-5 mr-2" />
                      <span>Fase 2: Gevorderde vaardigheden</span>
                    </h3>
                    <p className="text-gray-600 mobile-text">
                      Jongeren verdiepen hun emotieregulatie, werken aan bewustwording van gedachten en gevoelens en
                      oefenen sociale vaardigheden in een veilige omgeving.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm font-bold text-primary bg-gray-100 px-3 py-1 rounded-full">
                        Weken 5-8
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fase 3 - Mobile */}
                <div className="mobile-scroll-item">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shadow-lg mb-4">
                      3
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                      <Heart className="h-5 w-5 mr-2" />
                      <span>Fase 3: Integratie en zelfstandigheid</span>
                    </h3>
                    <p className="text-gray-600 mobile-text">
                      Jongeren passen geleerde vaardigheden toe in (gecontroleerde) sparringsvormen en ontwikkelen een
                      persoonlijk actieplan voor blijvende resultaten.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm font-bold text-primary bg-gray-100 px-3 py-1 rounded-full">
                        Weken 9-12
                      </span>
                    </div>
                  </div>
                </div>
                {/* Fase 4 - Mobile */}
                <div className="mobile-scroll-item">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white font-bold shadow-lg mb-4">
                      4
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      <span>Fase 4: Terugvalpreventie</span>
                    </h3>
                    <p className="text-gray-600 mobile-text">
                      Nazorgafspraken na 4, 8 en 12 weken om terugval vroegtijdig te detecteren en voorkomen. Jongeren
                      krijgen blijvende ondersteuning voor duurzame resultaten.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-sm font-bold text-secondary bg-gray-100 px-3 py-1 rounded-full">
                        Nazorg periode
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop timeline grid */}
            <div className="hidden lg:grid grid-cols-2 gap-8">
              {/* Phase 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
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
                  <p className="text-gray-600">
                    Jongeren leren basis bokstechnieken en werken aan eerste vaardigheden rondom spanningsregulatie en
                    zelfcontrole. Deze fase legt het fundament voor verdere ontwikkeling.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-bold text-primary bg-gray-100 px-3 py-1 rounded-full">Weken 1-4</span>
                  </div>
                </div>
              </motion.div>

              {/* Empty space for timeline */}
              <div className="hidden lg:block"></div>

              {/* Phase 2 */}
              <div className="hidden lg:block"></div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
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
                  <p className="text-gray-600">
                    Jongeren verdiepen zich in emotieregulatie, werken aan bewustwording van gedachten en gevoelens en oefenen sociale vaardigheden in een veilige omgeving.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-bold text-primary bg-gray-100 px-3 py-1 rounded-full">Weken 5-8</span>
                  </div>
                </div>
              </motion.div>

              {/* Phase 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
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
                  <p className="text-gray-600">
                    Jongeren passen geleerde vaardigheden toe in (gecontroleerde) sparringsvormen en ontwikkelen een
                    persoonlijk actieplan voor blijvende resultaten.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-bold text-primary bg-gray-100 px-3 py-1 rounded-full">
                      Weken 9-12
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Empty space for timeline */}
              <div className="hidden lg:block"></div>

              {/* Phase 4 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-start-2"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative h-full">
                  <div className="absolute top-6 -left-4 lg:block hidden">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shadow-lg bg-black">
                      4
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    <span>Fase 4: Terugvalpreventie</span>
                  </h3>
                  <p className="text-gray-600">
                    Nazorgafspraken na 4, 8 en 12 weken om terugval op tijd te detecteren en te voorkomen.
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-bold px-3 py-1 rounded-full bg-gray-100 text-black">
                      Nazorg periode
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Practical example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 text-primary/10">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-primary mobile-heading">Praktijkvoorbeeld</h3>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 relative">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/teenboxingtechnice.jpg"
                      alt="Jongere tijdens bokstraining"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="italic text-lg text-gray-600 mb-4 mobile-text">
                    "Tijdens de begeleiding leert een 17-jarige jongen die opvliegend is, om in een lichte sparring zijn boosheid te controleren en kalm te blijven onder druk."
                  </p>
                  <p className="text-gray-600 mobile-text">
                    Door gerichte oefeningen en reflectiemomenten heeft hij geleerd zijn emoties te herkennen voordat ze
                    escaleren. De fysieke training geeft hem een uitlaatklep, terwijl de begeleiding hem helpt inzicht
                    te krijgen in zijn triggers en alternatieve reacties te ontwikkelen.
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                      <Image
                        src="/images/AliZoubai.jpg"
                        alt="Coach"
                        width={100}
                        height={100}
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Ali Zoubai</p>
                      <p className="text-sm text-gray-500">Trainer BoksBalance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link href="/programma">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 mobile-touch-target"
              >
                <span>Bekijk het volledige programma</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trainers Section - Horizontaal scrollbare kaarten op mobiel */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl transform translate-y-1/3 -translate-x-1/3"></div>

          {/* Subtle pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2300a0bc' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">
              Ons professionele team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-primary mobile-heading">
              Trainers en hun Werkwijze
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-800 mobile-text">
              Onze trainers combineren expertise in boksen met professionele begeleiding om jongeren te helpen groeien
              op fysiek, mentaal en emotioneel vlak.
            </p>
          </motion.div>

          {/* Mobile horizontal scroll container - Always visible on mobile */}
          <div className="lg:hidden">
            <div className="flex gap-8 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide justify-center">
              {/* Trainer 1 - Mobile */}
              <div className="flex-shrink-0 w-72 snap-center">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 h-full mx-auto border border-gray-100 hover:border-primary/20">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
                    <Image
                      src="/images/NassimElMasaoudi.jpg"
                      alt="Nassim El Masaoudi"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      Nassim El Masaoudi
                    </h3>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Gedragswetenschapper
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Gespecialiseerd in gedragsproblematiek, weerbaarheid en psychologische ontwikkeling bij jongeren.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Award className="h-3 w-3 mr-1" />
                          Psycholoog
                        </span>
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          10+ jaar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trainer 2 - Mobile */}
              <div className="flex-shrink-0 w-72 snap-center">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 h-full mx-auto border border-gray-100 hover:border-primary/20">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
                    <Image
                      src="/images/AliZoubai.jpg"
                      alt="Ali Zoubai"
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-20"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      Ali Zoubai
                    </h3>
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Wereldkampioen
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Gespecialiseerd in weerbaarheidstraining, agressieregulatie en activatie van jeugdigen.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex justify-center space-x-4 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Award className="h-3 w-3 mr-1" />
                          Kampioen
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          15+ jaar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator dots */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary/30"></div>
              <div className="w-2 h-2 rounded-full bg-primary/30"></div>
            </div>
          </div>

          {/* Desktop trainers grid */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Trainer 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-primary/20"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 border-2 border-primary/10">
                    <Image
                      src="/images/NassimElMasaoudi.jpg"
                      alt="Nassim El Masaoudi"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                      Nassim El Masaoudi
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Gedragswetenschapper en psycholoog
                    </div>
                  </div>
                </div>
                <div className="space-y-6 flex-grow">
                  <p className="text-gray-700 bg-gradient-to-r from-gray-50 to-primary/5 p-6 rounded-xl leading-relaxed">
                    Gespecialiseerd in gedragsproblematiek, weerbaarheid en psychologische ontwikkeling bij jongeren.
                    Nassim brengt zijn expertise in om jongeren te helpen hun emoties te begrijpen en reguleren.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center bg-white border border-primary/10 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Award className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Master in Klinische Psychologie</span>
                    </div>
                    <div className="flex items-center bg-white border border-primary/10 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Users className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">10+ jaar ervaring met jongeren</span>
                    </div>
                    <div className="flex items-center bg-white border border-primary/10 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <BookOpen className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Gespecialiseerd in gedragstherapie</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-xl">
                    <p className="italic text-gray-700 text-center font-medium">
                      "Ik geloof dat elke jongere het potentieel heeft om te groeien, met de juiste begeleiding en
                      tools."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trainer 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 border border-gray-100 hover:border-primary/20"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 border-2 border-primary/10">
                    <Image
                      src="/images/AliZoubai.jpg"
                      alt="Ali Zoubai"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                      Ali Zoubai
                    </h3>
                    <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                      Wereldkampioen kickboksen
                    </div>
                  </div>
                </div>
                <div className="space-y-6 flex-grow">
                  <p className="text-gray-700 bg-gradient-to-r from-gray-50 to-primary/5 p-6 rounded-xl leading-relaxed">
                    Gespecialiseerd in weerbaarheidstraining, agressieregulatie en activatie van jeugdigen. Ali
                    combineert zijn topsportervaring met zijn kennis van jeugdzorg.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center bg-white border border-primary/10 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Award className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Wereldkampioen kickboksen</span>
                    </div>
                    <div className="flex items-center bg-white border border-primary/10 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Clock className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">15+ jaar ervaring als trainer</span>
                    </div>
                    <div className="flex items-center bg-white border border-primary/10 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <Users className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">Specialist in jeugdbegeleiding</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-4 rounded-xl">
                    <p className="italic text-gray-700 text-center font-medium">
                      "Boksen is meer dan een sport - het is een manier om discipline, respect en zelfvertrouwen te
                      ontwikkelen."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Onze werkwijze */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden shadow-xl">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <Image
                    src="/images/1op1boksen.jpg"
                    alt="Onze werkwijze"
                    width={400}
                    height={600}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent md:bg-gradient-to-l"></div>
                </div>
                <div className="md:w-2/3 p-8 text-white relative">
                  <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 text-white/10">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold mb-6 flex items-center mobile-heading">
                    <span className="bg-white/20 p-2 rounded-lg mr-3">
                      <Users className="h-6 w-6" />
                    </span>
                    Onze werkwijze
                  </h3>

                  <div className="space-y-6">
                    <p className="text-white/90 text-lg mobile-text">
                      Onze aanpak is veilig, respectvol en gericht op positieve bekrachtiging. Fouten maken mag; leren
                      van ervaringen staat centraal.
                    </p>

                    {/* For mobile, we'll create a horizontal scrollable container */}
                    {mobileView ? (
                      <div className="mobile-scroll-container">
                        <div className="mobile-scroll-wrapper">
                          <div className="mobile-scroll-item bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Veilige omgeving</h4>
                            <p className="text-white/80 text-sm mobile-text">
                              We creëren een veilige ruimte waar jongeren zichzelf kunnen zijn en fouten mogen maken.
                            </p>
                          </div>

                          <div className="mobile-scroll-item bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Persoonlijke aandacht</h4>
                            <p className="text-white/80 text-sm mobile-text">
                              Elke jongere krijgt individuele begeleiding naast de groepsactiviteiten.
                            </p>
                          </div>

                          <div className="mobile-scroll-item bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Positieve bekrachtiging</h4>
                            <p className="text-white/80 text-sm mobile-text">
                              We focussen op wat goed gaat en bouwen daarop verder.
                            </p>
                          </div>

                          <div className="mobile-scroll-item bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                            <h4 className="font-bold mb-2">Stapsgewijze aanpak</h4>
                            <p className="text-white/80 text-sm mobile-text">
                              We werken met kleine, haalbare doelen die leiden tot blijvende verandering.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Veilige omgeving</h4>
                          <p className="text-white/80 text-sm">
                            We creëren een veilige ruimte waar jongeren zichzelf kunnen zijn en fouten mogen maken.
                          </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Persoonlijke aandacht</h4>
                          <p className="text-white/80 text-sm">
                            Elke jongere krijgt individuele begeleiding naast de groepsactiviteiten.
                          </p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Positieve bekrachtiging</h4>
                          <p className="text-white/80 text-sm">We focussen op wat goed gaat en bouwen daarop verder.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                          <h4 className="font-bold mb-2">Stapsgewijze aanpak</h4>
                          <p className="text-white/80 text-sm">
                            We werken met kleine, haalbare doelen die leiden tot blijvende verandering.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="pt-2">
                      <Link href="/over-ons">
                        <Button
                          variant="secondary"
                          className="group bg-white text-primary hover:bg-white/90 mobile-touch-target"
                        >
                          <span>Lees meer over ons team</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
