import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Virtual Training Platform",
    category: "VR Solution",
    description: "Immersive training environment for enterprise clients",
  },
  {
    title: "AR Product Visualization",
    category: "AR Application",
    description: "Interactive product showcase for retail industry",
  },
  {
    title: "3D Property Tours",
    category: "3D Visualization",
    description: "Virtual property walkthrough system",
  },
  {
    title: "Medical Simulation",
    category: "XR Platform",
    description: "Advanced medical training simulation",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our innovative projects that showcase the power of immersive technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-accent font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
