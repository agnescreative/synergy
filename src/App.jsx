import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Layout } from "./layout/Layout.jsx";
import { About } from "./pages/About.jsx";
import { Technology } from "./pages/Technology.jsx";
import { OurHospitality } from "./pages/OurHospitality.jsx";
import { Ergonomics } from "./pages/Ergonomics.jsx";
import { GlobalPatientAssistance } from "./pages/GlobalPatientAssistance.jsx";
import HomeVisits from "./pages/HomeVisits.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import NotFound from "./pages/NotFound.jsx";
import Specialization from "./pages/Specialization.jsx";
import NeuroRehabilitation from "./pages/NeuroRehabilitation.jsx";
import SportsHealth from "./pages/SportsHealth.jsx";
import Robotics from "./pages/Robotics.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about-us"} element={<About />} />
          <Route path={"/technology"} element={<Technology />} />
          <Route path={"/our-hospitality"} element={<OurHospitality />} />
          <Route path={"/ergonomics"} element={<Ergonomics />} />
          <Route
            path={"/global-patient-assistance"}
            element={<GlobalPatientAssistance />}
          />
          <Route path={"/home-visits"} element={<HomeVisits />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/services/:slug" element={<Service />} />
          <Route path="/specialization/:slug" element={<Specialization />} />
          <Route
            path="/specialization/neuro-rehabilitation"
            element={<NeuroRehabilitation />}
          />
          <Route
            path="/specialization/sports-rehabilitation"
            element={<SportsHealth />}
          />
          <Route path="/robotics" element={<Robotics />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
