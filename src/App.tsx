import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/pricing";
import Footer from "./components/layout/Footer";
import Tracking from "./pages/TrackingDashboard";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Pricing />
        <Tracking/>
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
