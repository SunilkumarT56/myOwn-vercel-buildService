import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-muted/20 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-2 mb-4">
          <Heart className="w-6 h-6 text-primary animate-heart-beat" fill="currentColor" />
          <Heart className="w-6 h-6 text-secondary animate-heart-beat" fill="currentColor" style={{ animationDelay: '0.3s' }} />
          <Heart className="w-6 h-6 text-primary animate-heart-beat" fill="currentColor" style={{ animationDelay: '0.6s' }} />
        </div>
        
        <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
          Bubu & Dudu
        </h3>
        
        <p className="text-muted-foreground mb-6">
          Spreading love and joy, one hug at a time
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">About Us</a>
          <span>•</span>
          <a href="#" className="hover:text-primary transition-colors">Gallery</a>
          <span>•</span>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © 2024 Bubu & Dudu. Made with love 💕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
