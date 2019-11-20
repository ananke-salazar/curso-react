import React, { Component } from 'react';
import InfoDePersona from './InfoDePersona';

class App extends Component {
  render() {

    let miPersona = {
      nombre: "Juan José Lizarazo",
      rol: "Estudiante",
      descripcion: "Software: Ananké",
      listaDeCursosAprobados: [
        {
          nombre: ".NET",
          nota: "4.4"
        },
        {
          nombre: "Oracle DB",
          nota: "2.1"
        },
        {
          nombre: "Express JS",
          nota: "5.0"
        }]
    };

    let miOtraPersona = {
      nombre: "Narda Amador",
      rol: "Estudiante",
      descripcion: "Antropología: UNAL",
      listaDeCursosAprobados: [{nombre: "Arqueología", nota: "5.0"}, 
      {nombre: "Fund. Antropología", nota:"3.3"}]
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
