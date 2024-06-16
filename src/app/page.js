"use client";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Subscribe from "@/components/Subscribe";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <AboutUs />
      <Slide />
      <Subscribe />
    </div>
  );
}
