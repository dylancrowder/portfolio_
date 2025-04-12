"use client"

import { useLanguage } from "@/contexts/language-context"
import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Zap, Layout, Palette, Users, Monitor } from "lucide-react"

export default function DisenoWebPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="lg:w-1/2">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">DISEÑO WEB</h1>
              <p className="text-xl text-gray-400 mb-8">
                Diseño web que cautiva, convierte y eleva tu marca por encima de la competencia.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Interfaces de usuario intuitivas y atractivas",
                  "Diseño responsive para todos los dispositivos",
                  "Experiencia de usuario optimizada",
                  "Identidad visual coherente con tu marca",
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
                Solicitar presupuesto <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="aspect-[4/3] relative bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Diseño web profesional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Servicios de Diseño Web */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Servicios de Diseño Web</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Layout className="w-10 h-10" />,
                  title: "Diseño UI/UX",
                  description:
                    "Interfaces intuitivas y experiencias de usuario que mejoran la interacción y aumentan las conversiones.",
                },
                {
                  icon: <Palette className="w-10 h-10" />,
                  title: "Diseño Responsive",
                  description:
                    "Sitios web que se adaptan perfectamente a todos los dispositivos, desde móviles hasta pantallas de escritorio.",
                },
                {
                  icon: <Users className="w-10 h-10" />,
                  title: "Diseño Centrado en Usuario",
                  description:
                    "Creación de interfaces basadas en investigación de usuarios y mejores prácticas de usabilidad.",
                },
                {
                  icon: <Monitor className="w-10 h-10" />,
                  title: "Rediseño de Sitios Web",
                  description:
                    "Actualización de sitios web existentes para mejorar su apariencia, rendimiento y experiencia de usuario.",
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

          {/* Proceso de Diseño */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Mi Proceso de Diseño</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Descubrimiento",
                  description:
                    "Entiendo tus objetivos, audiencia y necesidades específicas para crear un diseño que cumpla con tus expectativas.",
                },
                {
                  number: "02",
                  title: "Wireframing",
                  description:
                    "Creo esquemas de la estructura del sitio para visualizar la disposición de los elementos antes del diseño final.",
                },
                {
                  number: "03",
                  title: "Diseño Visual",
                  description:
                    "Desarrollo el aspecto visual completo, incluyendo colores, tipografía e imágenes que reflejen tu marca.",
                },
                {
                  number: "04",
                  title: "Implementación",
                  description:
                    "Transformo el diseño en un sitio web funcional, asegurando que se vea y funcione perfectamente en todos los dispositivos.",
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

          {/* Proyectos de Diseño Web */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
              <h2 className="text-3xl font-bold">Proyectos Destacados</h2>
              <Link href="/#work" className="inline-flex items-center gap-2 text-sm hover:text-gray-300">
                Ver todos los proyectos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Rediseño E-commerce de Moda",
                  description:
                    "Rediseño completo de la experiencia de usuario para una tienda de moda, aumentando las conversiones en un 35%.",
                  image: "/placeholder.svg?height=400&width=600",
                  tags: ["UI/UX", "E-commerce", "Responsive"],
                },
                {
                  title: "Sitio Web Corporativo",
                  description:
                    "Diseño elegante y profesional para una empresa de servicios financieros, mejorando su imagen de marca y presencia digital.",
                  image: "/placeholder.svg?height=400&width=600",
                  tags: ["Corporativo", "Minimalista", "Branding"],
                },
              ].map((project, index) => (
                <div key={index} className="group">
                  <div className="aspect-[3/2] relative bg-gray-900 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 bg-gray-800 rounded-full">
                        {tag}
                      </span>
                    ))}
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
                  icon: <Zap className="w-8 h-8" />,
                  title: "Primera Impresión Impactante",
                  description:
                    "Un diseño web profesional genera confianza inmediata en tus visitantes, aumentando la probabilidad de conversión.",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Experiencia de Usuario Optimizada",
                  description:
                    "Interfaces intuitivas que guían a los usuarios hacia tus objetivos de negocio, reduciendo la tasa de rebote.",
                },
                {
                  icon: <Monitor className="w-8 h-8" />,
                  title: "Diseño Adaptable",
                  description:
                    "Sitios web que funcionan perfectamente en todos los dispositivos, capturando audiencias móviles y de escritorio.",
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
                    "Dylan transformó completamente la imagen de nuestra marca con un diseño web que realmente refleja nuestra identidad. Nuestros clientes adoran la nueva experiencia.",
                  name: "Laura Martínez",
                  role: "Directora de Marketing, ModaExpress",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "El proceso de diseño fue impecable. Dylan entendió exactamente lo que necesitábamos y entregó un sitio web que superó nuestras expectativas.",
                  name: "Miguel Ángel Rodríguez",
                  role: "CEO, Innovatech",
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para transformar tu presencia digital?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Juntos podemos crear un diseño web que no solo se vea increíble, sino que también impulse los resultados
              de tu negocio.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Solicitar presupuesto <ArrowRight className="w-4 h-4" />
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
