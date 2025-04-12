"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "English" },
    { code: "it", name: "Italiano" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm hover:text-gray-300 transition-colors"
      >
        {currentLanguage?.name}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as "es" | "en" | "it")
                setIsOpen(false)
              }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 transition-colors ${
                language === lang.code ? "text-white font-medium" : "text-gray-300"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
