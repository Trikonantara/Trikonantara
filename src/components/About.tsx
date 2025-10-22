const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Trikonantara bridges imagination and technology, crafting immersive experiences that transform industries. We specialize in cutting-edge 3D, AR, and VR solutions, redefining how people explore and interact with the world.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our journey began with a vision to bridge imagination and technology, creating immersive experiences that transform industries. With innovation at our core, we continue to push the boundaries of AR, VR, and 3D technology to redefine digital interaction.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-accent" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Innovation at Our Core</h3>
                <p className="text-muted-foreground">
                  Pushing boundaries in immersive technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
