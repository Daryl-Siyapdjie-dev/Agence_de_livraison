import { Facebook, Instagram, Linkedin, Twitter } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const linkHoverEffect = {
  hover: {
    scale: 1.5,
    color: "#1DA1F2",
    transition: { type: "spring", stiffness: 500 },
  },
};

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-blue-950">
      <div className="absolute top-0 left-0 w-[100%] overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
            250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
            3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="relative block h-[600px] fill-white"
          ></path>
        </svg>
      </div>

      <motion.div
        className="grid lg:grid-cols-4 gap-20  text-white sm:grid-cols-1 p-20 "
        initial="hidden"
        animate="visible"
        variants={footerVariants}
      >
        <motion.div variants={footerVariants} className="flex flex-col sm:pt-8 gap-5">
          <h3 className="text-xl font-bold my-4">À Propos</h3>
          <p className="text-gray-400">
            Nous sommes une entreprise de livraison rapide et fiable. Nous nous
            efforçons de fournir un service de qualité pour répondre à tous vos
            besoins en matière de livraison à domicile.
          </p>
        </motion.div>

        <motion.div variants={footerVariants}>
          <h3 className="text-xl font-bold my-4 sm:pt-8">Liens Utiles</h3>
          <ul>
            <li className="mb-2">
              <a
                href="/about"
                className="hover:text-blue-400 transition-colors"
              >
                À Propos
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/services"
                className="hover:text-blue-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/pricing"
                className="hover:text-blue-400 transition-colors"
              >
                Tarifs
              </a>
            </li>
            <li className="mb-2">
              <a
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={footerVariants}>
          <h3 className="text-xl font-bold my-4 sm:pt-8">Contactez-Nous</h3>
          <ul>
            <li className="mb-2">
              <span className="font-semibold">Téléphone : </span>
              <a
                href="tel:+237600000000"
                className="hover:text-blue-400 transition-colors"
              >
                +237 600 00 00 00
              </a>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Email : </span>
              <a
                href="mailto:info@campspeed.com"
                className="hover:text-blue-400 transition-colors"
              >
                info@campspeed.com
              </a>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Adresse : </span>
              Yaoundé, Cameroun
            </li>
          </ul>
        </motion.div>

        <motion.div variants={footerVariants} className="mb-4 sm:pt-8 md:mb-0">
          <h2 className="text-xl font-bold my-4">Suivez-Nous</h2>
          <div className="flex space-x-4">
            {[
              { component: <Linkedin />, link: "#" },
              { component: <Facebook />, link: "#" },
              { component: <Twitter />, link: "#" },
              { component: <Instagram />, link: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                variants={linkHoverEffect}
                whileHover="hover"
                className="text-white transition-transform duration-150 ease-in-out"
              >
                {social.component}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <h6 className="text-center text-white">
        &copy; CamSpeed Tous les droits réservés {Year}
      </h6>
    </footer>
  );
};

export default Footer;
