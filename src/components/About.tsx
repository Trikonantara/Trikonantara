import whoWeAreImage from "@/assets/who-we-are.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Who We Are</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Trikonantara bridges imagination and technology, crafting immersive experiences that transform industries. We specialize in cutting-edge 3D, AR, and VR solutions, redefining how people explore and interact with the world.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our journey began with a vision to bridge imagination and technology, creating immersive experiences that transform industries. With innovation at our core, we continue to push the boundaries of AR, VR, and 3D technology to redefine digital interaction.
          </p>
        </div>
        <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src={whoWeAreImage} 
            alt="Trikonantara Team - Immersive Technology Lab" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
