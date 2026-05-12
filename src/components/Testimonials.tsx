import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import srinivasaNaiduPhoto from "@/assets/srinivasa-naidu.jpg";
import sreedharPhoto from "@/assets/sreedhar-kumar.jpg";
import nareshPhoto from "@/assets/naresh-tiparthi.jpg";

const testimonials = [
  {
    name: "Srinivasa Naidu D",
    role: "Divis Palace",
    quote:
      "Working with this team has been a great experience. Their Property VR solution brought our Divis Palace Premium Homes project to life with impressive clarity and realism. The quality, attention to detail, and timely delivery exceeded our expectations. It has truly helped us present our project more effectively to our clients.",
    rating: 5,
    image: srinivasaNaiduPhoto,
  },
  {
    name: "Sreedhar Kumar",
    role: "IT Professional",
    quote:
      "PROPERTY VR team helped us visualize our flat exactly the way we imagined. Their 3D and VR presentation made it easy to finalize the design quickly, while saving both our time and overall design costs.",
    rating: 5,
    image: sreedharPhoto,
  },
  {
    name: "Naresh Tiparthi",
    role: "Civil Engineer",
    quote:
      "PROPERTY VR transformed our floor plan into a complete 3D and VR experience, which helped us understand the final outcome before construction. It made the design process easier, saved valuable time during execution, and improved decision-making throughout the project.",
    rating: 5,
    image: nareshPhoto,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-sm border border-border flex flex-col items-center text-center"
            >
              <Avatar className="w-24 h-24 mb-6">
                <AvatarImage src={t.image} alt={t.name} />
                <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
              </Avatar>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground italic mb-6">
                "{t.quote}"
              </p>
              
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
