import { useState } from 'react'
import './App.css'
import React from 'react'
import Listado from './components/Listado/Listado'
import Formulario from './components/Formulario/Formulario'
import Buscador from './components/Buscador/Buscador'
import Alert from './components/Alert/Alert'
import BaseColaboradores from './components/BaseColaboradores/BaseColaboradores'; // Importa la lista de colaboradores


const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);


  const agregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre === '' ||
      nuevoColaborador.email === '' ||
      nuevoColaborador.edad === '' ||
      nuevoColaborador.cargo === '' ||
      nuevoColaborador.telefono === ''
    ) {
      mostrarAlerta('danger', 'Completa todos los campos antes de agregar.');
    } else {
      setColaboradores([...colaboradores, nuevoColaborador]);
      mostrarAlerta('success', 'Colaborador agregado exitosamente.');
    }
  };

  const eliminarColaborador = (id) => {
    const nuevaListaColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevaListaColaboradores);
    mostrarAlerta('success', 'Colaborador eliminado exitosamente.');
  };

  const buscarColaborador = (termino) => {
    const resultados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.includes(termino) ||
        colaborador.email.includes(termino) ||
        colaborador.edad.toString().includes(termino) ||
        colaborador.cargo.includes(termino) ||
        colaborador.telefono.includes(termino)
      );
    });
    setResultadoBusqueda(resultados);
    
  };

  const mostrarAlerta = (tipo, mensaje) => {
    setTipoAlerta(tipo);
    setMensajeAlerta(mensaje);
    setTimeout(() => {
      setTipoAlerta('');
      setMensajeAlerta('');
    }, 3000);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Administrador de Colaboradores</h1>
      <Buscador onBuscar={buscarColaborador} />
      <Listado colaboradores={colaboradores} onEliminar={eliminarColaborador} />
      <Formulario onAgregarColaborador={agregarColaborador} />
      {mensajeAlerta && tipoAlerta && (
       <Alert tipo={tipoAlerta} mensaje={mensajeAlerta} />
      )}
    </div>
  );
}

export default App;







 /* const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState('');

  // Inicializa la lista de colaboradores aquí
  ;

  const agregarColaborador = (nuevoColaborador) => {
    // Lógica para agregar el nuevo colaborador a la lista
    setColaboradores([...colaboradores, nuevoColaborador]);
    // Mostrar un mensaje de éxito usando Alert
    setMensajeAlerta('Operación exitosa');
    setTipoAlerta('success');
  };

  const buscarColaborador = (termino) => {
    const resultados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.includes(termino) ||
        colaborador.email.includes(termino) ||
        colaborador.edad.toString().includes(termino) ||
        colaborador.cargo.includes(termino) ||
        colaborador.telefono.includes(termino)
      );
    // Lógica para buscar colaboradores en la lista
    // Actualizar el estado para mostrar los resultados en Listado
  });
  setResultadoBusqueda(resultados);
};


  return (
    <div>
      <h1>Administrador de Colaboradores</h1>
      <Buscador onBuscar={buscarColaborador} />
      <Listado colaboradores={resultadoBusqueda.length > 0 ? resultadoBusqueda : colaboradores} />
      <Formulario
        onAgregarColaborador={agregarColaborador}
        mensajeAlerta={mensajeAlerta} // Asegúrate de que esta línea esté presente
        tipoAlerta={tipoAlerta}
      />
      {mensajeAlerta && tipoAlerta && (
      <Alerta tipo="success" mensaje="Operación exitosa" />
      )}
    </div>
  );
};

export default App;*/