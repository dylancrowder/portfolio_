"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function FeaturedWorkSection() {
  const { t } = useLanguage();

  return (
    <section id="work" className="px-4 sm:px-6">
      <div className="max-w-7xl mx-auto border-t border-gray-700">
        <div className=" pt-12 ">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              {t("featured.title")}
            </h2>
          </div>
        </div>
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
              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-lg">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt="Retrato de testimonio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <blockquote className="text-lg sm:text-xl text-gray-300">
                  {testimonial.quote}
                </blockquote>
                <div>
                  <Link
                    href="/#work"
                    className="text-xl font-semibold  flex items-center hover:text-gray-400"
                  >
                    VER PROYECTO <ArrowRight className="ml-2 " />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
