import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import TrackingDashboard from "./pages/TrackingDashboard";
import Pricing from "./pages/pricing";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Pricing />
        <Contact />
        <TrackingDashboard />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
