"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail, ArrowRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import { useOptimizedAnimations } from "@/hooks/use-optimized-animations"
import { useMobile } from "@/hooks/use-mobile"
import PageTransition from "@/components/page-transition"

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ContactPage() {
  const isMobile = useMobile()
  const { getAnimationProps, getViewportSettings, isMobile: isMobileOptimized } = useOptimizedAnimations()
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
          {/* Background elements */}
          <div className="absolute inset-0 z-0">
            {/* Main background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white"></div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>

            {/* Pattern overlay (static data-URI, no external fetch) */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg xmlns=%272000/svg%27 width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27%3E%3Cg fill=%2700a0bc%27 fillOpacity=%271%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/svg%3E')]"
            ></div>
          </div>

          <div className="container relative z-10 px-4 pt-20 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              >
                Neem Contact Op
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8"
              >
                Heeft u vragen over BoksBalance of wilt u een jongere aanmelden? Neem gerust contact met ons op.
              </motion.p>
              <div className="flex justify-center">
                <div className="w-20 h-1 bg-secondary rounded-full"></div>
              </div>

              {/* Contact methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6"
              >
                <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">+31 6 23199757</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">boksbalance@outlook.com</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md flex items-center">
                  <MessageSquare className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium">Formulier hieronder</span>
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

        {/* Contact Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.3 : 0.6 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Contactgegevens</h2>
              <div className="h-1 w-24 bg-secondary mx-auto mb-4 rounded-full"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
            >
              {/* Contact Info */}
              <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contactgegevens</h2>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 mobile-text">E-mail</h3>
                        <a
                          href="mailto:boksbalance@outlook.com"
                          className="text-muted-foreground hover:text-primary transition-colors mobile-text"
                        >
                          boksbalance@outlook.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 mobile-text">Telefoon</h3>
                        <a
                          href="tel:+31623199757"
                          className="text-muted-foreground hover:text-primary transition-colors mobile-text"
                        >
                          +31 6 23199757
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 mobile-text">Locatie</h3>
                        <p className="text-muted-foreground mobile-text">
                          Kraanvogelstraat 38
                          <br />
                          5912 XR Venlo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4">Openingstijden</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between mobile-text">
                      <span>Maandag - Vrijdag</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between mobile-text">
                      <span>Zaterdag</span>
                      <span>10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between mobile-text">
                      <span>Zondag</span>
                      <span>Gesloten</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <ContactForm />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-16 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            {/* FAQ Header with Text */}
            <div className="text-center mb-8 max-w-3xl mx-auto">
              <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-2">
                Veelgestelde vragen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">FAQ</h2>
              <div className="h-1 w-24 bg-secondary mx-auto mb-4 rounded-full"></div>

              {/* FAQ Description Text - Made more prominent */}
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 mb-6">
                <p className="text-lg font-medium text-gray-800">
                  Hieronder vindt u antwoorden op de meest gestelde vragen over ons programma, kosten, aanmelding en
                  werkwijze.
                </p>
                <p className="mt-2 text-gray-700">
                  Staat uw vraag er niet tussen? Neem dan gerust contact met ons op via het contactformulier hierboven.
                </p>
              </div>
            </div>

            <div className={isMobile ? "" : "grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"}>
              {isMobile ? (
                <div className="mobile-scroll-container mt-6">
                  <div className="mobile-scroll-wrapper">
                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="mobile-scroll-item bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                      <h3 className="text-xl font-bold mb-2 text-primary">Hoe kan ik een jongere aanmelden?</h3>
                      <p className="text-gray-600">
                        U kunt een jongere aanmelden door contact met ons op te nemen via telefoon, e-mail of het
                        contactformulier op deze pagina. Na aanmelding nemen we contact met u op voor een intakegesprek.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="mobile-scroll-item bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                      <h3 className="text-xl font-bold mb-2 text-primary">Wat zijn de kosten van het programma?</h3>
                      <p className="text-gray-600">
                        De kosten van het programma zijn afhankelijk van verschillende factoren, waaronder de duur en
                        intensiteit. Neem contact met ons op voor een persoonlijke offerte en informatie over
                        financieringsmogelijkheden.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="mobile-scroll-item bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                      <h3 className="text-xl font-bold mb-2 text-primary">Is er een wachtlijst?</h3>
                      <p className="text-gray-600">
                        Afhankelijk van de regio en het moment kan er een wachtlijst zijn. We streven ernaar om de
                        wachttijd zo kort mogelijk te houden en kunnen in sommige gevallen tijdelijke alternatieven
                        bieden.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="mobile-scroll-item bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                      <h3 className="text-xl font-bold mb-2 text-primary">Wordt BoksBalance vergoed?</h3>
                      <p className="text-gray-600">
                        In sommige gevallen kan BoksBalance worden vergoed door gemeenten, jeugdzorg of verzekeraars.
                        Dit is afhankelijk van de specifieke situatie en regio. We denken graag mee over de
                        mogelijkheden.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="mobile-scroll-item bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                      <h3 className="text-xl font-bold mb-2 text-primary">Hoe lang duurt het programma?</h3>
                      <p className="text-gray-600">
                        Het standaard programma duurt 12 weken, maar we bieden ook kortere en langere trajecten aan,
                        afhankelijk van de behoeften van de jongere. Na het programma is nazorg mogelijk.
                      </p>
                    </motion.div>

                    <motion.div
                      variants={cardVariants}
                      whileHover="hover"
                      className="mobile-scroll-item bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                      <h3 className="text-xl font-bold mb-2 text-primary">Is bokservaring nodig?</h3>
                      <p className="text-gray-600">
                        Nee, er is geen enkele bokservaring nodig. Ons programma is geschikt voor alle niveaus en we
                        beginnen altijd met de basistechnieken. De focus ligt op persoonlijke groei, niet op sportieve
                        prestaties.
                      </p>
                    </motion.div>
                  </div>
                </div>
              ) : (
                <>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <h3 className="text-xl font-bold mb-2 text-primary">Hoe kan ik een jongere aanmelden?</h3>
                    <p className="text-gray-600">
                      U kunt een jongere aanmelden door contact met ons op te nemen via telefoon, e-mail of het
                      contactformulier op deze pagina. Na aanmelding nemen we contact met u op voor een intakegesprek.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <h3 className="text-xl font-bold mb-2 text-primary">Wat zijn de kosten van het programma?</h3>
                    <p className="text-gray-600">
                      De kosten van het programma zijn afhankelijk van verschillende factoren, waaronder de duur en
                      intensiteit. Neem contact met ons op voor een persoonlijke offerte en informatie over
                      financieringsmogelijkheden.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <h3 className="text-xl font-bold mb-2 text-primary">Is er een wachtlijst?</h3>
                    <p className="text-gray-600">
                      Afhankelijk van de regio en het moment kan er een wachtlijst zijn. We streven ernaar om de
                      wachttijd zo kort mogelijk te houden en kunnen in sommige gevallen tijdelijke alternatieven
                      bieden.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <h3 className="text-xl font-bold mb-2 text-primary">Wordt BoksBalance vergoed?</h3>
                    <p className="text-gray-600">
                      In sommige gevallen kan BoksBalance worden vergoed door gemeenten, jeugdzorg of verzekeraars. Dit
                      is afhankelijk van de specifieke situatie en regio. We denken graag mee over de mogelijkheden.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <h3 className="text-xl font-bold mb-2 text-primary">Hoe lang duurt het programma?</h3>
                    <p className="text-gray-600">
                      Het standaard programma duurt 12 weken, maar we bieden ook kortere en langere trajecten aan,
                      afhankelijk van de behoeften van de jongere. Na het programma is nazorg mogelijk.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white rounded-xl p-4 shadow-lg relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mt-10 -mr-10 group-hover:bg-primary/10 transition-colors duration-300"></div>

                    <h3 className="text-xl font-bold mb-2 text-primary">Is bokservaring nodig?</h3>
                    <p className="text-gray-600">
                      Nee, er is geen enkele bokservaring nodig. Ons programma is geschikt voor alle niveaus en we
                      beginnen altijd met de basistechnieken. De focus ligt op persoonlijke groei, niet op sportieve
                      prestaties.
                    </p>
                  </motion.div>
                </>
              )}
            </div>
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
                    Neem contact met ons op om te bespreken hoe BoksBalance kan bijdragen aan de ontwikkeling van
                    jongeren in uw omgeving.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 shadow-lg w-full sm:w-auto font-semibold"
                    >
                      <span className="flex items-center">
                        Neem contact op
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    </Button>
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
      </div>
    </PageTransition>
  )
}
