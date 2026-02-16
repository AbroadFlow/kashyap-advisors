"use client";

import { useState, useRef, useEffect } from "react";
import {
  Shield,
  Zap,
  Heart,
  Trophy,
  CheckCircle,
} from "lucide-react";

import BackgroundRippleEffect from "@/components/ui/background-ripple-effect";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: "100% Success Rate",
      description:
        "Our track record speaks for itself - 200+ successful placements with zero visa rejections.",
      stats: "200+ Students",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description:
        "Streamlined process ensures your application is submitted in record time.",
      stats: "30 Days Average",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Heart,
      title: "Personal Care",
      description:
        "Dedicated counselors provide one-on-one support throughout your journey.",
      stats: "24/7 Support",
      color: "bg-pink-500",
      lightColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: Trophy,
      title: "Market Leader",
      description:
        "Recognized as the top consultancy for Italy.",
      stats: "5 Star Rating",
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
  ];

  const benefits = [
    "Free initial consultation and profile evaluation",
    "University shortlisting based on your preferences",
    "Complete application assistance and document review",
    "Visa application support with 100% success rate",
    "Pre-departure orientation and travel guidance",
    "Post-arrival support and accommodation assistance",
    "Scholarship guidance and financial planning",
    "Career counseling and job placement assistance",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Ripple Effect */}
      <div className="absolute inset-0 opacity-100 pointer-events-auto">
        <BackgroundRippleEffect cellSize={80} />
      </div>

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Why Students Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Us
            </span>
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our proven methodology, personalized
            approach, and unwavering commitment to your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative cursor-pointer transform transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => setActiveFeature(index)}
              >
                {/* Neumorphic Container */}
                <div
                  className={`
                  relative p-8 rounded-3xl transition-all duration-500 h-full
                  ${feature.lightColor} ${feature.borderColor} border
                  shadow-[12px_12px_24px_rgba(59,130,246,0.1),-12px_-12px_24px_rgba(255,255,255,0.7)]
                  hover:shadow-[16px_16px_32px_rgba(59,130,246,0.15),-16px_-16px_32px_rgba(255,255,255,0.8)]
                  group-hover:scale-105
                `}
                >
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/30 to-transparent"></div>

                  {/* Icon */}
                  <div
                    className={`
                    ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto
                    shadow-[6px_6px_12px_rgba(59,130,246,0.2),-6px_-6px_12px_rgba(255,255,255,0.9)]
                    group-hover:shadow-[8px_8px_16px_rgba(59,130,246,0.25),-8px_-8px_16px_rgba(255,255,255,0.95)]
                    transition-all duration-300 group-hover:scale-110 relative z-10
                  `}
                  >
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-blue-700 text-sm leading-relaxed mb-4 group-hover:text-blue-800 transition-colors duration-300">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-blue-900">
                        {feature.stats}
                      </span>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comprehensive Benefits Section */}
        {/* Comprehensive Benefits Section */}
<div
  className={`transform transition-all duration-1000 ease-out delay-500 ${
    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
  }`}
>
  <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-white/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(59,130,246,0.2)]">
    {/* Animated Gradient Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient"></div>
    
    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/30 to-pink-500/30 rounded-full blur-3xl"></div>
    
    {/* Geometric Pattern Overlay */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px),
          linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>
    </div>

    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div className="space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-300/30 px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            End-to-End Support
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 bg-clip-text text-transparent leading-tight">
          Complete Support System
        </h3>
        
        <p className="text-lg md:text-xl text-blue-800/80 leading-relaxed">
          From initial consultation to settling in your new country,
          we're with you every step of the way with dedicated personal attention.
        </p>

        {/* CTA Button */}
        <a
          href="https://tally.so/r/BzEERK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex group relative items-center space-x-3 "
        >
          <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 shadow-[0_8px_24px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.4)] transform hover:-translate-y-0">
            <span className="relative z-10 text-white">Schedule Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-blue-600 group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>

      {/* Right: Benefits List */}
      <div className="space-y-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 shadow-[0_4px_16px_rgba(59,130,246,0.1)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.15)] transition-all duration-300 hover:scale-[1.02] opacity-0 animate-fade-in group/item"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                <CheckCircle size={16} className="text-white" strokeWidth={3} />
              </div>
            </div>
            <span className="text-blue-900 font-medium leading-relaxed">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

        {/* Stats Section */}
        <div
          className={`mt-20 transform transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Success Stories" },
              { number: "2+", label: "Years Experience" },
              { number: "100%", label: "Visa Success" },
              { number: "10+", label: "Countries" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}