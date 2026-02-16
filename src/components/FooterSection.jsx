import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function FooterSection() {

    const [email, setEmail] = useState("");

    const handleSubscribe = async () => {
        if (!email) {
        toast.error("Please enter your email");
        return;
        }

        const formData = new FormData();
        formData.append("user_email", email); 

        try {
        await fetch(`https://tally.so/r/ODQQRR?user_email=${encodeURIComponent(email)}`, {
            method: "POST",
            body: formData,
        });

        toast.success("Thanks for subscribing!");
        setEmail("");
        } catch (error) {
        toast.error("Something went wrong. Please try again.");
        }
    };



  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Countries", href: "#countries" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "University Selection", href: "#services" },
    { name: "Visa Assistance", href: "#services" },
    { name: "Application Support", href: "#services" },
    { name: "Scholarship Guidance", href: "#services" },
    { name: "Accommodation Help", href: "#services" },
  ];

  const countries = [
    { name: "Study in Italy", href: "#countries" },
    { name: "Study in Malta", href: "#countries" },
    { name: "Study in Georgia", href: "#countries" },
    { name: "Study in UK", href: "#countries" }
  ];


  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/KashyapAdvisors", color: "hover:bg-blue-600" },
    // { icon: Twitter, href: "#", color: "hover:bg-blue-400" },
    { icon: Instagram, href: "https://www.instagram.com/kashyapadvisors/", color: "hover:bg-pink-500" },
    // { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
  ];

  return (
    <footer className=" bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "cover, cover, 40px 40px, 40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12  gap-12 items-center">
            
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-6 lg:col-start-4 mx-auto  mx-auto flex flex-col items-center text-center">
              <div className="flex flex-col items-center mb-6">
                <div className="flex-shrink-0">
              <img
                src="/kasyap_advisors.png"
                alt="Kashyap Advisors Logo"
                className="h-30 w-30 rounded-lg object-cover"
                loading="lazy"
              />
            </div>
                <div>
                  <h3 className="text-xl font-bold">Kashyap Advisors</h3>
                  <p className="text-blue-200 text-sm">
                    Your Gateway to Global Education
                  </p>
                </div>
              </div>

              <p className="text-blue-100 mb-6 leading-relaxed">
                With over 2+ years of experience, we've helped 200+ students
                achieve their dreams of studying abroad. Our expert and qualified team
                provides comprehensive support from university selection to visa
                approval and beyond.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 flex flex-col items-center">
                <div className="flex items-center text-center space-x-3">
                  <Phone size={18} className="text-blue-300" />
                  <span className="text-blue-100">+977 01-4971745</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-300" />
                  <span className="text-blue-100">
                    headoffice@kashyapadvisors.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-blue-300" />
                  <span className="text-blue-100">
                    Basundhara, Kathmandu, Nepal
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            {/* <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Services */}
            {/* <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-6 text-white">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {service.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Countries */}
            {/* <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-6 text-white">
                Destinations
              </h4>
              <ul className="space-y-3">
                {countries.map((country, index) => (
                  <li key={index}>
                    <a
                      href={country.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {country.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            
            
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-blue-700 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            <div>
              <h4 className="text-2xl font-bold mb-4">Stay Updated</h4>
              <p className="text-blue-200 mb-6">
                Subscribe to our newsletter for the latest updates on university
                admissions, visa requirements, and study abroad opportunities.
              </p>
              {/* subscribe */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg bg-blue-800 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                    onClick={handleSubscribe}
                    className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap"
                >
                    Subscribe
                </button>
                </div>
            </div>
            

            {/* Awards/Certifications */}
            <div className="text-center lg:text-right">
              <h4 className="text-lg font-bold mb-6">
                Certifications & Awards
              </h4>
              <div className="flex flex-wrap justify-center lg:justify-end gap-4">
                <div className="bg-blue-800 p-4 rounded-lg border border-blue-600">
                  <div className="text-sm font-semibold"> Certified</div>
                  <div className="text-xs text-blue-300">
                    Certified Counserlors
                  </div>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg border border-blue-600">
                  <div className="text-sm font-semibold">Government Certified</div>
                  <div className="text-xs text-blue-300">
                    MOE Approved
                  </div>
                </div>
                <div className="bg-blue-800 p-4 rounded-lg border border-blue-600">
                  <div className="text-sm font-semibold">5 Star Rating</div>
                  <div className="text-xs text-blue-300"> Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-0 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-blue-200">
                © {currentYear} Kashyap Advisors. All rights reserved. |
                <span className="ml-1">
                  <a
                    href="#"
                    className="hover:text-white hover:underline transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>{" "}
                  |
                  <a
                    href="#"
                    className="ml-1 hover:text-white hover:underline transition-colors duration-200"
                  >
                    Terms & Conditions
                  </a>
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-blue-200 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`
                      w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center 
                      transition-all duration-300 transform hover:scale-110 ${social.color}
                      hover:shadow-lg border border-blue-600 hover:border-transparent
                    `}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        {/* <div className="border-t border-blue-700 pt-8 pb-4">
          <div className="text-center">
            <p className="text-blue-200 text-sm mb-4">
              Ready to start your journey abroad? Contact us today for a free
              consultation!
            </p>
            <a
              href="https://tally.so/r/BzEERK"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Get Free Consultation</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
