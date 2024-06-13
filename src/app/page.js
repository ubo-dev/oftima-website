"use client";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import Subscribe from "@/components/Subscribe";
import Slide from "@/components/Slide";

const DATA = [
  { image: "https://picsum.photos/seed/random101/500/500" },
  { image: "https://picsum.photos/seed/random102/500/500" },
  { image: "https://picsum.photos/seed/random103/500/500" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <HeroSection />
      <AboutUs />

      <Slide data={DATA} />
      <Subscribe />
    </div>
  );
}
