"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, Star, Users, Award, Globe } from "lucide-react";
import italyImg from "@/assets/italy.avif";
import ukImg from "@/assets/uk.avif";
import georgiaImg from "@/assets/georgia.avif";
import maltaImg from "@/assets/malta.avif";
import netherlandImg from "@/assets/netherlands.webp";
import germanyImg from "@/assets/germany.avif";
import cyprusImg from "@/assets/cyprus.avif";
import austriaImg from "@/assets/austria.avif";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to cycle through
  const images = [
    {
      src: italyImg,
      alt: "Beautiful Italian architecture and culture",
      country: "Italy",
    },
    {
      src: georgiaImg,
      alt: "Stunning Georgian landscapes",
      country: "Georgia",
    },
    {
      src: maltaImg,
      alt: "Picturesque Malta coastline",
      country: "Malta",
    },
    {
      src: netherlandImg,
      alt: "Charming Dutch architecture",
      country: "Netherlands",
    },
    {
      src: ukImg,
      alt: "Heart of Europe",
      country: "United Kingdom",
    },
    {
      src: germanyImg,
      alt: "Germany Image",
      country: "Germany",
    },
    {
      src: cyprusImg,
      alt: "Cyprus Image",
      country: "Cyprus",
    },
    {
      src: austriaImg,
      alt: "Austria Image",
      country: "Austria",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-15 animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div
            className={`transform transition-all duration-1000 ease-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm font-semibold">
                Trusted by 200+ Students
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
              Study in{" "}
              <ContainerTextFlip
                words={[
                  "Europe",
                  "Georgia",
                  "Italy",
                  "Malta",
                  "UK",
                  "Germany",
                  "Cyprus",
                  "Netherlands",
                  "Austria"
                ]}
                interval={2500}
                animationDuration={600}
                textClassName="text-blue bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-['Molle']"
              />
            </h1>

            <p className="text-x font-semibold italic  text-blue-500 mb-8 leading-relaxed">
              As a leading European education consultancy, We help students like
              you turn ambition into achievement by guiding you to world-class
              universities, handling the entire process, and supporting you
              until you begin your journey abroad with confidence.
            </p>

            {/* Key Benefits */}
            <div
              className="flex flex-wrap gap-6 mb-8 font-semibold"
              style={{ fontFamily: "SUSE Mono" }}
            >
              <div className="flex items-center space-x-2 text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium font-semibold">
                  100% Visa Success Rate
                </span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium font-semibold">
                  Scholarship Guidance
                </span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium font-semibold">
                  End-to-end Support
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://tally.so/r/BzEERK"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* <a
                href="https://www.youtube.com/@StudyinEuropeforNepalese"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                <Play size={20} />
                <span>Watch Success Stories</span>
              </a> */}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-blue-900">200+</div>
                <div className="text-sm text-blue-600">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-blue-900">100%</div>
                <div className="text-sm text-blue-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="text-blue-600" size={24} />
                </div>
                <div className="text-3xl font-bold text-blue-900">10+</div>
                <div className="text-sm text-blue-600">Countries</div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div
            className={`relative transform transition-all duration-1000 ease-out delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="relative">
              {/* Main Image Container with Carousel */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex
                      ? "opacity-100 z-[1]"
                      : "opacity-0 z-0"
                      }`}
                  />
                ))}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-blue-600/20 z-10"></div>

                {/* Country Label */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg z-20">
                  <span className="text-sm font-bold text-blue-900">
                    {images[currentImageIndex].country}
                  </span>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                        }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-blue-100 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300 z-30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Award size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      Top Ranked
                    </div>
                    <div className="text-xs text-gray-600">Universities</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-blue-100 transform rotate-[5deg] hover:rotate-0 transition-transform duration-300 z-30">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      Global
                    </div>
                    <div className="text-xs text-gray-600">Opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Vertical Brand Text */}
      <div className=" hidden lg:block absolute left-1/4 top-10 -translate-y-1/2 z-30">
        <div className="rotate-[0deg] origin-center w-[650px]">
          <TextHoverEffect text="KASHYAP ADVISORS" />
        </div>
      </div>
    </section>
  );
}
