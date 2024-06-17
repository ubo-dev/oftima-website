"use client";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <AboutUs />
      <Slide />
      <ContactUs />
    </div>
  );
}
