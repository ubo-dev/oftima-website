"use client";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection"
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <AboutUs />
      <Subscribe />
    </div>
  );
}
