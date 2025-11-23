import { Card } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const Story = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-heart-beat" fill="currentColor" />
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Our Love Story
          </h2>
          <p className="text-xl text-muted-foreground">
            A tale of two hearts beating as one
          </p>
        </div>
        
        <Card className="p-8 md:p-12 bg-card shadow-xl">
          <div className="space-y-6 text-lg leading-relaxed text-card-foreground">
            <p className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span>
                Once upon a time, in a magical forest filled with cherry blossoms, 
                two adorable bears met by chance near a sparkling stream. Bubu, with 
                a gentle spirit and warm smile, and Dudu, full of energy and joy.
              </span>
            </p>
            
            <p className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <span>
                From that first moment, they knew something special had begun. They 
                spent their days exploring the forest together, sharing picnics under 
                the stars, and dancing in the moonlight. Every moment together felt 
                like a dream.
              </span>
            </p>
            
            <p className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <span>
                Through seasons of change and countless adventures, their love only 
                grew stronger. They learned that true love isn't just about grand 
                gestures—it's found in the little moments, the gentle touches, and 
                the comfort of being together.
              </span>
            </p>
            
            <div className="pt-6 text-center">
              <p className="text-2xl font-display font-bold text-primary">
                And they lived happily ever after... 💕
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Story;
