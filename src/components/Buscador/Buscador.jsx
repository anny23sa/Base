import React, { useState } from 'react';

const Buscador = ({ onBuscar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar a la función de búsqueda con el término ingresado
    onBuscar(busqueda);
  };

  return (
    <div>
      <h2>Buscar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar por nombre, correo, etc."
          value={busqueda}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;