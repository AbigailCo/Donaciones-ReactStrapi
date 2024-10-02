/* import logo from "./logo.svg"; */
import "./Styles/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import NavBar from "./componentes/NarBar";
import Masthead from "./componentes/Masthead";
import About from "./componentes/SeccionCampañas";
import Services from "./componentes/Services";
import Portfolio from "./componentes/Portfolio";
import CallToAction from "./componentes/CallToAction";
import Contact from "./componentes/Contact";
import CampaignList from "./componentes/CampaignList";

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Masthead />
      <About />
      <Services />
      <Portfolio />
      <CallToAction />
      <Contact />
      <CampaignList/>
    </div>
  );
}

export default App;
