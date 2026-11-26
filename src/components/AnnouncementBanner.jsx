"use client";

import { useState, useEffect } from "react";
import { X, Star } from "lucide-react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide banner after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        {/* Announcement Content */}
        <div className="flex items-center justify-center text-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-yellow-400 fill-yellow-400"
              />
            ))}
          </div>
          <span className="text-sm md:text-base font-medium">
            Italy 2026 September Intake is open — free IELTS classes for early applicants.
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-0 p-1 hover:bg-blue-800 rounded-full transition-colors duration-200"
          aria-label="Close announcement"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
