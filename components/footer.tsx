"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight, ChevronUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white relative overflow-hidden">
      {/* Subtiele achtergrond elementen */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtiele cirkels */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gray-800/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2"></div>

        {/* Subtiel patroon */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Subtiele golf onderaan */}
        <svg className="absolute bottom-0 left-0 w-full text-white/5" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,40L48,42.7C96,45,192,51,288,53.3C384,56,480,56,576,50.7C672,45,768,35,864,36.7C960,39,1056,53,1152,56.7C1248,61,1344,55,1392,52L1440,49L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Terug naar boven knop */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 right-8 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 transition-colors z-10"
        aria-label="Terug naar boven"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 pb-8 border-b border-white/10">
          {/* Logo en beschrijving */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/design-mode/boksbalance.png"
                alt="BoksBalance Logo"
                width={140}
                height={70}
                className="h-12 w-auto object-contain filter brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-sm mb-4">
              Psy-boks biedt een unieke combinatie van bokstraining en ambulante begeleiding voor jongeren tussen 12
              en 18 jaar.
            </p>
            <div className="flex gap-2 mt-4">
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-white mr-2"></span>
              Navigatie
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Over Ons", href: "/over-ons" },
                { name: "Programma", href: "/programma" },
                { name: "Doelgroep", href: "/doelgroep" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact informatie */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="w-6 h-0.5 bg-white mr-2"></span>
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-white shrink-0 mt-0.5" />
                <span className="text-white/70">Kraanvogelstraat 38, 5912 XR Venlo</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 text-white shrink-0 mt-0.5" />
                <span className="text-white/70">+31 6 23199757</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 text-white shrink-0 mt-0.5" />
                <span className="text-white/70 break-all">info@psy-boks.nl</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright en links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Psy-boks. Alle rechten voorbehouden Imad Jebara infrawebs.nl.</p>
          <div className="flex gap-6 text-xs text-white/60">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy.
            </Link>
            <Link href="/voorwaarden" className="hover:text-white transition-colors">
              Voorwaarden
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
