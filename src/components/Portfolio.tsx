import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#F5EFF9] py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] text-charcoal tracking-tighter">
              Masterpieces <br />
              <span className="text-brand-pink italic">In Every Light</span>
            </h2>
            <p className="text-charcoal/60 text-sm max-w-sm leading-relaxed font-sans">
              Our artistry isn't just about color; it's about the interplay of light and texture on your unique canvas.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-charcoal/20"></div>

          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left: Large Editorial Card (8 cols) */}
          <div className="lg:col-span-8 relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[1.2/1]">
            <Image
              src="/images/party.jpeg"
              alt="Editorial Makeup Masterpiece"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute bottom-8 left-8">
              <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full text-[9px] tracking-[0.2em] font-black text-charcoal uppercase shadow-lg">
                EDITORIALS/S 2024
              </div>
            </div>
          </div>

          {/* Right: Stacked Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-10">

            {/* Top: Bridal Card */}
            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl aspect-[1.1/1]">
              <Image
                src="/images/party2.jpeg"
                alt="Modern Bridal Artistry"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-serif italic text-white drop-shadow-md">
                  The Modern Bride
                </h3>
              </div>
            </div>



            {/* Bottom: Luxury Standards Info Card */}
            <div className="bg-[#F0D1E7] p-12 rounded-[2.5rem] flex flex-col justify-center items-start space-y-6 shadow-xl flex-grow">
              <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center shadow-lg transform rotate-3">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-charcoal leading-tight">
                  Luxury Standards
                </h3>
                <p className="text-charcoal/70 text-sm leading-relaxed font-medium">
                  Only the finest pigments from Chanel, Dior, and Pat McGrath Labs touch your skin.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
