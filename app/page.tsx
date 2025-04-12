import type { Metadata } from "next"
import MainSection from "@/components/MainSection"
import FeaturedWorkSection from "@/components/FeaturedWorkSection"
import RunningProjectsSection from "@/components/RunningProjectsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Navigation from "@/components/Navigation"

export const metadata: Metadata = {
  title: "Dylan Rojo | Desarrollador Web & Especialista SEO",
  description:
    "Desarrollador web con más de 5 años de experiencia. Especializado en diseño web, desarrollo moderno, SEO y soluciones de branding estratégicas para empresas.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "SEO",
    "branding",
    "diseño UI/UX",
    "desarrollador React",
    "experto en Next.js",
    "Dylan Rojo",
    "desarrollador frontend",
    "ingeniero de software",
    "publicidad digital",
  ],
  openGraph: {
    title: "Dylan Rojo | Desarrollador Web & Especialista SEO",
    description:
      "Transforma tu presencia digital con servicios expertos de diseño web, desarrollo, SEO y branding. Mira mi portafolio de soluciones digitales de alto impacto.",
    type: "website",
    url: "https://dylanrojo.com",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Dylan Rojo - Desarrollador Web & Especialista SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan Rojo | Desarrollador Web & Especialista SEO",
    description:
      "Transforma tu presencia digital con servicios expertos de diseño web, desarrollo, SEO y branding. Mira mi portafolio de soluciones digitales de alto impacto.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  alternates: {
    canonical: "https://dylanrojo.com",
  },
  authors: [{ name: "Dylan Rojo" }],
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <MainSection />
      <FeaturedWorkSection />
      <RunningProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  )
}
