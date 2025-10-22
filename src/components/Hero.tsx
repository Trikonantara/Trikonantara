import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--hero-gradient-start)) 0%, hsl(var(--hero-gradient-start)) 50%, transparent 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Immersive Innovation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            At Trikonantara, we merge imagination with cutting-edge technology, crafting immersive experiences that redefine industries and inspire new frontiers of exploration.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => scrollToSection('services')}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Explore Our Services
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
