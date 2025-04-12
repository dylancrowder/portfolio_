"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import { useLanguage } from "@/contexts/language-context";

export default function MainSection() {
  const { t } = useLanguage();

  return (
    <section id="main" className="pt-24 sm:pt-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto h-[82vh]   ">
        {/* Hero Section */}
        <div className="mb-16 sm:mb-32 flex flex-col h-full justify-between  ">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8">
            {t("main.title1")}{" "}
            <span className="font-serif italic font-normal">
              {t("main.title2")}
            </span>
            <br className="hidden sm:block" /> {t("main.title3")}
          </h1>
          <div className="flex flex-col sm:flex-row justify-end  gap-6 sm:gap-0">
            <div>
              <div className="">
                <p className="max-w-md mb-8 sm:mb-16">{t("main.experience")}</p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                {t("main.collaborate")} <ArrowRight className="w-4 h-4" />
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div className="mb-16 sm:mb-32 max-w-7xl mx-auto ">
        <p className="max-w-md mb-8 sm:mb-16">{t("main.experience")}</p>

        <div className="space-y-4 sm:space-y-6">
          {[
            { key: "service.webdesign", href: "#webdesign" },
            { key: "service.webdev", href: "#webdev" },
            { key: "service.seo", href: "#seo" },
            { key: "service.apps", href: "#apps" },
          ].map((service, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 sm:py-6 border-t border-gray-800"
            >
              <h3 className="text-lg sm:text-xl">{t(service.key)}</h3>
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-sm hover:text-gray-300"
              >
                {t("service.explore")} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
