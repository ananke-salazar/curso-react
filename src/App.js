import React, { Component } from 'react';
import InfoDePersona from './InfoDePersona';

class App extends Component {
  render() {

    let miPersona = {
      nombre: "Juan José Lizarazo",
      rol: "Estudiante",
      descripcion: "Software: Ananké",
      listaDeCursosAprobados: [".NET", "SQL Server", "Express JS"]
    };

    let miOtraPersona = {
      nombre: "Narda Amador",
      rol: "Estudiante",
      descripcion: "Antropología: UNAL",
      listaDeCursosAprobados: ["Arqueología", "Fund. Antropología", "Antropología Biológica",
        "Latín I", "Cultura de Imagen"]
    };


    return (
      <div>
        <InfoDePersona persona={miPersona}></InfoDePersona>
        <InfoDePersona persona={miOtraPersona}></InfoDePersona>
      </div>
    );
  }
}

export default App;
