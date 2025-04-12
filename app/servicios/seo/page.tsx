"use client"

import { useLanguage } from "@/contexts/language-context"
import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Search, BarChart, TrendingUp, Target, Users, Settings } from "lucide-react"

export default function SEOPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="lg:w-1/2">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">SEO</h1>
              <p className="text-xl text-gray-400 mb-8">
                Optimización para motores de búsqueda que aumenta tu visibilidad online y atrae tráfico cualificado a tu
                sitio web.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Auditorías SEO completas",
                  "Optimización on-page y off-page",
                  "Estrategias de contenido SEO",
                  "Análisis de competencia y palabras clave",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
              >
                Solicitar auditoría SEO <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] relative bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Optimización SEO profesional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Servicios de SEO */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Servicios de SEO</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Search className="w-10 h-10" />,
                  title: "Auditoría SEO",
                  description:
                    "Análisis completo de tu sitio web para identificar problemas y oportunidades de mejora en el posicionamiento.",
                },
                {
                  icon: <Settings className="w-10 h-10" />,
                  title: "SEO On-Page",
                  description:
                    "Optimización de contenido, metadatos, estructura y velocidad de carga para mejorar el posicionamiento.",
                },
                {
                  icon: <Target className="w-10 h-10" />,
                  title: "Investigación de Keywords",
                  description: "Identificación de las palabras clave más relevantes y rentables para tu negocio.",
                },
                {
                  icon: <BarChart className="w-10 h-10" />,
                  title: "Análisis y Reportes",
                  description:
                    "Seguimiento continuo del rendimiento y reportes detallados para medir el éxito de la estrategia SEO.",
                },
              ].map((service, index) => (
                <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
                  <div className="mb-4 text-white">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Proceso de SEO */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Mi Proceso de SEO</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Auditoría Inicial",
                  description:
                    "Análisis completo de tu sitio web, competencia y palabras clave para establecer una línea base.",
                },
                {
                  number: "02",
                  title: "Estrategia Personalizada",
                  description: "Desarrollo de un plan de acción específico para tu negocio y objetivos.",
                },
                {
                  number: "03",
                  title: "Implementación",
                  description: "Aplicación de las mejoras técnicas, optimización de contenido y estrategias off-page.",
                },
                {
                  number: "04",
                  title: "Seguimiento y Ajustes",
                  description:
                    "Monitoreo continuo de resultados y ajuste de la estrategia para maximizar el rendimiento.",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-5xl font-bold text-gray-800">{step.number}</div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-gray-800 transform translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Herramientas que utilizo */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Herramientas que Utilizo</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "Google Analytics", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Google Search Console", logo: "/placeholder.svg?height=80&width=80" },
                { name: "SEMrush", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Ahrefs", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Screaming Frog", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Moz", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Ubersuggest", logo: "/placeholder.svg?height=80&width=80" },
                { name: "GTmetrix", logo: "/placeholder.svg?height=80&width=80" },
                { name: "PageSpeed Insights", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Yoast SEO", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Rank Math", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Google Trends", logo: "/placeholder.svg?height=80&width=80" },
              ].map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 relative mb-2">
                    <Image src={tool.logo || "/placeholder.svg"} alt={tool.name} fill className="object-contain" />
                  </div>
                  <span className="text-sm text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Casos de Éxito */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
              <h2 className="text-3xl font-bold">Casos de Éxito</h2>
              <Link href="/#work" className="inline-flex items-center gap-2 text-sm hover:text-gray-300">
                Ver todos los proyectos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-commerce de Moda",
                  description:
                    "Aumento del 120% en tráfico orgánico y 85% en conversiones en 6 meses mediante optimización SEO completa.",
                  image: "/placeholder.svg?height=400&width=600",
                  stats: [
                    { label: "Aumento de tráfico", value: "+120%" },
                    { label: "Mejora en conversiones", value: "+85%" },
                    { label: "Palabras clave en top 10", value: "150+" },
                  ],
                },
                {
                  title: "Blog de Viajes",
                  description:
                    "Incremento del 200% en visitas mensuales y mejora del 45% en tiempo de permanencia mediante estrategia de contenidos SEO.",
                  image: "/placeholder.svg?height=400&width=600",
                  stats: [
                    { label: "Aumento de visitas", value: "+200%" },
                    { label: "Tiempo en página", value: "+45%" },
                    { label: "Artículos posicionados", value: "75+" },
                  ],
                },
              ].map((project, index) => (
                <div key={index} className="group border border-gray-800 rounded-lg overflow-hidden">
                  <div className="aspect-[16/9] relative bg-gray-900">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-xl font-bold">{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cómo puedo potenciar tu negocio */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Cómo Puedo Potenciar Tu Negocio</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Mayor Visibilidad",
                  description:
                    "Posiciono tu sitio web en los primeros resultados de búsqueda para las palabras clave relevantes de tu industria.",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Tráfico Cualificado",
                  description:
                    "Atraigo visitantes realmente interesados en tus productos o servicios, aumentando la probabilidad de conversión.",
                },
                {
                  icon: <BarChart className="w-8 h-8" />,
                  title: "ROI Medible",
                  description:
                    "Proporciono informes detallados que muestran el retorno de tu inversión en SEO y el crecimiento de tu negocio.",
                },
              ].map((benefit, index) => (
                <div key={index} className="border border-gray-800 p-6 rounded-lg">
                  <div className="mb-4 text-white">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonios */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Lo Que Dicen Mis Clientes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Gracias a la estrategia SEO implementada por Dylan, nuestro sitio web ahora aparece en la primera página de Google para más de 50 palabras clave relevantes. Nuestras ventas han aumentado significativamente.",
                  name: "Roberto Sánchez",
                  role: "Director de Marketing, TechStore",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Dylan transformó completamente nuestra presencia online. Su enfoque metódico y estratégico para el SEO nos ha ayudado a superar a competidores mucho más grandes en los resultados de búsqueda.",
                  name: "Lucía Fernández",
                  role: "CEO, Viajes Extraordinarios",
                  image: "/placeholder.svg?height=100&width=100",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-900/30 p-6 rounded-lg">
                  <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gray-900/30 p-12 rounded-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para mejorar tu visibilidad online?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Solicita una auditoría SEO gratuita y descubre cómo puedo ayudarte a aumentar tu tráfico orgánico y
              mejorar tus conversiones.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Solicitar auditoría gratuita <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-gray-400 mb-4 sm:mb-0">© 2024 Dylan Rojo. Todos los derechos reservados.</div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-300">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-gray-300">
              GitHub
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Twitter
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
