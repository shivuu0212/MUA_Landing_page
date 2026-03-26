import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import BrideCarousel from "@/components/BrideCarousel";
import PhilosophyAndFAQ from "@/components/PhilosophyAndFAQ";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-accent">
      <ScrollReveal />
      <Header />
      <Hero />
      <div className="reveal"><Portfolio /></div>
      <div className="reveal"><BrideCarousel /></div>
      <div className="reveal"><PhilosophyAndFAQ /></div>
      <div className="reveal"><BookingForm /></div>
      <Footer />
    </main>
  );
}
