"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ChevronUp, MessageCircle } from "lucide-react";

// Social Icons as simple SVG components since Lucide removed brands
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const YoutubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
);
const WhatsAppIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.301-.149-1.767-.872-2.04-.971-.272-.099-.47-.149-.669.149-.198.297-.767.966-.94 1.164-.173.199-.347.223-.648.074-.3-.149-1.265-.467-2.41-1.484-.892-.795-1.492-1.778-1.666-2.076-.173-.297-.018-.458.13-.606.134-.133.301-.347.452-.52.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.445 0 .081 5.363.079 11.97c0 2.112.552 4.173 1.6 6.002L0 24l6.149-1.613a11.825 11.825 0 005.9 1.583h.005c6.604 0 11.97-5.363 11.972-11.971a11.864 11.864 0 00-3.564-8.471" />
  </svg>
);

export default function Footer() {
  const links = [
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT", href: "#portfolio" },

    { name: "WHY US", href: "#" },
    { name: "TERMS", href: "#" },
    { name: "PRIVACY", href: "#" },
  ];

  return (
    <footer className="relative bg-[#FDF2F8] pt-24 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 pb-16 border-b border-brand-pink/10">

        {/* Middle Column: Explore */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl font-serif italic text-brand-pink">Explore</h3>
            <div className="h-[1px] flex-grow bg-brand-pink/20"></div>
          </div>
          <div className="grid grid-cols-2 gap-y-4">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="flex items-center gap-2 group text-[10px] tracking-widest font-bold text-charcoal/60 hover:text-brand-pink transition-colors">
                <span className="text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Column: Contact */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-3xl font-serif italic text-brand-pink">Contact us</h3>
            <div className="h-[1px] flex-grow bg-brand-pink/20"></div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-brand-pink" />
              </div>
              <p className="text-xs text-charcoal/60 leading-relaxed font-medium">
                Sector 15, Noida, <br /> Noida 201301
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-brand-pink" />
              </div>
              <p className="text-xs text-charcoal/60 font-medium">+91 7983017523</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-brand-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-brand-pink" />
              </div>
              <p className="text-xs text-charcoal/60 font-medium">info@lakshmisharma.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons - Bottom Row */}
      <div className="max-w-7xl mx-auto pt-12 flex justify-center">
        <div className="flex gap-4">
          {[
            { Icon: FacebookIcon, href: "https://www.facebook.com/laksglamhouse/" },
            { Icon: InstagramIcon, href: "https://www.instagram.com/laks_glam_house?igsh=eXZmYTU4OW1na2p6&utm_source=qr" },
            { Icon: TwitterIcon, href: "https://youtube.com/@laxmipandit979?si=F0i06iOTPo-qm44n" },
            { Icon: YoutubeIcon, href: "https://youtube.com/@laxmipandit979?si=F0i06iOTPo-qm44n" },
          ].map((social, i) => (
            <Link
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-charcoal/20 flex items-center justify-center text-charcoal/60 hover:bg-brand-pink hover:text-white hover:border-brand-pink transition-all"
            >
              <social.Icon />
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col  items-center gap-4">
        <p className="text-[10px] tracking-[0.2em] font-medium text-brand-pink/60 uppercase">
          Lakshmi Sharma - Makeup Artist © All Rights Reserved - 2024
        </p>
      </div>

      {/* Floating Actions */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="https://wa.me/917983017523?text=Hello%20Lakshmi,%20I'd%20like%20to%20book%20a%20makeup%20session!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce"
        >
          <WhatsAppIcon />
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-14 h-14 bg-[#FAACBF] rounded-full text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

    </footer >
  );
}
