import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../common/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Animation pour les cartes de paiement
const cardVariants = {
  selected: { scale: 1.1, rotateY: 180, transition: { duration: 0.5 } },
  notSelected: { scale: 1, rotateY: 0, transition: { duration: 0.5 } },
};

const BuyNow: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Récupérer la date et l'heure actuelles
  const currentDateTime = new Date().toLocaleString();

  // Schéma de validation avec Yup
  const validationSchema = Yup.object({
    paymentMethod: Yup.string().required("Méthode de paiement requise"),
    deliveryType: Yup.string().required("Type de livraison requis"),
  });

  // Soumission du formulaire
  const handleSubmit = (values: any) => {
    console.log("Paiement confirmé", values);
    setShowModal(false);
  };

  return (
    <div>
      <motion.button
        onClick={() => setShowModal(true)}
        whileHover={{
          scale: 1.1,
          rotate: 3,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        }}
        whileTap={{ scale: 0.95, rotate: -3 }}
        className="p-2 px-6 mx-6 bg-white font-display text-blue-600 rounded-full border-2 font-bold shadow-2xl"
      >
        Buy Now
      </motion.button>

      {showModal && (
        <Modal title={"Paiement"} onClose={() => setShowModal(false)}>
          <div className=" font-display mx-28">
          <Formik
            initialValues={{ paymentMethod: "", deliveryType: "", totalAmount: "3000 FCFA" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange, handleSubmit, setFieldValue }) => (
              <Form className="space-y-6">
                {/* Méthode de paiement avec animation */}
                <div className="flex justify-between ">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={values.paymentMethod === "Orange Money" ? "selected" : "notSelected"}
                    variants={cardVariants}
                    onClick={() => setFieldValue("paymentMethod", "Orange Money")}
                    className="cursor-pointer"
                  >
                    <img
                      src="./src/assets/images/orange.jpeg"
                      alt="Orange Money"
                      className={`w-20 h-20 m-2 font-display object-cover rounded-lg ${
                        values.paymentMethod === "Orange Money" ? "border-4 border-blue-300" : ""
                      }`}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={values.paymentMethod === "MTN Mobile Money" ? "selected" : "notSelected"}
                    variants={cardVariants}
                    onClick={() => setFieldValue("paymentMethod", "MTN Mobile Money")}
                    className="cursor-pointer"
                  >
                    <img
                      src="./src/assets/images/mtn.jpeg"
                      alt="MTN Mobile Money"
                      className={`w-20 h-20 m-2 object-cover rounded-lg ${
                        values.paymentMethod === "MTN Mobile Money" ? "border-4 border-blue-300" : ""
                      }`}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={values.paymentMethod === "Cash on Delivery" ? "selected" : "notSelected"}
                    variants={cardVariants}
                    onClick={() => setFieldValue("paymentMethod", "Cash on Delivery")}
                    className="cursor-pointer "
                  >
                    <div
                      className={`w-20 h-20 m-2 font-display bg-slate-200 text-center flex items-center justify-center rounded-lg ${
                        values.paymentMethod === "Cash on Delivery" ? "border-4 border-blue-300" : ""
                      }`}
                    >
                      <p className="text-xs">CASH ON DELIVERY</p>
                    </div>
                  </motion.div>
                </div>

                {/* Affichage des erreurs pour la méthode de paiement */}
                <ErrorMessage name="paymentMethod" component="div" className="text-red-500 text-sm" />

                {/* Poids du colis */}
                <div className="flex font-display justify-between">
                  <p className="font-display">Poids du colis : </p>
                  <p className="font-display">2kg</p> {/* Exemple de valeur statique */}
                </div>

                {/* Prix de la livraison */}
                <div className="flex text-sm justify-between">
                  <p>Prix de la livraison :</p>
                  <p>2000 FCFA</p> {/* Exemple de prix */}
                </div>

                {/* Type de livraison */}
                <div className="flex flex-col text-sm">
                  <label htmlFor="deliveryType" className="mb-2">Type de livraison :</label>
                  <Field
                    type="text"
                    id="deliveryType"
                    name="deliveryType"
                    className="p-2 bg-blue-100   focus:ring focus:ring-blue-300 focus:border-blue-600  rounded-lg border border-blue-100 focus:outline-none"
                    placeholder="Standard, Express, etc."
                  />
                  <ErrorMessage name="deliveryType" component="div" className="text-red-500 text-sm" />
                </div>

                {/* Montant total */}
                <div className="flex justify-between text-sm">
                  <label htmlFor="totalAmount">Montant total :</label>
                  <Field
                    type="text"
                    name="totalAmount"
                    readOnly
                    className="p-2  focus:ring focus:ring-blue-300 focus:border-blue-600  rounded-lg border border-blue-100 focus:outline-none bg-blue-100"
                  />
                </div>

                {/* Date et heure de la transaction */}
                <div className="flex justify-between text-sm">
                  <label>Date et heure :</label>
                  <p>{currentDateTime}</p>
                </div>

                {/* Bouton de confirmation */}
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    className="p-2 px-6 m-2 border-blue-600 w-full bg-blue-600 text-white rounded-full border-2 text-sm font-bold "
                  >
                    Confirmer le paiement
                  </motion.button>
                </div>
              </Form>
            )}
          </Formik>
          </div>

        </Modal>
      )}
    </div>
  );
};

export default BuyNow;
