import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Director, BuildCon Group",
    quote:
      "PROPERTY-VR transformed how we showcase our projects. Clients can now walk through properties before construction even begins. It has significantly boosted our sales.",
    rating: 5,
  },
  {
    name: "Dr. Priya Sharma",
    role: "Dean, EduTech Solutions",
    quote:
      "STUDY VR made complex subjects come alive for our students. The immersive learning experience has improved engagement and understanding dramatically.",
    rating: 5,
  },
  {
    name: "Anand Reddy",
    role: "CEO, Heritage Foundation",
    quote:
      "BHARAT VR beautifully captures India's cultural heritage. The virtual tours are so realistic that visitors feel like they are actually there. Exceptional work by Trikonantara.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-8 shadow-sm border border-border flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="text-muted-foreground italic flex-1 mb-6">
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
