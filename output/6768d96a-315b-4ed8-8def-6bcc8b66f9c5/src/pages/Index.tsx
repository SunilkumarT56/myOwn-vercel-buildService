import Hero from "@/components/Hero";
import Characters from "@/components/Characters";
import Gallery from "@/components/Gallery";
import Story from "@/components/Story";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Characters />
      <Gallery />
      <Story />
      <Footer />
    </main>
  );
};

export default Index;
