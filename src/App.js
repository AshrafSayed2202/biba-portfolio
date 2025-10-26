import Nav from "./components/Nav";
import "./assests/styles/main.css";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Templates from "./components/Templates";
import Pricing from "./components/Pricing";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import { useState, useEffect, useRef } from "react";
import ContactModal from "./components/ContactModal";

const App = () => {
  const [spotlights, setSpotlights] = useState([]);
  const lastCreated = useRef(0);
  const counter = useRef(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e) => {
      const now = Date.now();
      if (now - lastCreated.current >= 200) {
        const id = ++counter.current;
        setSpotlights((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
        lastCreated.current = now;
        setTimeout(() => {
          setSpotlights((prev) => prev.filter((s) => s.id !== id));
        }, 1000);
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeOut {
            from { opacity: 0.6; }
            to { opacity: 0; }
          }
        `}
      </style>
      <div className="fixed inset-0 h-screen w-screen z-0">
        {spotlights.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full z-[10] bg-[#1FCCFF] blur-[70px]"
            style={{
              width: "200px",
              height: "200px",
              left: s.x - 100,
              top: s.y - 100,
              pointerEvents: "none",
              animation: "fadeOut 1s ease-in-out",
            }}
          />
        ))}
      </div>
      <div className="relative z-10 pointer-events-auto overflow-x-hidden">
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
          <div className="" id="pricing">
            <Pricing setIsModalOpen={setIsModalOpen} />
          </div>
          <div className="section" id="faqs">
            <FAQs />
          </div>
          <div className="" id="footer">
            <Footer setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default App;