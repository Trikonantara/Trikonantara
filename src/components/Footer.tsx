import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Trikonantara" className="h-[45px] w-auto" />
              <span className="text-xl font-bold">TRIKONANTARA</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Transforming businesses through immersive technology and innovative solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>3D Solutions</li>
              <li>AR/VR Support</li>
              <li>Webservice and APP Build</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>contactus@trikonantara.com</li>
              <li>+91 9493803632</li>
              <li>Hyderabad, Telangana - India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="text-center mb-4">
            <p className="text-sm text-primary-foreground/60 mb-2">CIN: U62010TS2024PTC192096</p>
            <div className="flex justify-center gap-4 text-sm">
              <Link 
                to="/terms-and-conditions"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Terms & Conditions
              </Link>
              <span className="text-primary-foreground/60">|</span>
              <Link 
                to="/privacy-policy"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Trikonantara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
