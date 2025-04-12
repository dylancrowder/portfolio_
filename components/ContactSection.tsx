"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="max-w-7xl mx-auto mt-16 sm:mt-32 px-4 sm:px-6 pb-16">
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Dylan Rojo.</h2>
          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">{t("contact.attention")}</h3>
            <p className="text-gray-400">{t("contact.description")}</p>
            <div className="max-w-sm">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
              >
                {t("contact.resume")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Dylan Rojo en un entorno profesional"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 sm:mt-32 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="text-sm text-gray-400">{t("footer.navigation")}</div>
          {[
            { key: "nav.work", href: "#work" },
            { key: "nav.about", href: "#about" },
            { key: "nav.contact", href: "#contact" },
            { key: "service.webdesign", href: "#webdesign" },
          ].map((item) => (
            <Link key={item.key} href={item.href} className="block hover:text-gray-300">
              {t(item.key)}
            </Link>
          ))}
        </div>
        <div className="space-y-4">
          <div className="text-sm text-gray-400">{t("footer.services")}</div>
          {[
            { key: "service.webdesign", href: "#webdesign" },
            { key: "service.webdev", href: "#webdev" },
            { key: "service.seo", href: "#seo" },
            { key: "service.apps", href: "#apps" },
          ].map((item) => (
            <Link key={item.key} href={item.href} className="block hover:text-gray-300">
              {t(item.key)}
            </Link>
          ))}
        </div>
        <div className="space-y-4 md:col-span-2">
          <div className="text-sm text-gray-400">{t("footer.connect")}</div>
          <div className="flex gap-4">
            {["LinkedIn", "GitHub", "Twitter", "Email"].map((social) => (
              <Link key={social} href="#" className="hover:text-gray-300">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-16 flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10">
        <div className="text-sm text-gray-400 mb-4 sm:mb-0">{t("footer.rights")}</div>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-gray-300">
            {t("footer.privacy")}
          </Link>
          <Link href="#" className="hover:text-gray-300">
            {t("footer.terms")}
          </Link>
        </div>
      </div>
    </section>
  )
}
