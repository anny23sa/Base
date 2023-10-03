import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Alert = ({ tipo, mensaje }) => {
  return (
    <div className={`alert alert-${tipo} my-3`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;
/*const Alerta = ({ tipo, mensaje }) => {
  return (
    <div className={`alert ${tipo}`}>
      {mensaje}
    </div>
  );
};

export default Alerta;*/