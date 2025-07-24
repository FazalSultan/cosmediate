import HeroSection from "./herosection/hero";
import Doctor from "./doctor/doctor";
import Testimonial from "./testimonal/testimonal";
import Footer from "./footer/footer";
import ServicesSection from "./services/services";
import NewsLetter from "./newsletter/newletter";
export default function Home() {
  return (
    <div className="mainLayout">
   
      <HeroSection />
      <Doctor />
      <ServicesSection />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
}
