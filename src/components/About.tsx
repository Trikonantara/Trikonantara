import innovationImage from "@/assets/innovation-core.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-left">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">
              Trikonantara bridges imagination and technology, crafting immersive experiences that transform industries. We specialize in cutting-edge 3D, AR, and VR solutions, redefining how people explore and interact with the world.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-left">
              Our journey began with a vision to bridge imagination and technology, creating immersive experiences that transform industries. With innovation at our core, we continue to push the boundaries of AR, VR, and 3D technology to redefine digital interaction.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={innovationImage} 
                alt="Innovation at Our Core - AR/VR Technology" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
