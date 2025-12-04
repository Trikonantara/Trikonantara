import { Card, CardContent } from "@/components/ui/card";
import immersiveTechImage from "@/assets/immersive-technology.png";
import vfxProductionImage from "@/assets/vfx-production.png";
import motionDesignImage from "@/assets/motion-design.png";
import realEstateImage from "@/assets/3d-visualization.png";

const projects = [
  {
    title: "XR: AR/VR/MR",
    category: "Immersive Technology",
    description: "We create cutting-edge augmented, virtual, and mixed reality experiences for enterprises and consumers",
    image: immersiveTechImage,
    link: "https://www.youtube.com/watch?v=_r3zG5xMtxw",
  },
  {
    title: "Visual Effects",
    category: "VFX Production",
    description: "High-quality visual effects and 3D visualization for films, advertisements, and digital media",
    image: vfxProductionImage,
    link: "https://youtu.be/d5wQoUDpffI",
  },
  {
    title: "Animations",
    category: "Motion Design",
    description: "Professional 2D and 3D animations for storytelling, branding, and interactive applications",
    image: motionDesignImage,
  },
  {
    title: "Real Estate",
    category: "3D Visualization",
    description: "Stunning 3D architectural visualizations and virtual property tours for real estate marketing",
    image: realEstateImage,
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
