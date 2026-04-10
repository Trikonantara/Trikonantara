const clients = [
  { name: "BuildCon Group", industry: "Real Estate" },
  { name: "EduTech Solutions", industry: "Education" },
  { name: "Heritage Foundation", industry: "Tourism" },
  { name: "UrbanSpace Architects", industry: "Architecture" },
  { name: "MedVista Healthcare", industry: "Healthcare" },
  { name: "InfraCore Industries", industry: "Industrial" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-primary">
                  {client.name.charAt(0)}
                </span>
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
