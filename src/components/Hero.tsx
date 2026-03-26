import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">

      {/* Background Image: Artistic Close-up */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Artistic Makeup Backdrop"
          fill
          className="object-cover object-[75%_50%] scale-105 transition-transform duration-[10s] ease-out hover:scale-110"
          priority
        />
        {/* Refined Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/60 to-transparent lg:from-accent/90 lg:via-accent/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-accent/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 lg:pt-24">
        <div className="max-w-2xl space-y-12 animate-in fade-in slide-in-from-left-8 duration-1000">

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-brand-pink/30"></div>
              <span className="text-[11px] tracking-[0.6em] font-bold text-brand-pink uppercase">
                THE RADIANT EXPERIENCE
              </span>
            </div>
            <h1 className="text-4xl lg:text-[6rem] font-serif leading-[0.85] text-charcoal ">
              Lakshmi <br />
              <span className="ml-0 lg:ml-12 italic opacity-90">Sharma</span>
            </h1>
          </div>

          <div className="space-y-8 max-w-lg">
            <p className="text-charcoal/80 text-xl leading-relaxed font-sans border-l-2 border-brand-pink/20 pl-6">
              "With over 4 years of experience, Lakshmi Sharma specializes in luxury bridal and editorial makeup, enhancing your natural radiance into a timeless masterpiece."
            </p>

            <p className="text-sm text-charcoal/50 leading-relaxed max-w-sm italic ml-6">
              Global Freelancer | Working from India!!
            </p>
          </div>

          {/* <div className="flex flex-wrap gap-6 pt-4 ml-6">
            <Link
              href="#booking"
              className="group relative bg-brand-pink hover:bg-[#D81B60] text-white px-10 py-5 rounded-2xl text-xs font-bold tracking-[0.2em] transition-all transform hover:scale-105 shadow-2xl shadow-brand-pink/30 flex items-center gap-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <MessageCircle className="w-5 h-5" />
              <span className="relative">VIEW MENU</span>
            </Link>
            <Link
              href="#portfolio"
              className="bg-white/40 backdrop-blur-xl border border-white/40 text-charcoal px-10 py-5 rounded-2xl text-xs font-bold tracking-[0.2em] transition-all transform hover:scale-105 hover:bg-white/60 hover:border-brand-pink/20 shadow-xl"
            >
              PORTFOLIO
            </Link>
          </div> */}

        </div>
      </div>

      {/* Decorative Branding Line */}
      <div className="absolute right-12 bottom-12 hidden lg:flex items-center gap-6 rotate-90 origin-right">
        <span className="text-[10px] tracking-[0.5em] text-charcoal/30 uppercase font-bold whitespace-nowrap">
          EDITORIAL ARTISTRY // 2024
        </span>
        <div className="h-[1px] w-24 bg-charcoal/20"></div>
      </div>

    </section>
  );
}
