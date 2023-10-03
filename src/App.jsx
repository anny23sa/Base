import { useState } from 'react'
import './App.css'
import React from 'react'
import Listado from './components/Listado/Listado'
import Formulario from './components/Formulario/Formulario'
import Buscador from './components/Buscador/Buscador'
import Alerta from './components/Alerta/Alerta'
import BaseColaboradores from './components/BaseColaboradores/BaseColaboradores'; // Importa la lista de colaboradores


const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
    // Inicializa la lista de colaboradores aquí
  ;

  const agregarColaborador = (nuevoColaborador) => {
    // Lógica para agregar el nuevo colaborador a la lista
    setColaboradores([...colaboradores, nuevoColaborador]);
    // Mostrar un mensaje de éxito usando Alert
  };

  const buscarColaborador = (termino) => {
    // Lógica para buscar colaboradores en la lista
    // Actualizar el estado para mostrar los resultados en Listado
  };

  return (
    <div>
      <h1>Administrador de Colaboradores</h1>
      <Buscador onBuscar={buscarColaborador} />
      <Listado colaboradores={colaboradores} />
      <Formulario onAgregarColaborador={agregarColaborador} />
      <Alerta tipo="success" mensaje="Operación exitosa" />
    </div>
  );
};

export default App;