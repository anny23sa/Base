import React from 'react';

const Alerta = ({ tipo, mensaje }) => {
  return (
    <div className={`alert ${tipo}`}>
      {mensaje}
    </div>
  );
};

export default Alerta;