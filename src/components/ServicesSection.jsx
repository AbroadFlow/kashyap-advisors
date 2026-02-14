"use client";

import { useState, useRef, useEffect } from "react";
import {
  GraduationCap,
  FileText,
  Plane,
  Home,
  Users,
  BookOpen,
  Shield,
  Headphones,
} from "lucide-react";

import BackgroundRippleEffect from "@/components/ui/background-ripple-effect";


export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      icon: GraduationCap,
      title: "University Selection",
      description:
        "Out Experts guides you to choose the perfect university that matches your eligibility and career goals.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: FileText,
      title: "Application Support",
      description:
        "Complete assistance with university applications, document preparation, and submission.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: Plane,
      title: "Visa Assistance",
      description:
        "100% success rate in visa applications with complete documentation and interview prep.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Home,
      title: "Accommodation",
      description:
        "Assistance to find affordable housing options near your chosen university.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      icon: Users,
      title: "Career Counseling",
      description:
        "Personalized career guidance to help you choose the right course and based on your eligibility.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: BookOpen,
      title: "Scholarship Guidance",
      description:
        "Access to exclusive scholarships and funding opportunities to reduce costs.",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
    {
      icon: Shield,
      title: "Insurance Support",
      description:
        "Complete health and travel insurance coverage guidance for peace of mind during studies.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Round-the-clock assistance for any questions or emergencies during your journey.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ];

  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
    >
      {/* Decorative Background */}
      {/* Background Ripple Effect */}
            <div className="absolute inset-0 opacity-100 pointer-events-auto">
              <BackgroundRippleEffect cellSize={80} />
            </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {" "}
              Services
            </span>
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to settling in your new country, we
            provide end-to-end support for your educational journey abroad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-500 ease-out transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => setHoveredCard(index)}
              >
                {/* Neumorphic Card */}
                <div
                  className={`
                    relative p-8 rounded-3xl transition-all duration-300 cursor-pointer
                    ${service.bgColor} border border-white/50
                    shadow-[8px_8px_16px_rgba(59,130,246,0.1),-8px_-8px_16px_rgba(255,255,255,0.7)]
                    hover:shadow-[12px_12px_24px_rgba(59,130,246,0.15),-12px_-12px_24px_rgba(255,255,255,0.8)]
                    group-hover:scale-[1.02]
                  `}
                >
                  {/* Gradient Overlay on Hover */}
                  <div
                    className={`
                      absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 
                      transition-opacity duration-300 bg-gradient-to-br ${service.color}
                    `}
                  />

                  {/* Icon */}
                  <div
                    className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                    shadow-[4px_4px_8px_rgba(59,130,246,0.1),-4px_-4px_8px_rgba(255,255,255,0.9)]
                    group-hover:shadow-[6px_6px_12px_rgba(59,130,246,0.15),-6px_-6px_12px_rgba(255,255,255,0.95)]
                    transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      size={28}
                      className={`${service.iconColor} transition-all duration-300 group-hover:scale-110`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-700 leading-relaxed text-sm group-hover:text-blue-800 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover Effect Arrow */}
                  {/* <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={service.iconColor}
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div> */}

                  {/* 3D Glow Effect */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span className="flex items-center space-x-2">
              <span>Get Free Consultation</span>
              {/* <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg> */}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
