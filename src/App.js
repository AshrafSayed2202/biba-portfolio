import Nav from "./components/Nav"
import "./assests/styles/main.css"
import Landing from "./components/Landing"
import About from "./components/About"
import Services from "./components/Services"
import Templates from "./components/Templates"
import Pricing from "./components/Pricing"
import FAQs from "./components/FAQs"
import Footer from "./components/Footer"
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/dist/fullpage.css';
import { useState } from "react"
import ContactModal from "./components/ContactModal"

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Nav setIsModalOpen={setIsModalOpen} />
      <ReactFullpage
        scrollingSpeed={700} // Adjust for smoother/faster scroll; 700ms feels natural
        navigation={false} // Optional: Set to true if you want side navigation dots
        anchors={['landing', 'about', 'services', 'templates', 'pricing', 'faqs', 'footer']} // Optional: For linking if needed
        sectionSelector=".section" // Default, but explicit for clarity
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
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
export default App