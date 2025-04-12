"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-32 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8 lg:gap-16">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            {t("testimonials.title1")}
            <br />
            {t("testimonials.title2")}
          </h2>
          <div className="max-w-md lg:text-right">
            <p className="text-gray-400 mb-8 text-lg">{t("running.description")}</p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors rounded-full"
            >
              {t("running.discuss")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {[
            {
              image: "/placeholder.svg?height=600&width=450",
              quote:
                "Dylan transformó por completo nuestra presencia en línea. Su enfoque en SEO y diseño web nos ayudó a aumentar nuestro tráfico en un 200% en solo tres meses.",
              name: "María Rodríguez",
              role: "CEO, Innovatech",
            },
            {
              image: "/placeholder.svg?height=600&width=450",
              quote:
                "Trabajar con Dylan fue una experiencia excepcional. Su conocimiento técnico y creatividad nos permitieron desarrollar una aplicación web que superó todas nuestras expectativas.",
              name: "Carlos Méndez",
              role: "Director de Marketing, TechSolutions",
            },
          ].map((testimonial, index) => (
            <div key={index} className="space-y-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt="Retrato de testimonio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <blockquote className="text-lg sm:text-xl text-gray-300">{testimonial.quote}</blockquote>
                <div>
                  <div className="text-xl font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
