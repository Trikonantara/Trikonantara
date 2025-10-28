import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import ceoImage from "@/assets/ceo.jpg";
import ctoImage from "@/assets/cto.png";

const team = [
  {
    name: "Saipradeep Goud Srimantula",
    role: "CEO",
    image: ceoImage,
    linkedin: "https://www.linkedin.com/in/srimanthulla-saipradeepgoud/",
  },
  {
    name: "Kiran Mudhili",
    role: "CTO",
    image: ctoImage,
    linkedin: "https://www.linkedin.com/in/mudhilikiran/",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden max-w-[300px] mx-auto">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold text-lg mb-3">{member.role}</p>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-primary hover:text-accent transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin size={20} />
                  </a>
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
