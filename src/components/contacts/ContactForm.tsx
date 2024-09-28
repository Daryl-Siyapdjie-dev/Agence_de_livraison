import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

interface FormValues {
  nom: string;
  tel: string;
  email: string;
  objet: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Définition des valeurs initiales
  const initialValues: FormValues = {
    nom: '',
    tel: '',
    email: '',
    objet: '',
    message: '',
  };

  // Validation avec Yup
  const validationSchema = Yup.object({
    nom: Yup.string()
      .min(2, 'Le nom doit contenir au moins 2 caractères.')
      .required('Le nom est requis.'),
    tel: Yup.string()
      .matches(/^[0-9]{10}$/, 'Numéro de téléphone invalide, il doit contenir 10 chiffres.')
      .required('Le téléphone est requis.'),
    email: Yup.string()
      .email('Adresse email invalide.')
      .required('L’email est requis.'),
    objet: Yup.string()
      .min(3, 'L’objet doit contenir au moins 3 caractères.')
      .required('L’objet est requis.'),
    message: Yup.string()
      .min(10, 'Le message doit contenir au moins 10 caractères.')
      .required('Le message est requis.'),
  });

  // Gestion de la soumission du formulaire
  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess('Message envoyé avec succès !');
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setError(result.errors ? result.errors.map((err: any) => err.msg).join(', ') : 'Une erreur est survenue.');
      }
    } catch (err) {
      setError("Erreur lors de l'envoi du message : " + (err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, touched }) => (
        <Form className="w-full p-2 bg-white rounded-lg text-sm font-display shadow-md max-w-xl px-2 md:px-8 mx-auto">
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          {/* Nom */}
          <div className="flex md:flex-row py-4">
            <label htmlFor="nom" className="md:basis-1/5 text-gray-700">Nom:</label>
            <div className="w-full md:basis-4/5">
              <Field
                name="nom"
                placeholder="Saisissez votre nom"
                className="w-full p-2 border rounded-lg"
              />
              <ErrorMessage name="nom" component="div" className="text-red-500" />
            </div>
          </div>

          {/* Téléphone */}
          <div className="flex md:flex-row py-4">
            <label htmlFor="tel" className="md:basis-1/5 text-gray-700">Tel:</label>
            <div className="w-full md:basis-4/5">
              <Field
                name="tel"
                type="tel"
                placeholder="Saisissez votre numéro"
                className="w-full p-2 border rounded-lg"
              />
              <ErrorMessage name="tel" component="div" className="text-red-500" />
            </div>
          </div>

          {/* Email */}
          <div className="flex md:flex-row py-4">
            <label htmlFor="email" className="md:basis-1/5 text-gray-700">Email:</label>
            <div className="w-full md:basis-4/5">
              <Field
                name="email"
                type="email"
                placeholder="Saisissez votre e-mail"
                className="w-full p-2 border rounded-lg"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
          </div>

          {/* Objet */}
          <div className="flex md:flex-row py-4">
            <label htmlFor="objet" className="md:basis-1/5 text-gray-700">Objet:</label>
            <div className="w-full md:basis-4/5">
              <Field
                name="objet"
                placeholder="Saisissez l'objet du message"
                className="w-full p-2 border rounded-lg"
              />
              <ErrorMessage name="objet" component="div" className="text-red-500" />
            </div>
          </div>

          {/* Message */}
          <div className="flex md:flex-row py-4">
            <label htmlFor="message" className="md:basis-1/5 text-gray-700">Message:</label>
            <div className="w-full md:basis-4/5">
              <Field
                name="message"
                as="textarea"
                rows="3"
                placeholder="Saisissez votre message"
                className="w-full p-2 border rounded-lg"
              />
              <ErrorMessage name="message" component="div" className="text-red-500" />
            </div>
          </div>

          {/* Bouton de soumission */}
          <div className="flex justify-center py-4">
            <button
              type="submit"
              disabled={!isValid || isSubmitting || !touched}
              className={`px-6 py-2 bg-blue-600 hover:bg-blue-700 w-full text-white rounded-full focus:outline-none ${
                !isValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
