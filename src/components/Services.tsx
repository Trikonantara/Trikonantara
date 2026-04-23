import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import service3dImg from "@/assets/service-3d.png";
import serviceArvrImg from "@/assets/service-arvr.png";
import serviceWebImg from "@/assets/service-web.png";

const services = [
  {
    image: service3dImg,
    title: "3D Solutions",
    description: "Powerful 3D modeling, visualization, and interactive experiences to bring your concepts to life with precision.",
  },
  {
    image: serviceArvrImg,
    title: "AR/VR Support",
    description: "Comprehensive support for augmented and virtual reality projects, ensuring optimal performance and user experience.",
  },
  {
    image: serviceWebImg,
    title: "Webservice and APP Build",
    description: "Custom web services and mobile application development tailored to your business needs with cutting-edge technology.",
  },
];

const serviceDetails = [
  {
    title: "3D Solutions",
    content: (
      <>
        <p>At Trikonantara, we specialize in delivering high-quality 3D modeling, visualization, and interactive experiences that bring ideas to life with cinematic precision and artistic depth.</p>
        <p>From concept to final render, our team handles every step — modeling, texturing, lighting, animation, and real-time optimization — ensuring seamless integration across film, VR, gaming, and industrial projects.</p>
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-3">What We Offer:</h3>
          <ul className="space-y-3">
            <li><strong className="text-foreground">3D Modeling & Visualization:</strong> Realistic and stylized assets crafted for maximum visual impact.</li>
            <li><strong className="text-foreground">Animation & Motion Design:</strong> Story-driven visuals for advertising, film, and digital storytelling.</li>
            <li><strong className="text-foreground">Virtual & Augmented Reality:</strong> Immersive real-time environments for training, heritage, and interactive experiences.</li>
            <li><strong className="text-foreground">Product & Architectural Visualization:</strong> Photo-real renders that help you showcase, pitch, and sell your designs.</li>
            <li><strong className="text-foreground">Real-Time Production:</strong> Optimized pipelines for Unreal Engine, Unity, and other real-time platforms.</li>
          </ul>
        </div>
        <p>With over 15 years of experience in the industry, we've delivered projects that blend technology, art, and storytelling to engage global audiences.</p>
        <p className="font-medium text-foreground">Let's collaborate to make your next idea visually powerful and emotionally resonant.</p>
      </>
    ),
  },
  {
    title: "AR/VR Support",
    content: (
      <>
        <p>At Trikonantara, we provide end-to-end solutions for Augmented Reality (AR) and Virtual Reality (VR) projects — from concept to deployment — ensuring every experience runs seamlessly and delivers maximum impact.</p>
        <p>Our team combines creative storytelling, technical expertise, and real-time optimization to craft immersive experiences that are visually stunning and highly performant across all major platforms.</p>
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Our Capabilities Include:</h3>
          <ul className="space-y-3">
            <li><strong className="text-foreground">AR & VR Experience Design:</strong> Custom-built immersive environments that engage and educate users.</li>
            <li><strong className="text-foreground">Real-Time 3D Optimization:</strong> Ensuring smooth performance on headsets, mobile, and web platforms.</li>
            <li><strong className="text-foreground">Interactive Training & Simulations:</strong> Realistic scenarios for education, healthcare, and enterprise use.</li>
            <li><strong className="text-foreground">Virtual Production & Previsualization:</strong> Blending real and virtual worlds for film and media projects.</li>
            <li><strong className="text-foreground">Multi-Platform Deployment:</strong> Compatibility with Meta Quest, Apple Vision Pro, HTC Vive, and more.</li>
          </ul>
        </div>
        <p>We ensure every project is optimized for performance, realism, and user comfort, turning complex ideas into intuitive, interactive journeys.</p>
      </>
    ),
  },
  {
    title: "Webservice and APP Build",
    content: (
      <>
        <p>At Trikonantara, we design and build custom web and mobile applications that align perfectly with your business goals — delivering speed, scalability, and seamless user experiences.</p>
        <p>Our team blends creative design, robust development, and intelligent architecture to craft digital products that perform flawlessly across all devices and platforms.</p>
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-3">Our Expertise Includes:</h3>
          <ul className="space-y-3">
            <li><strong className="text-foreground">Web Application Development:</strong> Scalable, secure, and performance-driven solutions built with modern frameworks.</li>
            <li><strong className="text-foreground">Mobile App Development:</strong> Native and cross-platform apps designed for Android, iOS, and XR devices.</li>
            <li><strong className="text-foreground">UI/UX Design:</strong> Intuitive and visually engaging interfaces focused on user experience and engagement.</li>
            <li><strong className="text-foreground">API & Cloud Integration:</strong> Connecting your ecosystem for smooth data flow and real-time connectivity.</li>
            <li><strong className="text-foreground">Maintenance & Support:</strong> Continuous updates, optimization, and performance monitoring for reliability.</li>
          </ul>
        </div>
        <p>By combining cutting-edge technology with strategic design thinking, we help businesses transform ideas into digital products that drive growth and engagement.</p>
      </>
    ),
  },
];

const Services = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide end-to-end solutions from concept to deployment, specializing in immersive technologies and enterprise software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="relative pt-16">
              {/* Floating image with glow */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 w-40 h-40 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110" />
                <div className="absolute inset-2 rounded-full bg-accent/10 blur-xl" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative w-full h-full object-contain drop-shadow-[0_0_15px_hsl(var(--accent)/0.4)]"
                />
              </div>

              {/* Glassmorphism card */}
              <div className="bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl pt-24 pb-8 px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {service.description}
                </p>
                <Dialog open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
                  <DialogTrigger asChild>
                    <button className="text-accent font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{serviceDetails[index].title}</DialogTitle>
                      <DialogDescription className="text-base leading-relaxed space-y-4 pt-4">
                        {serviceDetails[index].content}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
