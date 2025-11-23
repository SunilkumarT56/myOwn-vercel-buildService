import { Card } from "@/components/ui/card";
import moment1 from "@/assets/moment1.jpg";
import moment2 from "@/assets/moment2.jpg";
import moment3 from "@/assets/moment3.jpg";

const Gallery = () => {
  const moments = [
    {
      image: moment1,
      title: "Perfect Picnic",
      description: "Sharing snacks and sunshine together",
    },
    {
      image: moment2,
      title: "Stargazing Dreams",
      description: "Making wishes under the night sky",
    },
    {
      image: moment3,
      title: "Dance of Love",
      description: "Moving to the rhythm of their hearts",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 text-foreground">
            Precious Moments
          </h2>
          <p className="text-xl text-muted-foreground">
            Capturing memories that warm our hearts
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <Card 
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 bg-card"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={moment.image}
                  alt={moment.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-2xl font-bold mb-2 text-foreground">
                      {moment.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
