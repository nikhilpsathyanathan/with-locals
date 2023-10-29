import Hero from "@/components/home/Hero";
import Header from "@/components/nav/Header";

export default function Home() {
  return (
    <main className="w-screen h-full flex flex-col gap-16 bg-white">
      <div className="bg-biscuit text-primary">
        <Header />
        <Hero />
      </div>
      <div>second section</div>
    </main>
  );
}
