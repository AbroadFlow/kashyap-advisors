import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  GraduationCap,
  Globe,
  Users,
  Clock,
  Briefcase,
  DollarSign,
  Star,
  CheckCircle2,
  BookOpen,
  Award,
  TrendingUp,
  Heart,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { countriesData } from "../data/countriesData";
import FooterSection from "@/components/FooterSection";

export default function CountryDetail() {
  const { country } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("universities");
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const statsRef = useRef(null);

  const countryData = countriesData[country];

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[id^='animate-']").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!countryData) {
    return (
      <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className=" text-center p-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Globe className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Country Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            We couldn't find information about this destination
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    );
  }

  const statCards = [
    {
      icon: GraduationCap,
      value: countryData.stats.universities,
      label: "Universities",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: DollarSign,
      value: countryData.stats.cost,
      label: "Annual Tuition",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Clock,
      value: countryData.stats.duration,
      label: "Duration",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Award,
      value: countryData.stats.scholarships,
      label: "Scholarships",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      value: countryData.stats.students,
      label: "Int'l Students",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: Globe,
      value: countryData.stats.language,
      label: "Language",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  return (
    <div className="min-h-screen   bg-gradient-to-b from-gray-50 to-white">
      
      {/* Parallax Hero Section */}
      <div className="  relative h-screen overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <img
            src={countryData.image}
            alt={countryData.name}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 animate-pulse"></div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-5xl mx-auto">
            {/* Flag with Glow Effect */}
            <div className="mb-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full"></div>
                <img
                  src={countryData.flag}
                  alt={`${countryData.name} flag`}
                  className="relative w-32 h-32 md:w-40 md:h-40 object-contain rounded-2xl shadow-2xl  transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Title with Animation */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white animate-fade-in">
              {countryData.name}
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-4xl font-light mb-8 text-blue-100">
              {countryData.tagline}
            </p>

            {/* Quick Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {countryData.highlights.slice(0, 3).map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-sm md:text-base font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
                <div className="w-1.5 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-300 border border-white/20 group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back</span>
        </button>
      </div>

      {/* Floating Stats Cards */}
      <div
        id="animate-stats"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 delay-${index * 100} ${
                isVisible["animate-stats"]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-l md:text-l font-bold text-gray-900 mb-1 text-center">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-600 text-center">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-20">
        {/* About Section with Side Image */}
        <div
          id="animate-about"
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 transform transition-all duration-1000 ${
            isVisible["animate-about"]
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-semibold">About the Country</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Study in {countryData.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {countryData.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {countryData.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-xl border border-blue-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-800">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <TrendingUp className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">Top Ranked</h3>
                <p className="text-blue-100">Universities worldwide</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                <Heart className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">200+</h3>
                <p className="text-green-100">Students placed</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white transform rotate-1 hover:rotate-0 transition-transform duration-300 -mt-4">
                <Award className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">100%</h3>
                <p className="text-purple-100">Success rate</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white transform -rotate-1 hover:rotate-0 transition-transform duration-300 mt-4">
                <MapPin className="w-12 h-12 mb-4" />
                <h3 className="text-3xl font-bold mb-2">EU Access</h3>
                <p className="text-orange-100">Travel freedom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Section */}
        <div
          id="animate-tabs"
          className={`mb-2 transform transition-all duration-1000 ${
            isVisible["animate-tabs"]
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Tab Headers :  [top countries and popular courses  ] */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveTab("universities")}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "universities"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              <div className="flex items-center space-x-2">
                <GraduationCap size={20} />
                <span>Top Universities</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "courses"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow"
              }`}
            >
              <div className="flex items-center space-x-2">
                <BookOpen size={20} />
                <span>Popular Courses</span>
              </div>
            </button>
          </div>

          {/* Tab Content: University/ popular course list */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            {activeTab === "universities" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {countryData.topUniversities.map((uni, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {uni}
                        </h4>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span>Top Ranked Institution</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "courses" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {countryData.popularCourses.map((course, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-blue-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 font-semibold group-hover:text-blue-600 transition-colors">
                        {course}
                      </span>
                      <ArrowRight
                        size={20}
                        className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
}
