import Header from "./components/layout/Header";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/pricing";
import TrackingDashboard from "./pages/TrackingDashboard";

function App() {

  

  return (
    <div>
    <HashRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
        <Route  path="/home" element={<Home/>}></Route>
        <Route  path="/about" element={<About/>}></Route>
        <Route  path="/services" element={<Services/>}></Route>
        <Route  path="/pricing" element={<Pricing/>}></Route>
        <Route  path="/contact" element={<Contact/>}></Route>
        <Route  path="/tracking" element={<TrackingDashboard/>}></Route>
      </Routes>
    </HashRouter>
    
    </div>
  )
}

export default App
