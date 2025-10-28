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
              <img src={logo} alt="Trikonantara" className="h-8 w-auto" />
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
          <div className="flex flex-wrap justify-center items-center gap-0.5 text-sm text-primary-foreground/60">
            <span>CIN: U62010TS2024PTC192096</span>
            <span>|</span>
            <Link 
              to="/terms-and-conditions"
              className="text-primary-foreground/80 hover:text-accent transition-colors"
            >
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link 
              to="/privacy-policy"
              className="text-primary-foreground/80 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <span>© {new Date().getFullYear()} Trikonantara. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
