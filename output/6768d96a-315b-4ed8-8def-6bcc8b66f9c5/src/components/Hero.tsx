import { Heart } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBanner})`,
          filter: 'brightness(0.9)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center gap-4">
          <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" />
          <Heart className="w-12 h-12 text-secondary animate-heart-beat" fill="currentColor" style={{ animationDelay: '0.5s' }} />
          <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" style={{ animationDelay: '1s' }} />
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 text-foreground">
          Bubu & Dudu
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
          Two bears, one endless love story 💕
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="bg-card/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
            <p className="text-lg font-medium">Meet the adorable couple that melts hearts worldwide</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Heart className="w-6 h-6 text-primary/60" />
      </div>
    </section>
  );
};

export default Hero;
