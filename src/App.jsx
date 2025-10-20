import { BrowserRouter } from "react-router-dom";


import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer.jsx";
import ScrollProgressBar from "./ScrollProgressBar.jsx";
import CercleRotate from "./components/CercleRotate.jsx";
import DownloadCVButton from "./components/DownloadCVButton.jsx";

// const Works = lazy(() => import("./components/Works.jsx")); 
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <ScrollProgressBar />
            <Navbar />
            <Hero />
            <div className="flex justify-center items-center">

              <DownloadCVButton />
            </div>
          </div>
          <About />
          <Experience />
          {/* <Tech /> */}
          <CercleRotate />
          <Works />
          <Feedbacks />

          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
