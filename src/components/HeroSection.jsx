"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Star,
  GraduationCap,
  Wallet,
  ShieldCheck,
  Image as ImageIcon,
} from "lucide-react";

import italyFlag from "@/assets/flags/it.webp";
import VisaPhotoFlow from "@/components/VisaPhotoFlow";

const highlights = [
  {
    icon: GraduationCap,
    title: "Tuition-Free Universities",
    subtitle: "Italian public universities",
  },
  {
    icon: Wallet,
    title: "DSU Scholarship",
    subtitle: "Up to €8,200 / year",
  },
  {
    icon: ShieldCheck,
    title: "100% Visa Success",
    subtitle: "End-to-end guidance",
  },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      {/* Large, auto-scrolling visa approval photos fill the hero backdrop */}
      <VisaPhotoFlow />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div
          className={`mx-auto max-w-4xl text-center transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-7 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
            <img
              src={italyFlag}
              alt="Italy flag"
              className="h-5 w-5 rounded-full object-cover ring-1 ring-blue-200"
            />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-blue-900 sm:text-xs">
              Nepal&apos;s #1 Consultancy for Italy
            </span>
            <span className="flex items-center gap-0.5 border-l border-blue-100 pl-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={13}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </span>
          </div>

          <h1 className="mb-7 text-balance text-4xl font-extrabold leading-[1.12] tracking-tight text-blue-900 [text-shadow:0_2px_20px_rgba(255,255,255,0.9)] sm:text-5xl lg:text-6xl">
            The Best Consultancy for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Studying in Italy
            </span>
          </h1>

          <p className="mx-auto mb-9 max-w-2xl text-balance text-base font-medium leading-relaxed text-blue-800 [text-shadow:0_1px_12px_rgba(255,255,255,0.9)] sm:text-lg">
            From tuition-free public universities to DSU scholarships and visa
            approvals, Kashyap Advisors guides Nepali students through every
            step of their Italy journey — from Kathmandu to campus.
          </p>

          <div className="mx-auto mb-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="flex items-center gap-2.5 rounded-2xl border border-blue-100 bg-white/85 p-3 text-left shadow-[4px_4px_12px_rgba(59,130,246,0.08)] backdrop-blur-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <Icon size={19} className="text-blue-700" />
                </div>
                <div className="min-w-0">
                  <div className="truncate text-xs font-bold text-blue-900">
                    {title}
                  </div>
                  <div className="truncate text-[11px] font-medium text-blue-600">
                    {subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://tally.so/r/BzEERK"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl sm:w-auto"
            >
              <span>Start Your Italy Journey</span>
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#testimonials"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-blue-600 bg-white/85 px-8 py-4 text-base font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white sm:w-auto"
            >
              <ImageIcon size={18} />
              <span>See Visa Approvals</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
