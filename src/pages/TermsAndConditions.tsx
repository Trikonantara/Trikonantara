import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <h2>Legal Disclaimers</h2>
          
          <h2>Discover BHARAT VR</h2>
          <p>
            Step into a new realm of immersive experiences with <strong>BHARAT VR</strong>, the flagship product of Trikonantara. Our advanced virtual reality platform bridges imagination and technology, allowing users to explore India's rich cultural heritage, landscapes, and stories in an entirely new way.
          </p>

          <p>
            With BHARAT VR, you can experience, create, and connect beyond the boundaries of traditional media — whether you're walking through ancient monuments, exploring virtual art, or learning through interactive environments. Every journey is designed to inspire wonder, creativity, and discovery.
          </p>

          <h2>Understanding Our Terms & Conditions</h2>
          <p>
            At Trikonantara, our Terms and Conditions establish the legal foundation that governs your interaction with our website, products, and immersive experiences such as BHARAT VR.
          </p>

          <p>
            These terms clearly define the relationship between you (the user) and Trikonantara (the provider), ensuring that your experience is secure, transparent, and enjoyable. They outline your rights and responsibilities while engaging with our digital platforms, ensuring both creativity and compliance coexist harmoniously.
          </p>

          <p>
            Our Terms are designed to reflect the unique nature of immersive technology, addressing the realities of VR environments — from user safety and responsible participation to the handling of digital content and user data.
          </p>

          <h2>Key Inclusions in Our Terms & Conditions</h2>
          <p>Our Terms & Conditions comprehensively cover the following areas:</p>

          <ul>
            <li>
              <strong>User Eligibility & Conduct:</strong> Guidelines on who can access our services and how to use them responsibly.
            </li>
            <li>
              <strong>Payments & Subscriptions:</strong> Details on pricing, payment gateways, and refund policies for paid experiences.
            </li>
            <li>
              <strong>Software & Updates:</strong> Information about regular product updates, service enhancements, and version changes.
            </li>
            <li>
              <strong>Intellectual Property Rights:</strong> Protection of our content, 3D assets, software, and proprietary technology.
            </li>
            <li>
              <strong>Account Access, Suspension, or Termination:</strong> Policies regarding account creation, misuse, or violations.
            </li>
            <li>
              <strong>Liability & Warranties:</strong> Limitations of liability to ensure a fair and safe use of immersive environments.
            </li>
            <li>
              <strong>User-Generated Content:</strong> Rights and responsibilities concerning content created or shared within our platform.
            </li>
            <li>
              <strong>Privacy & Data Protection:</strong> How user information is handled in accordance with our Privacy Policy.
            </li>
          </ul>

          <p>
            For a complete understanding of how to engage safely and meaningfully with our platform, we encourage you to read our detailed Terms & Conditions document available on our website.
          </p>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Important Notice</h3>
            <p className="mb-0">
              By using Trikonantara's services, including BHARAT VR and our website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
