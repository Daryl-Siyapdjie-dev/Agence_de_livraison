import { useEffect, useState } from "react";
import Login from "../common/Login";
import Signup from "../common/SignUp";
import { List, XCircle } from "react-bootstrap-icons";

const Header = () => {
  const navlinks = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Pricing", link: "/pricing" },
    { name: "Tracking", link: "/tracking" },
    { name: "Contact", link: "/contact" },
  ];

  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    if (sections.length > 0) {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="shadow-md w-full font-display fixed top-0 left-0 z-50 bg-white transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between py-4 px-7 md:px-10 transition-all duration-300 ease-in-out">
        {/* Logo */}
        <div>
          <img src={"./src/assets/images/image3.svg"} alt="Logo" className="w-32 h-auto" />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden transform hover:scale-110 transition-transform duration-300"
        >
          {open ? <XCircle className="w-8 h-8" /> : <List className="w-8 h-8" />}
        </div>

        {/* Navigation */}
        <nav
          className={`md:flex md:items-center md:static absolute bg-white w-full md:w-auto left-0 md:left-auto 
          ${open ? "top-20 opacity-100" : "top-[-490px] opacity-0"} 
          md:opacity-100 transition-all duration-500 ease-in-out`}
        >
          {navlinks.map((navlink, index) => (
            <a
              key={index}
              href={`#${navlink.name.toLowerCase()}`}
              className={`block md:inline-block px-3 md:px-4 text-sm font-display font-medium hover:text-sky-600 
              transition-colors duration-300 ${
                activeSection === navlink.name.toLowerCase()
                  ? "text-sky-600 underline"
                  : "text-gray-700"
              }`}
            >
              {navlink.name}
            </a>
          ))}

          {/* Login/Signup */}
          <div className="flex items-center justify-center px-3 ml-2 md:ml-8 space-x-4">
            <Login />
            <Signup />
          </div>
        </nav>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-blue-400 to-transparent animate-pulse"></div>
    </header>
  );
};

export default Header;
