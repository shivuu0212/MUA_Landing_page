import Link from "next/link";


export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-accent/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="md:text-2xl text-sm italic font-quintessential tracking-widest text-charcoal">
          LAKS GLAM HOUSE        </div>

        <nav className="hidden md:flex items-center space-x-12">
          {["HOME", "PORTFOLIO", "SERVICES", "ABOUT"].map((item) => {
            const href = item === "ABOUT" ? "#portfolio" : `#${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={href}
                className="text-xs tracking-[0.2em] font-medium text-charcoal/60 hover:text-charcoal transition-colors underline-offset-8 hover:underline decoration-primary"
              >
                {item}
              </Link>
            );
          })}
        </nav>

        <Link
          href="#book"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-xs tracking-widest font-bold transition-all transform hover:scale-105"
        >
          BOOK NOW
        </Link>
      </div>
    </header>
  );
}
