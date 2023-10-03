import React, { useState } from 'react';


const Buscador = ({ onBuscar }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const handleChange = (e) => {
    setTerminoBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBuscar(terminoBusqueda);
  };

  return (
    <div>
      <h2>Buscar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar colaborador"
          value={terminoBusqueda}
          onChange={handleChange}
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Buscador;

/*const Buscador = ({ colaboradores, onBuscar }) => {
  const [busqueda, setBusqueda] = useState('');

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamar a la función de búsqueda con el término ingresado
    onBuscar(terminoBusqueda);
  };

  return (
    <div>
      <h2>Buscar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar colaborador"
          value={terminoBusqueda}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;*/