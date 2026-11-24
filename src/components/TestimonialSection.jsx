"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
  Image as ImageIcon,
} from "lucide-react";

const TESTIMONIALS = [
  {
    id: "7684171803542965525",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7684171803542965525",
    name: "Aayusha Adhikhari ",
    destination: "University of Cassino",
  },
  {
    id: "7681295366070816007",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7681295366070816007",
    name: "Ummid Lama",
    destination: "University of Cassino",
  },
  {
    id: "7681557684176358676",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7681557684176358676",
    name: "Sushant Dhital",
    destination: "University of Bologna",
  },
  {
    id: "7684466854601018644",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7684466854601018644",
    name: "Nodan Dhakal",
    destination: "University of Cassino",
  },
  {
    id: "7684173810680990997",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7684173810680990997",
    name: "Dahut Tamang",
    destination: "University of Cassino",
  },
  {
    id: "7688356670623272212",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7688356670623272212",
    name: "Nodan Dahal",
    destination: "University of Cassino",
  },
  {
    id: "7689522900596002055",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7689522900596002055",
    name: "Nirmal Thapaliya",
    destination: "University of Padova",
  },
  {
    id: "7689731836775304466",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7689731836775304466",
    name: "Anita Tamang",
    destination: "University of Cassino ",
  },
  {
    id: "7690042389833977108",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7690042389833977108",
    name: "Anita Tamang",
    destination: "University of Cassino",
  },
  {
    id: "7690212198941166900",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7690212198941166900",
    name: "Samikshya Gurung",
    destination: "University of Naples Parthenope",
  },
  {
    id: "7690407005520989447",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7690407005520989447",
    name: "Samikshya Gurung",
    destination: "University of Naples Parthenope",
  },
  {
    id: "7694193586811702536",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7694193586811702536",
    name: "Samrat Pandey",
    destination: "University of Cassino",
  },
  {
    id: "7694113935313603860",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7694113935313603860",
    name: "Ritika RajBahak",
    destination: "University of Naples Parthenope",
  },
  {
    id: "7692153389433523477",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7692153389433523477",
    name: "Ummid Lama",
    destination: "University of Cassino",
  },
  {
    id: "7690410258262396167",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7690410258262396167",
    name: "Samiksha Gurung",
    destination: "University of Naples Parthenope",
  },
  {
    id: "7694216018272472338",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7694216018272472338",
    name: "Priya Pokhrel",
    destination: "University of Florence",
  },
  {
    id: "7694722772932627733",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7694722772932627733",
    name: "Aayusha Adhikhari",
    destination: "University of Cassino",
  },
  {
    id: "7694250990228311303",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7694250990228311303",
    name: "Horizan Timisina",
    destination: "University of Messina",
  },
  {
    id: "7694727836204076308",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7694727836204076308",
    name: "Ritika Rajbahak",
    destination: "University of Naples Parthenope",
  },
  {
    id: "7696024710080892161",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7696024710080892161",
    name: "Nabin Saud",
    destination: "University of Cassino",
  },
  {
    id: "7696025271404629300",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7696025271404629300",
    name: "Horizan Timsina",
    destination: "University of Messina",
  },
  {
    id: "7696918980052782357",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7696918980052782357",
    name: "Nabin Saud",
    destination: "University of Cassino",
  },
  {
    id: "7699358691589475602",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7699358691589475602",
    name: "Priya Pokhrel",
    destination: "University of Florence",
  },
  {
    id: "7708254594182188296",
    type: "photo",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/photo/7708254594182188296",
    name: "Bismat Malla",
    destination: "University of Florence",
  },
  {
    id: "7711553766050319623",
    type: "video",
    tiktokUrl: "https://www.tiktok.com/@kashyapitaly/video/7711553766050319623",
    name: "Mahima Bhattarai",
    destination: "University of Cassino",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all"); // "all" | "video" | "photo"
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const stripRef = useRef(null);

  const filteredTestimonials = useMemo(() => {
    if (filter === "all") return TESTIMONIALS;
    return TESTIMONIALS.filter((item) => item.type === filter);
  }, [filter]);

  const total = filteredTestimonials.length;
  const active = filteredTestimonials[currentIndex] || TESTIMONIALS[0];
  const prevItem =
    filteredTestimonials[(currentIndex - 1 + total) % total] || active;
  const nextItem = filteredTestimonials[(currentIndex + 1) % total] || active;

  const handleFilterChange = (nextFilter) => {
    setFilter(nextFilter);
    setCurrentIndex(0);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Load TikTok's official embed script so BOTH /video/ and /photo/ posts render properly
  useEffect(() => {
    const existingScript = document.getElementById("tiktok-embed-script");
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.id = "tiktok-embed-script";
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [active.id]);

  useEffect(() => {
    if (!stripRef.current) return;
    const activeBtn = stripRef.current.querySelector(
      `[data-index="${currentIndex}"]`
    );
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + total) % total);

  const videoCount = TESTIMONIALS.filter((t) => t.type === "video").length;
  const photoCount = TESTIMONIALS.filter((t) => t.type === "photo").length;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/60 to-white relative overflow-hidden"
    >
      {/* Ambient Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-[28rem] h-[28rem] bg-indigo-400/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header + Filter Controls */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="https://www.tiktok.com/@kashyapitaly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-sm font-semibold mb-5 hover:border-blue-300 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>@kashyapitaly • Verified Visa &amp; Admission Stories</span>
            <ExternalLink size={13} className="text-blue-500" />
          </a>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Student Success{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Stories
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Real Nepalese students sharing their Italian public university
            admissions, DSU scholarships, and stamped visas.
          </p>

          {/* Media Filter Pills */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-blue-100 shadow-sm">
            <button
              onClick={() => handleFilterChange("all")}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:text-blue-700"
              }`}
            >
              All Stories ({TESTIMONIALS.length})
            </button>
            <button
              onClick={() => handleFilterChange("video")}
              className={`px-4 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-1.5 transition-all ${
                filter === "video"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:text-blue-700"
              }`}
            >
              <Play
                size={14}
                className={filter === "video" ? "fill-white" : ""}
              />
              <span>Video Reels ({videoCount})</span>
            </button>
            <button
              onClick={() => handleFilterChange("photo")}
              className={`px-4 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-1.5 transition-all ${
                filter === "photo"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:text-blue-700"
              }`}
            >
              <ImageIcon size={14} />
              <span>Visa Posts ({photoCount})</span>
            </button>
          </div>
        </div>

        {/* Full-Width Video Stage */}
        <div
          className={`max-w-5xl mx-auto transform transition-all duration-1000 ease-out delay-150 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative flex items-center justify-center gap-4 md:gap-8 py-4">
            {/* Left Navigation Button */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous video"
              className="z-20 w-12 h-12 rounded-full bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-blue-100 flex items-center justify-center transition-all duration-200 shadow-lg shrink-0"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Previous Story Preview Card (Lightweight, no extra iframe throttling) */}
            {total > 1 && (
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label={`Play ${prevItem.name}'s story`}
                className="hidden lg:flex flex-col items-center group opacity-75 hover:opacity-100 scale-90 hover:scale-95 transition-all duration-300 cursor-pointer"
              >
                <div className="relative p-2 rounded-[1.75rem] bg-slate-900/90 shadow-xl">
                  <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-1.5" />
                  <div className="relative w-[210px] aspect-[9/16] rounded-[1.2rem] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-5 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-400/30 text-white font-bold text-lg flex items-center justify-center mb-3">
                      {getInitials(prevItem.name)}
                    </div>
                    <p className="text-white font-bold text-sm">
                      {prevItem.name}
                    </p>
                    <p className="text-blue-200 text-xs mt-1">
                      {prevItem.destination}
                    </p>
                    <span className="mt-5 w-11 h-11 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <ChevronLeft size={20} />
                    </span>
                  </div>
                </div>
                <span className="mt-2.5 text-xs font-semibold text-slate-600">
                  {prevItem.name}
                </span>
              </button>
            )}

            {/* Center Active TikTok Player */}
            <div className="flex flex-col items-center z-10">
              <div className="relative p-2.5 sm:p-3 rounded-[2.25rem] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-[0_25px_70px_-15px_rgba(37,99,235,0.35)] ring-1 ring-blue-500/20">
                {/* Top Speaker Notch */}
                <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mb-2" />

                <div className="relative w-[325px] sm:w-[335px] min-h-[580px] rounded-[1.5rem] overflow-hidden bg-white flex items-center justify-center">
                  {/* Top Media Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 pointer-events-none">
                    {active.type === "video" ? (
                      <>
                        <Play size={11} className="fill-white text-white" />
                        <span>Video Story</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon size={11} className="text-blue-300" />
                        <span>Photo Highlight</span>
                      </>
                    )}
                  </div>

                  {/* Counter Pill */}
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 pointer-events-none">
                    {currentIndex + 1} / {total}
                  </div>

                  {/* Official TikTok Embed (supports both /video/ and /photo/) */}
                  <div
                    key={active.id}
                    className="w-full flex items-center justify-center"
                  >
                    <blockquote
                      className="tiktok-embed"
                      cite={active.tiktokUrl}
                      data-video-id={active.id}
                      style={{
                        maxWidth: "335px",
                        minWidth: "320px",
                        margin: 0,
                      }}
                    >
                      <section className="p-6 text-center">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={active.tiktokUrl}
                          className="text-sm font-semibold text-blue-600 underline"
                        >
                          Loading {active.name}&apos;s TikTok...
                        </a>
                      </section>
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Direct TikTok Link */}
              <a
                href={active.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold shadow-sm transition-colors duration-200"
              >
                <span>Open on TikTok (@kashyapitaly)</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Next Story Preview Card (Lightweight, no extra iframe throttling) */}
            {total > 1 && (
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label={`Play ${nextItem.name}'s story`}
                className="hidden lg:flex flex-col items-center group opacity-75 hover:opacity-100 scale-90 hover:scale-95 transition-all duration-300 cursor-pointer"
              >
                <div className="relative p-2 rounded-[1.75rem] bg-slate-900/90 shadow-xl">
                  <div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-1.5" />
                  <div className="relative w-[210px] aspect-[9/16] rounded-[1.2rem] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex flex-col items-center justify-center p-5 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-400/30 text-white font-bold text-lg flex items-center justify-center mb-3">
                      {getInitials(nextItem.name)}
                    </div>
                    <p className="text-white font-bold text-sm">
                      {nextItem.name}
                    </p>
                    <p className="text-blue-200 text-xs mt-1">
                      {nextItem.destination}
                    </p>
                    <span className="mt-5 w-11 h-11 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <ChevronRight size={20} />
                    </span>
                  </div>
                </div>
                <span className="mt-2.5 text-xs font-semibold text-slate-600">
                  {nextItem.name}
                </span>
              </button>
            )}

            {/* Right Navigation Button */}
            <button
              onClick={nextTestimonial}
              aria-label="Next video"
              className="z-20 w-12 h-12 rounded-full bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-blue-100 flex items-center justify-center transition-all duration-200 shadow-lg shrink-0"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Interactive Student Switcher Strip */}
          <div className="mt-8">
            <div
              ref={stripRef}
              className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 px-1 scroll-smooth"
            >
              {filteredTestimonials.map((item, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    data-index={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`group shrink-0 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20 scale-[1.02]"
                        : "bg-white border-blue-100 text-slate-700 hover:border-blue-300 hover:bg-blue-50/50"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {getInitials(item.name)}
                    </div>
                    <div className="max-w-[150px]">
                      <div className="flex items-center gap-1.5">
                        <p
                          className={`text-xs font-bold truncate ${
                            isSelected ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {item.name}
                        </p>
                        {item.type === "video" ? (
                          <Play
                            size={10}
                            className={`shrink-0 ${
                              isSelected
                                ? "text-blue-200 fill-blue-200"
                                : "text-blue-500 fill-blue-500"
                            }`}
                          />
                        ) : (
                          <ImageIcon
                            size={10}
                            className={`shrink-0 ${
                              isSelected ? "text-blue-200" : "text-purple-500"
                            }`}
                          />
                        )}
                      </div>
                      <p
                        className={`text-[11px] truncate ${
                          isSelected ? "text-blue-100" : "text-slate-500"
                        }`}
                      >
                        {item.destination}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}