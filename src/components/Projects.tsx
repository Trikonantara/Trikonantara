import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Glasses, GraduationCap, MapPin, Users, Landmark, BookOpen } from "lucide-react";

const projects = [
  {
    title: "Bharat VR",
    subtitle: "India's Heritage in Virtual Reality (Flagship Project)",
    description: "Bharat VR is Trikonantara's flagship immersive experience that brings the rich cultural, architectural, and spiritual heritage of India to life through Virtual Reality. This project enables users to virtually explore India's iconic monuments, ancient temples, and forgotten stories—preserving and showcasing the country's timeless beauty through 3D photorealistic environments and interactive storytelling.",
    details: "From the grandeur of Hampi and Khajuraho to the serenity of Bodh Gaya and Varanasi, Bharat VR offers an authentic and emotionally engaging journey through India's living history. Designed for museums, tourism boards, and educational platforms, it aims to make heritage exploration accessible to global audiences through VR headsets and web-based immersive experiences.",
    icon: Landmark,
    highlights: [
      "1:1 scale digital recreations of historic Indian landmarks",
      "Real-time VR exploration with cinematic storytelling",
      "Cultural and educational content collaboration with historians and archaeologists",
      "Available for VR headsets, web, and mobile"
    ]
  },
  {
    title: "Study VR",
    subtitle: "Immersive Learning Redefined",
    description: "Study VR is an innovative educational platform by Trikonantara that transforms traditional learning into an interactive, 3D immersive experience. Built for schools, universities, and training institutions, Study VR bridges the gap between theory and practice by enabling students to visualize complex concepts, interact with virtual labs, and learn by experience—anytime, anywhere.",
    details: "Whether it's exploring human anatomy, understanding space physics, or performing virtual chemistry experiments, Study VR makes learning engaging, safe, and deeply memorable.",
    icon: GraduationCap,
    highlights: [
      "Interactive VR lessons across Science, History, and Engineering",
      "Virtual classrooms with real-time collaboration",
      "Curriculum-aligned modules designed for educators",
      "Supports Meta Quest, Pico, and WebXR platforms"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pioneering immersive experiences that bridge culture, education, and technology
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50"
            >
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 pb-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-bold mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-lg text-accent font-semibold">
                      {project.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {project.details}
                </p>
                
                <div>
                  <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-accent" />
                    Highlights:
                  </h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;