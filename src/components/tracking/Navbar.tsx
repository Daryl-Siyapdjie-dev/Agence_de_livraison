import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Suivi de colis</h1>
        <ul className="flex space-x-4">
          <li><a href="#">Tableau de bord</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Modifier adresse</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
