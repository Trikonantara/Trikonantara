import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-[#2E6FBF]/10"
      style={{ background: 'linear-gradient(90deg, #E3ECFB 0%, #ECE6F5 60%, #F4E6F0 100%)' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src={logo} alt="Trikonantara" className="h-[49px] w-auto" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-wide" style={{ color: '#2E6FBF' }}>TRIKONANTARA</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] mt-1" style={{ color: '#7E3F98' }}>INNOVATION TECHNOLOGY PVT.LTD.</span>
            </div>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-sm font-semibold tracking-wide transition-colors hover:opacity-80"
              style={{ color: '#2E6FBF' }}
            >
              HOME
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-semibold tracking-wide transition-colors hover:opacity-80"
              style={{ color: '#2E6FBF' }}
            >
              ABOUT US
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-sm font-semibold tracking-wide transition-colors hover:opacity-80"
              style={{ color: '#2E6FBF' }}
            >
              SERVICES
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-sm font-semibold tracking-wide transition-colors hover:opacity-80"
              style={{ color: '#2E6FBF' }}
            >
              PRODUCTS
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="text-white font-semibold tracking-wide hover:opacity-90"
              style={{ background: 'linear-gradient(90deg, #2E6FBF 0%, #7E3F98 100%)' }}
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
