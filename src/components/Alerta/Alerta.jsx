import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Alerta = ({ tipo, mensaje }) => {
  return (
    <div className={`alert ${tipo}`}>
      {mensaje}
    </div>
  );
};

export default Alerta;