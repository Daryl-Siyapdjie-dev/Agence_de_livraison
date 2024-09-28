import { motion } from "framer-motion";
import ImageCarousel from "../components/contacts/ImageCarousel";
import ContactForm from "../components/contacts/ContactForm";



const Contact = () => {
  

  return (
    <section
      id="contact"
      className="min-h-[80vh] p-2 bg-[url('./public/images/bgs.svg')] bg-white sm:pt-24 text-black font-bold text-center bg-no-repeat bg-cover md:p-8"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-4"
      >
        Contactez-Nous
      </motion.h1>
      <div className="contact flex flex-wrap p-0 lg:p-12">
        <div className="w-full md:w-1/2 p-4">
          <ImageCarousel />
        </div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-1/2 p-4"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
