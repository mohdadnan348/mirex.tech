"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonialsData";
import { AnimatePresence, motion } from "framer-motion";
import Card from "@/components/ui/Card";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-background-light dark:bg-background-dark/20 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            See what founders and business leaders say about their custom ERPs, websites, and marketing partnerships.
          </p>
        </div>

        {/* Slider Card */}
        <div className="relative max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 relative border border-white/5 bg-background-light dark:bg-background-dark/40 overflow-hidden" interactive={false}>
            {/* Background Quote Mark */}
            <Quote className="absolute top-6 right-6 w-32 h-32 text-gray-200/20 dark:text-white/5 pointer-events-none" />

            <div className="min-h-[220px] flex flex-col justify-between">
              {/* Review Text */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-8">
                  &quot;{testimonials[activeIndex].quote}&quot;
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-violet-500/30">
                    <Image
                      src={testimonials[activeIndex].avatarUrl}
                      alt={testimonials[activeIndex].name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>

                {/* Arrow Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all active:scale-95"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-all active:scale-95"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-cyan-400 w-8" : "bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
