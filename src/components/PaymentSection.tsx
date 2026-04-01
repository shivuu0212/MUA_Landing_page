"use client";

import { useState } from "react";
import Image from "next/image";

const GPay_UPI = "laxmipandit979-1@okicici";

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ShieldIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.34 6.34l1.22-1.22a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function PaymentSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(GPay_UPI);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="payment"
      className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FDF2F8 0%, #FFF5FB 50%, #FDFCF8 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #E91E63 0%, transparent 70%)", transform: "translate(-40%, -40%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7D6E2E 0%, transparent 70%)", transform: "translate(40%, 40%)" }}
      />

      <div className="relative max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[10px] tracking-[0.4em] font-bold text-brand-pink/60 uppercase">Seamless & Secure</p>
          <h2 className="text-3xl md:text-5xl font-serif italic text-charcoal">Pay via Google Pay</h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="h-[1px] w-16 bg-brand-pink/30" />
            <div className="w-2 h-2 rounded-full bg-brand-pink/40" />
            <div className="h-[1px] w-16 bg-brand-pink/30" />
          </div>
          <p className="text-sm text-charcoal/50 max-w-md mx-auto leading-relaxed font-medium">
            Scan the QR code or use the UPI ID below to confirm your booking deposit instantly.
          </p>
        </div>

        {/* Main Card */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* QR Code Card */}
          <div className="flex-1 bg-white rounded-3xl shadow-xl border border-brand-pink/10 overflow-hidden flex flex-col">
            {/* Card Header */}
            <div
              className="px-8 py-5 flex items-center gap-3"
              style={{ background: "linear-gradient(90deg, #E91E63 0%, #F06292 100%)" }}
            >
              {/* GPay Logo - colorful G */}
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-sm font-black" style={{ background: "linear-gradient(135deg,#4285F4,#34A853,#FBBC05,#EA4335)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>G</span>
              </div>
              <span className="text-white font-bold tracking-wider text-sm">Google Pay</span>
              <span className="ml-auto text-white/70 text-xs tracking-widest font-medium">UPI</span>
            </div>

            {/* QR Image */}
            <div className="flex-1 flex flex-col items-center justify-center p-10 gap-6">
              <div className="relative">
                {/* Glow ring */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                  style={{ background: "#E91E63", transform: "scale(1.1)" }}
                />
                <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-4 border-brand-pink/20 shadow-lg bg-white">
                  <Image
                    src="/images/gpay.jpeg"
                    alt="Google Pay QR Code - Scan to pay Laxmi Pandit"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Corner decorators */}
                <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-brand-pink rounded-tl-lg -translate-x-1 -translate-y-1" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-brand-pink rounded-tr-lg translate-x-1 -translate-y-1" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-brand-pink rounded-bl-lg -translate-x-1 translate-y-1" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-brand-pink rounded-br-lg translate-x-1 translate-y-1" />
              </div>

              <p className="text-[11px] tracking-[0.25em] font-bold text-charcoal/40 uppercase text-center">
                Open GPay &rarr; Scan QR &rarr; Pay
              </p>
            </div>

            {/* Scan hint */}
            <div className="mx-8 mb-8 px-5 py-3 rounded-xl bg-brand-pink/5 border border-brand-pink/10 flex items-center gap-3">
              <PhoneIcon />
              <p className="text-xs text-charcoal/60 font-medium leading-snug">
                Open Google Pay or any UPI app and point your camera at the QR code above.
              </p>
            </div>
          </div>

          {/* Right Panel: UPI ID + Instructions */}
          <div className="flex-1 flex flex-col gap-6">

            {/* UPI ID Copy Box */}
            <div className="bg-white rounded-3xl shadow-xl border border-brand-pink/10 p-8 space-y-5">
              <h3 className="text-lg font-serif italic text-charcoal">Or Pay via UPI ID</h3>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-brand-pink/5 border border-brand-pink/15">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] tracking-[0.3em] font-bold text-brand-pink/60 uppercase mb-1">UPI ID</p>
                  <p className="text-sm font-mono font-bold text-charcoal truncate">{GPay_UPI}</p>
                </div>
                <button
                  onClick={handleCopy}
                  title="Copy UPI ID"
                  className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    copied
                      ? "bg-green-500 text-white scale-110"
                      : "bg-brand-pink/10 text-brand-pink hover:bg-brand-pink hover:text-white hover:scale-105"
                  }`}
                >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-green-600 font-medium text-center animate-pulse">
                  ✓ UPI ID copied to clipboard!
                </p>
              )}
            </div>

            {/* Steps */}
            <div className="bg-white rounded-3xl shadow-xl border border-brand-pink/10 p-8 space-y-6 flex-1">
              <h3 className="text-lg font-serif italic text-charcoal">How to Pay</h3>
              {[
                { step: "01", title: "Open Google Pay", desc: "Launch the GPay app on your smartphone." },
                { step: "02", title: "Scan or Enter UPI", desc: "Tap 'New Payment' and scan the QR or enter the UPI ID above." },
                { step: "03", title: "Enter Amount", desc: "Enter your booking deposit or full service amount." },
                { step: "04", title: "Confirm & Done", desc: "Complete the transfer and share the screenshot with us." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 items-start group">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-white text-xs font-black transition-transform group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #E91E63, #F06292)" }}
                  >
                    {step}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-charcoal">{title}</p>
                    <p className="text-xs text-charcoal/50 leading-relaxed mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-brand-pink/10 shadow">
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                <ShieldIcon />
              </div>
              <p className="text-xs text-charcoal/60 font-medium leading-snug">
                100% secure via <span className="text-charcoal font-bold">NPCI UPI</span>. No card details shared. Instant confirmation.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-[10px] tracking-[0.3em] text-charcoal/30 uppercase font-bold mt-12">
          After payment, please WhatsApp your transaction ID to confirm your booking.
        </p>
      </div>
    </section>
  );
}
