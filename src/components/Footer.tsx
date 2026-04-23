import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const blue = '#2E6FBF';
  const purple = '#7E3F98';

  return (
    <footer
      className="py-6 border-t border-[#2E6FBF]/10"
      style={{ background: 'linear-gradient(90deg, #E3ECFB 0%, #ECE6F5 60%, #F4E6F0 100%)' }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Trikonantara" className="h-10 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold tracking-wide" style={{ color: blue }}>TRIKONANTARA</span>
                <span className="text-[8px] font-semibold tracking-[0.2em] mt-1" style={{ color: purple }}>
                  INNOVATION TECHNOLOGY PVT.LTD.
                </span>
              </div>
            </div>
            <p className="text-sm" style={{ color: '#475569' }}>
              Transforming businesses through immersive technology and innovative solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4" style={{ color: blue }}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'projects', label: 'Projects' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="transition-colors hover:opacity-70"
                    style={{ color: blue }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4" style={{ color: blue }}>Services</h3>
            <ul className="space-y-2 text-sm" style={{ color: '#475569' }}>
              <li>3D Solutions</li>
              <li>AR/VR Support</li>
              <li>Webservice and APP Build</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4" style={{ color: blue }}>Contact</h3>
            <ul className="space-y-2 text-sm" style={{ color: '#475569' }}>
              <li>contactus@trikonantara.com</li>
              <li>+91 9493803632</li>
              <li>Hyderabad, Telangana - India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2E6FBF]/15 pt-4">
          <div className="flex flex-wrap justify-center items-center gap-0.5 text-sm" style={{ color: '#64748b' }}>
            <span>CIN: U62010TS2024PTC192096</span>
            <span className="mx-1">|</span>
            <Link
              to="/terms-and-conditions"
              className="transition-colors hover:opacity-70"
              style={{ color: blue }}
            >
              Terms & Conditions
            </Link>
            <span className="mx-1">|</span>
            <Link
              to="/privacy-policy"
              className="transition-colors hover:opacity-70"
              style={{ color: blue }}
            >
              Privacy Policy
            </Link>
            <span className="mx-1">|</span>
            <span>© {new Date().getFullYear()} Trikonantara. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
