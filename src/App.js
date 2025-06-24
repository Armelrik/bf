import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Organigrame from "./routes/Organigrame";
import BackToTopButton from "./components/BackToTopButton";
import Ambassador from "./routes/Ambassador";
import Signup from "./routes/Signup";
import Galery from "./routes/Galery";
import Personnel from "./routes/Personnel";
import ConsulCard from "./routes/ConsulCard";
import Visas from "./routes/Visas";
import Passport from "./routes/Passport";
import Acts from "./routes/Acts";
import Certificate from "./routes/Certificate";
import LetPass from "./routes/LetPass";
import Capacity from "./routes/Capacity";
import OtherDoc from "./routes/OtherDoc";
import Consulat from "./routes/Consulat";
import Diaspora from "./routes/Diaspora";
import Ambassade from "./routes/Ambassade";
import Conseils from "./routes/Conseils";
import Historique from "./routes/Historique";
import Associations from "./routes/Associations";
import HCBE from "./routes/HCBE";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ambassade" element={<Ambassade />} />
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/organigrame" element={<Organigrame />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/personnel" element={<Personnel />} />
        <Route path="/visas" element={<Visas />} />
        <Route path="/consulat" element={<Consulat />} />
        <Route path="/consulCard" element={<ConsulCard />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/acts" element={<Acts />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/letpass" element={<LetPass />} />
        <Route path="/capacity" element={<Capacity />} />
        <Route path="/otherDoc" element={<OtherDoc />} />
        <Route path="/diaspora" element={<Diaspora />} />
        <Route path="/conseils" element={<Conseils />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/associations" element={<Associations />} />
        <Route path="/hcbe" element={<HCBE />} />
      </Routes>
      <BackToTopButton />
    </div>
  );
}

export default App;
