"use client";

import { useState, useRef, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    course: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Your Django backend URL
  const API_URL = "http://localhost:8000/api/contact/submit/";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        toast.success(
          "Message sent successfully! We'll contact you within 24 hours.",
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          course: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Handle validation errors
        const errorMessage =
          data.message || "Something went wrong. Please try again.";
        setError(errorMessage);
        toast.error(errorMessage);
      }
    } catch (err) {
      console.error("Submission error:", err);
      const errorMsg =
        "Network error. Please check your connection and try again.";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["9709029678 ", "9709029673"],
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["headoffice@kashyapadvisors.com", "info@kashyapadvisors.com"],
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Basundhara", "Kathmandu, Nepal"],
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sun - Fri: 9:00 AM - 6:00 PM", "Sat: Closed"],
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  const countries = [
    "Italy",
    "Malta",
    "Georgia",
    "UK",
    "Netherlands",
    "Germany",
    "Cyprus",
  ];
  const courses = [
    "Computer Science",
    "Engineering",
    "Medicine (MBBS)",
    "Business Administration",
    "Arts & Humanities",
    "Law",
    "Architecture",
    "Pharmacy",
    "Other",
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative -mt-14 overflow-hidden bg-gradient-to-br from-white to-blue-50 pb-0 pt-0 sm:-mt-20 lg:-mt-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-20 h-48 w-48 rounded-full bg-blue-200 opacity-10 blur-3xl sm:right-20 sm:top-32 sm:h-64 sm:w-64"></div>
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-purple-200 opacity-10 blur-3xl sm:bottom-32 sm:left-20 sm:h-80 sm:w-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`mb-8 transform text-center transition-all duration-1000 ease-out sm:mb-12 lg:mb-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-5 text-3xl font-bold text-blue-900 sm:mb-6 sm:text-4xl md:text-5xl">
            Get In Touch
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              With Us
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-blue-700 sm:text-base md:text-xl">
            Ready to start your educational journey abroad? Contact us today for
            a free consultation and let's make your dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Contact Information */}
          <div
            className={`lg:col-span-1 transform transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h3 className="mb-5 text-xl font-bold text-blue-900 sm:mb-8 sm:text-2xl">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className={`
                      group cursor-pointer rounded-2xl p-5 transition-all duration-300 sm:p-6
                      ${info.lightColor} ${info.borderColor} border
                      shadow-[6px_6px_12px_rgba(59,130,246,0.08),-6px_-6px_12px_rgba(255,255,255,0.8)]
                      hover:shadow-[8px_8px_16px_rgba(59,130,246,0.12),-8px_-8px_16px_rgba(255,255,255,0.9)]
                      hover:scale-[1.02]
                    `}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div
                        className={`
                        ${info.color} flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12
                        shadow-[4px_4px_8px_rgba(59,130,246,0.15),-4px_-4px_8px_rgba(255,255,255,0.9)]
                        group-hover:scale-110 transition-transform duration-300
                      `}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-blue-900 mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="break-words text-xs text-blue-700 sm:text-sm"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Quick CTA */}
              <div className="group relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-5 text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 sm:mt-8 sm:p-6">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/10 rounded-full blur-2xl -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <h4 className="mb-2 text-lg font-bold sm:text-xl">
                    Need Immediate Assistance?
                  </h4>
                  <p className="mb-5 text-xs leading-relaxed text-blue-100 sm:mb-6 sm:text-sm">
                    Our support team is ready to help you with urgent queries or
                    emergency support.
                  </p>

                  <a
                    href="tel:+9779709029678"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-semibold text-blue-600 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:bg-orange-50 hover:scale-[1.02] active:scale-[0.98] sm:px-6 sm:text-sm"
                  >
                    <svg
                      className="h-5 w-5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now: +977 9709029678
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transform transition-all duration-1000 ease-out delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_20px_40px_rgba(59,130,246,0.1)] sm:rounded-3xl sm:p-8 md:p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59,130,246,0.2) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, rgba(139,92,246,0.2) 0%, transparent 50%)`,
                  }}
                ></div>
              </div>

              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-bold text-blue-900 sm:text-2xl">
                  Send us a Message
                </h3>
                <p className="mb-6 text-sm text-blue-600 sm:mb-8 sm:text-base">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 flex items-center space-x-3 rounded-xl border border-green-200 bg-green-50 p-3 animate-fade-in sm:p-4">
                    <CheckCircle size={24} className="shrink-0 text-green-600" />
                    <div>
                      <p className="text-green-800 font-semibold">
                        Message Sent Successfully!
                      </p>
                      <p className="text-green-600 text-sm">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {error && (
                  <div className="mb-6 flex items-center space-x-3 rounded-xl border border-red-200 bg-red-50 p-3 animate-fade-in sm:p-4">
                    <AlertCircle size={24} className="shrink-0 text-red-600" />
                    <div>
                      <p className="text-red-800 font-semibold">
                        Submission Failed
                      </p>
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-xl border border-blue-200 bg-blue-50/50 px-3 py-2.5 pl-11 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3 sm:pl-12 sm:text-base"
                          placeholder="Enter your full name"
                        />
                        <User
                          size={20}
                          className="absolute left-3 top-1/2 -translate-y-1/2 transform text-blue-400 sm:left-4"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-xl border border-blue-200 bg-blue-50/50 px-3 py-2.5 pl-11 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3 sm:pl-12 sm:text-base"
                          placeholder="Enter your email"
                        />
                        <Mail
                          size={20}
                          className="absolute left-3 top-1/2 -translate-y-1/2 transform text-blue-400 sm:left-4"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                    {/* Phone Field */}
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full rounded-xl border border-blue-200 bg-blue-50/50 px-3 py-2.5 pl-11 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3 sm:pl-12 sm:text-base"
                          placeholder="+977 9876543210"
                        />
                        <Phone
                          size={20}
                          className="absolute left-3 top-1/2 -translate-y-1/2 transform text-blue-400 sm:left-4"
                        />
                      </div>
                    </div>

                    {/* Country Preference */}
                    <div>
                      <label className="block text-sm font-semibold text-blue-900 mb-2">
                        Preferred Country *
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border border-blue-200 bg-blue-50/50 px-3 py-2.5 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3 sm:text-base"
                      >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Course Interest */}
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Course of Interest *
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                        className="w-full rounded-xl border border-blue-200 bg-blue-50/50 px-3 py-2.5 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3 sm:text-base"
                    >
                      <option value="">Select your course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full resize-none rounded-xl border border-blue-200 bg-blue-50/50 px-3 py-2.5 pl-11 text-sm transition-all duration-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3 sm:pl-12 sm:text-base"
                        placeholder="Tell us about your educational goals and any specific questions you have..."
                      />
                        <MessageSquare
                          size={20}
                          className="absolute left-3 top-3.5 text-blue-400 sm:left-4 sm:top-4"
                        />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full rounded-xl px-6 py-3.5 text-base font-semibold transition-all duration-300 sm:px-8 sm:py-4 sm:text-lg
                      ${
                        isSubmitting
                          ? "bg-blue-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      }
                      text-white flex items-center justify-center space-x-2
                    `}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Privacy Notice */}
                <p className="text-xs text-blue-500 mt-4 text-center">
                  By submitting this form, you agree to our Privacy Policy. We
                  will never share your information with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
