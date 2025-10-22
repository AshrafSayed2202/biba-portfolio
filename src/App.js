import Nav from "./components/Nav";
import "./assests/styles/main.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Templates from "./components/Templates";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import { useState } from "react";
import ContactModal from "./components/ContactModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Nav setIsModalOpen={setIsModalOpen} />
      <div className="min-h-screen">
        <div className="section" id="landing">
          <Landing setIsModalOpen={setIsModalOpen} />
        </div>
        <div className="section" id="about">
          <About />
        </div>
        <div className="section" id="services">
          <Services />
        </div>
        <div className="section" id="templates" style={{ height: 'auto', minHeight: 'unset' }}>
          <Templates />
        </div>
        <div className="section" id="pricing">
          <Pricing setIsModalOpen={setIsModalOpen} />
        </div>
        <div className="section" id="faqs">
          <FAQs />
        </div>
        <div className="section" id="footer">
          <Footer setIsModalOpen={setIsModalOpen} />
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default App;