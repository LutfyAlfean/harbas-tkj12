import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import VisionMission from "@/components/VisionMission";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <VisionMission />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
