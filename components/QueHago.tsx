"use client";
import { useLanguage } from "@/contexts/language-context";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QueHago = () => {
  const { t } = useLanguage();

  const services = [
    {
      number: "01",
      titleKey: "service.webdesign",
      descriptions: ["expertise.webdesign.desc1", "expertise.webdesign.desc2"],
      href: "/servicios/diseno-web",
    },
    {
      number: "02",
      titleKey: "service.webdev",
      descriptions: ["expertise.webdev.desc1", "expertise.webdev.desc2"],
      href: "/servicios/desarrollo-web",
    },
    {
      number: "03",
      titleKey: "service.seo",
      descriptions: ["expertise.seo.desc1", "expertise.seo.desc2"],
      href: "/servicios/seo",
    },
    {
      number: "04",
      titleKey: "service.webdesign",
      descriptions: ["expertise.webdesign.desc1", "expertise.webdesign.desc2"],
      href: "/servicios/aplicaciones",
    },
    {
      number: "05",
      titleKey: "service.webdev",
      descriptions: ["expertise.webdev.desc1", "expertise.webdev.desc2"],
      href: "/servicios/webdev-2",
    },
    {
      number: "06",
      titleKey: "service.seo",
      descriptions: ["expertise.seo.desc1", "expertise.seo.desc2"],
      href: "/servicios/seo-2",
    },
  ];

  return (
    <section id="work" className="px-4 sm:px-6 w-full flex justify-center ">
      <div className="max-w-7xl border-t border-gray-700">
        <div className="h-full sm:mb-32">
          <div className="py-8">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              {t("expertise.title1")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="space-y-4 border border-gray-700 p-6 rounded-lg"
              >
                <span className="text-sm text-gray-400">
                  ({service.number})
                </span>
                <h3 className="text-2xl font-bold">{t(service.titleKey)}</h3>
                {service.descriptions.map((desc, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {t(desc)}
                  </p>
                ))}

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm hover:text-gray-300"
                >
                  Mas información <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueHago;
