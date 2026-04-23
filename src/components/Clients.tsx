import divisPalaceLogo from "@/assets/divis-palace-logo.png";

const clients = [
  { name: "Divis Palace", industry: "Real Estate", logo: divisPalaceLogo },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-sm text-foreground">{client.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
