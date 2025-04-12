"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import Navigation from "@/components/Navigation"
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <main className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Encabezado */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-7xl font-bold mb-8">CONTACTO</h1>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <p className="text-gray-400 max-w-xl text-lg">
                ¿Tienes un proyecto en mente? ¿Necesitas mejorar tu presencia digital? Estoy aquí para ayudarte a
                alcanzar tus objetivos. Contáctame y hablemos sobre cómo puedo potenciar tu negocio.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <a href="mailto:dylan@ejemplo.com" className="hover:text-gray-300">
                    dylan@ejemplo.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <a href="tel:+123456789" className="hover:text-gray-300">
                    +12 345 6789
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>Ciudad de México, México</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>Lun - Vie: 9:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario y mapa */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-6">Envíame un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="Diseño Web">Diseño Web</option>
                    <option value="Desarrollo Web">Desarrollo Web</option>
                    <option value="SEO">SEO</option>
                    <option value="Aplicaciones">Aplicaciones</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {submitSuccess && (
                  <div className="mt-4 p-4 bg-green-900/50 border border-green-500 rounded-md">
                    ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Ubicación</h2>
              <div className="aspect-[4/3] relative bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Mapa de ubicación"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/70 p-4 rounded-lg text-center">
                    <p className="font-medium">Ciudad de México, México</p>
                    <p className="text-sm text-gray-400 mt-1">Disponible para proyectos remotos en todo el mundo</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Agenda una consulta</h3>
                <p className="text-gray-400 mb-4">
                  Reserva una videollamada de 30 minutos para discutir tu proyecto y cómo puedo ayudarte.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
                >
                  Agendar consulta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Preguntas frecuentes */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8">Preguntas frecuentes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "¿Cuál es tu proceso de trabajo?",
                  answer:
                    "Mi proceso comienza con una consulta inicial para entender tus necesidades, seguido de una propuesta detallada. Una vez aprobada, desarrollo el proyecto en fases con revisiones regulares hasta la entrega final.",
                },
                {
                  question: "¿Cuánto tiempo toma completar un proyecto?",
                  answer:
                    "El tiempo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-3 semanas, mientras que proyectos más complejos pueden llevar 2-3 meses. Siempre proporciono un cronograma detallado al inicio.",
                },
                {
                  question: "¿Ofreces mantenimiento después del lanzamiento?",
                  answer:
                    "Sí, ofrezco planes de mantenimiento mensual que incluyen actualizaciones, respaldos, seguridad y soporte técnico para asegurar que tu sitio funcione perfectamente.",
                },
                {
                  question: "¿Trabajas con clientes internacionales?",
                  answer:
                    "Absolutamente. Trabajo con clientes de todo el mundo y puedo adaptarme a diferentes zonas horarias para facilitar la comunicación.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-t border-gray-800 pt-4">
                  <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para transformar tu presencia digital?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Juntos podemos crear soluciones digitales que impulsen tu negocio al siguiente nivel. No esperes más para
              destacar en el mundo digital.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
            >
              Iniciar proyecto <ArrowRight className="w-4 h-4" />
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
