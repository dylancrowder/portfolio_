"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en" | "it"

type Translations = {
  [key: string]: {
    es: string
    en: string
    it: string
  }
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Translations = {
  // Navegación
  "nav.work": {
    es: "Proyectos",
    en: "Work",
    it: "Progetti",
  },
  "nav.about": {
    es: "Sobre mí",
    en: "About",
    it: "Chi sono",
  },
  "nav.contact": {
    es: "Contacto",
    en: "Contact",
    it: "Contatto",
  },

  // Sección principal
  "main.hello": {
    es: "(HOLA, SOY DYLAN ROJO)",
    en: "(HELLO, I'M DYLAN ROJO)",
    it: "(CIAO, SONO DYLAN ROJO)",
  },
  "main.title1": {
    es: "DESARROLLADOR",
    en: "WEB",
    it: "SVILUPPATORE",
  },
  "main.title2": {
    es: "WEB",
    en: "DEVELOPER",
    it: "WEB",
  },
  "main.title3": {
    es: "& SEO",
    en: "& SEO",
    it: "& SEO",
  },
  "main.description": {
    es: "Transformando ideas en soluciones digitales potentes. Especializado en diseño web, desarrollo, SEO y soluciones de branding para empresas que exigen excelencia.",
    en: "Transforming ideas into powerful digital solutions. Specializing in web design, development, SEO and branding solutions for businesses that demand excellence.",
    it: "Trasformo le idee in potenti soluzioni digitali. Specializzato in web design, sviluppo, SEO e soluzioni di branding per aziende che esigono eccellenza.",
  },
  "main.collaborate": {
    es: "Colaboremos",
    en: "Let's collaborate",
    it: "Collaboriamo",
  },
  "main.experience": {
    es: "Con más de 5 años de experiencia, doy vida a tu visión con diseños de vanguardia y desarrollo robusto, creando olas de innovación y éxito para tu marca.",
    en: "With over 5 years of experience, I bring your vision to life with cutting-edge designs and robust development, creating waves of innovation and success for your brand.",
    it: "Con oltre 5 anni di esperienza, do vita alla tua visione con design all'avanguardia e sviluppo robusto, creando onde di innovazione e successo per il tuo marchio.",
  },

  // Servicios
  "service.webdesign": {
    es: "DISEÑO WEB",
    en: "WEB DESIGN",
    it: "WEB DESIGN",
  },
  "service.webdev": {
    es: "DESARROLLO WEB",
    en: "WEB DEVELOPMENT",
    it: "SVILUPPO WEB",
  },
  "service.seo": {
    es: "SEO",
    en: "SEO",
    it: "SEO",
  },
  "service.apps": {
    es: "APLICACIONES",
    en: "MOBILE APPS",
    it: "APPLICAZIONI",
  },
  "service.explore": {
    es: "Explorar",
    en: "Explore",
    it: "Esplora",
  },

  // Trabajo destacado
  "featured.title": {
    es: "PROYECTOS DESTACADOS",
    en: "FEATURED WORK",
    it: "PROGETTI IN EVIDENZA",
  },
  "featured.description": {
    es: "Desde aplicaciones móviles hasta sitios web de alto tráfico y plataformas de comercio electrónico, mi portafolio muestra una mezcla de innovación y experiencia técnica.",
    en: "From mobile apps to high-traffic websites and e-commerce platforms, my portfolio showcases a blend of innovation and technical expertise.",
    it: "Dalle app mobili ai siti web ad alto traffico e alle piattaforme di e-commerce, il mio portfolio mostra un mix di innovazione e competenza tecnica.",
  },
  "featured.create": {
    es: "Creemos juntos",
    en: "Let's create",
    it: "Creiamo insieme",
  },
  "featured.webdesign.desc": {
    es: "Creando experiencias digitales atractivas que cautivan y convierten",
    en: "Creating engaging digital experiences that captivate and convert",
    it: "Creazione di esperienze digitali coinvolgenti che catturano e convertono",
  },
  "featured.webdev.desc": {
    es: "Construyendo sitios web y aplicaciones escalables de alto rendimiento",
    en: "Building scalable, high-performance websites and applications",
    it: "Costruzione di siti web e applicazioni scalabili e ad alte prestazioni",
  },
  "featured.seo.desc": {
    es: "Optimizando tu presencia en línea para aumentar la visibilidad y el tráfico",
    en: "Optimizing your online presence to increase visibility and traffic",
    it: "Ottimizzazione della tua presenza online per aumentare la visibilità e il traffico",
  },
  "featured.viewprojects": {
    es: "Ver proyectos",
    en: "View projects",
    it: "Vedi progetti",
  },

  // Expertise
  "expertise.title1": {
    es: "MIS SERVICIOS",
    en: "MY SERVICE",
    it: "I MIEI SERVIZI",
  },
  "expertise.title2": {
    es: "ESPECIALIZADOS",
    en: "EXPERTISE",
    it: "SPECIALIZZATI",
  },
  "expertise.description": {
    es: "Aprovechando tecnologías de vanguardia y años de experiencia para ofrecer resultados excepcionales en diseño web, desarrollo, SEO y branding.",
    en: "Leveraging cutting-edge technologies and years of experience to deliver exceptional results across web design, development, SEO and branding.",
    it: "Sfruttando tecnologie all'avanguardia e anni di esperienza per offrire risultati eccezionali in web design, sviluppo, SEO e branding.",
  },
  "expertise.startproject": {
    es: "Iniciar un proyecto",
    en: "Start a project",
    it: "Inizia un progetto",
  },
  "expertise.webdesign.desc1": {
    es: "Creando interfaces de usuario intuitivas que mejoran la interacción.",
    en: "Creating intuitive user interfaces that enhance interaction.",
    it: "Creazione di interfacce utente intuitive che migliorano l'interazione.",
  },
  "expertise.webdesign.desc2": {
    es: "Enfocándome en las necesidades del usuario para ofrecer experiencias excepcionales.",
    en: "Focusing on user needs to deliver exceptional experiences.",
    it: "Concentrandomi sulle esigenze dell'utente per offrire esperienze eccezionali.",
  },
  "expertise.webdev.desc1": {
    es: "Construyendo aplicaciones web escalables y mantenibles.",
    en: "Building scalable and maintainable web applications.",
    it: "Costruzione di applicazioni web scalabili e manutenibili.",
  },
  "expertise.webdev.desc2": {
    es: "Utilizando frameworks modernos como React, Next.js y WordPress.",
    en: "Utilizing modern frameworks like React, Next.js, and WordPress.",
    it: "Utilizzando framework moderni come React, Next.js e WordPress.",
  },
  "expertise.seo.desc1": {
    es: "Optimizando sitios web para mejorar su posicionamiento en buscadores.",
    en: "Optimizing websites to improve search engine rankings.",
    it: "Ottimizzazione dei siti web per migliorare il posizionamento nei motori di ricerca.",
  },
  "expertise.seo.desc2": {
    es: "Implementando estrategias de contenido y técnicas SEO avanzadas.",
    en: "Implementing content strategies and advanced SEO techniques.",
    it: "Implementazione di strategie di contenuto e tecniche SEO avanzate.",
  },

  // Proyectos en curso
  "running.title1": {
    es: "NUESTROS",
    en: "OUR",
    it: "I NOSTRI",
  },
  "running.title2": {
    es: "PROYECTOS ACTUALES",
    en: "RUNNING PROJECT",
    it: "PROGETTI ATTUALI",
  },
  "running.description": {
    es: "Como desarrollador web utilizo ideas modernas, diseño con simplicidad e identificación visual universal adaptada al mercado actual y dedicado.",
    en: "As a web developer using modern ideas simplicity design and universal visual identification tailored to dedicated and current market.",
    it: "Come sviluppatore web utilizzo idee moderne, design con semplicità e identificazione visiva universale adattata al mercato attuale e dedicato.",
  },
  "running.discuss": {
    es: "Hablemos",
    en: "Let's discuss",
    it: "Parliamone",
  },

  // Testimonios
  "testimonials.title1": {
    es: "LO QUE DICEN",
    en: "PEOPLE SAYS",
    it: "COSA DICONO",
  },
  "testimonials.title2": {
    es: "SOBRE MÍ",
    en: "ABOUT ME",
    it: "DI ME",
  },

  // Contacto
  "contact.attention": {
    es: "ATENCIÓN RECLUTADORES",
    en: "ATTENTION RECRUITERS",
    it: "ATTENZIONE RECRUITER",
  },
  "contact.description": {
    es: "¿Buscas un desarrollador web con experiencia probada? Aporto más de 5 años de experiencia en diseño web, desarrollo, SEO y soluciones innovadoras. Explora mi portafolio y descubre cómo puedo aportar valor a tu equipo.",
    en: "Looking for a skilled web developer with a proven track record? I bring over 5 years of experience in web design, development, SEO and innovative solutions. Explore my portfolio and discover how I can add value to your team.",
    it: "Cerchi uno sviluppatore web con esperienza comprovata? Porto più di 5 anni di esperienza in web design, sviluppo, SEO e soluzioni innovative. Esplora il mio portfolio e scopri come posso aggiungere valore al tuo team.",
  },
  "contact.resume": {
    es: "Descargar Mi CV",
    en: "Download My Resume",
    it: "Scarica il Mio CV",
  },

  // Footer
  "footer.navigation": {
    es: "Navegación",
    en: "Navigation",
    it: "Navigazione",
  },
  "footer.services": {
    es: "Servicios",
    en: "Services",
    it: "Servizi",
  },
  "footer.connect": {
    es: "Conectar",
    en: "Connect",
    it: "Connetti",
  },
  "footer.rights": {
    es: "© 2024 Dylan Rojo. Todos los derechos reservados.",
    en: "© 2024 Dylan Rojo. All rights reserved.",
    it: "© 2024 Dylan Rojo. Tutti i diritti riservati.",
  },
  "footer.privacy": {
    es: "Política de Privacidad",
    en: "Privacy Policy",
    it: "Politica sulla Privacy",
  },
  "footer.terms": {
    es: "Términos de Servicio",
    en: "Terms of Service",
    it: "Termini di Servizio",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    // Verificar si hay un idioma guardado en localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["es", "en", "it"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem("language", language)
  }, [language])

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language]
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
