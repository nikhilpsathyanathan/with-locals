import CharmingCities from "@/components/home/CharmingCities";
import FindYourOwnLocal from "@/components/home/FindYourOwnLocal";
import FiveFoodDestinations from "@/components/home/FiveFoodDestinations";
import GetInspired from "@/components/home/GetInspired";
import Hero from "@/components/home/Hero";
import ImpactReport from "@/components/home/ImpactReport";
import TopKidsDestinations from "@/components/home/TopKidsDestinations";
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
      <GetInspired />
      <ImpactReport />
      <FiveFoodDestinations />
      <FindYourOwnLocal />
      <TopKidsDestinations />
      <div className="h-10 bg-white"></div>
    </main>
  );
}
