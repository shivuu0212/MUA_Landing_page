"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const faqs = [
  {
    question: "HOW FAR IN ADVANCE SHOULD I BOOK?",
    answer: "For bridal and special events, I recommend booking 3–6 months in advance. For party makeup or shoots, 2–3 weeks is usually sufficient to secure your date."
  },
  {
    question: "DO YOU PROVIDE ON-SITE SERVICES?",
    answer: "Absolutely! As a freelance artist, I travel to your home, hotel, or venue to make your session as comfortable and stress-free as possible."
  },
  {
    question: "WHAT PRODUCTS DO YOU USE?",
    answer: "I use a curated kit of high-end, skin-friendly brands like MAC, NARS, and Charlotte Tilbury to ensure a long-lasting, flawless finish for every skin type."
  }
];

export default function PhilosophyAndFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-[#F5F5F5] py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* Left: Philosophy */}
        <div className="relative group">
          <div className="relative aspect-[4/5] w-full max-w-sm ml-auto mr-12 lg:mr-24 overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="/images/philosophy.png"
              alt="Luxury Product Philosophy"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Glassmorphism Card */}
          <div className="absolute -bottom-12 right-0 lg:-right-12 w-full pr-2  bottom-7 max-w-md bg-white/40 backdrop-blur-xl border border-white/20 p-12 rounded-[2rem] shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="text-[10px] tracking-[0.4em] font-bold text-charcoal/40 uppercase">
              THE PHILOSOPHY
            </span>
            <p className="mt-6 md:text-3xl text-md flex justify-center items-center font-serif italic leading-tight text-charcoal">
              "True beauty is about enhancing what's already there, letting your unique personality shine through every brushstroke."
            </p>
          </div>
        </div>

        {/* Right: Common Inquiries */}
        <div className="lg:pl-12 space-y-12">
          <h2 className="text-6xl font-serif italic text-charcoal">Common Inquiries</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-charcoal/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={cn(
                    "text-[11px] tracking-[0.2em] font-bold transition-colors",
                    openIndex === index ? "text-charcoal" : "text-charcoal/50 group-hover:text-charcoal"
                  )}>
                    {faq.question}
                  </span>
                  <ChevronDown className={cn(
                    "w-4 h-4 text-charcoal/30 transition-transform duration-300",
                    openIndex === index && "rotate-180 text-charcoal"
                  )} />
                </button>

                <div className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-in-out",
                  openIndex === index ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                )}>
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-charcoal/60 max-w-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
