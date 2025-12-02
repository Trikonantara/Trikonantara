import { Card, CardContent } from "@/components/ui/card";
import vrSolutionImage from "@/assets/vr-solution.png";
import arSolutionImage from "@/assets/ar-solution.png";
import xrPlatformImage from "@/assets/xr-platform.png";
import visualizationImage from "@/assets/3d-visualization.png";

const projects = [
  {
    title: "Virtual Platform",
    category: "XR: AR/VR/MR",
    description: "We create immersive virtual environments",
    image: vrSolutionImage,
    link: "https://www.youtube.com/watch?v=_r3zG5xMtxw",
  },
  {
    title: "AR Product Visualization",
    category: "XR: AR/VR/MR",
    description: "Interactive product showcase for retail industry",
    image: arSolutionImage,
  },
  {
    title: "3D Property Tours",
    category: "Visual Effects",
    description: "Virtual property walkthrough system",
    image: visualizationImage,
  },
  {
    title: "Enterprise Solutions",
    category: "XR: AR/VR/MR",
    description: "We develop immersive XR platforms tailored for enterprise solutions",
    image: xrPlatformImage,
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
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground text-lg font-semibold">
                    {project.link ? 'Watch Video' : 'View Project'}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 bg-primary text-primary-foreground">
                <div className="text-sm text-accent font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
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
