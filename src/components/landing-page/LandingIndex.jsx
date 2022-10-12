import Hero from "./components/Hero";
import Howitworks from "./components/HowItWorks";
import Campaign from "./components/Campaign";
import Raise from "./components/Raise";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./landingIndex.css";
import "./LandingApp.css";

const LandingPage = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Howitworks />
      <Campaign />
      <Raise />
      <Footer />
    </div>
  );
};

export default LandingPage;
