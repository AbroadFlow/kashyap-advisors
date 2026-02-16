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
      details: ["+977 01-4971745", "+977 01-4971745"],
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
      className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Get In Touch
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              With Us
            </span>
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto leading-relaxed">
            Ready to start your educational journey abroad? Contact us today for
            a free consultation and let's make your dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div
            className={`lg:col-span-1 transform transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-8">
                Contact Information
              </h3>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className={`
                      group p-6 rounded-2xl transition-all duration-300 cursor-pointer
                      ${info.lightColor} ${info.borderColor} border
                      shadow-[6px_6px_12px_rgba(59,130,246,0.08),-6px_-6px_12px_rgba(255,255,255,0.8)]
                      hover:shadow-[8px_8px_16px_rgba(59,130,246,0.12),-8px_-8px_16px_rgba(255,255,255,0.9)]
                      hover:scale-[1.02]
                    `}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`
                        ${info.color} w-12 h-12 rounded-xl flex items-center justify-center
                        shadow-[4px_4px_8px_rgba(59,130,246,0.15),-4px_-4px_8px_rgba(255,255,255,0.9)]
                        group-hover:scale-110 transition-transform duration-300
                      `}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-blue-900 mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p
                              key={detailIndex}
                              className="text-blue-700 text-sm"
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
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 hover:shadow-xl hover:shadow-blue-500/20 rounded-2xl p-6 text-white mt-8 transition-all duration-300 group">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/10 rounded-full blur-2xl -ml-12 -mb-12"></div>

                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-2">
                    Need Immediate Assistance?
                  </h4>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                    Our support team is ready to help you with urgent queries or
                    emergency support.
                  </p>

                  <a
                    href="tel:+9779709029676"
                    className="inline-flex items-center justify-center gap-2 w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-blue-900/20 text-sm"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Now: +977 9709029676
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
            <div className="bg-white rounded-3xl shadow-[0_20px_40px_rgba(59,130,246,0.1)] border border-blue-100 p-8 md:p-12 relative overflow-hidden">
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
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-blue-600 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                {/* Success Message */}
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3 animate-fade-in">
                    <CheckCircle size={24} className="text-green-600" />
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
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 animate-fade-in">
                    <AlertCircle size={24} className="text-red-600" />
                    <div>
                      <p className="text-red-800 font-semibold">
                        Submission Failed
                      </p>
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 pl-12 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-blue-50/50"
                          placeholder="Enter your full name"
                        />
                        <User
                          size={20}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400"
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
                          className="w-full px-4 py-3 pl-12 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-blue-50/50"
                          placeholder="Enter your email"
                        />
                        <Mail
                          size={20}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          className="w-full px-4 py-3 pl-12 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-blue-50/50"
                          placeholder="+977 9876543210"
                        />
                        <Phone
                          size={20}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400"
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
                        className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-blue-50/50"
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
                      className="w-full px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-blue-50/50"
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
                        className="w-full px-4 py-3 pl-12 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-blue-50/50 resize-none"
                        placeholder="Tell us about your educational goals and any specific questions you have..."
                      />
                      <MessageSquare
                        size={20}
                        className="absolute left-4 top-4 text-blue-400"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300
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
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
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
