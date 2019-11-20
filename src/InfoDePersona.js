import React, { Component } from 'react';

class InfoDePersona extends Component {

    constructor() {
        super();

        this.state = {
            colorDelTexto: "black"
        }
    }

    render() {
        
        let miArrayDeCursosEnHTML = [];
        for (let i = 0; i < this.props.persona.listaDeCursosAprobados.length; i++) {
            miArrayDeCursosEnHTML
                .push(<p>
                    {this.props.persona.listaDeCursosAprobados[i]}
                </p>);
        }


        return (
            <div>
                <h1>{this.props.persona.nombre}</h1>
                <h3>{this.props.persona.rol}</h3>
                <h4>{this.props.persona.descripcion}</h4>
                <h2>Cursos aprobados:</h2>
                {miArrayDeCursosEnHTML}
            </div>
        );
    }
}

export default InfoDePersona;
