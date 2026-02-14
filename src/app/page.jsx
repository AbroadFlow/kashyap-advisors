import AnnouncementBanner from "../components/AnnouncementBanner";  
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import CountriesSection from "@/components/CountriesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Announcement Banner - disappears after 10 seconds */}
      <AnnouncementBanner />

      {/* Header - Navigation */}
      <Header />

      {/* Hero Section - Italy imagery and main CTA */}
      <HeroSection />

      {/* Services Section - What we offer */}
      <ServicesSection />

      {/* Countries Section - Italy, Malta, Georgia focus */}
      <CountriesSection />

      {/* Features Section - Why choose us */}
      <FeaturesSection />

      {/* Testimonial Section - Student success stories */}
      <TestimonialSection />

      {/* Contact Section - Get in touch */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

