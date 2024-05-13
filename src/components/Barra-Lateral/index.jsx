import React, { useState } from 'react';
import './estilos.css'; // Importar estilos CSS

const BarraLateral = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        <p className={`fas fa-${isOpen ? 'times' : 'bars'}`}>Filtros</p>
      </button>
      <div className="content">
        hola
      </div>
    </div>
  );
};

export default BarraLateral;
