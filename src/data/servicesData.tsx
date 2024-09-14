import { BarChart, Boxes, Buildings, Clock, CurrencyExchange, GeoAlt, RocketTakeoff, ShieldShaded, Truck } from "react-bootstrap-icons";
import { Service, ServicePlus } from "../type";


export const services: Service[] = [
    {
        id: 1,
        title: "Livraison Express",
        description: "Livraison rapide en moins de 24 heures pour vos colis urgents.🚀",
        icon:<RocketTakeoff/> ,
        bgColor: "bg-red-100",
        textColor:"text-red-600"
      },
      {
        id: 2,
        title: "Suivi en Temps Réel",
        description: "Suivez votre colis en temps réel avec notre système avancé.📍",
        icon: <GeoAlt/>,
        bgColor: "bg-purple-100",
        textColor:"text-purple-600"
      },
      {
        id: 3,
        title: "Solutions B2B",
        description: "Abonnements mensuels adaptés aux besoins des entreprises.🏢",
        icon: <Buildings/>,
        bgColor: "bg-blue-100",
        textColor:"text-blue-600"
      },
      // Ajoutez d'autres services ici
    ];



 export const servicesData: ServicePlus[] = [
  {
    icon: <Truck />,
    title: 'Livraison Express et Standard',
    description: 'Livraison rapide en moins de 24 heures ou standard en 2-3 jours.',
    details: 'Options de suivi en temps réel et notifications automatiques à chaque étape clé.'
  },
  {
    icon: <Clock />,
    title: 'Options de Livraison Flexible',
    description: 'Choisissez des créneaux horaires personnalisés pour vos livraisons.',
    details: 'Livraison possible en soirée ou le week-end selon vos préférences.'
  },
  {
    icon: <ShieldShaded />,
    title: 'Sécurité et Fiabilité',
    description: 'Livraison sécurisée avec signature à la réception.',
    details: 'Recevez une photo du colis livré pour confirmer la réception.'
  },
  {
    icon: <CurrencyExchange />,
    title: 'Solutions pour E-commerçants',
    description: 'Intégration facile avec les plateformes de commerce électronique.',
    details: 'Assurance incluse pour les produits sensibles ou haut de gamme.'
  },
  {
    icon: <Boxes />,
    title: 'Gestion des Retours et Échanges',
    description: 'Service complet de gestion des retours pour les e-commerçants.',
    details: 'Suivi des retours et échanges avec mise à jour en temps réel.'
  },
  {
    icon: <BarChart />,
    title: 'Rapports Personnalisés',
    description: 'Outils de reporting pour optimiser les performances des livraisons.',
    details: 'Accédez à des tableaux de bord détaillés pour suivre vos statistiques.'
  },
  ];
