"use client";

import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Anime from "@/assets/anime.jpg"

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Dheeraj Shrestha",
      location: "Kathmandu, Nepal",
      destination: "University of Bologna, Italy",
      image:Anime,
      quote:
        "Kashyap Advisors made my dream of studying in Italy a reality. Their guidance throughout the visa process was exceptional, and I got accepted to University of Bologna with a scholarship!",
      course: "Masters in Computer Science",
      rating: 5,
      year: "2023",
    },
    {
      name: "Rajesh Hamal",
      location: "Bhaktapur, Nepal",
      destination: "University of Padua, Italy",
      image:Anime,
      quote:
        "The team at Kashyap Advisors was incredibly supportive. From university selection to visa approval, everything was handled professionally. Now I'm pursuing my MBA in I!taly",
      course: "MBA",
      rating: 5,
      year: "2024",
    },
    {
      name: "Pratap KC",
      location: "Pokhara, Nepal",
      destination: "Sapenzia University, Italy",
      image:Anime,
      quote:
        "Thanks to Kashyap Advisors, I'm now studying medicine in Italy. Their 24/7 support and detailed guidance made the entire process stress-free. Highly recommended!",
      course: "MBBS",
      rating: 5,
      year: "2024",
    },
    {
      name: "Avash Subedi",
      location: "Dang, Nepal",
      destination: "Sapienza University, Italy",
      image:Anime,
      quote:
        "I was confused about which country to choose for my engineering degree. Kashyap Advisors provided excellent counseling and helped me get admission to Sapienza University in Rome!",
      course: "Masters of Business Analytics",
      rating: 5,
      year: "2023",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      {/* Background Quote Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233B82F6' fill-opacity='1'%3E%3Cpath d='M15 15c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S15 20.5 15 15zm0 30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S15 50.5 15 45zm30-30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S45 20.5 45 15zm0 30c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10S45 50.5 45 45z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Student Success
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Stories
            </span>
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Hear from our students who are now living their dreams abroad. Their
            success stories inspire us to help more students achieve their
            goals.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div
          className={`transform transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Large Quote Icon */}
            <div className="absolute -top-6 left-8 z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Quote size={32} className="text-white" />
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(59,130,246,0.15)] border border-blue-100 p-8 md:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59,130,246,0.2) 0%, transparent 50%),
                                  radial-gradient(circle at 80% 20%, rgba(139,92,246,0.2) 0%, transparent 50%)`,
                  }}
                ></div>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Student Photo & Info */}
                <div className="lg:col-span-1 text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={`${testimonials[currentTestimonial].name} photo`}
                      className="w-32 h-32 rounded-2xl object-cover shadow-lg mx-auto lg:mx-0"
                    />
                    {/* Success Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M16.5 6L7.5 15L3.5 11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-blue-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-blue-600 text-sm mb-2">
                    {testimonials[currentTestimonial].location}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ),
                    )}
                  </div>

                  {/* Course Info */}
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-sm text-blue-600 font-medium">
                      {testimonials[currentTestimonial].course}
                    </p>
                    <p className="text-xs text-blue-500">
                      {testimonials[currentTestimonial].destination}
                    </p>
                    <p className="text-xs text-blue-400 mt-1">
                      Class of {testimonials[currentTestimonial].year}
                    </p>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <blockquote className="text-lg md:text-xl text-blue-800 leading-relaxed mb-6 font-medium italic">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Achievement Highlight */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-white"
                        >
                          <path
                            d="M8 2L9.5 6H14L10.5 9L12 13L8 10L4 13L5.5 9L2 6H6.5L8 2Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <h4 className="font-bold text-blue-900">
                        Success Highlight
                      </h4>
                    </div>
                    <p className="text-blue-700 text-sm">
                      Successfully admitted with seamles visa approval.
                      Now thriving in{" "}
                      {testimonials[currentTestimonial].destination
                        .split(",")[1]
                        ?.trim() || "their new country"}{" "}
                      with excellent academic performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={20} className="text-blue-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "bg-blue-600 w-8"
                        : "bg-blue-200 hover:bg-blue-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl border border-blue-100 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={20} className="text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Testimonials CTA */}
        {/* <div
          className={`text-center mt-16 transform transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Want to See Video Testimonials?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Watch our students share their complete journey from application
              to graduation in their own words.
            </p>
         

            <a  href="https://www.youtube.com/@StudyinEuropeforNepalese"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
              Watch Video Stories
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
