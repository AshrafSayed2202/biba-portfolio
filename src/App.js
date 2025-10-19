import Nav from "./components/Nav";
import "./assests/styles/main.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Templates from "./components/Templates";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.css';
import { useEffect, useState } from "react";
import ContactModal from "./components/ContactModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Nav setIsModalOpen={setIsModalOpen} />
      {isMobile ? (
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
          <div className="section" id="templates">
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
      ) : (
        <ReactFullpage
          scrollingSpeed={700}
          navigation={false}
          anchors={['landing', 'about', 'services', 'templates', 'pricing', 'faqs', 'footer']}
          sectionSelector=".section"
          responsiveWidth={991}
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Landing setIsModalOpen={setIsModalOpen} />
              </div>
              <div className="section">
                <About />
              </div>
              <div className="section">
                <Services />
              </div>
              <div className="section">
                <Templates />
              </div>
              <div className="section">
                <Pricing setIsModalOpen={setIsModalOpen} />
              </div>
              <div className="section">
                <FAQs />
              </div>
              <div className="section">
                <Footer setIsModalOpen={setIsModalOpen} />
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      )}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default App;