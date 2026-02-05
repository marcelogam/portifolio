import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-12 md:px-0 py-4 md:py-0">
        <HeroSection />
      </div>
    </main>
  );
}
