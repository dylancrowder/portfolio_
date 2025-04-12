"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function RunningProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            {t("running.title1")}
            <br />
            {t("running.title2")}
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-400 mb-8 text-lg">{t("running.description")}</p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
            >
              {t("running.discuss")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Project Showcase */}
        <div className="relative group">
          <div className="aspect-[16/9] relative overflow-hidden rounded-2xl">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Proyecto destacado actual"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
