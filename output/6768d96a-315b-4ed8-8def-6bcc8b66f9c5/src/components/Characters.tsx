import { Card } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";
import bubuImage from "@/assets/bubu.jpg";
import duduImage from "@/assets/dudu.jpg";

const Characters = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Meet Our Stars
          </h2>
          <p className="text-xl text-muted-foreground">
            Get to know the cutest bear couple
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Card className="overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-float">
            <div className="p-8">
              <div className="relative mb-6 flex justify-center">
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <img 
                  src={bubuImage} 
                  alt="Bubu - The Sweet Pink Bear"
                  className="w-48 h-48 object-cover rounded-full shadow-lg ring-4 ring-primary/20"
                />
              </div>
              
              <h3 className="font-display text-4xl font-bold text-center mb-4 text-primary">
                Bubu
              </h3>
              
              <div className="space-y-3 text-card-foreground">
                <p className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" />
                  <span>The gentle and caring one</span>
                </p>
                <p className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" />
                  <span>Loves giving warm hugs</span>
                </p>
                <p className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" />
                  <span>Always there to brighten your day</span>
                </p>
                <p className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" />
                  <span>Favorite activity: Stargazing with Dudu</span>
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="overflow-hidden bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300 animate-float-delayed">
            <div className="p-8">
              <div className="relative mb-6 flex justify-center">
                <div className="absolute -top-4 -right-4">
                  <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
                </div>
                <img 
                  src={duduImage} 
                  alt="Dudu - The Cheerful Blue Bear"
                  className="w-48 h-48 object-cover rounded-full shadow-lg ring-4 ring-secondary/20"
                />
              </div>
              
              <h3 className="font-display text-4xl font-bold text-center mb-4 text-secondary">
                Dudu
              </h3>
              
              <div className="space-y-3 text-card-foreground">
                <p className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" />
                  <span>The playful and adventurous one</span>
                </p>
                <p className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" />
                  <span>Makes everyone smile</span>
                </p>
                <p className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" />
                  <span>Full of surprises and joy</span>
                </p>
                <p className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-secondary flex-shrink-0" fill="currentColor" />
                  <span>Favorite activity: Dancing with Bubu</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Characters;
