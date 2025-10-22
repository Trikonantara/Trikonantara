import { Card, CardContent } from "@/components/ui/card";
import ceoImage from "@/assets/ceo.jpg";
import ctoImage from "@/assets/cto.png";

const team = [
  {
    name: "Saipradeep Goud Srimantula",
    role: "CEO",
    image: ceoImage,
  },
  {
    name: "Kiran Mudhili",
    role: "CTO",
    image: ctoImage,
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the leaders driving innovation at Trikonantara
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold text-lg">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
