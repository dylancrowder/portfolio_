"use client"

import { useLanguage } from "@/contexts/language-context"
import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Smartphone, Tablet, Laptop, Cloud, Zap, Lock } from "lucide-react"

export default function AplicacionesPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="lg:w-1/2">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">APLICACIONES</h1>
              <p className="text-xl text-gray-400 mb-8">
                Desarrollo de aplicaciones móviles y web que transforman ideas innovadoras en soluciones digitales
                funcionales y atractivas.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Aplicaciones móviles nativas e híbridas",
                  "Aplicaciones web progresivas (PWA)",
                  "Interfaces intuitivas y experiencias de usuario excepcionales",
                  "Integración con APIs y servicios de terceros",
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
                  alt="Desarrollo de aplicaciones profesionales"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Servicios de Aplicaciones */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Servicios de Desarrollo de Aplicaciones</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Smartphone className="w-10 h-10" />,
                  title: "Apps Móviles Nativas",
                  description:
                    "Desarrollo de aplicaciones nativas para iOS y Android con rendimiento optimizado y experiencia de usuario fluida.",
                },
                {
                  icon: <Tablet className="w-10 h-10" />,
                  title: "Apps Híbridas",
                  description:
                    "Aplicaciones multiplataforma desarrolladas con React Native o Flutter que funcionan en iOS y Android con un solo código base.",
                },
                {
                  icon: <Laptop className="w-10 h-10" />,
                  title: "Aplicaciones Web",
                  description:
                    "Desarrollo de aplicaciones web progresivas (PWA) que ofrecen experiencias similares a las apps nativas desde el navegador.",
                },
                {
                  icon: <Cloud className="w-10 h-10" />,
                  title: "Integración Backend",
                  description:
                    "Desarrollo de APIs y servicios backend robustos para soportar tus aplicaciones con almacenamiento en la nube.",
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

          {/* Tecnologías */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Tecnologías que Utilizo</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "React Native", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Flutter", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Swift", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Kotlin", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Firebase", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Node.js", logo: "/placeholder.svg?height=80&width=80" },
                { name: "MongoDB", logo: "/placeholder.svg?height=80&width=80" },
                { name: "GraphQL", logo: "/placeholder.svg?height=80&width=80" },
                { name: "AWS", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Google Cloud", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Redux", logo: "/placeholder.svg?height=80&width=80" },
                { name: "TypeScript", logo: "/placeholder.svg?height=80&width=80" },
              ].map((tech, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 relative mb-2">
                    <Image src={tech.logo || "/placeholder.svg"} alt={tech.name} fill className="object-contain" />
                  </div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Proceso de Desarrollo */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Mi Proceso de Desarrollo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Descubrimiento",
                  description:
                    "Entiendo tus objetivos, audiencia y requisitos funcionales para definir el alcance del proyecto.",
                },
                {
                  number: "02",
                  title: "Diseño UX/UI",
                  description:
                    "Creo wireframes y prototipos interactivos para visualizar la experiencia de usuario antes del desarrollo.",
                },
                {
                  number: "03",
                  title: "Desarrollo",
                  description:
                    "Implemento la aplicación utilizando las tecnologías más adecuadas para tus necesidades específicas.",
                },
                {
                  number: "04",
                  title: "Pruebas y Lanzamiento",
                  description:
                    "Realizo pruebas exhaustivas para garantizar la calidad y te acompaño en el proceso de publicación.",
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

          {/* Proyectos de Aplicaciones */}
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
                  title: "App de Gestión de Tareas",
                  description:
                    "Aplicación móvil multiplataforma para la gestión de tareas y proyectos con sincronización en la nube y notificaciones.",
                  image: "/placeholder.svg?height=400&width=600",
                  tags: ["React Native", "Firebase", "Redux"],
                },
                {
                  title: "Aplicación de Delivery",
                  description:
                    "Sistema completo de pedidos y entregas con seguimiento en tiempo real, pagos integrados y gestión de inventario.",
                  image: "/placeholder.svg?height=400&width=600",
                  tags: ["Flutter", "Node.js", "MongoDB", "Google Maps API"],
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
                  title: "Experiencia de Usuario Superior",
                  description:
                    "Desarrollo aplicaciones intuitivas y atractivas que mejoran la satisfacción del usuario y aumentan la retención.",
                },
                {
                  icon: <Smartphone className="w-8 h-8" />,
                  title: "Presencia Multiplataforma",
                  description:
                    "Llego a todos tus usuarios potenciales con aplicaciones que funcionan en múltiples dispositivos y sistemas operativos.",
                },
                {
                  icon: <Lock className="w-8 h-8" />,
                  title: "Seguridad y Escalabilidad",
                  description:
                    "Implemento las mejores prácticas de seguridad y arquitecturas escalables para crecer con tu negocio.",
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
                    "Dylan desarrolló una aplicación móvil que transformó la forma en que interactuamos con nuestros clientes. Su enfoque en la experiencia de usuario y atención al detalle fue excepcional.",
                  name: "Javier Morales",
                  role: "Fundador, DeliverEats",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Nuestra aplicación de gestión interna ha mejorado significativamente la productividad del equipo. Dylan entendió perfectamente nuestras necesidades y entregó una solución que superó nuestras expectativas.",
                  name: "Elena Gutiérrez",
                  role: "COO, ProductividadPro",
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Tienes una idea para una aplicación?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Convirtamos tu idea en una aplicación funcional y atractiva que impulse tu negocio y encante a tus
              usuarios.
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
