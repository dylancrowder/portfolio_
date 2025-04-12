"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function FeaturedWorkSection() {
  const { t } = useLanguage()

  return (
    <section id="work" className="px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">{t("featured.title")}</h2>
            <div className="max-w-md">
              <p className="text-gray-400 mb-4">{t("featured.description")}</p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                {t("featured.create")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Project Categories */}
          {[
            {
              titleKey: "service.webdesign",
              number: "01",
              descriptionKey: "featured.webdesign.desc",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              titleKey: "service.webdev",
              number: "02",
              descriptionKey: "featured.webdev.desc",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              titleKey: "service.seo",
              number: "03",
              descriptionKey: "featured.seo.desc",
              image: "/placeholder.svg?height=400&width=600",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 sm:py-12 border-t border-gray-800"
            >
              <div className="space-y-4 mb-4 sm:mb-0">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl sm:text-4xl font-bold">{t(category.titleKey)}</h3>
                  <span className="text-sm text-gray-400">({category.number})</span>
                </div>
                <p className="text-gray-400">{t(category.descriptionKey)}</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="hidden md:block relative w-48 h-32 bg-gray-900">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={t(category.titleKey)}
                    fill
                    className="object-cover"
                  />
                </div>
                <Link href="#" className="inline-flex items-center gap-2 hover:text-gray-300">
                  {t("featured.viewprojects")} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Our Service Expertise */}
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              {t("expertise.title1")}
              <br />
              {t("expertise.title2")}
            </h2>
            <div className="max-w-md">
              <p className="text-gray-400 mb-4">{t("expertise.description")}</p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                {t("expertise.startproject")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                number: "01",
                titleKey: "service.webdesign",
                descriptions: ["expertise.webdesign.desc1", "expertise.webdesign.desc2"],
              },
              {
                number: "02",
                titleKey: "service.webdev",
                descriptions: ["expertise.webdev.desc1", "expertise.webdev.desc2"],
              },
              {
                number: "03",
                titleKey: "service.seo",
                descriptions: ["expertise.seo.desc1", "expertise.seo.desc2"],
              },
            ].map((service, index) => (
              <div key={index} className="space-y-4">
                <span className="text-sm text-gray-400">({service.number})</span>
                <h3 className="text-2xl font-bold">{t(service.titleKey)}</h3>
                {service.descriptions.map((desc, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {t(desc)}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
