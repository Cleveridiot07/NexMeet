import { Button } from "../../components/Common Components/Button";
import Features from "../../components/LandingPageSection/Features";
import Footer from "../../components/LandingPageSection/Footer";
import Hero from "../../components/LandingPageSection/Hero";
import Pricing from "../../components/LandingPageSection/Pricing";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-sky-950 text-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold">VideoCall</div>
          <Link to="/signup">
          <Button variant="outline" className="text-white bg-sky-800 rounded-sm hover:text-sky-950">
            Create your account
          </Button>
          </Link>
        </nav>
      </div>
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
