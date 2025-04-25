"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import { useLanguage } from "@/contexts/language-context";

export default function MainSection() {
  const { t } = useLanguage();

  return (
    <section id="main" className=" sm:pt-32 px-4 sm:px-6  h-[100vh]  ">
      <div className="max-w-7xl mx-auto h-full  ">
        <div className="sm:mb-32 flex flex-col justify-between h-full bg-black  ">
          <div className=" h-full flex justify-center flex-col ">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold sm:mb-8">
              {t("main.title1")}
              <br />
              <span className="font-serif italic font-normal">
                {t("main.title2")}
              </span>
              & MARKETING DIGITAL
            </h1>
            <div>
              <div className="">
                <p className="max-w-md mb-6 sm:mb-6">{t("main.experience")}</p>
              </div>
            </div>

            <div className="mb-6 ">
              <div className="max-w-sm">
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors"
                >
                  Contactame <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
