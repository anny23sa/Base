import React, { useState } from 'react';

const Formulario = ({ onAgregarColaborador }) => {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    email: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const [error,setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar y agregar el nuevo colaborador a la lista

    if (
      nuevoColaborador.nombre === '' ||
      nuevoColaborador.email === '' ||
      nuevoColaborador.edad === '' ||
      nuevoColaborador.cargo === '' ||
      nuevoColaborador.telefono === ''
    ) {
      setError(true);// evitar agregar si hay campos vacios
    } else {
      setError(false); 

    //onAgregarColaborador(nuevoColaborador);
    <Formulario onAgregarColaborador={nuevoColaborador}
  mensajeAlerta={mensajeAlerta} // Pasa mensajeAlerta como una prop
  tipoAlerta={tipoAlerta} // Asegúrate de pasar tipoAlerta si también lo necesitas
/>
    // Limpiar el formulario
    setNuevoColaborador({
      nombre: '',
      email: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
    //mostrar mensaje de exito
  }
};

  return (
    <div className='container'>
      <h2>Agregar Colaborador</h2>

      {error && (
        <div className={`alert alert-danger`} role="alert">
          Completa todos los campos.
        </div>
      )}
      {mensajeAlerta && tipoAlerta && (
        <div className={`alert alert-${tipoAlerta}`} role="alert">
          {mensajeAlerta}
        </div>
      )}

      <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label></label>
        <input type="text"
          placeholder='Nombre colaborador'
          name="nombre"
          className="form-control w-50"
          value={nuevoColaborador.nombre}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label></label>
        <input type="email"
          placeholder='Email colaborador'
          name="email"
          className="form-control w-50"
          value={nuevoColaborador.email}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label></label>
        <input type="text"
          placeholder='Edad colaborador'
          name="edad"
          className="form-control w-50"
          value={nuevoColaborador.edad}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label></label>
        <input type="text"
          placeholder='Cargo Colaborador'
          name="cargo"
          className="form-control w-50"
          value={nuevoColaborador.cargo}
          onChange={handleChange} />
      </div>

      <div className="form-group">
        <label></label>
        <input type="tel"
          placeholder='Teléfono colaborador'
          name="telefono"
          className="form-control w-50"
          value={nuevoColaborador.telefono}
          onChange={handleChange} />
      </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Formulario;