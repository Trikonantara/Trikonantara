import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Glasses, Smartphone, Code, Box, Palette, ArrowRight } from "lucide-react";

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
                <button className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
