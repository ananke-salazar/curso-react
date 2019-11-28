import React, { Component } from 'react';
import InfoDePersona from './componentes/InfoDePersona/InfoDePersona';
import EncabezadoDeContenido from './componentes/EncabezadoDeContenido/EncabezadoDeContenido.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      miArrayDePersonas: [],
      criterioDeOrdenamiento: {
        nombreDelCriterio: "nombre",
        descendente: false
      }
    }
  }

  render() {

    return (
      <React.Fragment>

        <EncabezadoDeContenido titulo="Estudiantes" subtitulo="Módulo para visualización de notas de estudiantes"
          funcionDeOrdenamiento={this.ordenarPersonasAlfabeticamente}>
        </EncabezadoDeContenido>

        <div className="row">
          {this.obtenerCardsConTarjetasDePersonas()}
        </div>

      </React.Fragment >
    );
  }

  componentDidMount() {
    //Pasan cosas para traer info de DB

    this.setState({
      miArrayDePersonas: [
        {
          nombre: "Juan José Lizarazo",
          rol: "Estudiante",
          descripcion: "Software: Ananké",
          listaDeCursosTomados: [
            {
              nombre: ".NET",
              nota: 4.4,
              ciclo: "Ciclo IV"
            },
            {
              nombre: "Oracle DB",
              nota: 2.1,
              ciclo: "Ciclo III"
            },
            {
              nombre: "Express JS",
              nota: 5.0,
              ciclo: "Ciclo V"
            }]
        },
        {
          nombre: "Narda Amador",
          rol: "Estudiante",
          descripcion: "Antropología: UNAL",
          listaDeCursosTomados: [
            { nombre: "Fund. Antropología", nota: 1.3, ciclo: "Ciclo II" },
            { nombre: "Arqueología", nota: 5.0, ciclo: "Ciclo VIII" },
            { nombre: "Latín IV", nota: 2.1, ciclo: "Ciclo VI" }]
        },
        {
          nombre: "Nelson Ferro",
          rol: "Estudiante",
          descripcion: "Antropología: UNAL",
          listaDeCursosTomados: [
            { nombre: "Fund. Antropología", nota: 1.3, ciclo: "Ciclo II" },
            { nombre: "Arqueología", nota: 5.0, ciclo: "Ciclo VIII" },
            { nombre: "Latín IV", nota: 2.1, ciclo: "Ciclo VI" }]
        },
        {
          nombre: "Edwards Ramírez",
          rol: "Estudiante",
          descripcion: "Ingeniería Eléctrica: UNAL",
          listaDeCursosTomados: [
            { nombre: "Fund. Antropología", nota: 1.3, ciclo: "Ciclo II" },
            { nombre: "Arqueología", nota: 5.0, ciclo: "Ciclo VIII" },
            { nombre: "Latín IV", nota: 2.1, ciclo: "Ciclo VI" }]
        },
        {
          nombre: "Nicolás Salazar",
          rol: "Estudiante",
          descripcion: "Ingeniería Mecánica: USTA",
          listaDeCursosTomados: [
            { nombre: "Cálculo III", nota: 4.9, ciclo: "Ciclo II" },
            { nombre: "Teoría de Conjuntos", nota: 5.0, ciclo: "Ciclo VIII" },
            { nombre: "Cultura física", nota: 2.9, ciclo: "Ciclo VI" }]
        }
      ]
    });
  }

  obtenerCardsConTarjetasDePersonas = () => {
    let cardsDePersonas = [];
    for (let i = 0; i < this.state.miArrayDePersonas.length; i++) {
      cardsDePersonas.push(<InfoDePersona persona={this.state.miArrayDePersonas[i]}></InfoDePersona>);
    }
    return cardsDePersonas;
  }

  ordenarPersonasAlfabeticamente = (criterio) => {
    if (criterio === "nombre") {
      if (this.state.criterioDeOrdenamiento.nombreDelCriterio === criterio) {
        if (this.state.criterioDeOrdenamiento.descendente === true) {
          this.setState({
            miArrayDePersonas: this.state.miArrayDePersonas.sort((a, b) => (a.nombre < b.nombre) ? 1 : ((b.nombre < a.nombre) ? -1 : 0)),
            criterioDeOrdenamiento: {
              nombreDelCriterio: criterio,
              descendente: false
            }
          });

        }
        else {
          this.setState({
            miArrayDePersonas: this.state.miArrayDePersonas.sort((a, b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0)),
            criterioDeOrdenamiento: {
              nombreDelCriterio: criterio,
              descendente: true
            }
          });
        }
      }
      else{
        this.setState({
          miArrayDePersonas: this.state.miArrayDePersonas.sort((a, b) => (a.descripcion> b.descripcion) ? 1 : ((b.descripcion > a.descripcion) ? -1 : 0)),
          criterioDeOrdenamiento: {
            nombreDelCriterio: criterio,
            descendente: true
          }
        });
      }
    }else{
      if (criterio === "descripcion") {
        if (this.state.criterioDeOrdenamiento.nombreDelCriterio === criterio) {
          if (this.state.criterioDeOrdenamiento.descendente === true) {
            this.setState({
              miArrayDePersonas: this.state.miArrayDePersonas.sort((a, b) => (a.descripcion < b.descripcion) ? 1 : ((b.descripcion < a.descripcion) ? -1 : 0)),
              criterioDeOrdenamiento: {
                nombreDelCriterio: criterio,
                descendente: false
              }
            });
  
          }
          else {
            this.setState({
              miArrayDePersonas: this.state.miArrayDePersonas.sort((a, b) => (a.descripcion > b.descripcion) ? 1 : ((b.descripcion > a.descripcion) ? -1 : 0)),
              criterioDeOrdenamiento: {
                nombreDelCriterio: criterio,
                descendente: true
              }
            });
          }
        }
        else{
          this.setState({
            miArrayDePersonas: this.state.miArrayDePersonas.sort((a, b) => (a.descripcion> b.descripcion) ? 1 : ((b.descripcion > a.descripcion) ? -1 : 0)),
            criterioDeOrdenamiento: {
              nombreDelCriterio: criterio,
              descendente: true
            }
          });
        }
      }
    }

  }
}

export default App;
