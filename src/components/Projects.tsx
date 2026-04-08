import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Glasses, GraduationCap, MapPin, Users, Landmark, BookOpen, Building } from "lucide-react";
import bharatVrImage from "@/assets/bharat-vr.jpg";
import studyVrImage from "@/assets/study-vr.jpg";
import propertyVrImage from "@/assets/property-vr.jpg";

const projects = [
  {
    title: "BHARAT VR",
    subtitle: "India's Heritage in Virtual Reality (Flagship Project)",
    description: "Bharat VR is Trikonantara's flagship immersive experience that brings the rich cultural, architectural, and spiritual heritage of India to life through Virtual Reality. This project enables users to virtually explore India's iconic monuments, ancient temples, and forgotten stories—preserving and showcasing the country's timeless beauty through 3D photorealistic environments and interactive storytelling.",
    details: "From the grandeur of Hampi and Khajuraho to the serenity of Bodh Gaya and Varanasi, Bharat VR offers an authentic and emotionally engaging journey through India's living history. Designed for museums, tourism boards, and educational platforms, it aims to make heritage exploration accessible to global audiences through VR headsets and web-based immersive experiences.",
    icon: Landmark,
    image: bharatVrImage,
    highlights: [
      "1:1 scale digital recreations of historic Indian landmarks",
      "Real-time VR exploration with cinematic storytelling",
      "Cultural and educational content collaboration with historians and archaeologists",
      "Available for VR headsets, web, and mobile"
    ]
  },
  {
    title: "STUDY VR",
    subtitle: "Immersive Learning Redefined",
    description: "Study VR is an innovative educational platform by Trikonantara that transforms traditional learning into an interactive, 3D immersive experience. Built for schools, universities, and training institutions, Study VR bridges the gap between theory and practice by enabling students to visualize complex concepts, interact with virtual labs, and learn by experience—anytime, anywhere.",
    details: "Whether it's exploring human anatomy, understanding space physics, or performing virtual chemistry experiments, Study VR makes learning engaging, safe, and deeply memorable.",
    icon: GraduationCap,
    image: studyVrImage,
    highlights: [
      "Interactive VR lessons across Science, History, and Engineering",
      "Virtual classrooms with real-time collaboration",
      "Curriculum-aligned modules designed for educators",
      "Supports Meta Quest, Pico, and WebXR platforms"
    ]
  },
  {
    title: "PROPERTY VR",
    subtitle: "Real Estate Visualization in Virtual Reality",
    description: "PROPERTY VR is Trikonantara's immersive solution that brings all types of properties and building projects to life through Virtual Reality. From villas, apartments, and commercial spaces to offices, hospitals, factories, and home renovation projects, users can explore every space in a fully interactive 3D environment—before they are built or transformed.",
    details: "Most people find it difficult to understand floor plans and CAD drawings, making it hard to visualize actual space and layout. PROPERTY VR solves this by showing the exact space in real scale, allowing users to walk through and experience the property as if they are physically present. With realistic visuals and accurate measurements, it provides a clear understanding of design, space, and flow. PROPERTY VR helps builders, developers, architects, and homeowners communicate ideas better and make faster, more confident decisions.",
    icon: Building,
    image: propertyVrImage,
    highlights: [
      "1:1 scale virtual walkthroughs",
      "Real-time interactive experience",
      "Supports all types of projects: residential, commercial, industrial, and renovation",
      "Available for VR headsets, PC, web, and mobile"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${
                    index === 0 ? 'object-[center_20%]' : 'object-[center_35%]'
                  }`}
                />
                <div className="absolute top-4 left-4 w-14 h-14 bg-background/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <project.icon className="w-7 h-7 text-accent" />
                </div>
              </div>
              
              <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
                <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base text-accent font-semibold">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6 space-y-4 flex-grow">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.details}
                </p>
                
                <div>
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm">
                    <BookOpen className="w-4 h-4 text-accent" />
                    Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{highlight}</span>
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