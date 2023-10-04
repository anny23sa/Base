import React, { useState } from 'react';

const Formulario = ({ onAgregarColaborador }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    email: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregarColaborador({ ...nuevoColaborador, id: Date.now().toString() });
    setNuevoColaborador({
      nombre: '',
      email: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };

  return (
    <div className="my-4">
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Nombre colaborador"
            name="nombre"
            className="form-control"
            value={nuevoColaborador.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email colaborador"
            name="email"
            className="form-control"
            value={nuevoColaborador.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Edad colaborador"
            name="edad"
            className="form-control"
            value={nuevoColaborador.edad}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Cargo Colaborador"
            name="cargo"
            className="form-control"
            value={nuevoColaborador.cargo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            placeholder="Teléfono colaborador"
            name="telefono"
            className="form-control"
            value={nuevoColaborador.telefono}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;


