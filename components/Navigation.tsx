"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSelector from "./LanguageSelector"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para cambiar el estilo de la navegación
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determinar si estamos en la página de inicio
  const isHomePage = pathname === "/"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-8 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-3 sm:py-4" : "bg-black/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-medium">
          Dylan.
        </Link>

        <div className="hidden sm:flex items-center gap-4 sm:gap-8">
          {isHomePage ? (
            // Enlaces para la página de inicio (scroll a secciones)
            <>
              <Link href="#work" className="hover:text-gray-300">
                {t("nav.work")}
              </Link>
              <Link href="#about" className="hover:text-gray-300">
                {t("nav.about")}
              </Link>
            </>
          ) : (
            // Enlaces para otras páginas (navegar a la sección de la página de inicio)
            <>
              <Link href="/#work" className="hover:text-gray-300">
                {t("nav.work")}
              </Link>
              <Link href="/#about" className="hover:text-gray-300">
                {t("nav.about")}
              </Link>
            </>
          )}
          <Link href="/contacto" className="hover:text-gray-300">
            {t("nav.contact")}
          </Link>
          <div className="relative group">
            <button className="hover:text-gray-300">Servicios</button>
            <div className="absolute left-0 mt-2 w-48 bg-black/90 backdrop-blur-sm border border-gray-800 rounded-md shadow-lg hidden group-hover:block">
              <div className="py-1">
                <Link
                  href="/servicios/diseno-web"
                  className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                >
                  {t("service.webdesign")}
                </Link>
                <Link
                  href="/servicios/desarrollo-web"
                  className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                >
                  {t("service.webdev")}
                </Link>
                <Link href="/servicios/seo" className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
                  {t("service.seo")}
                </Link>
                <Link
                  href="/servicios/aplicaciones"
                  className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
                >
                  {t("service.apps")}
                </Link>
              </div>
            </div>
          </div>
          <LanguageSelector />
        </div>

        <button
          className="sm:hidden w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm p-4">
          <div className="flex flex-col gap-4">
            {isHomePage ? (
              <>
                <Link href="#work" className="py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.work")}
                </Link>
                <Link href="#about" className="py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.about")}
                </Link>
              </>
            ) : (
              <>
                <Link href="/#work" className="py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.work")}
                </Link>
                <Link href="/#about" className="py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                  {t("nav.about")}
                </Link>
              </>
            )}
            <Link href="/contacto" className="py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
              {t("nav.contact")}
            </Link>
            <div className="py-2">
              <div className="font-medium mb-2">Servicios</div>
              <div className="pl-4 flex flex-col gap-2">
                <Link
                  href="/servicios/diseno-web"
                  className="py-1 hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("service.webdesign")}
                </Link>
                <Link
                  href="/servicios/desarrollo-web"
                  className="py-1 hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("service.webdev")}
                </Link>
                <Link href="/servicios/seo" className="py-1 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>
                  {t("service.seo")}
                </Link>
                <Link
                  href="/servicios/aplicaciones"
                  className="py-1 hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("service.apps")}
                </Link>
              </div>
            </div>
            <div className="py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
