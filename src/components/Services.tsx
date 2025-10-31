import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Box, Glasses, Globe, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Box,
    title: "3D Solutions",
    description: "Powerful 3D modeling, visualization, and interactive experiences to bring your concepts to life with precision.",
  },
  {
    icon: Glasses,
    title: "AR/VR Support",
    description: "Comprehensive support for augmented and virtual reality projects, ensuring optimal performance and user experience.",
  },
  {
    icon: Globe,
    title: "Webservice and APP Build",
    description: "Custom web services and mobile application development tailored to your business needs with cutting-edge technology.",
  },
];

const Services = () => {
  const [open3D, setOpen3D] = useState(false);
  const [openAR, setOpenAR] = useState(false);
  const [openWeb, setOpenWeb] = useState(false);

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
                ) : index === 1 ? (
                  <Dialog open={openAR} onOpenChange={setOpenAR}>
                    <DialogTrigger asChild>
                      <button className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">AR/VR Support</DialogTitle>
                        <DialogDescription className="text-base leading-relaxed space-y-4 pt-4">
                          <p>
                            At Trikonantara, we provide end-to-end solutions for Augmented Reality (AR) and Virtual Reality (VR) projects — from concept to deployment — ensuring every experience runs seamlessly and delivers maximum impact.
                          </p>
                          <p>
                            Our team combines creative storytelling, technical expertise, and real-time optimization to craft immersive experiences that are visually stunning and highly performant across all major platforms.
                          </p>
                          <div>
                            <h3 className="font-semibold text-foreground text-lg mb-3">Our Capabilities Include:</h3>
                            <ul className="space-y-3">
                              <li>
                                <strong className="text-foreground">AR & VR Experience Design:</strong> Custom-built immersive environments that engage and educate users.
                              </li>
                              <li>
                                <strong className="text-foreground">Real-Time 3D Optimization:</strong> Ensuring smooth performance on headsets, mobile, and web platforms.
                              </li>
                              <li>
                                <strong className="text-foreground">Interactive Training & Simulations:</strong> Realistic scenarios for education, healthcare, and enterprise use.
                              </li>
                              <li>
                                <strong className="text-foreground">Virtual Production & Previsualization:</strong> Blending real and virtual worlds for film and media projects.
                              </li>
                              <li>
                                <strong className="text-foreground">Multi-Platform Deployment:</strong> Compatibility with Meta Quest, Apple Vision Pro, HTC Vive, and more.
                              </li>
                            </ul>
                          </div>
                          <p>
                            We ensure every project is optimized for performance, realism, and user comfort, turning complex ideas into intuitive, interactive journeys.
                          </p>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Dialog open={openWeb} onOpenChange={setOpenWeb}>
                    <DialogTrigger asChild>
                      <button className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">Webservice and APP Build</DialogTitle>
                        <DialogDescription className="text-base leading-relaxed space-y-4 pt-4">
                          <p>
                            At Trikonantara, we design and build custom web and mobile applications that align perfectly with your business goals — delivering speed, scalability, and seamless user experiences.
                          </p>
                          <p>
                            Our team blends creative design, robust development, and intelligent architecture to craft digital products that perform flawlessly across all devices and platforms. Whether you need a business portal, e-commerce solution, or an immersive interactive app, we ensure your technology works as beautifully as it looks.
                          </p>
                          <div>
                            <h3 className="font-semibold text-foreground text-lg mb-3">Our Expertise Includes:</h3>
                            <ul className="space-y-3">
                              <li>
                                <strong className="text-foreground">Web Application Development:</strong> Scalable, secure, and performance-driven solutions built with modern frameworks.
                              </li>
                              <li>
                                <strong className="text-foreground">Mobile App Development:</strong> Native and cross-platform apps designed for Android, iOS, and XR devices.
                              </li>
                              <li>
                                <strong className="text-foreground">UI/UX Design:</strong> Intuitive and visually engaging interfaces focused on user experience and engagement.
                              </li>
                              <li>
                                <strong className="text-foreground">API & Cloud Integration:</strong> Connecting your ecosystem for smooth data flow and real-time connectivity.
                              </li>
                              <li>
                                <strong className="text-foreground">Maintenance & Support:</strong> Continuous updates, optimization, and performance monitoring for reliability.
                              </li>
                            </ul>
                          </div>
                          <p>
                            By combining cutting-edge technology with strategic design thinking, we help businesses transform ideas into digital products that drive growth and engagement.
                          </p>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
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
