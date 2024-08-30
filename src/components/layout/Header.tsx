import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navlinks = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const onScroll = () => {
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `header nav a[href*="${id}"]`
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header className="shadow-md w-full fixed top-0 left-0 z-50   bg-white">
        <div className="flex mx-4 md:flex items-center justify-between py-4 md:px-10 px-7">
          <div>
          <img src={darkMode ? "./src/assets/images/Grou.png" : "./src/assets/images/image3.svg"} className=' ' alt="Logo" />
          </div>
          <div>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <img src={open ? './public/images/close.svg' : './public/images/menu.svg'} alt="Menu Icon" className='w-8 h-8 ' />
        </div>
          </div>
          <div>
            <nav className={`md:flex md:items-center block md:pb-0 pb-12 absolute md:static  bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-12  md:pr-0 pr-56 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
              {navlinks.map((navlink, index) => (
                <NavLink className="px-2 md:ml-8 text-lg md:my-0 my-7 font-medium font-display hover:text-sky-600 duration-500 hover:underline  flex text-gray-700 " to={navlink.link} key={index}>
                  {navlink.name}
                </NavLink>
              ))}

            <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
            <img src={darkMode ? './src/assets/images/light.svg' : './src/assets/images/dark.svg'} alt="Dark Mode Toggle" className='w-12 h-6 px-2 transition-all duration-500' />
          </div>
          <div>
            <button className=" p-2 px-6 mx-6 bg-blue-600 font-display text-white rounded-full border-2">S'inscrire</button>
          </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
