import { BrowserRouter } from "react-router-dom";

import {
  Introduction,
  Contact,
  Experience,
  Testimonials,
  Footer,
  Hero,
  Navbar,
  Tech,
  // Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <Introduction />
        <Experience />
        <Tech />
        {/* <Works /> */}  {/* Works section is currently commented out */}
        <Testimonials />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
