import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Glasses, Smartphone, Code, Box, Palette, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Box,
    title: "3D Solutions",
    description: "Powerful 3D modeling, visualization, and interactive experiences to bring your concepts to life with precision.",
  },
  {
    icon: Smartphone,
    title: "AR/VR Support",
    description: "Comprehensive support for augmented and virtual reality projects, ensuring optimal performance and user experience.",
  },
  {
    icon: Code,
    title: "Webservice and APP Build",
    description: "Custom web services and mobile application development tailored to your business needs with cutting-edge technology.",
  },
];

const Services = () => {
  const [open3D, setOpen3D] = useState(false);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end solutions from concept to deployment, specializing in immersive technologies and enterprise software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                {index === 0 ? (
                  <Dialog open={open3D} onOpenChange={setOpen3D}>
                    <DialogTrigger asChild>
                      <button className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">3D Solutions</DialogTitle>
                        <DialogDescription className="text-base leading-relaxed space-y-4 pt-4">
                          <p>
                            At Trikonantara, we specialize in delivering high-quality 3D modeling, visualization, and interactive experiences that bring ideas to life with cinematic precision and artistic depth.
                          </p>
                          <p>
                            From concept to final render, our team handles every step — modeling, texturing, lighting, animation, and real-time optimization — ensuring seamless integration across film, VR, gaming, and industrial projects.
                          </p>
                          <div>
                            <h3 className="font-semibold text-foreground text-lg mb-3">What We Offer:</h3>
                            <ul className="space-y-3">
                              <li>
                                <strong className="text-foreground">3D Modeling & Visualization:</strong> Realistic and stylized assets crafted for maximum visual impact.
                              </li>
                              <li>
                                <strong className="text-foreground">Animation & Motion Design:</strong> Story-driven visuals for advertising, film, and digital storytelling.
                              </li>
                              <li>
                                <strong className="text-foreground">Virtual & Augmented Reality:</strong> Immersive real-time environments for training, heritage, and interactive experiences.
                              </li>
                              <li>
                                <strong className="text-foreground">Product & Architectural Visualization:</strong> Photo-real renders that help you showcase, pitch, and sell your designs.
                              </li>
                              <li>
                                <strong className="text-foreground">Real-Time Production:</strong> Optimized pipelines for Unreal Engine, Unity, and other real-time platforms.
                              </li>
                            </ul>
                          </div>
                          <p>
                            With over 15 years of experience in the industry, we've delivered projects that blend technology, art, and storytelling to engage global audiences.
                          </p>
                          <p className="font-medium text-foreground">
                            Let's collaborate to make your next idea visually powerful and emotionally resonant.
                          </p>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <button className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
