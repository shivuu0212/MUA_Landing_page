"use client";

import { useState } from "react";
import Image from "next/image";

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Bridal Artistry",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct WhatsApp message
    const whatsappNumber = "917983017523";
    const text = `*New Booking Inquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Small delay for UX feel
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="book" className="relative py-40 px-6 flex items-center justify-center min-h-[700px] overflow-hidden">
        {/* Colorful Backdrop */}
        <div className="absolute inset-4">
          <Image
            src="/images/booking-bg.png"
            alt="Artistic Backdrop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
        </div>

        <div className="relative z-10 bg-white/40 backdrop-blur-3xl p-16 rounded-[4rem] shadow-2xl max-w-lg w-full text-center space-y-8 animate-in fade-in zoom-in duration-700 border border-white/40">
          <div className="w-24 h-24 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <svg className="w-12 h-12 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-5xl font-serif italic text-charcoal">Confirmed</h2>
          <p className="text-charcoal/80 leading-relaxed font-medium">
            Lakshmi's team will contact you within 24 hours to finalize your reservation.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-charcoal text-white px-12 py-5 rounded-full text-xs font-bold tracking-[0.3em] hover:bg-brand-pink transition-all transform hover:scale-105"
          >
            DONE
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="book" className="relative py-40 px-6 flex items-center justify-center overflow-hidden min-h-[700px]">

      {/* Colorful Backdrop Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/booking-bg.png"
          alt="Artistic Backdrop"
          fill
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      <div className="relative z-10 bg-white/40 backdrop-blur-3xl p-10 md:p-24 rounded-[4rem] shadow-2xl max-w-4xl w-full animate-in fade-in slide-in-from-bottom-16 duration-1000 border border-white/40">

        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl md:text-4xl font-serif italic text-[#9E3B3B] tracking-tight drop-shadow-sm">
            Book Your Appointment
          </h2>
          <p className="text-[#7A7A73] text-[12px] max-w-md mx-auto leading-relaxed font-medium italic">
            "Beauty begins the moment you decide to be yourself."
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div className="space-y-2 group">
            <label className="text-[10px] tracking-[0.3em] font-bold text-charcoal/50 uppercase block transition-colors group-focus-within:text-brand-pink">Full Name</label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="e.g. Julianne Moore"
              className="w-full bg-transparent  border-b border-charcoal/20 py-3 text-sm text-black focus:border-brand-pink transition-all outline-none italic placeholder:text-charcoal/30 font-medium"
            />
          </div>

          <div className="space-y-2 group">
            <label className="text-[10px] tracking-[0.3em] font-bold text-charcoal/50 uppercase block transition-colors group-focus-within:text-brand-pink">Email Address</label>
            <input
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="hello@aesthetic.com"
              className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm text-charcoal focus:border-brand-pink transition-all outline-none italic placeholder:text-charcoal/30 font-medium"
            />
          </div>

          <div className="space-y-2 group">
            <label className="text-[10px] tracking-[0.3em] font-bold text-charcoal/50 uppercase block transition-colors group-focus-within:text-brand-pink">Phone Number</label>
            <input
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="+91 00000 00000"
              className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm text-charcoal focus:border-brand-pink transition-all outline-none italic placeholder:text-charcoal/30 font-medium"
            />
          </div>

          <div className="space-y-2 group">
            <label className="text-[10px] tracking-[0.3em] font-bold text-charcoal/50 uppercase block transition-colors group-focus-within:text-brand-pink">Service Type</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm text-charcoal focus:border-brand-pink transition-all outline-none appearance-none cursor-pointer italic font-serif font-medium"
            >
              <option>Bridal Artistry</option>
              <option>Editorial / Fashion</option>
              <option>Masterclass / Workshop</option>
              <option>Commercial Production</option>
            </select>
          </div>

          <div className="md:col-span-2 space-y-2 group">
            <label className="text-[10px] tracking-[0.3em] font-bold text-charcoal/50 uppercase block transition-colors group-focus-within:text-brand-pink">Preferred Date</label>
            <input
              required
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm text-charcoal focus:border-brand-pink transition-all outline-none italic font-medium"
            />
          </div>

          <div className="md:col-span-2 space-y-2 group">
            <label className="text-[10px] tracking-[0.3em] font-bold text-charcoal/50 uppercase block transition-colors group-focus-within:text-brand-pink">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us about your event or any special requirements..."
              className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm text-charcoal focus:border-brand-pink transition-all outline-none resize-none italic placeholder:text-charcoal/30 font-medium"
            ></textarea>
          </div>

          <div className="md:col-span-2 pt-12 text-center space-y-5">
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full max-w-lg bg-primary hover:bg-primary/90 text-white px-8 py-3 text-xs tracking-widest font-bold transition-all transform hover:scale-105"
            >
              {isSubmitting ? "SENDING..." : "SUBMIT"}
            </button>
            <p className="text-[10px] tracking-[0.3em] text-charcoal/40 uppercase font-black">
              OUR CONCIERGE WILL CONTACT YOU WITHIN 24 HOURS
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
