import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Star,
  DollarSign,
  Clock,
  Users,
  Award,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import italyImg from "@/assets/italy.avif";
import ukImg from "@/assets/uk.avif";
import georgiaImg from "@/assets/georgia.avif";
import maltaImg from "@/assets/malta.avif";
import netherlandImg from "@/assets/netherlands.webp";
import germanyImg from "@/assets/germany.avif";
import cyprusImg from "@/assets/cyprus.avif";

import cyprusFlag from "@/assets/flags/cy.webp";
import germanyFlag from "@/assets/flags/de.webp";
import ukFlag from "@/assets/flags/gb.webp";
import georgiaFlag from "@/assets/flags/ge.webp";
import italyFlag from "@/assets/flags/it.webp";
import maltaFlag from "@/assets/flags/mt.webp";
import netherlandFlag from "@/assets/flags/nl.webp";

// react bits
import CurvedLoop from "@/components/ui/CurvedLoop";

export default function CountriesSection() {
  const [activeCountry, setActiveCountry] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Auto-play plugin configuration
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

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

  // Update active country when carousel slides
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveCountry(api.selectedScrollSnap());
    });
  }, [api]);

  const countries = [
    {
      name: "Italy",
      flag: italyFlag,
      tagline: "Experience Renaissance and Innovation",
      image: italyImg,
      highlights: [
        "World-renowned universities",
        "Rich cultural heritage",
        "Affordable tuition fees",
        "Post-study work opportunities",
      ],
      stats: {
        universities: "95+",
        cost: "€0/year",
        duration: "3-5 years",
        scholarships: "Available",
      },
      color: "from-green-500 to-red-500",
      bgColor: "bg-green-50",
    },
    {
      name: "Malta",
      flag: maltaFlag,
      tagline: "Island Paradise Meets Quality Education",
      image: maltaImg,
      highlights: [
        "English-taught programs",
        "EU member benefits",
        "Beautiful island lifestyle",
        "Growing tech hub",
      ],
      stats: {
        universities: "12+",
        cost: "€0/year",
        duration: "3-4 years",
        scholarships: "Merit-based",
      },
      color: "from-blue-500 to-yellow-500",
      bgColor: "bg-blue-50",
    },
    {
      name: "Georgia",
      flag: georgiaFlag,
      tagline: "Where East Meets West",
      image: georgiaImg,
      highlights: [
        "No entrance exams",
        "Very affordable education",
        "Strategic location",
        "Growing economy",
      ],
      stats: {
        universities: "25+",
        cost: "$0/year",
        duration: "4-6 years",
        scholarships: "Government funded",
      },
      color: "from-red-500 to-blue-500",
      bgColor: "bg-purple-50",
    },
    {
      name: "UK",
      flag: ukFlag,
      tagline: "Home to world-leading universities",
      image: ukImg,
      highlights: [
        "Globally recognized degrees",
        "Vibrant multicultural environment",
        "Strong career prospects",
        "Wide range of scholarships",
      ],
      stats: {
        universities: "160+",
        cost: "£10,000+/year",
        duration: "3-4 years",
        scholarships: "Various options",
      },
      color: "from-blue-800 to-red-400",
      bgColor: "bg-gray-50",
    },
    {
      name: "Netherlands",
      flag: netherlandFlag,
      tagline: "Innovative education in the heart of Europe",
      image: netherlandImg,
      highlights: [
        "Top-ranked research universities",
        "Wide range of English-taught programs",
        "Highly innovative education system",
        "Excellent post-study work opportunities",
      ],
      stats: {
        universities: "50+",
        cost: "€6,000+/year",
        duration: "3-4 years",
        scholarships: "Holland Scholarship & others",
      },
      color: "from-red-500 to-blue-500",
      bgColor: "bg-red-50",
    },

    {
      name: "Germany",
      flag: germanyFlag,
      tagline: "World-class education with affordable tuition",
      image: germanyImg,
      highlights: [
        "No tuition fees in public universities",
        "Top-ranked engineering & tech programs",
        "Strong industry connections",
        "18-month post-study work visa",
      ],

      stats: {
        universities: "400+",
        cost: "€0/year",
        duration: "3-5 years",
        scholarships: "DAAD & university funded",
      },
      color: "from-black to-red-500 to-yellow-400",
      bgColor: "bg-yellow-50",
    },
    {
      name: "Cyprus",
      flag: cyprusFlag,
      tagline: "Mediterranean education with European standards",
      image: cyprusImg,
      highlights: [
        "English-taught programs",
        "Affordable tuition fees",
        "EU recognized degrees",
        "Safe and student-friendly country",
      ],
      stats: {
        universities: "15+",
        cost: "€3,000+/year",
        duration: "3-4 years",
        scholarships: "Merit-based",
      },
      color: "from-orange-400 to-blue-500",
      bgColor: "bg-orange-50",
    },
  ];

  const handleCardClick = (index) => {
    setActiveCountry(index);
    api?.scrollTo(index);
  };

  const handleExploreCountry = (countryName) => {
    navigate(`/country/${countryName.toLowerCase()}`);
  };

  return (
    <section
      id="countries"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* React bits :  */}
      <div className=" absolute inset-x-0 -bottom-40 ">
        <CurvedLoop
          marqueeText="Kashyap Advisors"
          speed={1.5}
          curveAmount={300}
          className="stroke-blue-600 stroke-[2]"
        />
      </div>
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-indigo-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Study Destinations
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Choose from our premium destinations offering world-class education,
            cultural experiences, and excellent career opportunities.
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`mb-16 transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full max-w-7xl mx-auto"
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {countries.map((country, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  onClick={() => handleCardClick(index)}
                >
                  <div className="p-1">
                    <div
                      className={`group relative cursor-pointer transition-all duration-500 ease-out transform
                        ${
                          activeCountry === index
                            ? "scale-105 shadow-[0_25px_50px_rgba(59,130,246,0.3)]"
                            : "shadow-[0_15px_30px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.25)]"
                        }`}
                    >
                      {/* 3D Card Container */}
                      <div className="relative h-[450px] md:h-[500px]">
                        <div
                          className="relative w-full h-full rounded-3xl overflow-hidden transition-transform duration-300"
                          onMouseMove={(e) => {
                            const card = e.currentTarget;
                            const rect = card.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            const centerX = rect.width / 2;
                            const centerY = rect.height / 2;
                            const rotateX = (y - centerY) / 20;
                            const rotateY = (centerX - x) / 20;
                            card.style.transform = `perspective(1200px) rotateX(${
                              rotateX
                            }deg) rotateY(${rotateY}deg)`;
                          }}
                          onMouseLeave={(e) => {
                            const card = e.currentTarget;
                            card.style.transform =
                              "perspective(1200px) rotateX(0deg) rotateY(0deg)";
                          }}
                        >
                          {/* Background Image */}
                          <div className="absolute inset-0">
                            <img
                              src={country.image}
                              alt={`${country.name} landscape`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                            {/* Top Section */}
                            <div className="flex items-center justify-between">
                              <div className="w-14 h-14 md:w-16 md:h-16">
                                <img
                                  src={country.flag}
                                  alt={`${country.name} flag`}
                                  className="w-full h-full object-cover rounded-full shadow-md ring-2 ring-white"
                                />
                              </div>

                              <div
                                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/90 backdrop-blur-sm ${
                                  activeCountry === index
                                    ? "ring-2 ring-white"
                                    : ""
                                }`}
                              >
                                <span className="text-xs md:text-sm font-bold text-blue-900">
                                  Featured
                                </span>
                              </div>
                            </div>

                            {/* Bottom Section */}
                            <div className="text-white">
                              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                {country.name}
                              </h3>
                              <p className="text-base md:text-lg opacity-90 mb-4">
                                {country.tagline}
                              </p>

                              {/* Quick Stats */}
                              <div className="grid grid-cols-2 gap-2 md:gap-3">
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
                                  <div className="text-xs opacity-80">
                                    Universities
                                  </div>
                                  <div className="text-base md:text-lg font-bold">
                                    {country.stats.universities}
                                  </div>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 md:p-3">
                                  <div className="text-xs opacity-80">
                                    Tuition
                                  </div>
                                  <div className="text-sm md:text-base font-bold">
                                    {country.stats.cost}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 hidden md:flex" />
            <CarouselNext className="-right-12 hidden md:flex" />
          </Carousel>
        </div>

        {/* Detailed Country Info */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div
            className={`${countries[activeCountry].bgColor} rounded-3xl p-6 md:p-12 
            shadow-[inset_8px_8px_16px_rgba(59,130,246,0.1),inset_-8px_-8px_16px_rgba(255,255,255,0.7)]`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Highlights */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
                  Why Choose {countries[activeCountry].name}?
                </h3>
                <div className="space-y-4 mb-6">
                  {countries[activeCountry].highlights.map(
                    (highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="text-white"
                          >
                            <path
                              d="M13 4L6 11L3 8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-blue-800 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ),
                  )}
                </div>
                {/* Explore Country Button */}
                <button
                  onClick={() =>
                    handleExploreCountry(countries[activeCountry].name)
                  }
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Explore {countries[activeCountry].name}</span>
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Right: Stats Grid */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[4px_4px_8px_rgba(59,130,246,0.1),-4px_-4px_8px_rgba(255,255,255,0.9)]">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Award size={20} className="md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-blue-900 mb-1">
                    {countries[activeCountry].stats.universities}
                  </div>
                  <div className="text-xs md:text-sm text-blue-600">
                    Universities
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[4px_4px_8px_rgba(59,130,246,0.1),-4px_-4px_8px_rgba(255,255,255,0.9)]">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <DollarSign
                      size={20}
                      className="md:w-6 md:h-6 text-green-600"
                    />
                  </div>
                  <div className="text-base md:text-lg font-bold text-blue-900 mb-1">
                    {countries[activeCountry].stats.cost}
                  </div>
                  <div className="text-xs md:text-sm text-blue-600">
                    Annual Tuition
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[4px_4px_8px_rgba(59,130,246,0.1),-4px_-4px_8px_rgba(255,255,255,0.9)]">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Clock
                    size={20}
                      className="md:w-6 md:h-6 text-purple-600"
                    />
                  </div>
                  <div className="text-base md:text-lg font-bold text-blue-900 mb-1">
                    {countries[activeCountry].stats.duration}
                  </div>
                  <div className="text-xs md:text-sm text-blue-600">
                    Course Duration
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-[4px_4px_8px_rgba(59,130,246,0.1),-4px_-4px_8px_rgba(255,255,255,0.9)]">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-3 md:mb-4">
                    <Star size={20} className="md:w-6 md:h-6 text-orange-600" />
                  </div>
                  <div className="text-base md:text-lg font-bold text-blue-900 mb-1">
                    {countries[activeCountry].stats.scholarships}
                  </div>
                  <div className="text-xs md:text-sm text-blue-600">
                    Scholarships
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
