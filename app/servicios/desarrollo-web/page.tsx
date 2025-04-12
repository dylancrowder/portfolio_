"use client"

import { useLanguage } from "@/contexts/language-context"
import Navigation from "@/components/Navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Code, Database, Server, Globe, Zap, Shield } from "lucide-react"

export default function DesarrolloWebPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="lg:w-1/2">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">DESARROLLO WEB</h1>
              <p className="text-xl text-gray-400 mb-8">
                Desarrollo web a medida que combina rendimiento excepcional, escalabilidad y experiencia de usuario
                superior.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Sitios web y aplicaciones web personalizadas",
                  "Desarrollo frontend con React, Next.js y más",
                  "Soluciones e-commerce y CMS",
                  "Optimización de rendimiento y velocidad",
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
                  alt="Desarrollo web profesional"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Servicios de Desarrollo Web */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Servicios de Desarrollo Web</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Code className="w-10 h-10" />,
                  title: "Desarrollo Frontend",
                  description:
                    "Interfaces modernas y responsivas utilizando React, Next.js, y otras tecnologías de vanguardia.",
                },
                {
                  icon: <Server className="w-10 h-10" />,
                  title: "Desarrollo Backend",
                  description: "Sistemas robustos y escalables con Node.js, PHP, Python y bases de datos SQL/NoSQL.",
                },
                {
                  icon: <Database className="w-10 h-10" />,
                  title: "E-commerce",
                  description:
                    "Tiendas online personalizadas con WooCommerce, Shopify o soluciones a medida según tus necesidades.",
                },
                {
                  icon: <Globe className="w-10 h-10" />,
                  title: "CMS Personalizados",
                  description:
                    "Sistemas de gestión de contenido a medida que facilitan la administración de tu sitio web.",
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
            <h2 className="text-3xl font-bold mb-12 text-center">Tecnologías que Domino</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: "React", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Next.js", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Node.js", logo: "/placeholder.svg?height=80&width=80" },
                { name: "WordPress", logo: "/placeholder.svg?height=80&width=80" },
                { name: "PHP", logo: "/placeholder.svg?height=80&width=80" },
                { name: "MySQL", logo: "/placeholder.svg?height=80&width=80" },
                { name: "MongoDB", logo: "/placeholder.svg?height=80&width=80" },
                { name: "JavaScript", logo: "/placeholder.svg?height=80&width=80" },
                { name: "TypeScript", logo: "/placeholder.svg?height=80&width=80" },
                { name: "HTML5", logo: "/placeholder.svg?height=80&width=80" },
                { name: "CSS3", logo: "/placeholder.svg?height=80&width=80" },
                { name: "Tailwind CSS", logo: "/placeholder.svg?height=80&width=80" },
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
                  title: "Planificación",
                  description:
                    "Definimos los objetivos, funcionalidades y arquitectura del proyecto para crear una hoja de ruta clara.",
                },
                {
                  number: "02",
                  title: "Diseño y Prototipado",
                  description:
                    "Creamos wireframes y prototipos interactivos para visualizar la estructura y funcionalidad.",
                },
                {
                  number: "03",
                  title: "Desarrollo",
                  description:
                    "Implementamos el código frontend y backend siguiendo las mejores prácticas y estándares de la industria.",
                },
                {
                  number: "04",
                  title: "Pruebas y Lanzamiento",
                  description:
                    "Realizamos pruebas exhaustivas para garantizar la calidad antes del lanzamiento y proporcionamos soporte continuo.",
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

          {/* Proyectos de Desarrollo Web */}
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
                  title: "Plataforma de Reservas Online",
                  description:
                    "Sistema completo de reservas para un negocio de turismo, incluyendo pagos online y gestión de disponibilidad.",
                  image: "/placeholder.svg?height=400&width=600",
                  tags: ["React", "Node.js", "MongoDB", "Stripe"],
                },
                {
                  title: "E-commerce de Productos Artesanales",
                  description:
                    "Tienda online personalizada con gestión de inventario, carrito de compras y pasarela de pagos integrada.",
                  image: "/placeholder.svg?height=400&width=600",
                  tags: ["Next.js", "Tailwind CSS", "Strapi", "PayPal"],
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
                  title: "Rendimiento Optimizado",
                  description:
                    "Desarrollo sitios web rápidos y eficientes que mejoran la experiencia del usuario y el posicionamiento en buscadores.",
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Seguridad Robusta",
                  description:
                    "Implemento las mejores prácticas de seguridad para proteger tu sitio web y los datos de tus usuarios.",
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Escalabilidad",
                  description:
                    "Creo soluciones que pueden crecer con tu negocio, adaptándose a nuevas necesidades y volúmenes de tráfico.",
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
                    "Dylan desarrolló una plataforma web que transformó completamente nuestro modelo de negocio. Su conocimiento técnico y capacidad para entender nuestras necesidades fue excepcional.",
                  name: "Carlos Méndez",
                  role: "CTO, TechSolutions",
                  image: "/placeholder.svg?height=100&width=100",
                },
                {
                  quote:
                    "Nuestra tienda online ha aumentado las ventas en un 45% desde que Dylan implementó las mejoras en el rendimiento y la experiencia de usuario. Totalmente recomendado.",
                  name: "Ana López",
                  role: "Fundadora, ArtesaníasMex",
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para llevar tu negocio al siguiente nivel?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Desarrollemos juntos la solución web que tu negocio necesita para destacar en el mundo digital y alcanzar
              tus objetivos.
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
