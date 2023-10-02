import { useState } from 'react'
import './App.css'
import React from 'react'
import { BaseColaboradores } from './components/BaseColaboradores/BaseColaboradores'
import Listado from './components/Listado/Listado'
import Formulario from './components/Formulario/Formulario'
import Buscador from './components/Buscador/Buscador'
import Alerta from './components/Alerta/Alerta'

const App = () => {
  return (
    <div>
      <Listado />
      <Formulario />
      <Buscador />
      <Alerta />
      <BaseColaboradores />
    </div>
  )
}

export default App