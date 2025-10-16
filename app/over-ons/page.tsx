"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
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

export default function OverOnsPage() {
  const isMobile = useMobile()
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <>
      {/* Hero Section with dynamic background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white z-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzAwYTBiYyIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiAvPjwvc3ZnPg==')] opacity-50"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>

        {/* Hero content */}
        <div className="container relative z-10 px-4 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">Over Ons</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Maak kennis met de mensen achter BoksBalance en onze missie om jongeren te helpen groeien.
            </p>
            <div className="flex justify-center">
              <div className="w-20 h-1 bg-secondary rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white relative overflow-hidden" ref={missionRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Onze Missie</h2>
              <div className="w-20 h-1 bg-secondary mb-8 rounded-full"></div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                BoksBalance heeft als doel jongeren te ondersteunen in hun ontwikkeling tot weerbare, bewuste en
                zelfstandige individuen. We geloven dat fysieke kracht, mentale flexibiliteit en emotionele
                intelligentie hand in hand gaan bij het bouwen van een gezonde toekomst.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Door boksen en begeleiding te combineren, creëren we een setting waarin jongeren hun eigen kracht
                ontdekken, leren omgaan met emoties en sociale vaardigheden ontwikkelen.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={missionInView ? "visible" : "hidden"}
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/teen-boxing.jpg"
                  alt="Jonge bokser in training"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-white relative overflow-hidden" ref={teamRef}>
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute top-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ height: "15vh", minHeight: "100px" }}
          >
            <path
              fill="#00a0bc"
              fillOpacity="0.1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,181.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Ons Team</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Maak kennis met de professionals achter BoksBalance die met passie en expertise jongeren begeleiden.
            </p>
          </motion.div>

          {isMobile ? (
            <div className="mobile-scroll-container mb-12">
              <div className="mobile-scroll-wrapper">
                {/* Team member 1 - Mobile */}
                <motion.div
                  variants={fadeIn}
                  className="mobile-scroll-item bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="p-6 flex flex-col items-center">
                    <div className="relative w-40 h-40 rounded-xl overflow-hidden shadow-md mb-4">
                      <Image
                        src="/images/NassimElMasaoudi.jpg"
                        alt="Nassim El Masaoudi"
                        fill
                        className="object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2 text-center">Nassim El Masaoudi</h3>
                    <div className="inline-block bg-primary/5 px-3 py-1 rounded-full text-primary/80 font-medium mb-4 text-center">
                      Gedragswetenschapper en psycholoog
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      Mijn naam is Nassim El Masaoudi en ik ben gedragswetenschapper en psycholoog met een passie voor
                      het ondersteunen van jongeren in hun persoonlijke ontwikkeling.
                    </p>
                  </div>
                </motion.div>

                {/* Team member 2 - Mobile */}
                <motion.div
                  variants={fadeIn}
                  className="mobile-scroll-item bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="p-6 flex flex-col items-center">
                    <div className="relative w-40 h-40 rounded-xl overflow-hidden shadow-md mb-4">
                      <Image
                        src="/images/AliZoubai.jpg"
                        alt="Ali Zoubai"
                        fill
                        className="object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2 text-center">Ali Zoubai</h3>
                    <div className="inline-block bg-primary/5 px-3 py-1 rounded-full text-primary/80 font-medium mb-4 text-center">
                      Wereldkampioen kickboksen en zorgprofessional
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      Mijn naam is Ali Zoubai en ik werk als zelfstandige met een bijzondere achtergrond en passie voor
                      kickboksen. Deze expertise gebruik ik als middel om de weerbaarheid van jeugdigen te bevorderen.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate={teamInView ? "visible" : "hidden"}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {/* Team member 1 */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src="/images/NassimElMasaoudi.jpg"
                      alt="Nassim El Masaoudi"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 text-center md:text-left">
                      Nassim El Masaoudi
                    </h3>
                    <div className="inline-block bg-primary/5 px-3 py-1 rounded-full text-primary/80 font-medium mb-4 text-center md:text-left">
                      Gedragswetenschapper en psycholoog
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    Mijn naam is Nassim El Masaoudi en ik ben gedragswetenschapper en psycholoog met een passie voor het
                    ondersteunen van jongeren in hun persoonlijke ontwikkeling. Opgegroeid in een Marokkaans gezin met
                    een islamitische opvoeding, heb ik van jongs af aan de rijkdom van twee culturen ervaren. Deze
                    bi-culturele achtergrond geeft me een diep begrip en waardering voor diversiteit.
                  </p>
                </div>
              </motion.div>

              {/* Team member 2 */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="p-6 flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md flex-shrink-0 mx-auto md:mx-0">
                    <Image
                      src="/images/AliZoubai.jpg"
                      alt="Ali Zoubai"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 text-center md:text-left">Ali Zoubai</h3>
                    <div className="inline-block bg-primary/5 px-3 py-1 rounded-full text-primary/80 font-medium mb-4 text-center md:text-left">
                      Wereldkampioen kickboksen en zorgprofessional
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    Mijn naam is Ali Zoubai en ik werk als zelfstandige met een bijzondere achtergrond en passie voor
                    kickboksen. Deze expertise gebruik ik als middel om de weerbaarheid, agressieregulatie en activatie
                    van jeugdigen te bevorderen. Met trots kan ik vermelden dat ik wereldkampioen kickboksen ben
                    geweest. Deze sport heeft mij niet alleen voorzien van professionele kennis, maar heeft ook een
                    cruciale rol gespeeld in mijn persoonlijke ontwikkeling.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Werkwijze */}
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-primary/10"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Onze werkwijze</h3>
            <div className="w-16 h-1 bg-secondary mb-6 rounded-full"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Onze aanpak is veilig, respectvol en gericht op positieve bekrachtiging. Fouten maken mag; leren van
                  ervaringen staat centraal.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We werken vanuit vertrouwen en stimuleren jongeren stap voor stap om uitdagingen aan te gaan en
                  successen te behalen.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Samen zijn we vastbesloten om een veilige en ondersteunende ruimte te bieden waar jongeren hun potentieel kunnen ontdekken en ontwikkelen. Onze methode combineert fysieke training met ambulante begeleiding in met behulp van een holistische benadering.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden" ref={valuesRef}>
        <div className="absolute inset-0 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-tr-full opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Onze Waarden</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              De kernwaarden die ons werk en onze aanpak vormgeven en ons elke dag inspireren.
            </p>
          </motion.div>

          {isMobile ? (
            <div className="mobile-scroll-container mb-12">
              <div className="mobile-scroll-wrapper">
                {/* Value 1 - Mobile */}
                <motion.div
                  variants={fadeIn}
                  className="mobile-scroll-item bg-white rounded-2xl p-8 shadow-lg border border-primary/10 transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Respect</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We benaderen elke jongere met respect voor hun unieke achtergrond, ervaringen en uitdagingen. We
                    maken een duidelijk onderscheid tussen gedrag en persoon.
                  </p>
                </motion.div>

                {/* Value 2 - Mobile */}
                <motion.div
                  variants={fadeIn}
                  className="mobile-scroll-item bg-white rounded-2xl p-8 shadow-lg border border-primary/10 transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Veiligheid</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We creëren een veilige omgeving waarin jongeren zich kunnen uiten, fouten mogen maken en kunnen
                    groeien zonder oordeel.
                  </p>
                </motion.div>

                {/* Value 3 - Mobile */}
                <motion.div
                  variants={fadeIn}
                  className="mobile-scroll-item bg-white rounded-2xl p-8 shadow-lg border border-primary/10 transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">Groei</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We geloven in het potentieel van elke jongere en zijn gericht op persoonlijke ontwikkeling, niet op
                    prestatie of competitie.
                  </p>
                </motion.div>
              </div>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate={valuesInView ? "visible" : "hidden"}
              variants={staggerChildren}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Value 1 */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Respect</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We benaderen elke jongere met respect voor hun unieke achtergrond, ervaringen en uitdagingen. We maken
                  een duidelijk onderscheid tussen gedrag en persoon.
                </p>
              </motion.div>

              {/* Value 2 */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Veiligheid</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We creëren een veilige omgeving waarin jongeren zich kunnen uiten, fouten mogen maken en kunnen
                  groeien zonder oordeel.
                </p>
              </motion.div>

              {/* Value 3 */}
              <motion.div
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-lg border border-primary/10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Groei</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We geloven in het potentieel van elke jongere en zijn gericht op persoonlijke ontwikkeling, niet op
                  prestatie of competitie.
                </p>
              </motion.div>
            </motion.div>
          )}
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
              <path d="M12,2C9.97,2 8.1,2.67 6.6,3.8L4.8,2L4,2.8L5.4,4.2C4.17,5.67 3.5,7.5 3.5,9.5A9,9 0 0,0 12.5,18.5C17.5,18.5 21.5,14.5 21.5,9.5C21.5,5.5 17.5,2 12,2M16.06,6.44L17.47,5.03C16.9,4.46 16.44,4.15 16.06,4.03L15.5,5.88C15.47,6.15 15.44,6.42 15.41,6.7L16.06,6.44M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V16.91C16.17,16.43 18.5,13.5 18.5,10A6.5,6.5 0 0,0 12,3.5C10.27,3.5 8.71,4.07 7.47,5.03L8.88,6.44C9.15,4.94 10.5,4 12,4M8.7,7.5L7.7,6.5C7.87,6.33 8.15,6.15 8.5,6.05L8.03,4.03C7.16,4.33 6.5,4.79 6,5.29L7.47,6.76C7.5,7.03 7.8,7.3 8.7,7.5M6.32,8.82L5.56,8.06C5.06,9.79 5.32,10.77 5.56,11.06L7.5,9.12C6.97,9.12 6.64,9.03 6.32,8.82M9.08,5.32,10.77 5.56,11.06L7.5,9.12C6.97,9.12 6.64,9.03 6.32,8.82" />
            </svg>
          </motion.div>
        </div>
      </section>
    </>
  )
}
