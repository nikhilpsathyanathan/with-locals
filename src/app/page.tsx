import CharmingCities from "@/components/home/CharmingCities";
import Hero from "@/components/home/Hero";
import WhyBook from "@/components/home/WhyBook";
import Header from "@/components/nav/Header";
import "swiper/css";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-16 bg-white overflow-auto">
      <div className="bg-biscuit text-primary space-y-5">
        <Header />
        <Hero />
      </div>
      <CharmingCities />

      <WhyBook />
    </main>
  );
}
