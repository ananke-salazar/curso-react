import React, { Component } from 'react';
import Titulo from './Titulo';

class App extends Component {
  render() {
    return (
      <div>
        <Titulo Contenido="Hola Salazar"></Titulo>
        <Titulo Contenido="Este es un mensaje"></Titulo>
        <Titulo Contenido="Desde React"></Titulo>
      </div>
    );
  }
}

export default App;
